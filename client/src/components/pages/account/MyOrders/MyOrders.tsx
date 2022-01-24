import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPurchases} from '../../../../actions/purchases';
import {PurchasesReducer, UserReducer} from '../../../../types/general';
import {PurchasesOptions} from '../../../../types/redux';
import {shared} from '../../../../utils/sharedData';
import SpinnerCustom from '../../../layout/SpinnerCustom';
import OrderItem from './OrderItem';

interface MyOrdersProps {
	purchasesRed: PurchasesReducer;
	authRed: UserReducer;
	getPurchases: (options?: PurchasesOptions) => void;
}

const MyOrders: React.FC<MyOrdersProps> = ({purchasesRed: {loadingPurchases, purchases}, authRed: {user}, getPurchases}) => {
	useEffect(() => {
		if (user) {
			getPurchases({user_id: user.id, order_by: 'asc'});
		}
	}, [user]);

	return (
		<div className='container'>
			<h2 className='mb-3 header-2'>My Orders</h2>
			<div className='account-purchases'>{loadingPurchases ? <SpinnerCustom /> : purchases.length <= 0 ? <h3 style={{color: '#fff'}}>{shared.noPurchases}</h3> : purchases.map((purch) => <OrderItem key={purch.id} purchase={purch} />)}</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	purchasesRed: state.purchasesRed,
	authRed: state.authRed
});

export default connect(mapStateToProps, {getPurchases})(MyOrders);
