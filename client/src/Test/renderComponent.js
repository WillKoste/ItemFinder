import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createTheStore} from './store';

const renderComponent = (ui, {reduxState} = {}) => {
	const store = createTheStore(reduxState);

	return render(
		<Provider store={store}>
			<Router>{ui}</Router>
		</Provider>
	);
};

export default renderComponent;
