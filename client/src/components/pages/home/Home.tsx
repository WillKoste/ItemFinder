import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getContacts} from '../../../actions/contacts';
import {getLocations} from '../../../actions/locations';
import {getPartners} from '../../../actions/partners';
import {getProducts} from '../../../actions/products';
import {getReviews} from '../../../actions/reviews';
import Card1 from '../../../Reusable/Card1';
import {ProductsReducer} from '../../../types/general';

interface HomeProps {
	productsRed: ProductsReducer;
	getProducts: (limit?: number, offset?: number) => void;
	getLocations: () => void;
	getPartners: () => void;
	getReviews: () => void;
	getContacts: () => void;
}

const Home: React.FC<HomeProps> = ({productsRed, getProducts, getLocations, getPartners, getContacts, getReviews}) => {
	useEffect(() => {
		getProducts(5, 0);
	}, []);

	return (
		<div>
			<div className='container'>
				<h1 className='text-xl'>Home Component</h1>
				{!productsRed.loading && productsRed.products.length > 0 ? (
					<div className='cards-grid mb-4 arrows-container'>
						<button className='arrow-left'>
							<i className='fas fa-chevron-left'></i>
						</button>
						<button className='arrow-right'>
							<i className='fas fa-chevron-right'></i>
						</button>
						{productsRed.products.map((prod) => (
							<Link to={`/product/info/${prod.id}`}>
								<Card1 key={prod.id} data={prod} />
							</Link>
						))}
					</div>
				) : null}
				<button className='btn btn-dark mr-2'>Get Products</button>
				<button className='btn btn-dark mr-2' onClick={getContacts}>
					Get Contacts
				</button>
				<button className='btn btn-dark mr-2' onClick={getLocations}>
					Get Locations
				</button>
				<button className='btn btn-dark mr-2' onClick={getPartners}>
					Get Partners
				</button>
				<button className='btn btn-dark mr-2' onClick={getReviews}>
					Get Reviews
				</button>
				<div className='wrapper-lg'></div>
				<div className='wrapper-md'></div>
				<div className='wrapper-sm'></div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts, getLocations, getPartners, getContacts, getReviews})(Home);
