import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getLocations} from '../../../actions/locations';
import {getProducts} from '../../../actions/products';
import {ProductsReducer} from '../../../types/general';

interface HomeProps {
	productsRed: ProductsReducer;
	getProducts: () => void;
	getLocations: () => void;
}

const Home: React.FC<HomeProps> = ({productsRed, getProducts, getLocations}) => {
	useEffect(() => {
		getProducts();
		getLocations();
	}, []);

	return (
		<div>
			<div className='container'>
				<h1 className='text-xl'>Home Component</h1>
				{!productsRed.loading && productsRed.products.length > 0
					? productsRed.products.map((prod) => (
							<div key={prod.id}>
								<h1>{prod.name}</h1>
							</div>
					  ))
					: null}
				<button className='btn btn-dark' onClick={getProducts}>
					Hey dude
				</button>
				<div className='wrapper-lg'>hey</div>
				<div className='wrapper-md'></div>
				<div className='wrapper-sm'></div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts, getLocations})(Home);
