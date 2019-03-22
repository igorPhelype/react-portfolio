import { withStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    body: {

    }
});

class AdminAppMainProvider extends React.Component {
    state = {}
    static defaultProps = {}
    static propTypes = {
        props: PropTypes.string
    }

    render() {
        const {
            classes
        } = this.props;
        return(
            <>
                <AppBar position={"relative"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <div className={classes.body}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default compose(
    withStyles(styles),
)(AdminAppMainProvider);