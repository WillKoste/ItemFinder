export const getPastMonths = (monthsLength: number = 6) => {
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const currentMonth = new Date().getMonth() + 1;
	const currentYear = new Date().getFullYear();

	console.log(-(52 / 12) >> 0);

	const monthArray = Array.from({length: monthsLength}, (_, index) => {
		const numberIWant = -(index / 12) >> 0;

		console.log({numberIWant, index: index});

		if (index > 0) {
			return {monthName: monthNames[(currentMonth - index) % 12], monthNumber: `${(currentMonth - index) % 12}`, currentYear: currentYear + numberIWant};
		} else {
			return 'skip';
		}
	});
	return monthArray;
};
