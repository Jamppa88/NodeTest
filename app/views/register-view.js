import React, { Component } from 'react';
import $$ from 'jquery';

export default class RegisterView extends Component {
    
    render() {
        return (
            <div className="container">
                
                <div className="card text-center col-sm-10 col-md-6" style={{margin: '3em auto 0 auto'}}>
                    <div className="card-header">
                        <h3>D&D Monster Database</h3>
                    </div>
                    <div className="card-body">
                        <p>I'm sorry, but at this moment you can't register a new account for this site.</p>
                        <input 
                          type="button" 
                          className="btn btn-primary" 
                          value="Back to Login" 
                          onClick={this.props.closeRegisterNewUser} />
                    </div>
                </div>
                
            </div>
        );
    }
}