import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';

const styles = (theme) => ({});

class PageName extends React.Component {
    state = {}
    static defaultProps = {}
    static propTypes = {
        props: PropTypes.string
    }

    render() {
        return;
    }
}

export default compose(
    withStyles(styles),
)(PageName);