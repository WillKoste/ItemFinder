import renderComponent from '../renderComponent';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/auth/Login';

describe('Login', () => {
	const {getByLabelText, getByRole, getByTestId} = renderComponent(<Login />);
	it('should have a link', () => {
		userEvent.type(getByTestId(/email/gi));

		expect(
			getByRole('link', {
				name: /Click here /gi
			})
		).toBeDefined();
	});
});
