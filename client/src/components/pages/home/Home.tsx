import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../../../actions/contacts';
import {getLocations} from '../../../actions/locations';
import {getPartners} from '../../../actions/partners';
import {getProducts} from '../../../actions/products';
import {getReviews} from '../../../actions/reviews';
import Card1 from '../../../Reusable/Card1';
import {ProductsReducer} from '../../../types/general';

interface HomeProps {
	productsRed: ProductsReducer;
	getProducts: () => void;
	getLocations: () => void;
	getPartners: () => void;
	getReviews: () => void;
	getContacts: () => void;
}

const Home: React.FC<HomeProps> = ({productsRed, getProducts, getLocations, getPartners, getContacts, getReviews}) => {
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<div className='container'>
				<h1 className='text-xl'>Home Component</h1>
				<div className='cards-grid mb-4'>{!productsRed.loading && productsRed.products.length > 0 ? productsRed.products.map((prod) => <Card1 key={prod.id} data={prod} />) : null}</div>
				<button className='btn btn-dark mr-2' onClick={getProducts}>
					Get Products
				</button>
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
