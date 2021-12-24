import React from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../../../actions/contacts';
import {getLocations} from '../../../actions/locations';
import {getPartners} from '../../../actions/partners';
import {getReviews} from '../../../actions/reviews';
import CardStack from '../../../Reusable/Cards/ProductCardStack';

interface HomeProps {
	getLocations: () => void;
	getPartners: () => void;
	getReviews: () => void;
	getContacts: () => void;
}

const Home: React.FC<HomeProps> = ({getLocations, getPartners, getContacts, getReviews}) => {
	return (
		<div>
			<div className='container'>
				<h1 className='text-l mb-4'>Featured</h1>
				<CardStack />
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
				{/* <div className='wrapper-lg'></div>
				<div className='wrapper-md'></div>
				<div className='wrapper-sm'></div> */}
			</div>
		</div>
	);
};

export default connect(null, {getLocations, getPartners, getContacts, getReviews})(Home);
