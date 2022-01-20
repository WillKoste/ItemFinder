const getDigits = () => {
	const fakeCard = '1234 5678 9121 s5d4';

	const lastFourDigits = fakeCard.slice(fakeCard.length - 4, fakeCard.length);
	console.log({lastFourDigits});
};

getDigits();
