import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, TextInput} from 'react-native';
import {formStyles} from '../../../style/fragments/form';
const {form, formControl, formGroup, formLabel} = formStyles;

interface FormGroupProps {
	label: string;
	formData: any;
	setFormData: Dispatch<SetStateAction<any>>;
	formValue: string;
	isPassword?: boolean;
	disabled?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({label, formData, setFormData, formValue, isPassword, disabled}) => {
	return (
		<View style={[formGroup]}>
			<Text style={[formLabel]}>{label}</Text>
			<TextInput secureTextEntry={isPassword} editable={!disabled} selectTextOnFocus={!disabled} style={[formControl]} onChangeText={(e) => setFormData({...formData, [formValue]: e})} defaultValue={formData[formValue]} />
		</View>
	);
};

export default FormGroup;
