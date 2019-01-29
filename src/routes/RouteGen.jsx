import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';

const RouteGen = (props) => {
    console.log("ROUTEGEN PROPS", props, {...{exact, path}}, {...{...componentProps, user}});
    const {
        componentProps, user, exact, path, Component
    } = props;
    return (
        <Route
            exact={exact}
            path={path}
            component={
                (props) => <Component {...{...componentProps, user}} />
            } />      
    );
}

RouteGen.propTypes = {
    componentProps: PropTypes.any,
    exact: PropTypes.bool,
    user: PropTypes.any,
    Component: PropTypes.object
}

export default RouteGen;