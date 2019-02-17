import { withStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        width: '100%',
        height: '64px',
        backgroundColor: '#8BB9FF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuImageContainer: {
        width: '200px'
    },
    menu: {
        justifyContent: 'flex-end',
        display: 'flex',
        '& > div': {
            height: 'fit-content',
            padding: '0px 8px'            
        }
    },
    content: {

    }
});

class GalleryAppMainProvider extends React.Component {
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
                <header className={classes.header}>
                    <div className={classes.menuImageContainer}>

                    </div>
                    <nav className={classes.menu}>
                        <div>
                            Início
                        </div>
                        <div>
                            Sobre
                        </div>
                        <div>
                            Portfolio
                        </div>
                    </nav>
                </header>
                <div className={classes.content}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default compose(
    withStyles(styles),
)(GalleryAppMainProvider);