import React, { Component } from 'react';
import $$ from 'jquery';

export default class RegisterView extends Component {

    register = () => {
        $$("#reg-password1").removeClass("is-invalid");
        $$("#reg-password2").removeClass("is-invalid");
        $$("#reg-username").removeClass("is-invalid");
        $$(".register").attr("disabled", "true");
        if ($$("#reg-password1").val() === $$("#reg-password2").val() && !!$$("#reg-password1").val()) {
            let payload = {
                username: $$("#reg-username").val(),
                password: $$("#reg-password1").val()
            }
            $$.post("/registerNewUser", payload)
                .done(response => {
                    if (response == "User exists!") {
                        $$("#reg-username").addClass("is-invalid");
                    } else {
                        this.props.closeRegisterNewUser(true);
                    }
                    
                })
                .fail(err => {
                    console.log(err);
                })
                .always(() => {
                    $$(".register").removeAttr("disabled");
                });
        } else {
            $$("#reg-password1").addClass("is-invalid");
            $$("#reg-password2").addClass("is-invalid");
            $$(".register").removeAttr("disabled");
        }

        
    }
    
    render() {
        return (
            <div className="container">
                
                <div className="card text-center col-sm-10 col-md-6" style={{margin: '3em auto 0 auto'}}>
                    <div className="card-header">
                        <h3>Register new user</h3>
                    </div>
                    <div className="card-body">
                        <div>
                            <input type="text" autoCapitalize="false" className="form-control register text-center" id="reg-username" placeholder="Select Username"/>
                            <div className="invalid-feedback">
                                Username is taken, choose another one!
                            </div>
                        </div>
                        
                        <br />
                        <div>
                            <input type="password" className="form-control register text-center" id="reg-password1" placeholder="Select password"/>
                            <input type="password" className="form-control register text-center" id="reg-password2" placeholder="Verify password"/>
                            <div className="invalid-feedback">
                                Password don't match!
                            </div>
                        </div>
                        <br />
                        <input type="button" className="btn btn-primary register" style={{width: "12em"}} value="Register" onClick={this.register}/>
                        <input type="button" className="btn btn-secodary" style={{marginLeft: "1em", width: "12em"}} value="Cancel" onClick={this.props.closeRegisterNewUser.bind(null,null)} />
                    </div>
                    
                </div>
                
            </div>
        );
    }
}