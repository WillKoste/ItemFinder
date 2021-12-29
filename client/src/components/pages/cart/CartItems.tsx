import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItemFromCart} from '../../../actions/cartItems';
import {clearProduct} from '../../../actions/products';
import {CartReducer} from '../../../types/general';
import {formatCurrency} from '../../../utils/randomUtils';

interface CartItemsProps {
	cartItemsRed: CartReducer;
	clearProduct: () => void;
	removeItemFromCart: (itemId: number) => void;
}

const CartItems: React.FC<CartItemsProps> = ({cartItemsRed: {items, total}, clearProduct, removeItemFromCart}) => {
	useEffect(() => {
		clearProduct();
	}, []);

	return (
		<Fragment>
			<div className='cart-items'>
				{items.length > 0 ? (
					items.map((item) => (
						<div className='card-cart'>
							<div className='card-left'>
								<Link to={`/product/info/${item.id}`}>
									<p>{item.name}</p>
									<img src={item.image} alt={item.image} />
								</Link>
							</div>
							<div className='card-right'>
								<p className='cart-desc'>{item.description && item.description.length > 175 ? `${item.description.slice(0, 175)}...` : item.description}</p>
								<div className='cart-info'>
									<p>
										<strong>Price: </strong>
										{formatCurrency(item.price)}
									</p>
									<p>
										<strong>Quantity: </strong>
										{item.cart_qty}
									</p>
									<p>
										<strong>Subtotal: </strong>
										{formatCurrency(item.cart_subtotal)}
									</p>
								</div>
								<div className='cart-btns'>
									<button className='btn btn-slim btn-dark'>Locate</button>
									<button className='btn btn-slim btn-dark'>Reviews</button>
									<button className='btn btn-slim btn-dark'>Favorite</button>
									<button className='btn btn-slim btn-danger' onClick={() => removeItemFromCart(item.id)}>
										Remove
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<p>No items are currently in your cart!</p>
				)}
			</div>

			{items.length > 0 ? (
				<p className='cart-total'>
					<strong>Total: </strong>
					{formatCurrency(total)}
				</p>
			) : null}
		</Fragment>
	);
};

const mapStateToProps = (state: any) => ({
	cartItemsRed: state.cartItemsRed
});

export default connect(mapStateToProps, {clearProduct, removeItemFromCart})(CartItems);
