import {ProductsOptions, PurchasesOptions} from '../types/redux';

export const clientQueryOptions = (options: PurchasesOptions | ProductsOptions) => {
	const optionsKeys = Object.keys(options);
	const mappedQueryArr = optionsKeys.map((opkey) => {
		return `${opkey}=${(options as any)[opkey]}`;
	});
	const joinedSecondHalf = mappedQueryArr.join('&');
	const finalStr = `?${joinedSecondHalf}`;
	return finalStr;
};
