import React, {Dispatch, SetStateAction} from 'react';
import {CheckoutForm} from '../../../../types/forms';
import {formatCreditCard, formatExpiration} from '../../../../utils/randomUtils';

interface CardFormProps {
	formData: CheckoutForm;
	setFormData: Dispatch<SetStateAction<any>>;
	onChange: () => void;
}

const CardForm: React.FC<CardFormProps> = ({onChange, formData, setFormData}) => {
	const {expirationDate, securityCode, cardLastName, cardFirstName, cardNumber, saveCard} = formData;

	return (
		<form className='form form-grid wrapper-sm py-3'>
			<div className='form-group'>
				<label htmlFor='cardFirstName'>First Name - on card</label>
				<input type='text' className='form-control' name='cardFirstName' onChange={onChange} value={cardFirstName} />
			</div>
			<div className='form-group'>
				<label htmlFor='cardLastName'>Last Name - on card</label>
				<input type='text' className='form-control' name='cardLastName' onChange={onChange} value={cardLastName} />
			</div>
			<div style={{gridColumn: '1 / span 2'}} className='form-group'>
				<label htmlFor='cardNumber'>Card Number</label>
				<input type='text' autoComplete='off' className='form-control' name='cardNumber' value={cardNumber} onChange={(e) => setFormData({...formData, cardNumber: formatCreditCard(e.target.value)})} maxLength={19} />
			</div>
			<div className='form-group'>
				<label htmlFor='expirationDate'>Expiration Date</label>
				<input type='text' className='form-control' name='expirationDate' value={expirationDate} onChange={(e) => setFormData({...formData, expirationDate: formatExpiration(e.target.value)})} maxLength={5} />
			</div>
			<div className='form-group'>
				<label htmlFor='securityCode'>Security Code</label>
				<input type='text' className='form-control' name='securityCode' value={securityCode} maxLength={3} onChange={onChange} />
			</div>
			<div className='form-group save-card'>
				<input type='checkbox' name='saveCard' value={saveCard} checked={saveCard === 'true'} onChange={(e) => setFormData({...formData, saveCard: saveCard === 'false' ? 'true' : 'false'})} />
				<label htmlFor='saveCard'>Save card on file?</label>
			</div>
		</form>
	);
};

export default CardForm;
