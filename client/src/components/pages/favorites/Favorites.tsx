import React from 'react';

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
	return (
		<div className='favorites'>
			<div className='container'>
				<h1>Favorites Page</h1>
			</div>
		</div>
	);
};

export default Favorites;
