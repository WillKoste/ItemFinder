import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {CartReducer} from '../../../types/general';
import AddressInformation from './AddressInformation';
import Confirmation from './Confirmation';
import PaymentDetails from './PaymentDetails';
import ThankYou from './ThankYou';
import {v4 as uuidv4} from 'uuid';

interface CheckoutProps {
	cartItemsRed: CartReducer;
}

const Checkout: React.FC<CheckoutProps> = ({cartItemsRed: {items}}) => {
	const [formData, setFormData] = useState({
		checkoutId: uuidv4(),
		confirmationNumber: null,
		cardFirstName: '',
		cardLastName: '',
		cardNumber: '',
		expirationDate: '',
		securityCode: '',
		shippingAddress: '',
		shippingCity: '',
		shippingState: '',
		shippingZipcode: '',
		billingAddress: '',
		billingCity: '',
		billingState: '',
		billingZipcode: '',
		billingSameAsShipping: 'yes',
		shippingOption: '',
		shippingNotes: ''
	});
	const {
		cardFirstName,
		cardLastName,
		cardNumber,
		expirationDate,
		securityCode,
		shippingAddress,
		shippingCity,
		shippingState,
		shippingZipcode,
		billingAddress,
		billingCity,
		billingState,
		billingZipcode,
		billingSameAsShipping,
		shippingNotes,
		shippingOption
	} = formData;
	const phase1State = {
		cardFirstName,
		cardLastName,
		cardNumber,
		expirationDate,
		securityCode
	};
	const phase2State = {
		shippingAddress,
		shippingCity,
		shippingState,
		shippingZipcode,
		billingAddress,
		billingCity,
		billingState,
		billingZipcode,
		billingSameAsShipping
	};
	const phase3State = {
		shippingNotes,
		shippingOption
	};
	console.log(formData);
	const [numSteps, setNumSteps] = useState([
		{id: 1, section: 'Payment Details', passed: false},
		{id: 2, section: 'Customer Information', passed: false},
		{id: 3, section: `Order`, passed: false},
		{id: 4, section: `Thank you!`, passed: false}
	]);
	const [phase, setPhase] = useState(1);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const saveToLocalStorage = () => {
		localStorage.setItem('checkargs', JSON.stringify(formData));
	};

	const checkBillingAddress = () => {
		setFormData({...formData, billingSameAsShipping: billingSameAsShipping === 'no' ? 'yes' : 'no'});
	};

	return (
		<div className='checkout-page'>
			<div className='container'>
				<div className='checkout-steps'>
					{numSteps.map((a, i) => {
						const isCurrentStep = a.id === phase;
						return (
							<h3 key={i} style={{color: isCurrentStep ? 'turquoise' : !a.passed ? '#999' : 'inherit'}}>
								{a.section}
							</h3>
						);
					})}
				</div>
				{phase === 1 && <PaymentDetails setPhase={setPhase} phase={phase} formData={phase1State} onChange={onChange as any} saveToLocalStorage={saveToLocalStorage} />}
				{phase === 2 && <AddressInformation setPhase={setPhase} phase={phase} onChange={onChange as any} formData={phase2State} checkBillingAddress={checkBillingAddress} saveToLocalStorage={saveToLocalStorage} />}
				{phase === 3 && <Confirmation setPhase={setPhase} phase={phase} onChange={onChange as any} formData={phase3State} saveToLocalStorage={saveToLocalStorage} />}
				{phase === 4 && <ThankYou setPhase={setPhase} />}
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	cartItemsRed: state.cartItemsRed
});

export default connect(mapStateToProps, {})(Checkout);
