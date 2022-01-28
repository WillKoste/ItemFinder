import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {ContactsReducer, UserReducer} from '../../../../types/redux';
import {getContacts} from '../../../../actions/contacts';
import ContactItem from './ContactItem';
import SearchBar from '../../../reusable/SearchBar';
import {utils} from '../../../../style/fragments/utils';
const {fullWidth, container, contentContainer, moduleScrollcontainer} = utils;

interface ContactsProps {
	contactsRed: ContactsReducer;
	authRed: UserReducer;
	getContacts: (originId: number, limit: number) => void;
}

const Contacts: React.FC<ContactsProps> = ({contactsRed: {contacts, loadingContacts}, getContacts, authRed: {user}}) => {
	useEffect(() => {
		if (user) {
			getContacts(user.id, 1000);
		}
	}, []);

	return (
		<View style={container}>
			<View style={fullWidth}>
				<SearchBar />
				<ScrollView contentContainerStyle={contentContainer} style={{...moduleScrollcontainer, maxHeight: '90%'}}>
					{loadingContacts ? <Text>Loading...</Text> : contacts.length > 0 ? contacts.map((con) => <ContactItem contact={con} />) : null}
				</ScrollView>
			</View>
		</View>
	);
};

const mapStateToProps = (state: any) => ({
	contactsRed: state.contactsRed,
	authRed: state.authRed
});

export default connect(mapStateToProps, {getContacts})(Contacts);
