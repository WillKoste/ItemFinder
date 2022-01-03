import React from 'react';
import Favorites from './Favorites/Favorites';
import AddContactForm from './Contacts/AddContactForm';
import ContactsList from './Contacts/ContactsList';
import Partners from './Partners/Partners';
import MyOrders from './MyOrders/MyOrders';

interface AccountRightProps {
	section: number;
}

const AccountRight: React.FC<AccountRightProps> = ({section}) => {
	return (
		<div className='account-right'>
			{section === 1 && <ContactsList />}
			{section === 2 && <Partners />}
			{section === 3 && <Favorites />}
			{section === 4 && <MyOrders />}
		</div>
	);
};

export default AccountRight;
