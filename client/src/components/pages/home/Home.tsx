import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../../../actions/contacts';
import {getLocations} from '../../../actions/locations';
import {getPartners} from '../../../actions/partners';
import {getProducts} from '../../../actions/products';
import {getReviews} from '../../../actions/reviews';
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
	return (
		<div>
			<div className='container'>
				<h1 className='text-xl'>Home Component</h1>
				{!productsRed.loading && productsRed.products.length > 0
					? productsRed.products.map((prod) => (
							<div key={prod.id}>
								<h1>{prod.name}</h1>
							</div>
					  ))
					: null}
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
				<div className='wrapper-lg'>hey</div>
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
