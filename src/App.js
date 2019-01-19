import React, { Component } from 'react';
import {
	MuiThemeProvider
} from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {
	Routes
} from './routes';
import FirebaseApp from './config/firebase';
import combinedReducers from './redux/reducers/combinedReducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
	// holds the logged user
	state = {
		use: null
	}
	componentDidMount(){
		this.authListener();
	}
	authListener = () => {
		FirebaseApp.auth().onAuthStateChanged((user) => {
			console.log(user);
			if(user){
				this.setState({
					user: user || null
				});
			}else{
				this.setState({
					user: null
				});
			}
		})
	}
	render() {
		const {
			user
		} = this.state;
		return (
			<Provider store={createStoreWithMiddleware(combinedReducers)}>
				<MuiThemeProvider>
					<p>
						{user
							? <p>Logado - <a href="#" onClick={() => FirebaseApp.auth().signOut()}>Sair</a></p>
							: 'Não logado'}
					</p>
					<Routes />
				</MuiThemeProvider>
			</Provider>
		);
	}
}
	
export default App;
	