import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import FirebaseApp from '../../config/firebase';
import { SET_USER } from './actions/actionTypes';
import { signOut } from '../../FirebaseUtils/auth';

class UserDashboard extends Component {
	static propTypes = {
	}
	componentWillMount(){
		this.authListener();
	}
	authListener = () => {
		FirebaseApp.auth().onAuthStateChanged((user) => {
			console.log(user);
			if(user){
				console.log("setting user");
				this.props.setUser(user);
				// this.props.history.push('/');
			}else{
				this.props.setUser(null);
				this.props.history.push('/login');
			}
		});
	}
	render() {
		console.log('USER DASHBOARD PROPS: ', this.props)
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

const mapStateToProps = ({user}) => ({
	user
});

const mapDispatchToProps = (dispatch) => ({
	setUser: (user) => dispatch({type: SET_USER, payload: user})
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(UserDashboard);