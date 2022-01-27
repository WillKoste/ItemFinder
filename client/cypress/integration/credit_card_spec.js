describe('Credit card', () => {
	beforeEach(() => {
		cy.visit('/login');
		cy.get('input[name="email"]').type('doobie@gmail.com');
		cy.get('input[name="password"]').type('123456');
		cy.get('input[type="submit"]').click();
		// cy.get('form[class="form wrapper-lg m-auto"]').submit();
	});

	// it('A new credit card is added', () => {
	// 	cy.visit('/account/settings');
	// 	cy.contains('Credit Cards').click();
	// 	cy.contains('Add Credit Card').click();
	// 	cy.get('input[name="first_name"]').type('Simba');
	// 	cy.get('input[name="last_name"]').type('McLovin');
	// 	cy.get('input[name="card_number"]').type(`1215 8421 5421 ${Math.floor(Math.random() * 9)}47${Math.floor(Math.random() * 9)}`);
	// 	cy.get('input[name="exp_date"]').click();
	// 	cy.get('div[class="react-datepicker__month-text react-datepicker__month-7"]').click();
	// 	cy.get('input[name="security_code"]').type('485');
	// 	cy.contains(/save/i).click();
	// });
});
