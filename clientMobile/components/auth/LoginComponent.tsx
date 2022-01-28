import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView, TextInput, TouchableOpacity, Alert} from 'react-native';
import {login} from '../../actions/auth';
import {AuthDataProps} from '../../types/general';
import {deleteToken, getAllTokens, getSessionToken} from '../../utils/sessionUtils';
import {styles} from '../../style/App';
import {utils} from '../../style/fragments/utils';
import {formStyles} from '../../style/fragments/form';
import {getProducts} from '../../actions/products';
const {authHeader} = styles;
const {fullWidth, scrollcontainer, contentContainer, btnTextLight, textLight, btnSecondary} = utils;
const {form, formGroup, formLabel, formControl} = formStyles;

interface LoginComponentProps {
	login: (formData: AuthDataProps) => void;
	getProducts: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({login, getProducts}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	useEffect(() => {
		// getSessionToken('w7id');
		// deleteToken('w7id');
		// getAllTokens();
		getProducts();
	}, []);

	const {email, password} = formData;

	const onSubmit = (e: any) => {
		e.preventDefault();
		console.log({hey: 'hey'});

		if (email === '' || password === '') {
			Alert.alert('Data required', 'Please provide your valid email and password');
		} else {
			login(formData);
		}
	};

	return (
		<ScrollView style={scrollcontainer} contentContainerStyle={contentContainer}>
			<Text style={authHeader}>Login Page</Text>
			<View style={fullWidth}>
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

export default connect(null, {login, getProducts})(LoginComponent);
