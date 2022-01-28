import moment from 'moment';

export const repeatArray = (arr: any[], repeats: number) => {
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let arr1: any = [];
	return arr1.concat(...Array.from({length: repeats}, () => arr));
};

export const getPastMonths = (monthsLength: number = 6) => {
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const currentMonth = new Date().getMonth() + 1;
	const currentYear = new Date().getFullYear();
	const reverseMonths = monthNames.reverse();

	const monthArray = Array.from({length: monthsLength}, (_, index) => {
		const numberIWant = -(index / 12) >> 0;
		const repeatedMonths = repeatArray(reverseMonths, -numberIWant);
		const monthNameCalc = repeatedMonths[(currentMonth + index) % 12];
		const monthNumber = `${(currentMonth - index) % 12}`;
		const year = currentYear + numberIWant;

		if (index > 0) {
			if (monthNameCalc === undefined) {
				const currentYearMonth = new Date(`${+monthNumber}-01-${year}`);
				return {monthName: moment(currentYearMonth).format('MMMM'), monthNumber, year};
			} else {
				return {monthName: monthNameCalc, monthNumber, year};
			}
		} else {
			const currentDate = new Date();
			return {monthName: moment(currentDate).format('MMMM'), monthNumber, year};
		}
	});
	return monthArray;
};
