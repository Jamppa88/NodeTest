import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from '../components/navbar';

export default class MainView extends Component {
    state = {
      currentView: 0, 
      loading: false
    }

    /* componentDidMount() {
        $("#incorrectInput").hide();
    } */
    searchDB = () => {
      console.log($("#search").val());
      this.setState({currentView: 0});
    }

    handlePageChange = (event) => {
      //event.preventDefault();
      switch(event.target.value) {
        case "Listing":
          this.setState({currentView: 0});
          break;
        case "Add":
          this.setState({currentView: 1});
          break;
        case "Profile":
          this.setState({currentView: 2});
          break;
        default:
          break;
      }
    }

    render() {
      const View = () => {switch(this.state.currentView) {
        case 0:
          return <div>1</div>;
        case 1:
          return <div>2</div>;
        case 2:
          return <div>3</div>;
        default:
          break;
      }}
      return (
        <div className="container">
          <div className="card text-center col-12" style={{margin: '3em auto 0 auto'}}>
            <div className="card-header">
              <Navbar 
                logout={this.props.logout} 
                search={this.searchDB} 
                current={this.state.currentView}
                changePage={this.handlePageChange} />
            </div>
            <div className="card-body">
              <View />
            </div>
          </div>
        </div>
      );
    }
}