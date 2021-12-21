import React, {useState} from 'react';
import {Contact} from '../../../../types/general';

interface AddContactFormProps {}

const AddContactForm: React.FC<AddContactFormProps> = () => {
	const [formData, setFormData] = useState<Contact>({});

	return (
		<div className='add-contact'>
			<form className='form wrapper-sm'>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input type='text' className='form-control' />
				</div>
			</form>
		</div>
	);
};

export default AddContactForm;
