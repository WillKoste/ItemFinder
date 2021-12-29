import React, {useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {getFavorites} from '../../../../actions/favorites';
import Table from '../../../../Reusable/Table';
import {FavoritesReducer, UserReducer} from '../../../../types/general';
import {Column} from '../../../../types/table';

interface FavoritesProps {
	favoritesRed: FavoritesReducer;
	authRed: UserReducer;
	getFavorites: (uId: number, pId?: number) => void;
}

const Favorites: React.FC<FavoritesProps> = ({favoritesRed: {favorites, loadingFavorites, favorite}, authRed: {user}, getFavorites}) => {
	const [favoritesData, setFavoritesData] = useState([] as any);

	useEffect(() => {
		if (user) {
			getFavorites(user.id);
		}
	}, [user]);
	useEffect(() => {
		setFavoritesData(favorites);
	}, [favorites]);

	const columns: Column[] = [
		{
			id: 1,
			header: 'Product Name',
			accessor: 'name',
			style: {
				padding: '1rem'
			}
		},
		{
			id: 2,
			header: 'Category',
			accessor: 'category'
		},
		{
			id: 3,
			header: 'Description',
			accessor: 'description',
			style: {
				textAlign: 'left',
				padding: '0 1rem'
			}
		}
	];

	console.log({col: columns, DATTTETTTA: favoritesData});

	return (
		<div>
			<h2 className='account-header'>Favorites</h2>
			<Table data={favoritesData} columns={columns} />
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	favoritesRed: state.favoritesRed,
	authRed: state.authRed
});

export default connect(mapStateToProps, {getFavorites})(Favorites);
