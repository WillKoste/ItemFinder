import {address, finance, lorem} from 'faker';
describe('Checkout', () => {
	beforeEach(() => {
		cy.visit('/login');
		cy.get('input[name="email"]').type('doobie@gmail.com');
		cy.get('input[name="password"]').type('123456');
		cy.get('input[type="submit"]').click();
	});

	it('should go through the checkout process', () => {
		cy.contains(/tuna/i).click();
		cy.get('select[name="item-qty"]').select('2');
		// cy.get('option[value="4"]').click();
		cy.contains(/add to cart/gi).click();
		cy.contains(/next step/i).click();
		cy.get('input[name="shippingAddress"]').type(address.streetAddress(true));
		cy.get('input[name="shippingCity"]').type(address.cityName());
		cy.get('select[name="shippingState"]').select('SC');
		cy.get('input[name="shippingZipcode"]').type(address.zipCodeByState('SC'));
		cy.contains(/next step/i).click();
		cy.get('[type="checkbox"]').first().check();
		cy.get('textarea[name="shippingNotes"]').type(lorem.sentences(4));
		cy.contains(/submit order/gi).click();
	});
});
