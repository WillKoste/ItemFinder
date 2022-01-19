import React from 'react';
import {Purchase} from '../../../../types/general';
import {shared} from '../../../../utils/sharedData';
import PurchaseItem from './PurchaseItem';

interface OrderItemProps {
	purchase: Purchase;
}

const OrderItem: React.FC<OrderItemProps> = ({purchase}) => {
	const {id, confirmation_code} = purchase;

	return (
		<div className='account-purchase-item'>
			<h3>Order Confirmation Code: {purchase.confirmation_code}</h3>
			<div className='account-purchase-item-flex'>
				<div className='account-purchase-left'>
					{purchase.items.map((item) => (
						<PurchaseItem item={item} key={item.id} />
					))}
				</div>
				<div className='account-purchase-buttons'>
					<button className='btn btn-primary'>{shared.viewOrderDetails}</button>
					<button className='btn btn-success'>{shared.leaveFeedback}</button>
					<button className='btn btn-danger'>{shared.returnRefund}</button>
				</div>
			</div>
		</div>
	);
};

export default OrderItem;
