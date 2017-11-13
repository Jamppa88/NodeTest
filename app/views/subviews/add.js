import React, { Component } from 'react';
import $$ from 'jquery';

export default class AddView extends Component {

    parseDataForSending = () => {
        $$(".is-invalid").removeClass("is-invalid");
        if (!!$$("#addName").val() && !!$$("#addMod").val()) {
            let obj = {
                name: $$("#addName").val(),
                mod: $$("#addMod").val(),
                adv: $$("#addAdv").val(),
                isPC: $$("#addIsPC").val()
            }
            this.props.sendSaveRequest(obj, () => this.clearValues());
            
        } else {
            if (!$$("#addName").val()){
                $$("#addName").addClass("is-invalid");
            }
            if (!$$("#addMod").val()) {
                $$("#addMod").addClass("is-invalid");
            }
        }
        
    }

    clearValues = () => {
        $$(".is-invalid").removeClass("is-invalid");
        $$("#addName").val(null);
        $$("#addMod").val(null);
        $$("#addAdv").val('normal');
        //$$("#addIsPC").val(); // Not needed!
    }

    render() {
        if (!this.props.rights) {
            return (
                <div className="container">
                    <h4>You have no right to add monsters to the database, sorry.</h4>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <table className="table" style={{maxWidth: "35em", margin: "0 auto 0 auto"}} >
                        <thead>
                            <tr>
                                <th colSpan="2"><h3>Add new monster</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="align-middle">Name:</th>
                                <td>
                                    <input className="form-control add-mon" type="text" id="addName" />
                                    <div className="invalid-feedback">
                                        Please provide a name!
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="align-middle">Modifier:</th>
                                <td>
                                    <input className="form-control add-mon" type="number" id="addMod" />
                                    <div className="invalid-feedback">
                                        Please provide a modifier!
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="align-middle">Advantage:</th>
                                <td>
                                    <select className="form-control add-mon" id="addAdv" defaultValue="normal" >
                                        <option value="normal">Normal</option>
                                        <option value="adv">Advantage</option>
                                        <option value="disadv">Disadvantage</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th className="align-middle">Is PC:</th>
                                <td>
                                    <select className="form-control add-mon" id="addIsPC" defaultValue={false} >
                                        <option value={false} >No</option>
                                        <option value={true} disabled>Yes</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="align-middle">
                                    <input 
                                        type="button" 
                                        className="btn btn-primary add-mon" 
                                        style={{width: "10em", marginRight: "2em"}}
                                        onClick={this.parseDataForSending}
                                        value="Save" />
                                    <input 
                                        type="button"
                                        style={{width: "10em"}} 
                                        className="btn btn-secondary add-mon"
                                        onClick={this.clearValues} 
                                        value="Cancel" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}