import { withStyles, TableBody } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { compose } from "redux";

const styles = (theme) => ({});

class CRUDTableBody extends React.Component {
    state = {}
    static defaultProps = {
        tableBody: () => {}
    }
    static propTypes = {
        tableBody: PropTypes.func
    }

    render() {
        const {
            tableBody
        } = this.props;
    	return(
    		<TableBody>
                {tableBody()}
    		</TableBody>
    	);
    }
}

export default compose(
	withStyles(styles),
)(CRUDTableBody);