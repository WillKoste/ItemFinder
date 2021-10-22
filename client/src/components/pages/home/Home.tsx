import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div>
			<div className='container'>
				<h1 className='text-xl'>Home Component</h1>
				<button className='btn btn-dark'>Hey dude</button>
				<div className='wrapper-lg'>hey</div>
				<div className='wrapper-md'></div>
				<div className='wrapper-sm'></div>
			</div>
		</div>
	);
};

export default Home;
