import React from 'react';
import {Provider} from 'react-redux';
import Routes from './components/routes/Routes';
import store from './store';

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<Provider store={store}>
			{/* <PersistGate persistor={persistor}>
				<Routes />
			</PersistGate> */}
			<Routes />
		</Provider>
	);
};

export default App;
