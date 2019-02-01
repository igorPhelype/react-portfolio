import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from './EnhancedTable';
import { CRUDTable } from '../../../../../components';

class CategoriesList extends Component {
    state = {}
    static defaultProps = {}
    static propTypes = {}

    render() {
        return(
            <>
                <EnhancedTable />
                <CRUDTable />
            </>
        );
    }
}

export default CategoriesList;