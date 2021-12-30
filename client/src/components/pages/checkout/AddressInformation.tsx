import React, {Dispatch, Fragment, SetStateAction, useState} from 'react';
import PrevNext from '../../../Reusable/Buttons/PrevNext';
import {CheckoutForm} from '../../../types/forms';
import {stateAbbreviations} from '../../../utils/sharedData';

interface AddressInformationProps {
	setPhase: Dispatch<SetStateAction<number>>;
	phase: number;
	formData: CheckoutForm;
	onChange: () => void;
	checkBillingAddress: () => void;
}

const AddressInformation: React.FC<AddressInformationProps> = ({setPhase, phase, onChange, formData, checkBillingAddress}) => {
	const {billingSameAsShipping, shippingAddress, shippingCity, shippingState, shippingZipcode, billingAddress, billingCity, billingZipcode, billingState} = formData;

	return (
		<div>
			<form className='form wrapper-md py-3 form-grid-customer-info'>
				<h2 className='mb-1'>Shipping Address</h2>
				<div style={{gridColumn: `1 / span 3`}} className='form-group'>
					<label htmlFor='shippingAddress'>Street Address</label>
					<input type='text' className='form-control' name='shippingAddress' value={shippingAddress} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='shippingCity'>City</label>
					<input type='text' className='form-control' name='shippingCity' value={shippingCity} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='shippingState'>State</label>
					<select name='shippingState' className='form-control' value={shippingState} onChange={onChange as any}>
						{stateAbbreviations.map((state, ind) => (
							<option key={ind} value={state}>
								{state}
							</option>
						))}
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='shippingZipcode'>Zip Code</label>
					<input type='text' className='form-control' name='shippingZipcode' value={shippingZipcode} onChange={onChange} />
				</div>
				<div className='form-group' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gridColumn: `1 / span 2`}}>
					<input className='form-control' checked={billingSameAsShipping === 'yes'} value={billingSameAsShipping} type='checkbox' name='billingSameAsShipping' onChange={checkBillingAddress} />
					<label htmlFor='billingSameAsShipping'>Is the billing address the same as the shipping address?</label>
				</div>
				<br />
				{billingSameAsShipping === 'no' ? (
					<Fragment>
						<h2 className='mb-1'>Billing Address</h2>
						<div style={{gridColumn: `1 / span 3`}} className='form-group'>
							<label htmlFor='billingAddress'>Street Address</label>
							<input type='text' className='form-control' name='billingAddress' value={billingAddress} onChange={onChange} />
						</div>
						<div className='form-group'>
							<label htmlFor='billingCity'>City</label>
							<input type='text' className='form-control' name='billingCity' value={billingCity} onChange={onChange} />
						</div>
						<div className='form-group'>
							<label htmlFor='billingState'>State</label>
							<select name='billingState' className='form-control' value={billingState} onChange={onChange as any}>
								{stateAbbreviations.map((state, i) => (
									<option key={i} value={state}>
										{state}
									</option>
								))}
							</select>
						</div>
						<div className='form-group'>
							<label htmlFor='billingZipcode'>Zip Code</label>
							<input type='text' className='form-control' name='billingZipcode' value={billingZipcode} onChange={onChange} />
						</div>
					</Fragment>
				) : null}
			</form>
			<PrevNext goNext={() => setPhase(phase + 1)} goPrev={() => setPhase(phase - 1)} />
		</div>
	);
};

export default AddressInformation;
