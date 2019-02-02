import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from './EnhancedTable';
import { CRUDTable } from '../../../../../components';
import { TableRow, TableCell } from '@material-ui/core';
import { FirestoreGet } from '../../../../../FirebaseUtils/firestore';

class CategoriesList extends Component {
    state = {
        categoryItems: [],
        isLoading: true
    }
    static defaultProps = {}
    static propTypes = {}
    
    componentDidMount(){
        FirestoreGet("category")
            .then(response => {
                this.setState({categoryItems: response});
            })
            .catch(e => {
                this.setState({categoryItems: []})
            });
    }
    tableBody = (props) => {
        const{
            categoryItems
        } = this.state;
        return categoryItems.map((item, index) => (
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