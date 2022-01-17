import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import Contacts from './Contacts/Contacts';
import Partners from './Partners/Partners';
import MyFavorites from './MyFavorites/MyFavorites';
import MyOrders from './MyOrders/MyOrders';

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
	const [showDropdown, setShowdropdown] = useState(false);
	const [tabs, setTabs] = useState([
		{
			id: 1,
			label: 'Contacts',
			value: 'Contacts',
			icon: () => <Icon name='address-book' size={20} style={{marginRight: 4}} />
		},
		{
			id: 2,
			label: 'Partners',
			value: 'Partners',
			icon: () => <Icon name='briefcase' size={20} style={{marginRight: 4}} />
		},
		{
			id: 3,
			label: 'Favorites',
			value: 'Favorites',
			icon: () => <Icon name='heart' size={20} style={{marginRight: 4}} />
		},
		{
			id: 4,
			label: 'My Orders',
			value: 'My Orders',
			icon: () => <Icon name='receipt' size={20} style={{marginRight: 4}} />
		}
	]);
	const [val, setVal] = useState('Contacts');
	console.log({val});

	return (
		<View>
			<DropDownPicker setValue={setVal as any} open={showDropdown} setOpen={setShowdropdown} items={tabs} setItems={setTabs} value={val} />
			{val === 'Contacts' && <Contacts />}
			{val === 'Partners' && <Partners />}
			{val === 'Favorites' && <MyFavorites />}
			{val === 'My Orders' && <MyOrders />}
		</View>
	);
};

export default Account;
