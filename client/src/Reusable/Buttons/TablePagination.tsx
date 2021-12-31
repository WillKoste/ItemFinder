import React from 'react';

interface TablePaginationProps {
	prevDisabled?: boolean;
	nextDisabled?: boolean;
}

const TablePagination: React.FC<TablePaginationProps> = ({prevDisabled, nextDisabled}) => {
	return (
		<div className='table-navigation'>
			<button disabled={prevDisabled} className='btn btn-secondary mr-2'>
				<i className='fas fa-arrow-left px-2'></i>
			</button>
			<button disabled={nextDisabled} className='btn btn-secondary'>
				<i className='fas fa-arrow-right px-2'></i>
			</button>
		</div>
	);
};

export default TablePagination;
