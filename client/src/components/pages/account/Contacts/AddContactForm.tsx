import React, {ChangeEvent, FormEvent, useState} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps, Redirect} from 'react-router-dom';
import {createContact} from '../../../../actions/contacts';
import {NewContactForm} from '../../../../types/forms';
import {stateAbbreviations} from '../../../../utils/sharedData';

interface AddContactFormProps extends RouteComponentProps {
	createContact: (formData: NewContactForm) => void;
}

const AddContactForm: React.FC<AddContactFormProps> = ({history, createContact}) => {
	const [formData, setFormData] = useState<NewContactForm>({
		companyCity: '',
		companyMemberType: '',
		companyName: '',
		companyState: '',
		companyStreetAddress: '',
		companyTitle: '',
		companyZip: '',
		email: '',
		firstName: '',
		lastName: '',
		middleInitial: '',
		phone: '',
		relation: '',
		city: '',
		state: '',
		streetAddress: '',
		zip: '',
		contactType: 'TEST'
	});

	const {companyCity, relation, phone, middleInitial, lastName, firstName, email, companyZip, companyTitle, companyStreetAddress, companyState, companyName, companyMemberType, zip, streetAddress, state, city} = formData;

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createContact(formData);
		return <Redirect to='/account/settings' />;
	};

	const goBack = () => {
		history.goBack();
	};

	return (
		<div className='add-contact container'>
			<h2 className='header-1 mb-1'>New contact information</h2>
			<button className='btn btn-dark mb-3' onClick={goBack}>
				<i className='fas fa-chevron-left'></i> Go Back
			</button>
			<form className='form wrapper-lg' onSubmit={onSubmit}>
				<div className='grid-4 form-section-outline'>
					<h3 className='header-3'>Personal</h3>
					<div className='form-group gc-1-1'>
						<label htmlFor='firstName'>First Name</label>
						<input type='text' className='form-control' name='firstName' value={firstName} onChange={onChange} />
					</div>
					<div className='form-group gc-2-1'>
						<label htmlFor='middleInitial'>Middle Initial</label>
						<input type='text' className='form-control' name='middleInitial' value={middleInitial} onChange={onChange} />
					</div>
					<div className='form-group gc-3-1'>
						<label htmlFor='lastName'>Last Name</label>
						<input type='text' className='form-control' name='lastName' value={lastName} onChange={onChange} />
					</div>
					<div className='form-group gc-1-1'>
						<label htmlFor='phone'>Phone</label>
						<input type='text' className='form-control' name='phone' value={phone} onChange={onChange} />
					</div>
					<div className='form-group gc-2-2'>
						<label htmlFor='email'>Email</label>
						<input type='text' className='form-control' name='email' value={email} onChange={onChange} />
					</div>
					<div className='form-group gc-4-1'>
						<label htmlFor='relation'>Relation</label>
						<input type='text' className='form-control' name='relation' value={relation} onChange={onChange} />
					</div>
					<div className='form-group gc-1-2'>
						<label htmlFor='streetAddress'>Street Address</label>
						<input type='text' className='form-control' name='streetAddress' value={streetAddress} onChange={onChange} />
					</div>
					<div className='form-group gc-3-1'>
						<label htmlFor='city'>City</label>
						<input type='text' className='form-control' name='city' value={city} onChange={onChange} />
					</div>
					<div className='form-group gc-1-1'>
						<label htmlFor='state'>State</label>
						<input type='text' className='form-control' name='state' value={state} onChange={onChange} />
					</div>
					<div className='form-group gc-2-1'>
						<label htmlFor='zip'>Zip Code</label>
						<input type='text' className='form-control' name='zip' value={zip} onChange={onChange} maxLength={5} />
					</div>
				</div>
				<div className='form-grid-3 form-section-outline'>
					<h3 className='header-personal'>Business</h3>
					<div className='form-group gc-1-1'>
						<label htmlFor='companyName'>Company</label>
						<input type='text' className='form-control' name='companyName' value={companyName} onChange={onChange} />
					</div>
					<div className='form-group gc-2-1'>
						<label htmlFor='companyTitle'>Title</label>
						<input type='text' className='form-control' name='companyTitle' value={companyTitle} onChange={onChange} />
					</div>
					<div className='form-group gc-3-1'>
						<label htmlFor='companyMemberType'>Member Type</label>
						<input type='text' className='form-control' name='companyMemberType' value={companyMemberType} onChange={onChange} />
					</div>
					<div className='form-group gc-2-1'>
						<label htmlFor='companyStreetAddress'>Street Address</label>
						<input type='text' className='form-control' name='companyStreetAddress' value={companyStreetAddress} onChange={onChange} />
					</div>
					<div className='form-group gc-3-1'>
						<label htmlFor='companyCity'>City</label>
						<input type='text' className='form-control' name='companyCity' value={companyCity} onChange={onChange} />
					</div>
					<div className='form-group gc-2-1'>
						<label htmlFor='companyState'>State</label>
						<select className='form-control' name='companyState' value={companyState} onChange={onChange}>
							{stateAbbreviations.map((state) => (
								<option value={state} key={state}>
									{state}
								</option>
							))}
						</select>
					</div>
					<div className='form-group gc-3-1'>
						<label htmlFor='companyZip'>Zip Code</label>
						<input type='text' className='form-control' maxLength={5} name='companyZip' value={companyZip} onChange={onChange} />
					</div>
				</div>
				<input type='submit' value='Save' className='btn btn-secondary' />
				<button className='btn btn-dark ml-1' type='button' onClick={goBack}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default connect(null, {createContact})(AddContactForm);
