import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {utils} from '../../style/fragments/utils';
const {searchContainer} = utils;

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
	const [searchVal, setSearchVal] = useState('');
	console.log('hey');

	return (
		<View style={searchContainer}>
			<TextInput placeholder='Search...' value={searchVal} onChangeText={(e) => setSearchVal(e)} />
		</View>
	);
};

export default SearchBar;
