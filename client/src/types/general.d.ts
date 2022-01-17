export interface Dispatch {
	type: string;
	payload: any;
}

export interface User {
	id: number;
	email: string;
	phone?: string;
	image: string;
	is_premium?: boolean;
	is_partner?: boolean;
	is_admin?: boolean;
	partner_code?: string | null;
}

export interface Product {
	id: number;
	name: string;
	sku?: string;
	category?: string;
	description?: string;
	rating?: number;
	image?: string;
	price?: number;
	qty?: number;
	product_history_id?: number;
	partner_id?: number;
	recorded_on?: string;
}

export interface Purchase {
	id: number;
	items: Product[];
	shipping_address: string;
	billing_address: string;
	gift: boolean;
	customer_status: string;
	confirmation_code?: string;
	shipping_method: string;
}

export interface CartProduct {
	id: number;
	name: string;
	sku?: string;
	category?: string;
	description?: string;
	rating?: number;
	image?: string;
	price?: number;
	qty?: number;
	product_history_id?: number;
	partner_id?: number;
	recorded_on?: string;
	cart_qty: number;
	cart_subtotal: number;
}

export interface ProductHistory {
	id: number;
	product_id: number;
	partner_id: number;
	price?: number;
	ratring?: number;
	created_at?: string;
	recorded_on?: string;
}

export interface Location {
	id: number;
	partnerId: number;
	image?: string;
	address?: string;
	rating?: number;
}

export interface Partner {
	id: number;
	name: string;
	partnerCode: string;
}

export interface Contact {
	id?: number;
	name?: string;
	first_name?: string;
	last_name?: string;
	address?: string;
	credit_card?: string;
}

export interface Review {
	id: number;
	title: string;
	body: string;
	product_id?: number;
	user_id?: number;
	rating: number;
	created_at?: string;
	updatedAt?: string;
	vote_type?: number | null;
}

export interface Category {
	id?: number;
	category_name: string;
}

export interface Favorite {
	id?: number;
	userId: number;
	productId: number;
	tag?: string;
	name: string;
	sku?: string;
	category?: string;
	description?: string;
	rating?: number;
	image?: string;
	price?: number;
	qty?: number;
	product_history_id?: number;
	partner_id?: number;
	recorded_on?: string;
}

export interface UserReducer {
	user: User | null;
	isAuthenticated: boolean | null;
	loading: boolean;
	error: any;
	success?: boolean | null;
}

export interface ProductsReducer {
	products: Product[] | [];
	product: Product | null;
	loading: boolean;
	loadingProduct: boolean;
	error: any;
	success?: boolean | null;
}

export interface PurchasesReducer {
	purchases: Purchase[] | [];
	purchase: Purchase | null;
	loadingPurchases: boolean;
	loadingPurchase: boolean;
	error: any;
	success: boolean | null;
}

export interface ProductsHistoryReducer {
	productsHistory: ProductHistory[] | [];
	productHistory: ProductHistory | null;
	loadingHistory: boolean;
	error: any;
	success: boolean | null;
}

export interface LocationsReducer {
	locations: Location | [];
	location: Location | null;
	loading: boolean;
	error: any;
	success?: boolean | null;
}

export interface PartnersReducer {
	partners: Partner[] | [];
	partner: Partner | null;
	loadingPartners: boolean;
	loadingPartner: boolean;
	error: any;
	success?: boolean | null;
}

export interface ContactsReducer {
	contacts: Contact[];
	contact: Contact | null;
	loadingContacts: boolean;
	loadingContact: boolean;
	error: any;
	success?: boolean | null;
}

export interface ReviewsReducer {
	reviews: Review[];
	review: Review | null;
	loadingReviews: boolean;
	loadingReview: boolean;
	error: any;
	success: boolean | null;
}

export interface CategoryReducer {
	categories: Category[];
	loadingCategories: boolean;
	error: any;
}

export interface CartReducer {
	items: CartProduct[] | [];
	total?: number;
}

export interface FavoritesReducer {
	favorites: Favorite[];
	favorite: Favorite | null;
	loadingFavorites: boolean;
	error: any;
	success: boolean | null;
}

export interface RootRedTypes {
	authRed?: UserReducer;
	productsRed?: ProductsReducer;
	locationsRed?: LocationsReducer;
	partnersRed?: PartnersReducer;
	contactsRed?: ContactsReducer;
	cartItemsRed?: CartReducer;
	favoritesRed?: FavoritesReducer;
	productCategoriesRed?: CategoryReducer;
	reviewsRed?: ReviewsReducer;
}

export interface AuthFormDataTypes {
	email?: string | undefined;
	password?: string | undefined;
	password2?: string | undefined;
	phone?: string | undefined;
}
