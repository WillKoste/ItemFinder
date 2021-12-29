import React from 'react';

export interface ContactArrData {
	id: number;
	first_name: string;
	last_name: string;
	address: string;
	contact_type: string;
	created_at: string;
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
	fields?: ContactArrData;
	[d: string]: string;
}

export type Styling = React.CSSProperties;

export type RemovedFields = 'first_name' | 'last_name' | 'credit_card' | 'address' | 'created_at' | 'contact_type' | 'id';
