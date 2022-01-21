import React, {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';
import {connect} from 'react-redux';
import {Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, FormLabel, Input, InputLabel} from '@mui/material';
import {addNewCard} from '../../actions/cards';
import {CreditCardForm} from '../../types/forms';
import swal2 from 'sweetalert2';
import {formatCreditCard} from '../../utils/randomUtils';
import DatePicker from 'react-datepicker';

interface MyModalProps {
	modalOpen: boolean;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
	addNewCard: (formData: CreditCardForm) => void;
}

const MyModal: React.FC<MyModalProps> = ({modalOpen, setModalOpen, addNewCard}) => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		cardNumber: '',
		expDate: '',
		securityCode: ''
	});

	const {firstName, lastName, cardNumber, expDate, securityCode} = formData;

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};
	console.log({formData});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		swal2.fire({text: JSON.stringify(formData)});
	};

	const onSubmitButton = () => {
		// swal2.fire({text: 'button was clicked', confirmButtonText: 'WTF', cancelButtonText: 'YOLO', showCancelButton: true});
		swal2.fire({text: 'Button was clicked'});
	};

	return (
		<Dialog PaperProps={{style: {maxWidth: '1000px', width: '1000px', height: '700px'}}} open={modalOpen} onClose={() => setModalOpen(false)} aria-describedby='alert-dialog-slide-description' className='modal'>
			<DialogTitle>New Card Details</DialogTitle>
			<DialogContent style={{paddingBlock: '0'}}>
				<form className='form mt-3 modal-form' onSubmit={onSubmit}>
					<div className='form-group'>
						<InputLabel htmlFor='IDK'>First Name</InputLabel>
						<input type='text' className='form-control' name='firstName' value={firstName} onChange={onChange} />
					</div>
					<div className='form-group'>
						<InputLabel>Last Name</InputLabel>
						<input type='text' className='form-control' name='lastName' value={lastName} onChange={onChange} />
					</div>
					<div className='form-group form-group-spread'>
						<InputLabel>Credit Card Number</InputLabel>
						<input type='text' className='form-control' maxLength={19} name='cardNumber' value={formatCreditCard(cardNumber)} onChange={onChange} />
					</div>
					<div className='form-group'>
						<InputLabel>Expiration Date</InputLabel>
						{/* <input type='text' className='form-control' /> */}
						{/* <Input inputProps={{}} type='date' className='form-control' /> */}
						{/* <DatePicker
							// value={expDate}
							// className='form-control'
							// dateFormat={'MM-YY'}
							onChange={(date) => {
								setFormData({...formData, expDate: date?.getDate() as any});
								console.log({formData});
							}}
						/> */}
						<DatePicker className='form-control' selected={expDate === '' ? null : (expDate as any)} value={expDate === '' ? null : (expDate as any)} onChange={(date) => setFormData({...formData, expDate: date as any})} />
					</div>
					<div className='form-group'>
						<InputLabel>Security Code</InputLabel>
						<input type='text' className='form-control' />
					</div>
					<div className='form-group'></div>
				</form>
			</DialogContent>
			<DialogActions>
				<button onClick={onSubmitButton} className='btn btn-dark'>
					Save
				</button>
				<button className='btn btn-danger' onClick={() => setModalOpen(false)}>
					Cancel
				</button>
			</DialogActions>
		</Dialog>
	);
};

export default connect(null, {addNewCard})(MyModal);
