import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

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
	console.log({email});

	return (
		<View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
			<Text>Register Page</Text>
			<View>
				<View>
					<Text>Email</Text>
					<TextInput style={{backgroundColor: 'red', padding: 6}} value={email} onChangeText={(e: string) => setFormData({...formData, email: e})} />
				</View>
			</View>
		</View>
	);
};

export default Register;
