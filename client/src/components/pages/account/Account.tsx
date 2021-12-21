import React, {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createContact} from '../../../actions/contacts';
import {Contact} from '../../../types/general';
import AccountLeft from './AccountLeft';
import AccountRight from './AccountRight';

interface AccountProps {
	getContacts: () => void;
	createContact: (formData: Contact) => void;
}

const Account: React.FC<AccountProps> = ({createContact}) => {
	const [section, setSection] = useState(1);

	return (
		<div className='account'>
			<AccountLeft setSection={setSection} section={section} />
			<AccountRight section={section} />
		</div>
	);
};

export default connect(null, {createContact})(Account);
