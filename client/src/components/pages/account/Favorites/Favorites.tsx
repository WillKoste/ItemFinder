import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getFavorites} from '../../../../actions/favorites';
import Table from '../../../../Reusable/Table';
import {FavoritesReducer, UserReducer} from '../../../../types/general';
import {Column} from '../../../../types/table';
import SpinnerCustom from '../../../layout/SpinnerCustom';

interface FavoritesProps {
	favoritesRed: FavoritesReducer;
	authRed: UserReducer;
	getFavorites: (uId: number, pId?: number, limit?: number, offset?: number) => void;
}

const Favorites: React.FC<FavoritesProps> = ({favoritesRed: {favorites, loadingFavorites, favorite}, authRed: {user}, getFavorites}) => {
	const [favoritesData, setFavoritesData] = useState([] as any);
	const limitAmt = 5;

	const [offsetState, setOffsetState] = useState(0);

	const onClickNext = useCallback(() => {
		setOffsetState(offsetState + limitAmt);
	}, [offsetState]);
	const onClickPrev = useCallback(() => {
		if (offsetState !== 0) {
			setOffsetState(offsetState - limitAmt);
		} else {
			return;
		}
	}, [offsetState]);

	useEffect(() => {
		if (user) {
			getFavorites(user.id, undefined, limitAmt, offsetState);
		}
	}, [user, offsetState]);
	useEffect(() => {
		setFavoritesData(favorites);
	}, [favorites]);

	const columns: Column[] = [
		{
			id: 1,
			header: 'Product Name',
			accessor: 'name',
			style: {
				padding: '1rem 0'
			}
		},
		{
			id: 2,
			header: 'Category',
			accessor: 'category',
			style: {
				padding: '1rem'
			}
		},
		{
			id: 3,
			header: 'Description',
			accessor: 'description',
			style: {
				padding: '1rem',
				textAlign: 'left'
			}
		}
	];

	return (
		<div className='container'>
			<h2 className='header-2 mb-4'>My Favorites</h2>
			{loadingFavorites ? <SpinnerCustom /> : favorites.length > 0 ? <Table data={favoritesData} columns={columns} onClickNext={onClickNext} onClickPrev={onClickPrev} /> : <p>You do not have any recorded favorites!</p>}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	favoritesRed: state.favoritesRed,
	authRed: state.authRed
});

export default connect(mapStateToProps, {getFavorites})(Favorites);
