import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {borderRadius, highlightColor, primaryColor} from '../../../../style/fragments/config';
import {utils} from '../../../../style/fragments/utils';
import {formStyles} from '../../../../style/fragments/form';
import FormGroup from '../../../reusable/form/FormGroup';
import Button from '../../../reusable/buttons/Button';
import {UserReducer} from '../../../../types/redux';
const {headerMd, mx2, textPrimary, p2} = utils;
const {form} = formStyles;

interface SettingsMyInfoProps {
	authRed: UserReducer;
}

const SettingsMyInfo: React.FC<SettingsMyInfoProps> = ({authRed: {user, token}}) => {
	const [formData, setFormData] = useState({
		email: token?.email2,
		firstName: '',
		lastName: ''
	});
	const [updateData, setUpdateData] = useState();
	if (token) {
		console.log(token.id);
	}
	console.log(formData);

	return (
		<View style={[mx2]}>
			<Text style={[headerMd, textPrimary, {textDecorationLine: 'underline', textDecorationStyle: 'solid', textDecorationColor: primaryColor, marginBottom: 0}]}>My Info</Text>
			<View style={[p2, {borderColor: highlightColor, borderWidth: 2, borderStyle: 'solid', borderRadius: borderRadius, marginBottom: 36}]}>
				<View style={[form]}>
					<FormGroup formData={formData} formValue={'email'} label='Email' setFormData={setFormData} />
					<View style={[{flexDirection: 'row'}]}>
						<View style={[{flex: 1, marginRight: 3}]}>
							<FormGroup formData={formData} setFormData={setFormData} label='First Name' formValue={'firstName'} />
						</View>
						<View style={[{flex: 1, marginLeft: 3}]}>
							<FormGroup formData={formData} setFormData={setFormData} label='Last Name' formValue={'lastName'} />
						</View>
					</View>
					<Button btnText='Update' btnFont={18} />
				</View>
			</View>
		</View>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps)(SettingsMyInfo);
