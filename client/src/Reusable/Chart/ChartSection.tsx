import React from 'react';
import {connect} from 'react-redux';
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import {Line} from 'react-chartjs-2';

interface ChartSectionProps {}

const ChartSection: React.FC<ChartSectionProps> = () => {
	Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
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

export default connect(null, {})(ChartSection);
