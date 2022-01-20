import React, {Dispatch, SetStateAction, useState} from 'react';
import PrevNext from '../../../Reusable/Buttons/PrevNext';
import {CheckoutForm} from '../../../types/forms';
import {formatCreditCard, formatExpiration} from '../../../utils/randomUtils';

interface PaymentDetailsProps {
	setPhase: Dispatch<SetStateAction<number>>;
	setFormData: Dispatch<SetStateAction<any>>;
	phase: number;
	formData: CheckoutForm;
	onChange: () => void;
	saveToLocalStorage: () => void;
	// onChangeExpirationDate: (expVal: string) => void
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({setPhase, phase, formData, onChange, saveToLocalStorage, setFormData}) => {
	const {cardNumber, cardFirstName, cardLastName, expirationDate, securityCode, saveCard} = formData;

	return (
		<div>
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
				<div className='form-group'>
					<input type='checkbox' name='saveCard' value={saveCard} checked={saveCard === 'true'} onChange={(e) => setFormData({...formData, saveCard: saveCard === 'false' ? 'true' : 'false'})} />
					<label htmlFor='saveCard'>Save card on file?</label>
				</div>
			</form>
			<PrevNext
				goNext={() => {
					saveToLocalStorage();
					setPhase(phase + 1);
				}}
				backToCart
			/>
		</div>
	);
};

export default PaymentDetails;
