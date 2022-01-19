import React from 'react';
import {Link} from 'react-router-dom';
import {Product} from '../../../../types/general';
import {formatCurrency} from '../../../../utils/randomUtils';

interface PurchaseItemProps {
	item: Product;
}

const PurchaseItem: React.FC<PurchaseItemProps> = ({item}) => {
	return (
		<div key={item.id} className='account-purchase-item-individual'>
			<div className='item-image'>
				<img src={item.image} alt={item.image} />
			</div>
			<div className='item-info'>
				<Link to={`/product/info/${item.id}`}>
					<p>{item.name}</p>
				</Link>
				<p>
					<strong>Price:</strong> {formatCurrency(item.price)}
				</p>
				<p>
					<strong>Quantity:</strong> {item.qty}
				</p>
			</div>
		</div>
	);
};

export default PurchaseItem;
