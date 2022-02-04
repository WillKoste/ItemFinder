import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {utils} from '../../../style/fragments/utils';
import {ButtonVarient, determineBtnStyling} from '../../../utils/determineBtnStyling';
const {btnDanger, btnDark, btnPrimary, btnHighlight, btnLight, btnSecondary, btnSuccess, btnTextDark, btnTextLight} = utils;

interface ButtonProps {
	btnText: string;
	btnVariant?: ButtonVarient;
	btnWidth?: string;
	btnFont?: number;
}

const Button: React.FC<ButtonProps> = ({btnVariant, btnText, btnWidth = '100%', btnFont = 16}) => {
	const {variant, variantText} = determineBtnStyling(btnVariant);

	return (
		<TouchableOpacity activeOpacity={0.9} style={[variant, {width: btnWidth}]}>
			<Text style={[variantText, {fontSize: btnFont}]}>{btnText}</Text>
		</TouchableOpacity>
	);
};

export default Button;
