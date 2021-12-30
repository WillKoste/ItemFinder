import React, {Dispatch, SetStateAction, useState} from 'react';
import PrevNext from '../../../Reusable/Buttons/PrevNext';
import {CheckoutForm} from '../../../types/forms';

interface PaymentDetailsProps {
	setPhase: Dispatch<SetStateAction<number>>;
	phase: number;
	formData: CheckoutForm;
	onChange: () => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({setPhase, phase, formData, onChange}) => {
	const {cardNumber, cardFirstName, cardLastName, expirationDate, securityCode} = formData;

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
					<input type='text' autoComplete='off' className='form-control' name='cardNumber' value={cardNumber} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='expirationDate'>Expiration Date</label>
					<input type='text' className='form-control' name='expirationDate' value={expirationDate} onChange={onChange} maxLength={5} />
				</div>
				<div className='form-group'>
					<label htmlFor='securityCode'>Security Code</label>
					<input type='text' className='form-control' name='securityCode' value={securityCode} maxLength={3} onChange={onChange} />
				</div>
			</form>
			<PrevNext goNext={() => setPhase(phase + 1)} />
		</div>
	);
};

export default PaymentDetails;
