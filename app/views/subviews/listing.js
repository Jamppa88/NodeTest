import React, { Component } from 'react';

import ListItem from '../../components/list-item';
import ModListItem from '../../components/modify-list-item';

export default class Listing extends Component {
    state = {modifyIndex: null}

    handleDeleteClick = () => {
        console.log("Delete clicked!")
    }
    handleModifyclick = () => {
        console.log("Modify clicked!")
        this.setState({modifyIndex: null}); // KESKEN
    }

    render() {
        return (
            <div className="container" style={{padding: 0}}>
                <table className="table table-hover table-striped col-12" style={{padding: 0}}>
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
                        <ListItem modify={this.handleModifyclick} delete={this.handleDeleteClick}/>
                        <ModListItem modify={this.handleModifyclick} delete={this.handleDeleteClick} />
                    </tbody>
                </table>
            </div>
        );
    }
}