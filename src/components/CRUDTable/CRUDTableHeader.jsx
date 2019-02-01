import { withStyles, TableHead } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { compose } from "redux";

const styles = (theme) => ({});

class CRUDTableHeader extends React.Component {
    state = {}
    static defaultProps = {}
    static propTypes = {
    	props: PropTypes.string
    }

    render() {
    	return(
    		<TableHead>
                
    		</TableHead>
    	);
    }
}

export default compose(
	withStyles(styles),
)(CRUDTableHeader);