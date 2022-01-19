import React from 'react';
import {shared} from '../../../utils/sharedData';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
	return (
		<div className='hero-section'>
			<div className='dark-overlay'>
				<div className='container'>
					<h2>Compare today's hottest items!</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum doloremque nemo, tempore pariatur animi voluptatibus repudiandae, incidunt provident vel, sapiente ad hic? Dolores blanditiis perspiciatis mollitia omnis,
						ipsum fuga facilis! Temporibus laborum distinctio velit.
					</p>
					<div className='home-hero-buttons'>
						<button className='btn btn-highlight'>{shared.seeDeals}</button>
						<button className='btn btn-light'>{shared.todaysNews}</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
