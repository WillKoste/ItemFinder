import React, {useState, useEffect, useMemo} from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../../../../actions/contacts';
import Table from '../../../../Reusable/Table';
import {ContactsReducer} from '../../../../types/general';

interface ContactsListProps {
	getContacts: (limit?: number, offset?: number) => void;
	contactsRed: ContactsReducer;
}

const ContactsList: React.FC<ContactsListProps> = ({getContacts, contactsRed: {contacts}}) => {
	const [contactsData, setContactsData] = useState([]);
	useEffect(() => {
		getContacts(10, 0);
	}, []);
	useEffect(() => {
		setContactsData(contacts as any);
	}, [contacts]);

	const data = useMemo(() => contactsData, [contactsData]);

	const columns = useMemo(
		() => [
			{
				id: 1,
				header: 'First Name',
				accessor: 'first_name'
			},
			{
				id: 2,
				header: 'Last Name',
				accessor: 'last_name'
			},
			{
				id: 3,
				header: 'Address',
				accessor: 'address'
			},
			{
				id: 4,
				header: 'Contact Type',
				accessor: 'contact_type'
			},
			{
				id: 5,
				header: 'Created On',
				accessor: 'created_at'
			}
		],
		[]
	);

	return (
		<div>
			<h2 className='account-header'>Contacts</h2>
			<Table data={data} columns={columns} />
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	contactsRed: state.contactsRed
});

export default connect(mapStateToProps, {getContacts})(ContactsList);
