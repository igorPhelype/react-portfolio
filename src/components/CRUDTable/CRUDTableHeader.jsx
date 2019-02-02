import { withStyles, TableHead } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { compose } from "redux";

const styles = (theme) => ({});

class CRUDTableHeader extends React.Component {
    state = {}
    static defaultProps = {
        tableHeader: () => {}
    }
    static propTypes = {
        tableHeader: PropTypes.func
    }

    render() {
        const {
            tableHeader
        } = this.props;
    	return(
    		<TableHead>
                {tableHeader()}
    		</TableHead>
    	);
    }
}

export default compose(
	withStyles(styles),
)(CRUDTableHeader);