import React, {Component} from 'react';
import {
    Card,
    Button,
    withStyles,
    CardContent,
    Input,
    InputAdornment
} from '@material-ui/core';

import {
    AccountCircleRounded,
    VpnKeyRounded
} from '@material-ui/icons/';
import moonflag from './moonFlag.svg';
import {Link} from 'react-router-dom';
import { FormToObject } from '../../utils/utils';
import FirebaseApp from '../../config/firebase';

const styles = (theme) => ({
    root: {
        width: '300px',
        margin: '0 auto'
    },
    imageHolder: {
        margin: '0 auto',
        width: '200px',
        '& img': {
            width: '100%'
        }
    },
    buttonHolder: {
       '& button, a': {
            display: 'block',
            margin: '0 auto'
       }
    }
})

/*
TODO: Fazer login
 */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: ''
            }
        };
    }
    handleSubmit = (e) => {
        const formData = FormToObject(e);
        FirebaseApp.auth().signInWithEmailAndPassword(formData.email, formData.password).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.error(e);
        });
    }
    render() {
        const {
            classes
        } = this.props;
        return (
            <Card className={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <CardContent>
                        <div className={classes.imageHolder}>
                            <img src={moonflag} />
                        </div>
                        <Input
                            name="email"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                <AccountCircleRounded />
                                </InputAdornment>
                            } />
                        <Input
                            name="password"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKeyRounded />
                                </InputAdornment>
                            } />
                    </CardContent>
                    <div className={classes.buttonHolder}>
                        {/* <Link to={'signup'}>
                            <Button>
                                Cadastrar
                            </Button>
                        </Link> */}
                        <Button type="submit">
                            Entrar
                        </Button>
                    </div>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(Login);
