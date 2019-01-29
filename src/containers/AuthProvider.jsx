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
	componentWillMount(){
		authListener(this.props.setUser, this.props.history.push);
	}
    render() {
		const {
			user
		} = this.props;
        return <this.props.children user={user} />
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
    