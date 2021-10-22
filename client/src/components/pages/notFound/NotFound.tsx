import React from 'react';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
	return (
		<div className='not-found'>
			<div className='container'>
				<h1>404 - Page note found :C</h1>
			</div>
		</div>
	);
};

export default NotFound;
