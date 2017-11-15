import React, { Component } from 'react';
import $$ from 'jquery';

export default class Profile extends Component {

  componentDidMount() {
    $$("#success").hide();
    this.getUsername();
  }

  getUsername = () => {
    $$.post("/getUser", {token: this.props.token})
      .done(data => {
        $$("#pro-username").append(data);
      });
  }

  handleSubmit = () => {
    $$("#pro-oldPassword").removeClass("is-invalid");
    $$("#pro-password1").removeClass("is-invalid");
    $$("#pro-password2").removeClass("is-invalid");
    $$(".change-psw").attr("disabled", "true");
    if ($$("#pro-password1").val() === $$("#pro-password2").val() && !!$$("#pro-password1").val()) {
      let payload = {
        token: this.props.token,
        oldPassword: $$("#pro-oldPassword").val(),
        newPassword: $$("#pro-password1").val()
      }
      $$.post("/changePassword", payload)
          .done(response => {
            if (response == "oldPassword incorrect!") {
                $$("#pro-oldPassword").addClass("is-invalid");
            } else if (response == 'Success') {
              $$("#success").show();
              setTimeout(() => {
                $$("#success").hide();
              },5000);
            } else {
              console.log(response);
            }
          })
          .fail(err => {
              console.log(err);
          })
          .always(() => {
              $$(".change-psw").removeAttr("disabled");
          });
    } else {
        $$("#pro-password1").addClass("is-invalid");
        $$("#pro-password2").addClass("is-invalid");
        $$(".change-psw").removeAttr("disabled");
    }
  }

  render() {
    return (
        <div className="container">
            <h3 style={{marginTop: "1em"}} >Logged in as <i><span id="pro-username" /></i></h3>
            <p className="text-success" id="success">Password changed!</p>
            <table className="table" style={{maxWidth: "35em", margin: "0 auto 0 auto"}} >
              <thead>
                <tr>
                  <th colSpan="2">
                    Change password
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle">Current password:</td>
                  <td>
                    <input className="form-control change-psw" type="password" id="pro-oldPassword" />
                    <div className="invalid-feedback">
                      Password is not correct!
                    </div>
                  </td>
                  
                </tr>
                <tr>
                  <td className="align-middle">New password:</td>
                  <td><input className="form-control change-psw" type="password" id="pro-password1" /></td>
                </tr>
                <tr>
                  <td className="align-middle">Verify new password:</td>
                  <td>
                    <input className="form-control change-psw" type="password" id="pro-password2" />
                    <div className="invalid-feedback">
                      New passwords don't match!
                    </div>
                  </td>
                  
                </tr>
                <tr>
                  <td colSpan="2">
                    <input type="button" className="btn btn-primary change-psw" style={{width: "12em"}} value="Submit" onClick={this.handleSubmit} />
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
  }
}
