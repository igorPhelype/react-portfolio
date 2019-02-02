import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from './EnhancedTable';
import { CRUDTable } from '../../../../../components';
import { TableRow, TableCell } from '@material-ui/core';

class CategoriesList extends Component {
    state = {
        categoryItems: [],
        isLoading: true
    }
    static defaultProps = {}
    static propTypes = {}
    
    componentDidMount(){
        this.props.fetchCategories();
    }
    tableBody = (props) => {
        const{
            categoriesList
        } = this.props;
        return categoriesList.map((item, index) => (
            <TableRow key={index}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
            </TableRow>
        ))
    }
    tableHeader = (props) => {
        return(
            <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Descrição</TableCell>
            </TableRow>
        )
    }
    render() {
        console.log("CategoriesList Props", this.props);
        return(
            <>
                {/* <EnhancedTable /> */}
                <CRUDTable
                    tableHeader={this.tableHeader}
                    tableBody={this.tableBody} />
            </>
        );
    }
}

export default CategoriesList;