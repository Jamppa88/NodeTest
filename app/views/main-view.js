import React, { Component } from 'react';

import Navbar from '../components/navbar';
import Listing from './subviews/listing';
import DeleteModal from '../components/delete-modal';

export default class MainView extends Component {
    state = {
      currentView: 0, 
      loading: false,
      deleteItem: null
    }

    searchDB = () => {
      console.log($("#search").val());
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
          return <Listing toggleModal={this.handleToggleModal}/>;
        case 1:
          return <div>2</div>;
        case 2:
          return <div>3</div>;
        default:
          break;
      }}
      return (
        <div className="container"  style={{padding: 0}}>
          <DeleteModal data={this.state.deleteItem} confirm={this.sendDeleteRequest}/>
          <div className="card text-center col-12 col-sm-12 col-md-10" style={{margin: '3em auto 0 auto', padding: 0}}>
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