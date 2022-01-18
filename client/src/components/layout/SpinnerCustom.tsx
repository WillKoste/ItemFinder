import React from 'react';
import {Spinner} from 'react-bootstrap';

interface SpinnerCustomProps {}

const SpinnerCustom: React.FC<SpinnerCustomProps> = () => {
	return (
		<div className='display-flex-center'>
			<Spinner animation='border' style={{width: '50px', height: '50px'}} />
		</div>
	);
};

export default SpinnerCustom;
