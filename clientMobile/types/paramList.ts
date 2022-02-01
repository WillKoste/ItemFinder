export type HomeParamList = {
	HomePage: {something: string} | undefined;
	ProductPage: {productId: number} | undefined;
};

export type TrendsParamList = {
	TrendsPage: undefined;
};

export type CartParamList = {
	CartPage: undefined;
};

export type AccountParamList = {
	AccountPage: undefined;
	ContactsPage: undefined;
	PartnersPage: undefined;
	CreditCardsPage: undefined;
};

export type AuthParamList = {
	LoginPage: {thing: string} | undefined;
	RegisterPage: undefined;
	SplashPage: undefined;
};
