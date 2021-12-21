import React from 'react';
import {Column, TableData} from '../types/table';
import moment from 'moment';

interface TableProps {
	data: TableData[];
	columns: Column[];
}

const Table: React.FC<TableProps> = ({data, columns}) => {
	console.log({data, columns});

	data.map((d) => {
		console.log(Object.keys(d));
	});

	const validFields = columns.map((col) => col.accessor);
	console.log({validFields});

	return (
		<table className='table'>
			<thead>
				<tr>
					{columns.map((col) => (
						<th key={col.id}>{col.header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((d, i) => {
					const keysArr = Object.keys(d)
						.filter((d) => validFields.includes(d))
						.sort((z, x) => validFields.indexOf(z) - validFields.indexOf(x));
					console.log({keysArr, d});
					return (
						<tr
							onMouseOver={(e) => {
								e.currentTarget.style.background = 'yellow';
								e.currentTarget.style.cursor = 'pointer';
							}}
							onMouseLeave={(e) => {
								if (i % 2 === 0) {
									e.currentTarget.style.background = '#ccc';
								} else {
									e.currentTarget.style.background = '#f9f9f9';
								}
								e.currentTarget.style.cursor = 'default';
							}}
							style={{background: i % 2 === 0 ? '#ccc' : 'inherit'}}
						>
							{keysArr.map((key) => (
								<td>{d[key].toString().match(/^(\d{4})(?:-?W(\d+)(?:-?(\d+)D?)?|(?:-(\d+))?-(\d+))(?:[T ](\d+):(\d+)(?::(\d+)(?:\.(\d+))?)?)?(?:Z(-?\d*))?$/) ? moment(d[key]).format('MM-DD-YYYY') : d[key]}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
