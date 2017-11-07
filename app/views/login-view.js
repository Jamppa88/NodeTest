import React, { Component } from 'react';

export default class LoginView extends Component {


    render() {

        return (
            <div>
                <tbody>
                    <tr>
                        <th>Username: </th>
                        <td><input type="text" id="username" /></td>
                    </tr>
                    <tr>
                        <th>Password:</th>
                        <td><input type="password" id="password" /></td>
                    </tr>
                </tbody>
                <p>MoiMoiMoi</p>
            </div>
        );
    }
}