export interface CheckoutForm {
	cardFirstName?: string;
	cardLastName?: string;
	cardNumber?: string;
	expirationDate?: string;
	securityCode?: string;
	shippingAddress?: string;
	shippingCity?: string;
	shippingState?: string;
	shippingZipcode?: string;
	billingAddress?: string;
	billingCity?: string;
	billingState?: string;
	billingZipcode?: string;
	billingSameAsShipping?: string;
	shippingOption?: string;
	shippingNotes?: string;
}
