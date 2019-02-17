import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Gallery } from '../pages';
import { AdminDashboard, Login, Publications, Categories } from '../pages/Admin';
import RouteGen from './RouteGen';
import { AuthProvider, AdminAppMainProvider, GalleryAppMainProvider } from '../containers';

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
            }, {
                path: '/admin/publicacoes',
                Component: Publications,
                exact: true
            }, {
                path: '/admin/categorias',
                Component: Categories,
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
                <AuthProvider children={({user}) => {
                    return (
                        <>
                            <GalleryAppMainProvider>
                                {unauthenticatedRoutesMap.map((item, index) => <RouteGen key={index} {...item} user={user} />)}
                            </GalleryAppMainProvider>
                            {user && <AdminAppMainProvider>
                                {authenticatedRoutesMap.map((item, index) => <RouteGen key={index} {...item} user={user} />)}
                            </AdminAppMainProvider>}
                        </>
                    )
                }} />
            </Router>
        );
    }
}

export default Routes;