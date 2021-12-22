import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {ProductsHistoryReducer, ProductsReducer} from '../../../types/general';
import {getProductsHistory} from '../../../actions/productsHistory';

interface TrendsGraphsProps {
	productsRed: ProductsReducer;
	productsHistoryRed: ProductsHistoryReducer;
	getProductsHistory: (productId: number) => void;
}

const TrendsGraphs: React.FC<TrendsGraphsProps> = ({productsRed: {products}, productsHistoryRed, getProductsHistory}) => {
	Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

	useEffect(() => {
		getProductsHistory(3);
	}, []);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const
			},
			title: {
				display: true,
				text: 'Chart.js Line Chart'
			}
		}
	};

	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: [8, 3, 10, 1],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			},
			{
				label: 'Dataset 2',
				data: [5, 2, 3, 7],
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			}
		]
	};

	return (
		<div className='trend-graphs'>
			<div className='graph-left'>
				<Line options={options} data={data} />
			</div>
			<div className='graph-right'>Hello</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsHistoryRed: state.productsHistoryRed
});

export default connect(mapStateToProps, {getProductsHistory})(TrendsGraphs);
