import React from 'react';
import {CreditCard} from './general';

export interface ContactArrData {
	id: number;
	first_name: string;
	last_name: string;
	address: string;
	contact_type: string;
	created_at: string;
}

export interface CreditCardsArrData {
	id: number;
	first_name: string;
	last_name: string;
}

export interface Column {
	id: string | number;
	header: string;
	accessor: string;
	style?: React.CSSProperties;
	headerStyling?: React.CSSProperties;
}

export interface TableData {
	id?: string | number;
	fields?: ContactArrData | CreditCardsArrData;
	[d: string]: string | any;
}

export type Styling = React.CSSProperties;

export type RemovedFields = 'first_name' | 'last_name' | 'credit_card' | 'address' | 'created_at' | 'contact_type' | 'id';
