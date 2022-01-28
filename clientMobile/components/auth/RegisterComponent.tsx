import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../../style/App';
import {formStyles} from '../../style/fragments/form';
import {utils} from '../../style/fragments/utils';
import {register} from '../../actions/auth';
const {form, formLabel, formGroup, formControl} = formStyles;
const {fullWidth, scrollcontainer, contentContainer, btnSecondary, btnTextLight} = utils;
const {authHeader} = styles;

interface FormDataProps {
	email: string;
	password: string;
	password2: string;
}

interface RegisterProps {
	register: (formData: FormDataProps) => void;
}

const Register: React.FC<RegisterProps> = ({register}) => {
	const [formData, setFormData] = useState<FormDataProps>({
		email: '',
		password: '',
		password2: ''
	});

	const {email, password, password2} = formData;

	const onSubmit = () => {
		if (email !== '' && password !== '' && password2 !== '') {
			if (password2 !== password) {
				console.log('Passwords do ,not match, please try again');
				return;
			} else {
				register(formData);
			}
		} else {
			console.log('Please provide all fields');
			return;
		}
	};

	return (
		<ScrollView style={scrollcontainer} contentContainerStyle={contentContainer}>
			<View style={fullWidth}>
				<Text style={authHeader}>Register</Text>
				<View style={form}>
					<View style={formGroup}>
						<Text style={formLabel}>Email</Text>
						<TextInput value={email} style={formControl} onChangeText={(e) => setFormData({...formData, email: e})} />
					</View>
					<View style={formGroup}>
						<Text style={formLabel}>Password</Text>
						<TextInput value={password} style={formControl} onChangeText={(e) => setFormData({...formData, password: e})} secureTextEntry />
					</View>
					<View style={formGroup}>
						<Text style={formLabel}>Confirm password</Text>
						<TextInput value={password2} style={formControl} onChangeText={(e) => setFormData({...formData, password2: e})} secureTextEntry />
					</View>
					<TouchableOpacity style={btnSecondary} activeOpacity={0.9} onPress={onSubmit}>
						<Text style={btnTextLight}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default connect(null, {register})(Register);
