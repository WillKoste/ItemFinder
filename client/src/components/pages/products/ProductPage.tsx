import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import {getProduct} from '../../../actions/products';
import {ProductsReducer} from '../../../types/general';
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import {getPastMonths} from '../../../utils/getPastMonths';
import {formatCurrency} from '../../../utils/randomUtils';

interface ProductPageProps extends RouteComponentProps<{productId: string}> {
	getProduct: (prodId: string) => void;
	productsRed: ProductsReducer;
}

const ProductPage: React.FC<ProductPageProps> = ({match, getProduct, productsRed: {loadingProduct, product}}) => {
	Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

	const [btnTab, setBtnTab] = useState('Availability');

	useEffect(() => {
		getProduct(match.params.productId);
	}, []);

	const options = {
		responsive: true,
		plugins: {
			legend: 'top' as const
		},
		title: {
			display: true,
			text: btnTab
		}
	};
	const labels = moment.months();
	const data = {
		labels,
		datasets: [
			{
				label: 'Product 1',
				data: [
					{price: '169.99', recorded: '11/17/2021'},
					{price: '145.50', recorded: '02/04/2021'},
					{price: '179.99', recorded: '07/16/2021'}
				],
				borderColor: '#111D4A',
				backgroundColor: '#111D4A'
			},
			{
				label: 'Product 2',
				data: [
					{price: '250.65', recorded: '03/19/2021'},
					{price: '275.50', recorded: '02/28/2021'},
					{price: '298.90', recorded: '03/15/2021'}
				],
				borderColor: '#A997DF',
				backgroundColor: '#A997DF'
			},
			{
				label: 'Product 3',
				data: [
					{price: '78.89', recorded: '08/11/2021'},
					{price: '80.64', recorded: '01/31/2021'},
					{price: '92.99', recorded: '12/24/2021'}
				],
				borderColor: '#FFCF99',
				backgroundColor: '#FFCF99'
			}
		]
	};

	console.log({hey: getPastMonths(52)});

	return (
		<div className='product-page'>
			{loadingProduct ? (
				<h2>Loading...</h2>
			) : (
				<div className='container'>
					<div className='product-page-left'>
						<div className='pp-left-top'>
							<img src={product?.image} alt={product?.image} className='product-img' />
						</div>
						<div className='pp-left-bottom'>
							<h2>{product?.name}</h2>
							<p>
								<strong>Best Price:</strong> {formatCurrency(product?.price)}
							</p>
							<p>
								<strong>Rating:</strong>{' '}
								<span>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
								</span>
							</p>
							<div className='pp-left-btns my-3'>
								<button className='btn btn-primary btn-block mb-1'>Add To Cart</button>
								<Link to='/products/buy-now' className='btn btn-success btn-block mb-1'>
									Buy Now
								</Link>
								<button className='btn btn-light btn-block'>Reviews</button>
							</div>
						</div>
					</div>
					<div className='product-page-right'>
						<div className='pp-graph'>
							<Line data={data} />
						</div>
						<div className='product-buttons mt-5'>
							<button className='btn btn-secondary' onClick={() => setBtnTab('Availability')}>
								View Availability
							</button>
							<button className='btn btn-dark' onClick={() => setBtnTab('Pricing History')}>
								Pricing History
							</button>
							<button className='btn btn-highlight' onClick={() => setBtnTab('Reviews')}>
								Time Period
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProduct})(ProductPage);
