import React, { Component } from 'react';
import $$ from 'jquery'; // $ is reserved for Bootstrap jQuery-plugin!

import Navbar from '../components/navbar';
import Listing from './subviews/listing';
import DeleteModal from '../components/delete-modal';
import AddModal from '../components/add-modal';
import AddView from './subviews/add';
import Profile from './subviews/profile';

export default class MainView extends Component {
  state = {
    currentView: 0, 
    loading: false,
    deleteItem: null,
    addName: null,
    monsters: []
  }

  componentDidMount() {
    this.getMonsters();
  }

  getMonsters = () => {
      console.log("Getting monsters...");
      
      let self = this;
      $$.getJSON("/getmonsters")
        .done(data => {
          console.log("Success!");
         // console.log(data);
         // let temp =  JSON.parse(data);
          self.setState({monsters: data});
        })
        .fail(err => {
            console.log("Failed!");
        });
    }

    sendSaveRequest = (item, callback) => {
      //console.log(item);
      let obj = {
        token: this.props.token,
        obj: item
      }
      this.setState({addName: item.name});
      $$(".add-mon").attr("disabled", true);
      $$.post("/insertmon", obj)
        .done(response => {
          $$(".add-mon").removeAttr("disabled");
          $("#add-modal").modal("show");
          console.log(response);
        })
        .fail(err => {
          console.log(err);
        });
      callback();
    }

    searchDB = () => {
      //console.log($$("#search").val());
      $(".collapse").collapse("hide");
      //console.log("Searching...");
      let obj = {query: $$("#search").val()};
      let self = this;
      $$.post("/getmonster", obj)
        .done(response => {
          console.log("Success!");
          //console.log(response);
          self.setState({monsters: JSON.parse(response)});
        })
        .fail(err => {
          console.log("Failed!");
          console.log(err);
        });
      this.setState({currentView: 0});
    }

    sendDeleteRequest = () => {
      console.log("Deleting...");
      $(".modal-btn").attr("disabled", true);
      // SEND DELETE REQUEST!!
      let obj = {
        token: this.props.token,
        id: this.state.deleteItem.id
      }
      let self = this;
      $$.post("/deletemon", obj)
        .done(response => {
          console.log(response);
          self.getMonsters();
        })
        .fail(err => {
          console.log("Failed!");
          console.log(err);
        })
        .always(() => {
          $(".modal-btn").attr("disabled", false);
          $("#delete-modal").modal('hide');
          self.setState({deleteItem: null});
        });
    }

    handleDeleteCancel = () => {
      this.setState({deleteItem: null});
    }

    handlePageChange = (index) => {
      if (index === 0) 
        this.getMonsters();
      this.setState({currentView: index});
    }

    handleToggleModal = (data) => {
      this.setState({deleteItem: data});
      $("#delete-modal").modal("toggle");
    }

    render() {
      const View = () => {switch(this.state.currentView) {
        case 0:
          return (
            <Listing 
              toggleModal={this.handleToggleModal} 
              monsters={this.state.monsters} 
              rights={this.props.rights}
              getMonsters={this.getMonsters}
              token={this.props.token}/>
          );
        case 1:
          return <AddView sendSaveRequest={this.sendSaveRequest} rights={this.props.rights}/>;
        case 2:
          return <Profile token={this.props.token} />;
        default:
          break;
      }}
      return (
        <div className="container"  style={{padding: 0}}>
          <DeleteModal data={this.state.deleteItem} confirm={this.sendDeleteRequest} cancel={this.handleDeleteCancel}/>
          <AddModal name={this.state.addName} back={this.handlePageChange} />
          <div className="card text-center col-12 col-sm-12 col-md-10" style={{margin: '0.2em auto 0 auto', padding: 0}}>
            <div className="card-header">
              <Navbar 
                logout={this.props.logout} 
                search={this.searchDB} 
                current={this.state.currentView}
                changePage={this.handlePageChange} />
            </div>
            <div className="card-body" style={{padding: 0}}>
              <View />
            </div>
          </div>
        </div>
      );
    }
}