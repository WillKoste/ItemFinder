import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView, TextInput, TouchableOpacity, Alert} from 'react-native';
import {login} from '../../actions/auth';
import {AuthDataProps} from '../../types/general';
import {styles} from '../../style/App';
import {utils} from '../../style/fragments/utils';
import {formStyles} from '../../style/fragments/form';
const {authHeader} = styles;
const {fullWidth, scrollcontainer, contentContainer, btnTextLight, btnSecondary} = utils;
const {form, formGroup, formLabel, formControl} = formStyles;

interface LoginComponentProps {
	login: (formData: AuthDataProps) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({login}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
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

export default connect(null, {login})(LoginComponent);
