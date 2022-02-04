import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FormGroup from '../../../reusable/form/FormGroup';
import {utils} from '../../../../style/fragments/utils';
import {formStyles} from '../../../../style/fragments/form';
import {borderRadius, highlightColor, primaryColor} from '../../../../style/fragments/config';
import Button from '../../../reusable/buttons/Button';
const {form} = formStyles;
const {headerMd, mx2, textPrimary, p2} = utils;

interface SettingsChangePasswordProps {}

const SettingsChangePassword: React.FC<SettingsChangePasswordProps> = () => {
	const [formData, setFormData] = useState({
		oldPassword: '',
		newPassword: '',
		confirmNewPassword: ''
	});

	return (
		<View style={[mx2]}>
			<Text style={[headerMd, textPrimary, {textDecorationLine: 'underline', textDecorationStyle: 'solid', textDecorationColor: primaryColor, marginBottom: 0}]}>My Info</Text>
			<View style={[p2, {borderColor: highlightColor, borderWidth: 2, borderStyle: 'solid', borderRadius: borderRadius, marginBottom: 36}]}>
				<View style={[form]}>
					{/* <FormGroup formData={formData} formValue={'email'} label='O' setFormData={setFormData} /> */}
					<View style={[{flexDirection: 'row'}]}>
						<View style={[{flex: 1, marginRight: 3}]}>
							<FormGroup isPassword formData={formData} setFormData={setFormData} label='Old Password' formValue={'firstName'} />
						</View>
						<View style={[{flex: 1, marginLeft: 3}]}>
							<FormGroup isPassword formData={formData} setFormData={setFormData} label='New Password' formValue={'lastName'} />
						</View>
					</View>
					<View style={[{flexDirection: 'row'}]}>
						<View style={[{flex: 1, marginRight: 3}]}></View>
						<View style={[{flex: 1, marginLeft: 3}]}>
							<FormGroup isPassword formData={formData} setFormData={setFormData} label='Confirm New Password' formValue={'lastName'} />
						</View>
					</View>
					<Button btnText='Update' btnVariant='primary' btnFont={18} />
				</View>
			</View>
		</View>
	);
};

export default SettingsChangePassword;
