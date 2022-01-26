import React, {useCallback, useState, useEffect, useMemo} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCategories} from '../../actions/productCategories';
import {CategoryReducer} from '../../types/general';

interface CategoryCardStackProps {
	getCategories: (lim: number, off: number) => void;
	productCategoriesRed: CategoryReducer;
}

const CategoryCardStack: React.FC<CategoryCardStackProps> = ({getCategories, productCategoriesRed: {loadingCategories, categories}}) => {
	const [limitState, setLimitState] = useState(5);
	const [offsetState, setOffsetState] = useState(0);
	const [catData, setCatData] = useState([]);

	useEffect(() => {
		getCategories(limitState, offsetState);
	}, [limitState, offsetState]);
	const onClickLeftArrow = useCallback(() => {
		setOffsetState((cur) => cur - 3);
	}, []);

	const onClickRightArrow = useCallback(() => {
		setOffsetState((cur) => cur + 3);
	}, []);

	return (
		<div>
			{loadingCategories ? (
				<h4>Loading...</h4>
			) : categories.length > 0 ? (
				<div className='product-stack-container' style={{width: '100%'}}>
					<button className='arrow-left' onClick={onClickLeftArrow} disabled={offsetState === 0}>
						<i className='fas fa-chevron-left'></i>
					</button>
					<div className='cards-grid'>
						{categories.map((cat) => (
							<button className='btn btn-primary' key={cat.id}>
								{cat.category_name}
							</button>
						))}
					</div>
					<button className='arrow-right' onClick={onClickRightArrow}>
						<i className='fas fa-chevron-right'></i>
					</button>
				</div>
			) : (
				<p>No categories found</p>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productCategoriesRed: state.productCategoriesRed
});

export default connect(mapStateToProps, {getCategories})(CategoryCardStack);
