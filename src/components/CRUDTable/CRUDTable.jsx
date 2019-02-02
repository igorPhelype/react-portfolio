import { withStyles, Table } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';
import CRUDTableHeader from './CRUDTableHeader';
import CRUDTableBody from './CRUDTableBody';

const styles = (theme) => ({});

class CRUDTable extends React.Component {
    state = {}
    static defaultProps = {
        tableHeader: () => {},
		tableBody: () => {},
		isLoading: false
	}
    static propTypes = {
		tableHeader: PropTypes.func,
		tableBody: PropTypes.func,
		isLoading: PropTypes.bool
    }

    render() {
		const {
			tableHeader,
			tableBody
		} = this.props;
    	return(
    		<Table>
    			<CRUDTableHeader tableHeader={tableHeader} />
				<CRUDTableBody tableBody={tableBody} />
    		</Table>
    	);
    }
}

export default compose(
	withStyles(styles),
)(CRUDTable);