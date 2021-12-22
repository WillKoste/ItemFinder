import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/auth';
import {AuthFormDataTypes, UserReducer} from '../../types/general';
import {Tooltip} from 'react-bootstrap';

interface RegisterProps {
	registerUser: (data: AuthFormDataTypes) => void;
	authRed: UserReducer;
}

const Register: React.FC<RegisterProps> = ({registerUser, authRed: {isAuthenticated}}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password2: '',
		phone: ''
	});

	const {email, password, password2, phone} = formData;

	const onChange = (e: any) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = (e: any) => {
		e.preventDefault();
		if (email === '' || phone === '' || password === '' || password2 === '') {
			alert('Please provide all fields');
		} else if (password !== password2) {
			alert('Passwords do not match, please try again');
		} else {
			console.log(formData);
			registerUser(formData);
		}
	};

	if (isAuthenticated) {
		return <Redirect to='/home' />;
	}

	return (
		<div className='register'>
			<div className='container'>
				<h1 className='text-lg pb-4'>Register</h1>
				<form className='form wrapper-lg m-auto' onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input type='text' className='form-control' name='email' value={email} onChange={onChange} />
					</div>
					<div className='form-group'>
						<label htmlFor='phone'>Phone</label>
						<input type='text' className='form-control' name='phone' value={phone} onChange={onChange} />
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input type='password' className='form-control' name='password' value={password} onChange={onChange} />
					</div>
					<div className='form-group'>
						<label htmlFor='password2'>Confirm Password</label>
						<input type='password' name='password2' className='form-control' value={password2} onChange={onChange} />
					</div>
					<input type='submit' value='Sign Up' className='btn btn-dark' />
				</form>
				<p>
					Already have an account?{' '}
					<Link to='/login' className='text-secondary'>
						Click here to login.
					</Link>
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps, {registerUser})(Register);
