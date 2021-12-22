import React from 'react';
import {Product} from '../types/general';

interface Card1Props {
	data: Product;
}

const Card1: React.FC<Card1Props> = ({data}) => {
	console.log({data});
	const {name, description, image} = data;

	return (
		<div className='card'>
			<div className='card-header'>
				<div className='card-title'>{name}</div>
			</div>
			<div className='card-body'>
				<img src={image} alt='Default product' className='card-img' />
				{/* <div className='card-content'>{description}</div> */}
			</div>
			<div className='card-footer'>
				<button className='btn btn-block btn-dark btn-slim my-2'>View More</button>
				<button className='btn btn-block btn-light btn-slim my-2'>Historical</button>
			</div>
		</div>
	);
};

export default Card1;
