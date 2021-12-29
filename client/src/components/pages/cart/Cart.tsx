import React, {useState, useEffect} from 'react';
import CartItems from './CartItems';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
	const [cartData, setCartData] = useState([]);
	const localCart = localStorage.getItem('cart');

	useEffect(() => {
		if (localCart) {
			setCartData(JSON.parse(localCart));
		}
	}, [localCart]);

	return (
		<div className='cart-page'>
			<div className='container'>
				<h2>Your Cart</h2>
				<CartItems />
			</div>
		</div>
	);
};

export default Cart;
