import React from 'react';
import {connect} from 'react-redux';

interface TrendsProps {}

const Trends: React.FC<TrendsProps> = ({}) => {
	return (
		<div className='trends'>
			<div className='container'>
				<h1>Trends Page</h1>
			</div>
		</div>
	);
};

export default connect(null, {})(Trends);
