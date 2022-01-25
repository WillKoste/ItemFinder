import React from 'react';
import ContactsList from './Contacts/ContactsList';
import Partners from './Partners/Partners';
import CreditCards from './CreditCards/CreditCards';

interface AccountRightProps {
	section: number;
}

const AccountRight: React.FC<AccountRightProps> = ({section}) => {
	return (
		<div className='account-right'>
			{section === 1 && <ContactsList />}
			{section === 2 && <Partners />}
			{section === 3 && <CreditCards />}
		</div>
	);
};

export default AccountRight;
