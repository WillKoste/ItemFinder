import React from 'react';

interface PrevNextProps {
	goNext?: () => void;
	goPrev?: () => void;
}

const PrevNext: React.FC<PrevNextProps> = ({goNext, goPrev}) => {
	return (
		<div>
			<button className='btn btn-highlight mr-2' disabled={!goPrev} onClick={goPrev}>
				Previous Step
			</button>
			<button className='btn btn-highlight' disabled={!goNext} onClick={goNext}>
				Next Step
			</button>
		</div>
	);
};

export default PrevNext;
