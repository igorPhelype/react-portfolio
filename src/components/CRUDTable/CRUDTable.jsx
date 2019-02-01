import { withStyles, Table } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';
import CRUDTableHeader from './CRUDTableHeader';

const styles = (theme) => ({});

class CRUDTable extends React.Component {
    state = {}
    static defaultProps = {}
    static propTypes = {
    	props: PropTypes.string
    }

    render() {
    	return(
    		<Table>
    			<CRUDTableHeader />
    		</Table>
    	);
    }
}

export default compose(
	withStyles(styles),
)(CRUDTable);