import React, { Component } from 'react';

export default class Listing extends Component {
    state = {jotain: null}

    handleDeleteClick = () => {

    }
    handleModifyclick = () => {

    }

    render() {
        return (
            <div className="container">
                <table className="table table-hover table-striped col-12">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Advantage</th>
                            <th scope="col">Is PC</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Moi</td>
                            <td>Moi</td>
                            <td>Moi</td>
                            <td>Moi</td>
                            <td>
                                <button className="btn btn-light"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></button>
                                
                                <button className="btn btn-light"><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}