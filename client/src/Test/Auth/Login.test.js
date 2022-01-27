import renderComponent from '../renderComponent';
import {getByRole, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/auth/Login';

describe('Login', () => {
	test('has an email input', () => {
		const {getByTestId} = renderComponent(<Login />);
		userEvent.type(getByTestId(/email/i), 'doobiekoste@gmail.com');
		expect(getByTestId(/email/i)).toHaveValue('doobiekoste@gmail.com');
	});
});
