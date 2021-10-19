import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {styles} from '../../style/App';
const {innerContainer, scrollOuterContainer, authHeader, contentContainer, form, formLabel, formGroup, formControl} = styles;

interface RegisterProps {}

interface formDataProps {
	email: string;
	password: string;
	password2: string;
}

const Register: React.FC<RegisterProps> = () => {
	const [formData, setFormData] = useState<formDataProps>({
		email: '',
		password: '',
		password2: ''
	});

	const {email, password, password2} = formData;

	return (
		<ScrollView style={scrollOuterContainer} contentContainerStyle={contentContainer}>
			<View style={innerContainer}>
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
				</View>
			</View>
		</ScrollView>
	);
};

export default Register;
