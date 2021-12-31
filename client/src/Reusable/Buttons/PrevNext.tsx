import React from 'react';
import {Link} from 'react-router-dom';

interface PrevNextProps {
	goNext?: () => void;
	goPrev?: () => void;
	backToCart?: boolean;
	submitOrder?: boolean;
}

const PrevNext: React.FC<PrevNextProps> = ({goNext, goPrev, submitOrder, backToCart}) => {
	return (
		<div>
			{backToCart ? (
				<Link to='/cart' className='btn btn-dark mr-2' onClick={goPrev}>
					Back to Cart
				</Link>
			) : (
				<button className='btn btn-highlight mr-2' disabled={!goPrev} onClick={goPrev}>
					Previous Step
				</button>
			)}
			{submitOrder ? (
				<button className='btn btn-success' disabled={!goNext} onClick={goNext}>
					Submit order
				</button>
			) : (
				<button className='btn btn-highlight' disabled={!goNext} onClick={goNext}>
					Next Step
				</button>
			)}
		</div>
	);
};

export default PrevNext;
