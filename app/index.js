import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import LoginView from './views/login-view';
import MainView from './views/main-view';

/* This is the entry point for all the other front-end javascript
 * App only cares about view switching, and maintaining
 * logging in and logging out.
 */
class App extends Component {
    state = {
        username: sessionStorage.logged,
        register: false
    }

    login = () => {
        this.setState({username: sessionStorage.logged});
    }
    logout = () => {
        sessionStorage.removeItem("logged");
        this.setState({username: null});
    }
    registerNewUser = () => {
        this.setState({register: true});
    }
    closeRegisterNewUser = () => {
        this.setState({register: false});
    }

    render() {
        if (this.state.register) {
            return (
                <div>Tänne jotain
                    <input 
                        className="btn btn-secondary" 
                        onClick={this.closeRegisterNewUser} />
                </div>
            );
        } else if (this.state.username == null || this.state.username == undefined) {
            return <LoginView login={this.login} register={this.registerNewUser}/>;
        } else {
            return (
                <MainView logout={this.logout} />
            );
        }
        
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);