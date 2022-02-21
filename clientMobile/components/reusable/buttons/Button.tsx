import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonVarient, determineBtnStyling} from '../../../utils/determineBtnStyling';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonProps {
	btnText: string;
	btnVariant?: ButtonVarient;
	btnWidth?: string;
	btnFont?: number;
	btnBorderRadius?: number;
	onPress?: any;
	iconProps: {
		name?: string;
		size?: number;
		marginRight?: number;
		color?: string;
		solid?: boolean;
	};
}

const Button: React.FC<ButtonProps> = ({btnVariant, btnText, onPress, btnWidth = '100%', btnFont = 16, btnBorderRadius = 10, iconProps: {name, color = '#332', solid = true, marginRight = 6, size = 18}}) => {
	const {variant, variantText} = determineBtnStyling(btnVariant);

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[variant, {width: btnWidth, borderRadius: btnBorderRadius, flexDirection: 'row'}]}>
			{name ? <Icon name={name} style={{marginRight}} color={color} size={size} solid={solid} /> : null}
			<Text style={[variantText, {fontSize: btnFont}]}>{btnText}</Text>
		</TouchableOpacity>
	);
};

export default Button;
