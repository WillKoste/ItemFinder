import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {getCards} from '../../../../actions/cards';
import {CheckoutForm} from '../../../../types/forms';
import {CreditCardsReducer} from '../../../../types/general';
import {CreditCardsOptions} from '../../../../types/redux';
import SpinnerCustom from '../../../layout/SpinnerCustom';

interface SelectCardProps {
	creditCardsRed: CreditCardsReducer;
	getCards: (options: any) => void;
	formData: CheckoutForm;
	onChange: () => void;
	setFormData: Dispatch<SetStateAction<CheckoutForm>>;
	needCardInfo: boolean;
	setNeedCardInfo: Dispatch<SetStateAction<boolean>>;
}

const SelectCard: React.FC<SelectCardProps> = ({creditCardsRed: {cards, loadingCards}, getCards, onChange, formData, setFormData, setNeedCardInfo, needCardInfo}) => {
	const {cardFirstName, cardLastName, cardNumber, expirationDate, securityCode} = formData;
	const [chosenCardId, setChosenCardId] = useState<number | null | undefined>(null);

	useEffect(() => {
		getCards({order_by: 'desc', offset: 0, limit: 5});
	}, []);

	useEffect(() => {
		if (!chosenCardId && cards.length > 0) {
			const desiredCard = cards.find((card) => card.use_as_default);
			setFormData({
				...formData,
				cardFirstName: desiredCard?.first_name,
				cardLastName: desiredCard?.last_name,
				expirationDate: desiredCard?.exp_date
			});
		}
	}, [chosenCardId, cards]);

	const onChangeCardSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const desiredCard = cards.find((card) => card.id === +e.target.value);
		console.log({desiredCard});
		setChosenCardId(desiredCard?.id);
		setFormData({
			...formData,
			cardFirstName: desiredCard?.first_name,
			cardLastName: desiredCard?.last_name,
			expirationDate: desiredCard?.exp_date
		});
	};

	return (
		<div className='select-card'>
			<h2>Saved Card</h2>
			<div className='card-selection'>
				{loadingCards ? (
					<SpinnerCustom />
				) : cards.length > 0 ? (
					cards.map((card) => (
						<div className='card-selection-option' key={card.id}>
							<input disabled={needCardInfo} onChange={onChangeCardSelect} checked={!chosenCardId ? card.use_as_default : card.id === chosenCardId} type='radio' name='cardSelection' value={card.id} />
							<label htmlFor='cardSelection'>
								<span>{card.last_four_digits}</span> <span>-</span> <span>{card.exp_date.length > 5 ? moment(card.exp_date).format('MM/YY') : card.exp_date}</span> <span>-</span>
								<span>
									{card.last_name}, {card.first_name}
								</span>
							</label>
						</div>
					))
				) : (
					<p>There are no cards currently on file.</p>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	creditCardsRed: state.creditCardsRed
});

export default connect(mapStateToProps, {getCards})(SelectCard);
