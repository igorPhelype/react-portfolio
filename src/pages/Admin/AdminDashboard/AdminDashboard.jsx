import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import FirebaseApp from '../../../config/firebase';
import { signOut } from '../../../FirebaseUtils/auth';
import { SET_USER } from './actions/actionTypes';


class AdminDashboard extends Component {
	static propTypes = {
	}
	componentDidMount(){
        if(!this.props.user){
            this.props.history.push('/login');
        }
	}
	render() {
		console.log('ADMIN DASHBOARD PROPS: ', this.props)
		const {
			user
		} = this.props;
		return (
			<div>
				{user 
					? 	<p>Bem vindo, {user.email} - <button onClick={signOut}>Sair</button></p>
					:	`Carregando...`}
			</div>
		)
	}
}

export default compose(
	withRouter
)(AdminDashboard);