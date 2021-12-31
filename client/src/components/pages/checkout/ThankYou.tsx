import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearCartItems} from '../../../actions/cartItems';

interface ThankYouProps {
	setPhase: Dispatch<SetStateAction<number>>;
	phase?: number;
	clearCartItems: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({setPhase, clearCartItems, phase}) => {
	useEffect(() => {
		localStorage.removeItem('checkargs');
		clearCartItems();
	}, []);

	return (
		<div>
			<h2 className='mb-3'>Thank you for your purchase!</h2>
			<Link to={`/home`} className='btn btn-dark'>
				Go Home
			</Link>
		</div>
	);
};

export default connect(null, {clearCartItems})(ThankYou);
