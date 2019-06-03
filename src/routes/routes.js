import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Gallery } from '../pages';
import RouteGen from './RouteGen';

class Routes extends Component {
    static defaultProps = {
        unauthenticatedRoutesMap: [
            {
                path: '/',
                Component: Gallery,
                exact: true
            }
        ]
    }
    render() {
        console.log("ROUTES PROPS", this.props);
        const {
            unauthenticatedRoutesMap
        } = this.props;
        return (
            <Router>
                <>
                    {unauthenticatedRoutesMap.map((item, index) => <RouteGen key={index} {...item} />)}
                </>
            </Router>
        );
    }
}

export default Routes;