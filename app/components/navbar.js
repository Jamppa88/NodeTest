import React from 'react';
import $ from 'jquery';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand">D&D MonsterDB</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className={props.current == 0? "nav-item active": "nav-item"}>
          <input 
            type="button" 
            className="btn btn-link nav-link" 
            value="Listing"
            onClick={props.changePage} />
        </li>
        <li className={props.current == 1? "nav-item active": "nav-item"}>
          <input 
            type="button" 
            className="btn btn-link nav-link" 
            value="Add"
            onClick={props.changePage} />
        </li>
        <li className={props.current == 2? "nav-item active": "nav-item"}>
          <input 
            type="button" 
            className="btn btn-link nav-link" 
            value="Profile"
            onClick={props.changePage} />
        </li>
        <li className="nav-item">
          <input 
            type="button" 
            className="btn btn-link nav-link" 
            value="Logout" 
            onClick={props.logout}/>
        </li>
      </ul>
      <div className="form-inline my-2 my-lg-0">
        <input id="search" className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <input 
          className="btn btn-outline-success my-2 my-sm-0" 
          type="button" 
          value="Search"
          onClick={props.search} />
      </div>
    </div>
  </nav>
  );
}

export default Navbar;