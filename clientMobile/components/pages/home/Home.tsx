import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {utils} from '../../../style/fragments/utils';
import ProductsBlock from '../../reusable/ProductsBlock';
import {getProducts} from '../../../actions/products';
import {ProductsOptions, ProductsReducer} from '../../../types/redux';
import SpinnerCustom from '../../layout/SpinnerCustom';
import Banner from '../../reusable/Banner';
import SearchBar from '../../reusable/SearchBar';
import {HomeStackNavProps} from '../../../types/stackNavProps';
const {headerMd, bgPrimary, bgHighlight, textDark, p1, py3, mx2, px2} = utils;

interface HomeProps {
	getProducts: (options: ProductsOptions) => void;
	productsRed: ProductsReducer;
}

const Home: React.FC<HomeProps> = ({getProducts, productsRed: {loading, products}, ...props}) => {
	const [offsetState, setOffsetState] = useState(0);
	const [limitState, setLimitState] = useState(12);
	const [productsData, setProductsData] = useState([]);

	const {navigation}: HomeStackNavProps<'HomePage'> = props as any;

	useEffect(() => {
		getProducts({limit: limitState, offset: offsetState});
	}, []);

	return (
		<ScrollView style={{flex: 1}} stickyHeaderIndices={[0]}>
			<View style={[px2, bgPrimary]}>
				<SearchBar />
			</View>
			<View style={[bgHighlight, {paddingHorizontal: 10}]}>
				<Text style={[headerMd, textDark, py3]}>Things to check out</Text>
			</View>
			{loading ? (
				<SpinnerCustom />
			) : products.length > 0 ? (
				<View>
					<ProductsBlock blockProducts={products.slice(0, 4)} />
					<Banner />
					<ProductsBlock blockProducts={products.slice(4, 8)} />
				</View>
			) : null}
		</ScrollView>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts})(Home);
