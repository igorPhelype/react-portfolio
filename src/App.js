import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStoreWithMiddleware from './redux/createStoreWIthMiddleware';
import combinedReducers from './redux/reducers/combinedReducers';
import { Routes } from './routes';


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
	