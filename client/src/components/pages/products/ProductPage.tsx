import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import {getProduct} from '../../../actions/products';
import {ProductsHistoryReducer, ProductsReducer, ProductHistory, Product} from '../../../types/general';
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineOptions, ChartOptions, BarElement, ChartData, BubbleDataPoint, ScatterDataPoint} from 'chart.js';
import {Line, Chart as ChartReact, Bar} from 'react-chartjs-2';
import moment from 'moment';
import {getPastMonths} from '../../../utils/getPastMonths';
import {formatCurrency} from '../../../utils/randomUtils';
import {getProductsHistory} from '../../../actions/productsHistory';
import {addItemToCart} from '../../../actions/cartItems';

interface ProductPageProps extends RouteComponentProps<{productId: string}> {
	getProduct: (prodId: string) => void;
	getProductsHistory: (prodId: number) => void;
	addItemToCart: (item: Product, carts: Product[], qty: number) => void;
	productsRed: ProductsReducer;
	productsHistoryRed: ProductsHistoryReducer;
	cartItemsRed: {items: Product[] | []};
}

const ProductPage: React.FC<ProductPageProps> = ({match, getProduct, productsRed: {loadingProduct, product}, productsHistoryRed: {loadingHistory, productsHistory}, getProductsHistory, addItemToCart, cartItemsRed: {items}}) => {
	Chart.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

	const [btnTab, setBtnTab] = useState('Availability');
	const [timePeriod, setTimePeriod] = useState(6);
	const [graphData, setGraphData] = useState([]);
	const [productData, setProductData] = useState([]);
	const [qtyData, setQtyData] = useState(0);

	useEffect(() => {
		getProduct(match.params.productId);
	}, []);
	useEffect(() => {
		setGraphData(getPastMonths(timePeriod) as any);
	}, [timePeriod]);
	useEffect(() => {
		getProductsHistory(+match.params.productId);
	}, []);
	useEffect(() => {
		if (!loadingHistory && productsHistory.length > 0) {
			const pricesArr = productsHistory.map((h) => ({x: moment(h.recorded_on).format('MM-DD-YYYY'), y: h.price}));
			setProductData(productsHistory.map((hist, ind) => (ind === 0 ? {label: product?.name, data: pricesArr, borderColor: 'blue', tension: 0.1} : null)).filter((a) => a !== null) as any);
		}
	}, [loadingHistory, productsHistory]);
	console.log({graphData, productData});

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart'
			}
		}
	};

	const labels = getPastMonths(timePeriod)
		.map((lab) => `${lab.monthName}, ${lab.year.toString()}`)
		.reverse();
	console.log({labels});

	const data = {
		labels,
		datasets: [
			{
				label: product ? product.name : 'I dont give a fuck',
				data: productsHistory.map((prod) => {
					return prod.price;
				}),
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			}
		]
	};

	// const cartStorage: Product[]|[] = JSON.parse(localStorage.getItem('cart') as string)
	const onClickAddToCart = () => {
		if (product) {
			addItemToCart(product, items, qtyData);
		}
	};

	return (
		<div className='product-page'>
			{loadingProduct ? (
				<div className='container'>
					<h2>Loading...</h2>
				</div>
			) : !loadingProduct && productsHistory.length < 1 ? (
				'Aint no data'
			) : (
				<div className='container'>
					<div className='product-page-left'>
						<div className='pp-left-top'>
							<img src={product?.image} alt={product?.image} className='product-img' />
						</div>
						<div className='pp-left-bottom'>
							<div className='left-text'>
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
							</div>
							<div className='right-select'>
								<div className='pp-qty'>
									<p>
										<strong>Qty</strong>
									</p>
									<select name='item-qty' onChange={(e) => setQtyData(+e.target.value)}>
										{Array.from(Array(product?.qty && product.qty > 100 ? 100 : product?.qty).keys()).map((key) => (
											<option value={key} key={key}>
												{key}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
						<div className='pp-left-btns my-3'>
							<button className='btn btn-primary btn-block mb-1' onClick={onClickAddToCart}>
								Add To Cart
							</button>
							<Link to='/products/buy-now' className='btn btn-secondary btn-block mb-1'>
								Buy Now
							</Link>
							<button className='btn btn-light btn-block'>Reviews</button>
						</div>
					</div>
					<div className='product-page-right'>
						<div className='pp-graph'>
							{/* <ChartReact type='bar' data={data} options={options} /> */}
							{/* <Line data={data} options={options} /> */}
							<Bar data={data} options={options} />
						</div>
						<div className='product-buttons mt-5'>
							<button className='btn btn-highlight' onClick={() => setBtnTab('Availability')}>
								View Availability
							</button>
							<button className='btn btn-dark' onClick={() => setBtnTab('Pricing History')}>
								Pricing History
							</button>
							<select style={{textAlign: 'center'}} className='btn btn-dark' onChange={(e) => setTimePeriod(+e.target.value)}>
								<option value={6}>6 Months</option>
								<option value={9}>9 Months</option>
								<option value={1 * 12}>1 Year</option>
								<option value={2 * 12}>2 Years</option>
							</select>
						</div>
						<div className='pp-description'>{product?.description}</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed,
	productsHistoryRed: state.productsHistoryRed,
	cartItemsRed: state.cartItemsRed
});

export default connect(mapStateToProps, {getProduct, getProductsHistory, addItemToCart})(ProductPage);
