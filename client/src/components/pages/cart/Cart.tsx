import React, {useState, useEffect} from 'react';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
	const [cartData, setCartData] = useState([]);
	const localCart = localStorage.getItem('cart');

	useEffect(() => {
		if (localCart) {
			setCartData(JSON.parse(localCart));
			console.log('yep:)');
		}
		console.log('nope');
	}, [localCart]);

	return (
		<div className='card-page'>
			<div className='container'>
				<h2>Cart Page</h2>
			</div>
		</div>
	);
};

export default Cart;
