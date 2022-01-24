import React, {Dispatch, SetStateAction} from 'react';
import PrevNext from '../../../../Reusable/Buttons/PrevNext';
import {CheckoutForm} from '../../../../types/forms';
import CardForm from './CardForm';
import SelectCard from './SelectCard';

interface PaymentDetailsProps {
	setPhase: Dispatch<SetStateAction<number>>;
	setFormData: Dispatch<SetStateAction<any>>;
	phase: number;
	formData: CheckoutForm;
	onChange: () => void;
	saveToLocalStorage: () => void;
	needCardInfo: boolean;
	setNeedCardInfo: Dispatch<SetStateAction<boolean>>;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({setPhase, phase, formData, onChange, saveToLocalStorage, setFormData, setNeedCardInfo, needCardInfo}) => {
	return (
		<div>
			<SelectCard onChange={onChange} formData={formData} setFormData={setFormData} needCardInfo={needCardInfo} setNeedCardInfo={setNeedCardInfo} />
			<button
				className='btn btn-secondary my-2'
				onClick={() => {
					setFormData({
						...formData,
						cardFirstName: '',
						cardLastName: '',
						cardNumber: '',
						saveCard: 'false',
						securityCode: '',
						expirationDate: ''
					});
					setNeedCardInfo(!needCardInfo);
				}}
			>
				Use another card
			</button>
			{needCardInfo ? <CardForm formData={formData} setFormData={setFormData} onChange={onChange} /> : null}
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
