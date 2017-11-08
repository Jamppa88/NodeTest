import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from '../components/navbar';
import Listing from './subviews/listing';

export default class MainView extends Component {
    state = {
      currentView: 0, 
      loading: false
    }

    searchDB = () => {
      console.log($("#search").val());
      this.setState({currentView: 0});
    }

    handlePageChange = (index) => {
      this.setState({currentView: index});
    }

    render() {
      const View = () => {switch(this.state.currentView) {
        case 0:
          return <Listing />;
        case 1:
          return <div>2</div>;
        case 2:
          return <div>3</div>;
        default:
          break;
      }}
      return (
        <div className="container"  style={{padding: 0}}>
          <div className="card text-center col-12 col-sm-11 col-md-10" style={{margin: '3em auto 0 auto', padding: 0}}>
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