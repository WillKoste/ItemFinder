import React, {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';
import {connect} from 'react-redux';
import {Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, FormLabel, Input, InputLabel, dividerClasses} from '@mui/material';
import {addNewCard} from '../../actions/cards';
import {CreditCardForm} from '../../types/forms';
import swal2 from 'sweetalert2';
import {formatCreditCard, formatExpiration} from '../../utils/randomUtils';
import DatePicker from 'react-datepicker';

interface MyModalProps {
	modalOpen: boolean;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
	addNewCard: (formData: CreditCardForm) => void;
}

const MyModal: React.FC<MyModalProps> = ({modalOpen, setModalOpen, addNewCard}) => {
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		card_number: '',
		exp_date: '',
		security_code: ''
	});

	const {first_name, last_name, card_number, exp_date, security_code} = formData;

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};
	console.log({formData});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addNewCard(formData);
		setFormData({
			first_name: '',
			last_name: '',
			card_number: '',
			exp_date: '',
			security_code: ''
		});
	};

	const onSubmitButton = () => {
		addNewCard({
			first_name,
			last_name,
			card_number,
			exp_date: formatExpiration(exp_date),
			security_code
		});
		setFormData({
			first_name: '',
			last_name: '',
			card_number: '',
			exp_date: '',
			security_code: ''
		});
	};

	const onCloseModal = () => {
		setModalOpen(false);
		setFormData({
			first_name: '',
			last_name: '',
			card_number: '',
			exp_date: '',
			security_code: ''
		});
	};

	return (
		<Dialog PaperProps={{style: {maxWidth: '1000px', width: '1000px', height: '700px'}}} open={modalOpen} onClose={onCloseModal} aria-describedby='alert-dialog-slide-description' className='modal'>
			<DialogTitle>New Card Details</DialogTitle>
			<DialogContent style={{paddingBlock: '0'}}>
				<form className='form mt-3 modal-form' onSubmit={onSubmit}>
					<div className='form-group'>
						<InputLabel htmlFor='IDK'>First Name</InputLabel>
						<input type='text' className='form-control' name='first_name' value={first_name} onChange={onChange} />
					</div>
					<div className='form-group'>
						<InputLabel>Last Name</InputLabel>
						<input type='text' className='form-control' name='last_name' value={last_name} onChange={onChange} />
					</div>
					<div className='form-group form-group-spread'>
						<InputLabel>Credit Card Number</InputLabel>
						<input type='text' className='form-control' maxLength={19} name='card_number' value={formatCreditCard(card_number)} onChange={onChange} />
					</div>
					<div className='form-group'>
						<InputLabel>Expiration Date</InputLabel>
						<DatePicker
							className='form-control'
							dateFormat={'MM/yy'}
							showMonthYearPicker
							selected={exp_date === '' ? null : (exp_date as any)}
							value={exp_date === '' ? null : (exp_date as any)}
							onChange={(date) => setFormData({...formData, exp_date: date as any})}
						/>
					</div>
					<div className='form-group'>
						<InputLabel>Security Code</InputLabel>
						<input type='text' className='form-control' name='security_code' value={security_code} onChange={onChange} maxLength={3} />
					</div>
					<div className='form-group'></div>
				</form>
			</DialogContent>
			<DialogActions>
				<button onClick={onSubmitButton} className='btn btn-dark'>
					Save
				</button>
				<button className='btn btn-danger' onClick={onCloseModal}>
					Cancel
				</button>
			</DialogActions>
		</Dialog>
	);
};

export default connect(null, {addNewCard})(MyModal);
