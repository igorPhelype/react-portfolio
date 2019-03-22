import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { authListener } from '../FirebaseUtils/auth';
import { SET_USER } from '../pages/Admin/AdminDashboard/actions/actionTypes';

class AuthProvider extends React.Component {
    static propTypes = {
	}
	state = {
		authLoading: true
	}
	componentWillMount(){
		authListener((user) => {
			this.props.setUser(user);
			if(this.state.authLoading){
				setTimeout(() => this.setState({authLoading: false}), 1000);
			}
		}, this.props.history.push);
	}
    render() {
		const {
			user
		} = this.props;
		const {
			authLoading
		} = this.state;
        return (
			authLoading
				?	<div>Carregando...</div>
				:	<this.props.children user={user} />)
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
)(AuthProvider);
    