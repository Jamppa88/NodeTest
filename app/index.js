import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import LoginView from './views/login-view';
import MainView from './views/main-view';
import RegisterView from './views/register-view';

/* This is the entry point for all the other front-end javascript
 * App only cares about view switching, and maintaining
 * logging in and logging out.
 */
class App extends Component {
    state = {
        token: sessionStorage.token,
        userRights: Boolean(sessionStorage.rights),
        register: false,
        successNewUser: false
    }

    login = () => {
        this.setState({token: sessionStorage.token, userRights: Boolean(Number(sessionStorage.rights))});
    }
    logout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("rights");
        this.setState({token: null, userRights: null});
    }
    registerNewUser = () => {
        this.setState({register: true});
    }
    closeRegisterNewUser = (success) => {
        if (success)
            this.setState({register: false, successNewUser: true});
        else
            this.setState({register: false});
    }
    closeSuccessNewUser = () => {
        this.setState({successNewUser: false});
    }

    render() {
        if (this.state.register) {
            return <RegisterView closeRegisterNewUser={this.closeRegisterNewUser} />;
        } else if (this.state.token == null || this.state.token == undefined) {
            return <LoginView login={this.login} register={this.registerNewUser} newUser={this.state.successNewUser} closeSuccess={this.closeSuccessNewUser}/>;
        } else {
            return (
                <MainView logout={this.logout} token={this.state.token} rights={this.state.userRights}/>
            );
        }
        
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);