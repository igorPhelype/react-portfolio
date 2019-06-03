import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';

const RouteGen = (props) => {
    const {
        componentProps, exact, path, Component
    } = props;
    console.log("ROUTEGEN PROPS", props, {...{exact, path}}, {...{...componentProps}});
    return (
        <Route exact={exact} path={path} component={(props) => <Component {...{...componentProps}} />} />
    );
}

RouteGen.propTypes = {
    componentProps: PropTypes.any,
    exact: PropTypes.bool,
    Component: PropTypes.object
}

export default RouteGen;