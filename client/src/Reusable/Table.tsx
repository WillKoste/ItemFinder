import React, {Fragment} from 'react';
import {Column, TableData} from '../types/table';
import moment from 'moment';
import TablePagination from './Buttons/TablePagination';

interface TableProps {
	data: TableData[];
	columns: Column[];
	onClickNext?: () => void;
	onClickPrev?: () => void;
	prevButtonDisabled?: boolean;
	nextButtonDisabled?: boolean;
	checkBoolean?: (value: any) => void;
}

const Table: React.FC<TableProps> = ({data, columns, onClickNext, onClickPrev, prevButtonDisabled, nextButtonDisabled, checkBoolean}) => {
	const validFields = columns.map((col) => col.accessor);
	const validTypes = validFields.map((col) => col);
	console.log({validTypes, data, columns});

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
									// console.log(typeof d['use_as_default']);
									return (
										<td style={columns[end].style}>
											{typeof d[key] === 'boolean' ? (
												// <input type='checkbox' checked={d[key]} onChange={(e) => console.log(d[key])} style={{width: '18px', height: '18px'}} />
												<input type='checkbox' checked={d[key]} onChange={() => (checkBoolean as any)(d)} style={{width: '18px', height: '18px'}} />
											) : moment(d[key], 'YYYY-MM-DDTHH:mm:ss.SSSZ', true).isValid() ? (
												moment(d[key]).format('l')
											) : (
												d[key]
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<TablePagination nextDisabled={nextButtonDisabled} prevDisabled={prevButtonDisabled} onClickNext={onClickNext} onClickPrev={onClickPrev} />
		</Fragment>
	);
};

export default Table;
