import React, { Component } from 'react';
import {
	MuiThemeProvider
} from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import {
	Routes
} from './routes';
import FirebaseApp from './config/firebase';
import combinedReducers from './redux/reducers/combinedReducers';
import createStoreWithMiddleware from './redux/createStoreWIthMiddleware';

class App extends Component {
	render() {
		return (
			<Provider store={createStoreWithMiddleware(combinedReducers)}>
				<MuiThemeProvider>
					<Routes />
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
	