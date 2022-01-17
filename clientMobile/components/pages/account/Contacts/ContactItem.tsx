import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Contact} from '../../../../types/redux';
import {styles} from '../../../../style/App';
const {contactItem, contactItemText} = styles;

interface ContactItemProps {
	contact: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({contact}) => {
	return (
		<TouchableOpacity activeOpacity={0.8} key={contact.id} style={contactItem}>
			<Text style={{...contactItemText, marginRight: 6}}>{contact.first_name}</Text>
			<Text style={contactItemText}>{contact.last_name}</Text>
		</TouchableOpacity>
	);
};

export default ContactItem;
