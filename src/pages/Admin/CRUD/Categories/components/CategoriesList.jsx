import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from './EnhancedTable';

class CategoriesList extends Component {
    state = {}
    static defaultProps = {}
    static propTypes = {}

    render() {
        return(
            <>
                <EnhancedTable />
            </>
        );
    }
}

export default CategoriesList;