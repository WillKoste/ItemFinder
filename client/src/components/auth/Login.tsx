import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser, getCurrentUser} from '../../actions/auth';
import {AuthFormDataTypes} from '../../types/general';

interface LoginProps {
	loginUser: (data: AuthFormDataTypes) => Promise<void>;
	getCurrentUser: () => Promise<void>;
}

const Login: React.FC<LoginProps> = ({loginUser}) => {
	const [formData, setFormData] = useState<AuthFormDataTypes>({
		email: '',
		password: ''
	});
	const {email, password} = formData;

	const onChange = (e: any) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = (e: any) => {
		e.preventDefault();

		if (email === '' || password === '' || (password && password?.length < 6)) {
			alert('Please provide all fields');
		} else {
			loginUser(formData);
		}
	};

	return (
		<div className='login'>
			<div className='container'>
				<h1 className='text-lg pb-4'>Login</h1>

				<form className='form wrapper-lg' onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input type='text' className='form-control' name='email' value={email} onChange={onChange} />
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input type='password' className='form-control' name='password' value={password} onChange={onChange} />
					</div>
					<input type='submit' value='Confirm' className='btn btn-dark' />
				</form>
			</div>
		</div>
	);
};

export default connect(null, {loginUser, getCurrentUser})(Login);