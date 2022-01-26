import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../../../actions/contacts';
import {getLocations} from '../../../actions/locations';
import {getPartners} from '../../../actions/partners';
import {clearProduct} from '../../../actions/products';
import {getReviews} from '../../../actions/reviews';
import NewProductCardStack from '../../../Reusable/Cards/NewProductCardStack';
import CardStack from '../../../Reusable/Cards/ProductCardStack';
import HeroSection from './HeroSection';

interface HomeProps {
	getLocations: () => void;
	getPartners: () => void;
	clearProduct: () => void;
}

const Home: React.FC<HomeProps> = ({getLocations, getPartners, clearProduct}) => {
	useEffect(() => {
		clearProduct();
	}, []);

	return (
		<div>
			<div className='container'>
				<h1 className='text-l mb-5 mt-2'>Featured Products</h1>
				{/* <CardStack /> */}
				<NewProductCardStack />
			</div>
			<HeroSection />
		</div>
	);
};

export default connect(null, {getLocations, getPartners, clearProduct})(Home);
