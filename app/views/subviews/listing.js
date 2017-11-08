import React, { Component } from 'react';

export default class Listing extends Component {
    state = {jotain: null}



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
                                <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                                <span>{"\t"}</span>
                                <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}