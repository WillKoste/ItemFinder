import React from 'react';

interface SplashProps {}

const Splash: React.FC<SplashProps> = () => {
	return (
		<div className='splash'>
			<div className='container'>
				<h1>Splash Page</h1>
			</div>
		</div>
	);
};

export default Splash;
