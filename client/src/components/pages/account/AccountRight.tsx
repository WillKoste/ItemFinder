import React from 'react';
import Favorites from './Favorites/Favorites';
import AddContactForm from './Contacts/AddContactForm';
import ContactsList from './Contacts/ContactsList';
import Partners from './Partners/Partners';

interface AccountRightProps {
	section: number;
}

const AccountRight: React.FC<AccountRightProps> = ({section}) => {
	return (
		<div className='account-right'>
			{section === 1 && <ContactsList />}
			{section === 2 && <Partners />}
			{section === 3 && <Favorites />}
		</div>
	);
};

export default AccountRight;
