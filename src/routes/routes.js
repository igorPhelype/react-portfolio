import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from '../containers/AuthProvider';
import { Gallery } from '../pages';
import { AdminDashboard, Login } from '../pages/Admin';
import RouteGen from './RouteGen';


class Routes extends Component {
    static defaultProps = {
        unauthenticatedRoutesMap: [
            {
                path: '/',
                Component: Gallery,
                exact: true
            }, {
                path: '/login',
                Component: Login,
                exact: true
            }
        ],
        authenticatedRoutesMap: [
            {
                path: '/admin',
                Component: AdminDashboard,
                exact: true
            }
        ]
    }
    render() {
        console.log("ROUTES PROPS", this.props);
        const {
            unauthenticatedRoutesMap,
            authenticatedRoutesMap
        } = this.props;
        return (
            <Router>
                <div>
                    <AuthProvider children={({user}) => {
                        return (
                            <>
                                {unauthenticatedRoutesMap.map((item, index) => <RouteGen key={index} {...item} user={user} />)}
                                {authenticatedRoutesMap.map((item, index) => <RouteGen key={index} {...item} user={user} />)}
                            </>
                        )
                    }} />
                </div>
            </Router>
        );
    }
}

export default Routes;