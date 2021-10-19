import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../../style/App';
import {login} from '../../actions/auth';
import {AuthDataProps} from '../../types/general';
const {innerContainer, scrollOuterContainer, authHeader, contentContainer, form, formGroup, formLabel, formControl, btn, textWhite} = styles;

interface LoginProps {
	login: (formData: AuthDataProps) => void;
}

const Login: React.FC<LoginProps> = ({login}) => {
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
					<TouchableOpacity style={btn} activeOpacity={0.9} onPress={onSubmit}>
						<Text style={textWhite}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default connect(null, {login})(Login);
