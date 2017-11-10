import React, { Component } from 'react';
import $$ from 'jquery'; // $ is reserved for Bootstrap jQuery-plugin!

import Navbar from '../components/navbar';
import Listing from './subviews/listing';
import DeleteModal from '../components/delete-modal';
import AddView from './subviews/add';

export default class MainView extends Component {
    state = {
      currentView: 0, 
      loading: false,
      deleteItem: null,
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
          console.log(data);
         // let temp =  JSON.parse(data);
          self.setState({monsters: data});
        })
        .fail(err => {
            console.log("Failed!");
        });
    }

    

    searchDB = () => {
      console.log($$("#search").val());
      $(".collapse").collapse("hide");
      console.log("Searching...");
      let obj = {query: $$("#search").val()};
      let self = this;
      $$.post("/getmonster", obj)
        .done(response => {
          console.log("Success!");
          console.log(response);
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
      
      // only for testing, delete after implementation
      setTimeout(() => {
        $(".modal-btn").attr("disabled", false);
        $("#delete-modal").modal('hide');
      }, 2000);
      

    }

    handlePageChange = (index) => {
      this.setState({currentView: index});
    }

    handleToggleModal = (data) => {
      this.setState({deleteItem: data});
      $("#delete-modal").modal("toggle");
    }

    render() {
      const View = () => {switch(this.state.currentView) {
        case 0:
          return <Listing toggleModal={this.handleToggleModal} monsters={this.state.monsters}/>;
        case 1:
          return <AddView />;
        case 2:
          return <div>3</div>;
        default:
          break;
      }}
      return (
        <div className="container"  style={{padding: 0}}>
          <DeleteModal data={this.state.deleteItem} confirm={this.sendDeleteRequest}/>
          <div className="card text-center col-12 col-sm-12 col-md-10" style={{margin: '0.2em auto 0 auto', padding: 0}}>
            <div className="card-header">
              <Navbar 
                getAll={this.getMonsters}
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