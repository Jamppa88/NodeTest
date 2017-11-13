import React from 'react';
// No need to import jquery, use bootstraps own jquery defined in index.html!
//import $ from 'jquery';

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
            onClick={() => {
              $(".collapse").collapse("hide");
              props.changePage(0);
            }} />
        </li>
        <li className={props.current == 1? "nav-item active": "nav-item"}>
          <input 
            type="button" 
            className="btn btn-link nav-link" 
            value="Add"
            onClick={() => {
              $(".collapse").collapse("hide");
              props.changePage(1);
            }} />
        </li>
        <li className={props.current == 2? "nav-item active": "nav-item"}>
          <input 
            type="button" 
            className="btn btn-link nav-link" 
            value="Profile"
            onClick={() => {
              $(".collapse").collapse("hide");
              props.changePage(2);
            }} />
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
        <input 
          id="search" 
          className="form-control mr-sm-2" 
          type="text"
          onKeyPress={event => {
            if (event.key === "Enter") {
              props.search();
            }
          }} 
          placeholder="Search" 
          aria-label="Search" />
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