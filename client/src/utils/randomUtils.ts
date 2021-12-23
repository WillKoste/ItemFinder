export const formatCurrency = (amount: any) => {
	const money = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
	return money;
};
