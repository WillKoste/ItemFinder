import React from 'react';

interface TablePaginationProps {
	prevDisabled?: boolean;
	nextDisabled?: boolean;
	onClickNext?: () => void;
	onClickPrev?: () => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({prevDisabled, nextDisabled, onClickNext, onClickPrev}) => {
	return (
		<div className='table-navigation'>
			<button disabled={prevDisabled} className='btn btn-secondary mr-2' onClick={onClickPrev}>
				<i className='fas fa-arrow-left px-2'></i>
			</button>
			<button disabled={nextDisabled} className='btn btn-secondary' onClick={onClickNext}>
				<i className='fas fa-arrow-right px-2'></i>
			</button>
		</div>
	);
};

export default TablePagination;
