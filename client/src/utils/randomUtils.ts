export const formatCurrency = (amount: any) => {
	const money = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
	return money;
};

export const formatExpiration = (value: string) => {
	let newValue = value.replace(/[^\d]/, '');

	if (newValue.length === 4) {
		console.log({hmm: newValue.replace(/(\d{2})(\d{2})/, '$1-$2')});
		return newValue.replace(/(\d{2})(\d{2})/, '$1/$2');
	}
};

export const formatCreditCard = (cardNum: string) => {
	let newValue = cardNum.replace(/[^\d]/, '');

	if (newValue.length === 4) {
		return newValue.replace(/(\d{4})/, '$1 ');
	} else if (newValue.length === 8) {
		return newValue.replace(/(\d{4})(\d{4})/, '$1 $2 ');
	} else if (newValue.length === 12) {
		return newValue.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 ');
	} else if (newValue.length === 16) {
		return newValue.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
	}
};
