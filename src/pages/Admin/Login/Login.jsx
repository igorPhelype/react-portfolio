import { Button, Card, CardContent, Input, InputAdornment, withStyles } from '@material-ui/core';
import { AccountCircleRounded, VpnKeyRounded } from '@material-ui/icons/';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { signInEmailPass } from '../../../FirebaseUtils/auth';
import { FormToObject } from '../../../utils/utils';
import moonflag from './moonFlag.svg';

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

class Login extends Component {
	static propTypes = {
	}
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: ''
            }
        };
    }
    componentDidMount(){
        if(this.props.user){
            this.props.history.push('/admin');
        }
    }
    handleSubmit = (e) => {
        const formData = FormToObject(e);
        console.log(formData);
        signInEmailPass(formData).then((response) => {
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
                            type="password"
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

export default compose(
    withStyles(styles),
    withRouter
)(Login);
