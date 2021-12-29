import React from 'react';

interface RatingStarsProps {
	rating?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({rating = 0}) => {
	return (
		<p>
			<strong>Rating: </strong>
			<span>
				{rating < 0.25 ? <i className='far fa-star'></i> : rating >= 0.25 && rating < 0.75 ? <i className='fas fa-star-half-alt'></i> : rating >= 0.75 ? <i className='fas fa-star'></i> : ''}
				{rating < 1.25 ? <i className='far fa-star'></i> : rating >= 1.25 && rating < 1.75 ? <i className='fas fa-star-half-alt'></i> : rating >= 1.75 ? <i className='fas fa-star'></i> : ''}
				{rating < 2.25 ? <i className='far fa-star'></i> : rating >= 2.25 && rating < 2.75 ? <i className='fas fa-star-half-alt'></i> : rating >= 2.75 ? <i className='fas fa-star'></i> : ''}
				{rating < 3.25 ? <i className='far fa-star'></i> : rating >= 3.25 && rating < 3.75 ? <i className='fas fa-star-half-alt'></i> : rating >= 3.75 ? <i className='fas fa-star'></i> : ''}
				{rating < 4.25 ? <i className='far fa-star'></i> : rating >= 4.25 && rating < 4.75 ? <i className='fas fa-star-half-alt'></i> : rating >= 4.75 ? <i className='fas fa-star'></i> : ''}
			</span>
		</p>
	);
};

export default RatingStars;
