import React, { Component } from 'react';
import $$ from 'jquery';

import ListItem from '../../components/list-item';
import ModListItem from '../../components/modify-list-item';

var timer;

export default class Listing extends Component {
    state = {
        modifyIndex: null,
    }

    componentDidMount() {
        timer = setInterval(() => {
            this.props.getMonsters();
        },10000);
    }
    
    componentWillUnmount() {
        clearInterval(timer);
    }

    handleDeleteClick = (data) => {
        this.props.toggleModal(data);
    }
    handleModifyclick = (index) => {
        this.setState({modifyIndex: index});
    }
    handleModifySave = () => {
        console.log("Saving...");
        $$(".modify-box").attr("disabled", true);
        // SEND MODIFY REQUEST!!
        let item = {};
        $$(".modify-input").each((index, element) => {
            switch (element.name) {
                case "id":
                    item.id = element.value;
                    break;
                case "name":
                    item.name = element.value;
                    break;
                case "mod":
                    item.mod = element.value;
                    break;
                case "adv":
                    item.adv = element.value;
                    break;
                case "isPC":
                    item.isPC = element.checked;
                    break;
                default:
                    break;
            }
        });
        let obj = {
            token: this.props.token,
            obj: item
        }
        let self = this;
        $$.post("/modifymon", obj)
            .done(response => {
                console.log(response);
            })
            .fail(err => {
                console.log(err);
            })
            .always(() => {
                $$(".modify-box").attr("disabled", false);
                self.setState({modifyIndex: null});
                self.props.getMonsters();
            });
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
                                        rights={this.props.rights}
                                        data={item} />
                                );
                            } else {
                                return (
                                    <ListItem
                                        key={item.id}
                                        modify={this.handleModifyclick}
                                        delete={this.handleDeleteClick}
                                        rights={this.props.rights}
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