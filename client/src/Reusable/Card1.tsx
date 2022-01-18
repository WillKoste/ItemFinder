import React from 'react';
import {Product} from '../types/general';

interface Card1Props {
	data: Product;
}

const Card1: React.FC<Card1Props> = ({data}) => {
	const {name, description, image} = data;

	return (
		<div className='card'>
			<div className='card-body'>
				<div className='card-title'>
					<p>{name}</p>
				</div>
				<span></span>
				<img src={image} alt='Default product' className='card-img' />
			</div>
			<div className='card-footer'>
				<div>
					<button
						onClick={(e) => {
							e.preventDefault();
							alert('hey');
						}}
						className='btn btn-block btn-dark btn-slim my-2'
					>
						View More
					</button>
					<button className='btn btn-block btn-light btn-slim my-2'>Compare</button>
				</div>
			</div>
		</div>
	);
};

export default Card1;
