import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import swal2 from 'sweetalert2';
import {removeItemFromCart, updateCartQty} from '../../../actions/cartItems';
import {addFavorite} from '../../../actions/favorites';
import {clearProduct} from '../../../actions/products';
import {CartReducer, UserReducer} from '../../../types/general';
import {formatCurrency} from '../../../utils/randomUtils';
import {shared} from '../../../utils/sharedData';

interface CartItemsProps {
	cartItemsRed: CartReducer;
	authRed: UserReducer;
	updateCartQty: (itemId: number, newQty: number) => void;
	clearProduct: () => void;
	removeItemFromCart: (itemId: number) => void;
	addFavorite: (uId: number, pId: number) => void;
}

const CartItems: React.FC<CartItemsProps> = ({cartItemsRed: {items, total}, clearProduct, removeItemFromCart, addFavorite, authRed: {user}, updateCartQty}) => {
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
										<select name='qty' className='cart-qty' value={item.cart_qty} onChange={(e) => updateCartQty(item.id, +e.target.value)}>
											{Array.from(Array(item.qty && item.qty > 100 ? 100 : item.qty).keys()).map((op, ind) => (
												<option key={ind} value={op + 1}>
													{op + 1}
												</option>
											))}
										</select>
									</p>
									<p>
										<strong>Subtotal: </strong>
										{formatCurrency(item.cart_subtotal)}
									</p>
								</div>
								<div className='cart-btns'>
									<Link to={`/locate`} className='btn btn-slim btn-dark text-center'>
										Locate
									</Link>
									<Link to={`/reviews/${item.id}`} className='btn btn-slim btn-dark text-center'>
										Reviews
									</Link>
									<button
										className='btn btn-slim btn-dark'
										onClick={() => {
											if (user) {
												addFavorite(user.id, item.id);
												swal2.fire({
													text: shared.itemAddedToFavorites,
													toast: false,
													buttonsStyling: false,
													customClass: {
														confirmButton: 'btn btn-highlight'
													}
												});
											}
										}}
									>
										Favorite
									</button>
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
				<div className='cart-total'>
					<strong>Total: </strong>
					{formatCurrency(total)}
					<Link to={`/checkout`} className='btn btn-success ml-3'>
						Continue to Checkout
					</Link>
				</div>
			) : null}
		</Fragment>
	);
};

const mapStateToProps = (state: any) => ({
	cartItemsRed: state.cartItemsRed,
	authRed: state.authRed
});

export default connect(mapStateToProps, {clearProduct, removeItemFromCart, addFavorite, updateCartQty})(CartItems);
