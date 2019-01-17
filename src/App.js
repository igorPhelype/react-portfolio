import React, { Component } from 'react';
import {
	MuiThemeProvider
} from '@material-ui/core/styles';

import {
	Routes
} from './routes';
import FirebaseApp from './config/firebase';

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
			this.setState({
				user: user || null
			});
		})
	}
	render() {
		const {
			user
		} = this.state;
		return (
			<MuiThemeProvider>
				<p>
					{user
						? 'Logado'
						: 'Não logado'}
				</p>
				<Routes />
			</MuiThemeProvider>
			);
		}
	}
	
	export default App;
	