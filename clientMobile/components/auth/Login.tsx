import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView, TextInput, TouchableOpacity, Alert} from 'react-native';
import {login} from '../../actions/auth';
import {AuthDataProps} from '../../types/general';
import {deleteToken, getAllTokens, getSessionToken} from '../../utils/sessionUtils';
import {styles} from '../../style/App';
import {utils} from '../../style/fragments/utils';
import {formStyles} from '../../style/fragments/form';
const {authHeader} = styles;
const {innerContainer, scrollOuterContainer, contentContainer, btnTextLight, textLight, btnSecondary} = utils;
const {form, formGroup, formLabel, formControl} = formStyles;

interface LoginProps {
	login: (formData: AuthDataProps) => void;
}

const Login: React.FC<LoginProps> = ({login}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	useEffect(() => {
		// getSessionToken('w7id');
		// deleteToken('w7id');
		getAllTokens();
	}, []);

	const {email, password} = formData;

	const onSubmit = (e: any) => {
		e.preventDefault();
		console.log({hey: 'hey'});

		if (email === '' || password === '') {
			Alert.alert('Data required', 'Please provide your valid email and password');
		} else {
			login(formData);
			// console.log('No issues yet');
		}
	};

	return (
		<ScrollView style={scrollOuterContainer} contentContainerStyle={contentContainer}>
			<View style={innerContainer}>
				<Text style={authHeader}>Login Page</Text>
				<View style={form}>
					<View style={formGroup}>
						<Text style={formLabel}>Email</Text>
						<TextInput style={formControl} onChangeText={(e) => setFormData({...formData, email: e})} />
					</View>
					<View style={formGroup}>
						<Text style={formLabel}>Password</Text>
						<TextInput style={formControl} secureTextEntry onChangeText={(e) => setFormData({...formData, password: e})} />
					</View>
					<TouchableOpacity style={btnSecondary} activeOpacity={0.9} onPress={onSubmit}>
						<Text style={btnTextLight}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default connect(null, {login})(Login);
