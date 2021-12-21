import React from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../../actions/products';

interface FavoritesProps {
	getProducts: () => void;
}

const Favorites: React.FC<FavoritesProps> = ({getProducts}) => {
	getProducts();

	return (
		<div className='favorites'>
			<div className='container'>
				<h1>Favorites Page</h1>
			</div>
		</div>
	);
};

export default connect(null, {getProducts})(Favorites);
