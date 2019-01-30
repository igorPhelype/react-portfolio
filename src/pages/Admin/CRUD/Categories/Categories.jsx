import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RouteGen from '../../../../routes/RouteGen';
import { CategoriesList } from './components';

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
            path: '/categorias',
            Component: CategoriesList,
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

export default Categories;