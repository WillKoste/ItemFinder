import {utils} from '../style/fragments/utils';
const {btnDanger, btnDark, btnPrimary, btnHighlight, btnLight, btnSecondary, btnSuccess, btnTextDark, btnTextLight} = utils;

export type ButtonVarient = 'primary' | 'secondary' | 'highlight' | 'light' | 'dark' | 'success' | 'danger';

export const determineBtnStyling = (variant?: ButtonVarient): {variant: any; variantText: any} => {
	switch (variant) {
		case 'primary':
			return {
				variant: btnPrimary,
				variantText: btnTextLight
			};
		case 'secondary':
			return {
				variant: btnSecondary,
				variantText: btnTextDark
			};
		case 'highlight':
			return {
				variant: btnHighlight,
				variantText: btnTextDark
			};
		case 'light':
			return {
				variant: btnLight,
				variantText: btnTextDark
			};
		case 'dark':
			return {
				variant: btnDark,
				variantText: btnTextLight
			};
		case 'success':
			return {
				variant: btnSuccess,
				variantText: btnTextLight
			};
		case 'danger':
			return {
				variant: btnDanger,
				variantText: btnTextLight
			};
		default:
			return {
				variant: btnPrimary,
				variantText: btnTextLight
			};
	}
};
