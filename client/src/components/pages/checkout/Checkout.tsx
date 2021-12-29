import React from 'react';
import {connect} from 'react-redux';

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
	return (
		<div>
			<h2>Checkout Page</h2>
		</div>
	);
};

export default connect(null, {})(Checkout);
