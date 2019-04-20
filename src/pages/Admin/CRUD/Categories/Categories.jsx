import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RouteGen from '../../../../routes/RouteGen';
import {CategoriesListContainer} from './containers';
import withAdminAppMain from '../../../../containers/withAdminAppMain';

const Categories = (props) => {
    const {
        crudCategoriesRoutes,
        user
    } = props;
    return(
        <>
            {crudCategoriesRoutes.map((item, index) => <RouteGen key={index} {...item} user={user} />)}
        </>
    );
}

Categories.defaultProps = {
    crudCategoriesRoutes: [
        {
            path: '/admin/categorias',
            Component: CategoriesListContainer,
            exact: true
        },
        // {
        //     path: '/categorias/:_id',
        //     Component: CategoriesForm,
        //     exact: true
        // }
    ]
}
Categories.propTypes = {
    crudCategoriesRoutes: PropTypes.array
}

export default withAdminAppMain(Categories);