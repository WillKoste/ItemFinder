import React, {Fragment} from 'react';
import {Column, TableData} from '../types/table';
import moment from 'moment';
import TablePagination from './Buttons/TablePagination';

interface TableProps {
	data: TableData[];
	columns: Column[];
	onClickNext?: () => void;
	onClickPrev?: () => void;
}

const Table: React.FC<TableProps> = ({data, columns, onClickNext, onClickPrev}) => {
	const validFields = columns.map((col) => col.accessor);

	return (
		<Fragment>
			<table className='table'>
				<thead>
					<tr>
						{columns.map((col) => (
							<th style={col.headerStyling} key={col.id}>
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((d, i) => {
						const keysArr = Object.keys(d)
							.filter((d) => validFields.includes(d))
							.sort((z, x) => validFields.indexOf(z) - validFields.indexOf(x));
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
								{keysArr.map((key, end) => {
									const isDescKey = key === 'description';
									return (
										// <td style={{background: key === 'description' ? 'lightBlue' : ''}}>
										<td style={columns[end].style}>{d[key].toString().match(/^(\d{4})(?:-?W(\d+)(?:-?(\d+)D?)?|(?:-(\d+))?-(\d+))(?:[T ](\d+):(\d+)(?::(\d+)(?:\.(\d+))?)?)?(?:Z(-?\d*))?$/) ? moment(d[key]).format('MM-DD-YYYY') : d[key]}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<TablePagination onClickNext={onClickNext} onClickPrev={onClickPrev} />
		</Fragment>
	);
};

export default Table;
