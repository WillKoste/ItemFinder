import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {utils} from '../../style/fragments/utils';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {searchContainer, searchIcon} = utils;

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
	const [searchVal, setSearchVal] = useState('');
	console.log('hey');

	return (
		<View style={searchContainer}>
			<TextInput placeholder='Search...' value={searchVal} onChangeText={(e) => setSearchVal(e)} />
			<Icon name='search' style={searchIcon} size={17} />
		</View>
	);
};

export default SearchBar;
