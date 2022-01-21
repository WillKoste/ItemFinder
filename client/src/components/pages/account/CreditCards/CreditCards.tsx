import React, {useEffect, useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {getCards, updateDefaultCard} from '../../../../actions/cards';
import MyModal from '../../../../Reusable/Modals/MyModal';
import Table from '../../../../Reusable/Table';
import {CreditCard, CreditCardsReducer} from '../../../../types/general';
import {CreditCardsOptions} from '../../../../types/redux';
import {Column} from '../../../../types/table';

interface CreditCardsProps {
	creditCardsRed: CreditCardsReducer;
	getCards: (options?: CreditCardsOptions) => void;
	updateDefaultCard: (cardId: number) => void;
}

const CreditCards: React.FC<CreditCardsProps> = ({creditCardsRed: {cards, loadingCards}, getCards, updateDefaultCard}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [offsetState, setOffsetState] = useState(0);
	const limitAmt = 5;

	useEffect(() => {
		getCards({order_by: 'desc', limit: limitAmt, offset: offsetState});
	}, [offsetState]);

	const columns: Column[] = [
		{
			id: 1,
			header: 'Card Number',
			accessor: 'last_four_digits'
		},
		{
			id: 2,
			header: 'Cardholder',
			accessor: `first_name`
		},
		{
			id: 3,
			header: 'Expiration',
			accessor: 'exp_date'
		},
		{
			id: 4,
			header: 'Use as default',
			accessor: 'use_as_default'
		}
	];

	const onClickPrev = useCallback(() => {
		setOffsetState(offsetState - limitAmt);
	}, [offsetState]);
	const onClickNext = useCallback(() => {
		setOffsetState(offsetState + limitAmt);
	}, [offsetState]);

	const onChangeDefault = (val: CreditCard) => {
		console.log(val);
		if (val.id) {
			updateDefaultCard(val.id);
		}
	};

	return (
		<div>
			<h2 className='account-header'>Credit Cards</h2>
			<button className='btn btn-secondary mb-2' onClick={() => setModalOpen(true)}>
				Add Credit Card
			</button>
			<Table prevButtonDisabled={offsetState === 0} columns={columns} data={cards} onClickNext={onClickNext} onClickPrev={onClickPrev} checkBoolean={onChangeDefault} />
			<MyModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	creditCardsRed: state.creditCardsRed
});

export default connect(mapStateToProps, {getCards, updateDefaultCard})(CreditCards);
