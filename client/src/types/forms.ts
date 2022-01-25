export interface CheckoutForm {
	cardFirstName?: string;
	cardLastName?: string;
	cardNumber?: string;
	expirationDate?: string;
	securityCode?: string;
	saveCard?: 'true' | 'false' | string;
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
	gift?: string;
}

export interface CreditCardForm {
	first_name: string;
	last_name: string;
	card_number: string;
	exp_date: string | undefined;
	security_code: string;
}

export interface NewContactForm {
	firstName?: string;
	middleInitial?: string;
	lastName?: string;
	phone?: string;
	email?: string;
	relation?: string;
	streetAddress?: string;
	city?: string;
	state?: string;
	zip?: string;
	companyName?: string;
	companyTitle?: string;
	companyMemberType?: string;
	companyStreetAddress?: string;
	companyCity?: string;
	companyState?: string;
	companyZip?: string;
	contactType?: string;
}
