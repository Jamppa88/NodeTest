import React, { Component } from 'react';
import $$ from 'jquery';

export default class LoginView extends Component {
    state = {invalid: false, loading: false}
    
    // On initial mounting, hide warning message
    componentDidMount() {
        $$("#incorrectInput").hide();
        this.props.newUser? $$("#newUser").show() : $$("#newUser").hide();
    }
    // Send request to server
    sendLoginData = () => {
        $$("#incorrectInput").hide();
        this.props.closeSuccess();
        $$("#newUser").hide();
        let username = $$("#login-username").val();
        let password = $$("#login-password").val();
        let obj = {username: username, password: password}
        this.setState({loading: true});
        $$.post("/login", obj)
        .done(response => {
            if (response == "err") {
                this.setState({loading: false});
                $$("#incorrectInput").show();
            } else {
                sessionStorage.token = response.token;
                sessionStorage.rights = (!!response.rights? 1 : 0);
                this.setState({loading: false});
                this.props.login();
            }
            
        })
        .fail(() => {
            $$("#incorrectInput").show();
            this.setState({loading: false});
        });
    }

    // Check if user pressed enter in the inputs
    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.sendLoginData();
        }
    }

    render() {
        return (
            <div className="container">
                
                <div className="card text-center col-sm-10 col-md-6" style={{margin: '3em auto 0 auto'}}>
                    <div className="card-header">
                        <h3>D&D Monster Database</h3>
                    </div>
                    <div className="card-body">
                        <p className="text-success" id="newUser">New user created!</p>
                        <p className="text-danger" id="incorrectInput">Incorrect username/password!</p>
                        <input 
                            className="form-control text-center" 
                            type="text" 
                            id="login-username"
                            placeholder="Username" 
                            disabled={this.state.loading}
                            onKeyPress={this.handleKeyPress}
                            autoFocus />
                        <input 
                            className="form-control text-center" 
                            type="password" 
                            id="login-password"
                            onKeyPress={this.handleKeyPress}
                            disabled={this.state.loading} 
                            placeholder="Password" />
                        <br />
                        <input 
                            className="btn btn-primary col-6" 
                            type="button" 
                            value="Login"
                            disabled={this.state.loading} 
                            onClick={this.sendLoginData} />
                        <br /><br/>
                        <input 
                            className="btn btn-link"
                            type="button"
                            onClick={this.props.register} 
                            value="Register profile" />
                    </div>
                </div>
                
            </div>
        );
    }
}