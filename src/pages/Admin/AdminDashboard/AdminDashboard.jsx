import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import FirebaseApp from '../../../config/firebase';
import { signOut } from '../../../FirebaseUtils/auth';
import { SET_USER } from './actions/actionTypes';


class AdminDashboard extends Component {
	static propTypes = {
	}
	pushToLogin = () => {
		console.log('pushing');
		this.props.history.push('/login');
	}
	doSignOut = () => {
		signOut(this.pushToLogin);
	}
	render() {
		console.log('ADMIN DASHBOARD PROPS: ', {state: this.state});
		const {
			user
		} = this.props;
		return (
			<div>
				<p>
					Bem vindo, {user.email} - <button onClick={this.doSignOut}>Sair</button>
				</p>
			</div>
		)
	}
}

export default compose(
	withRouter
)(AdminDashboard);