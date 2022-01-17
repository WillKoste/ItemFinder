import React from 'react';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import Routes from './components/routes/Routes';
import store from './store';
// import {persistor} from './store';
import {SESSION_NAME} from './utils/constants';
import {getSessionToken} from './utils/sessionUtils';

getSessionToken(SESSION_NAME);

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
