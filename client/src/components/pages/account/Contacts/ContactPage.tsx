import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {getContact} from '../../../../actions/contacts';
import {ContactsReducer} from '../../../../types/general';

interface ContactPageProps extends RouteComponentProps<{contactId: string}> {
	contactsRed: ContactsReducer;
	getContact: (contactId: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({match, contactsRed: {loadingContact, contact}, getContact}) => {
	useEffect(() => {
		getContact(match.params.contactId);
	}, []);

	return (
		<div className='container'>
			{contact ? (
				<Fragment>
					<h2 className='header-2 mb-2'>
						{contact.first_name} {contact.last_name}
					</h2>
					<div className='contact-grid'>
						<p>
							<strong>Street Address: </strong>
							{contact.street_address}
						</p>
					</div>
				</Fragment>
			) : null}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	contactsRed: state.contactsRed
});

export default connect(mapStateToProps, {getContact})(ContactPage);
