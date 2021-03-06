import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getContacts} from '../../../../actions/contacts';
import Table from '../../../../Reusable/Table';
import {ContactsReducer, UserReducer} from '../../../../types/general';

interface ContactsListProps {
	getContacts: (limit?: number, offset?: number) => void;
	contactsRed: ContactsReducer;
	authRed: UserReducer;
}

const ContactsList: React.FC<ContactsListProps> = ({getContacts, contactsRed: {contacts, totalContacts}, authRed: {user}}) => {
	const [contactsData, setContactsData] = useState([]);
	const [offsetState, setOffsetState] = useState(0);
	const limitAmt = 10;

	const onClickNext = useCallback(() => {
		setOffsetState(offsetState + limitAmt);
	}, [offsetState]);
	const onClickPrev = useCallback(() => {
		if (offsetState !== 0) {
			setOffsetState(offsetState - limitAmt);
		} else {
			return;
		}
	}, [offsetState]);
	useEffect(() => {
		if (user) {
			getContacts(limitAmt, offsetState);
		}
	}, [offsetState]);
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
				accessor: 'street_address'
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
			<div className='mb-3'>
				<Link to={`/new-contact`} className='btn btn-secondary'>
					New Contact
				</Link>
			</div>
			<Table
				data={data}
				columns={columns}
				onClickPrev={onClickPrev}
				onClickNext={onClickNext}
				clickable={true}
				clickablePath='/contacts'
				prevButtonDisabled={offsetState + limitAmt <= 0}
				nextButtonDisabled={totalContacts !== null ? offsetState + limitAmt >= totalContacts : false}
			/>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	contactsRed: state.contactsRed,
	authRed: state.authRed
});

export default connect(mapStateToProps, {getContacts})(ContactsList);
