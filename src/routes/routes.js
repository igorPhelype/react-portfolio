import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {Login, UserDashboard} from '../pages';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={'/'} render={()=>(
                        <div>
                            <ul>
                                <li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/signup'}>Cadastrar</Link></li>
                            </ul>
                        </div>
                    )}/>
                    <Route exact path={'/'} component={UserDashboard}/>
                    <Route exact path={'/login'} component={Login}/>
                    {/* <Route exact path={'/signup'} component={Signup}/> */}
                </div>
            </Router>
        );
    }
}

export default Routes;
