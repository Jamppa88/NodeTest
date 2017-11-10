import React, { Component } from 'react';
import $ from 'jquery';

import ListItem from '../../components/list-item';
import ModListItem from '../../components/modify-list-item';

export default class Listing extends Component {
    state = {
        modifyIndex: null,
    }
    

    handleDeleteClick = (data) => {
        console.log("Delete clicked!");
        this.props.toggleModal(data);
    }
    handleModifyclick = (index) => {
        console.log("Modify clicked!");
        console.log(index);
        this.setState({modifyIndex: index}); // KESKEN
    }
    handleModifySave = () => {
        console.log("Saving...");
        $(".modify-box").attr("disabled", true);
        // SEND SAVE REQUEST!!
        
        // only for testing, delete after implementation
        setTimeout(() => {
          $(".modify-box").attr("disabled", false);
         this.setState({modifyIndex: null});
        }, 2000);
    }
    handleModifyCancel = () => {
        this.setState({modifyIndex: null});
    }

    render() {
        const mons = this.props.monsters;
        return (
            <div className="container" style={{padding: 0}}>
                <table className="table table-hover table-striped col-12" style={{padding: 0}}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Advantage</th>
                            <th scope="col">Is PC</th>
                            <th scope="col" style={{minWidth: '95px'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mons.map((item) => {
                            if (item.id === this.state.modifyIndex) {
                                return (
                                    <ModListItem
                                        key={item.id}
                                        save={this.handleModifySave}
                                        cancel={this.handleModifyCancel}
                                        data={item} />
                                );
                            } else {
                                return (
                                    <ListItem
                                        key={item.id}
                                        modify={this.handleModifyclick}
                                        delete={this.handleDeleteClick}
                                        data={item} />
                                );
                            }
                            
                        })}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

const mockData = [
    {id: 0, name: "Ancient Green Dragon", mod: 0, adv: 'normal', isPC: false},
    {id: 1, name: "test2", mod: 0, adv: 'normal', isPC: false},
    {id: 2, name: "test3", mod: 0, adv: 'normal', isPC: false},
    {id: 4, name: "test4", mod: 0, adv: 'normal', isPC: false},
]