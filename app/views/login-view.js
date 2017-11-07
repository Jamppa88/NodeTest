import React, { Component } from 'react';
import $ from 'jquery';

export default class LoginView extends Component {
    sendLoginData = () => {
        let username = $("#username").val();
        let password = $("#password").val();
        console.log(username + ": " + password);
    }

    render() {

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Username: </th>
                            <td><input type="text" id="username" /></td>
                        </tr>
                        <tr>
                            <th>Password:</th>
                            <td><input type="password" id="password" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="button" value="Login" onClick={this.sendLoginData} /></td>
                        </tr>
                    </tbody>
                </table>
           
            </div>
        );
    }
}