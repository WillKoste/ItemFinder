import React, {Dispatch, SetStateAction, useState} from 'react';
import PrevNext from '../../../Reusable/Buttons/PrevNext';
import {CheckoutForm} from '../../../types/forms';

interface ConfirmationProps {
	setPhase: Dispatch<SetStateAction<number>>;
	phase: number;
	formData: CheckoutForm;
	onChange: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({setPhase, phase, onChange, formData}) => {
	const {shippingNotes, shippingOption} = formData;

	return (
		<div>
			<h2 className='mb-1'>Finish Your Order</h2>
			<form className='form wrapper-sm py-3'>
				<div className='form-group'>
					<label htmlFor='something'>Shipping Options:</label>
					<div className='shipping-options m-2'>
						<div className='shipping-option'>
							<input type='checkbox' name='shippingOption' value={'1 day, X-press Shipping'} onChange={onChange} checked={shippingOption === '1 day, X-press Shipping'} />
							<label htmlFor='shippingOption'>1 day, X-press Shipping&trade;</label>
							<small>($19.89)</small>
						</div>
						<div className='shipping-option'>
							<input type='checkbox' name='shippingOption' value={'2 day, Standard Shipping'} checked={shippingOption === '2 day, Standard Shipping'} onChange={onChange} />
							<label htmlFor='shippingOption'>2 day, Standard Shipping</label>
							<small>(Free for Members)</small>
						</div>
						<div className='shipping-option'>
							<input type='checkbox' name='shippingOption' value={'4 day, Standard Shipping'} checked={shippingOption === '4 day, Standard Shipping'} onChange={onChange} />
							<label htmlFor='shippingOption'>4 day, Standard Shipping</label>
							<small>(Free)</small>
						</div>
						<div className='shipping-option'>
							<input type='checkbox' name='shippingOption' value={'Never, you keep it'} checked={shippingOption === 'Never, you keep it'} onChange={onChange} />
							<label htmlFor='shippingOption'>Never, you keep it</label>
							<small>($27.00)</small>
						</div>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='shippingNotes'>Shipping Notes</label>
					<textarea name='shippingNotes' value={shippingNotes} onChange={onChange as any} className='form-control'></textarea>
				</div>
			</form>
			<PrevNext goNext={() => setPhase(phase + 1)} goPrev={() => setPhase(phase - 1)} />
		</div>
	);
};

export default Confirmation;
