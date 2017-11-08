import React from 'react';

const ModListItem = (props) => {
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle"><input type="text" className="form-control form-control-sm" defaultValue="Nimi" /></td>
      <td className="align-middle"><input type="number" className="form-control form-control-sm" defaultValue="0" /></td>
      <td className="align-middle">
        <select className="form-control form-control-sm" >
          <option>Normal</option>
          <option>Advantage</option>
          <option>Disadvantage</option>
        </select>
      </td>
      <td className="align-middle">
        <select className="form-control form-control-sm" >
          <option>No</option>
          <option>Yes</option>
        </select>
      </td>
      <td className="align-middle">
          <button 
            className="btn btn-outline-success btn-sm" 
            onClick={props.modify}
            style={{padding: '0.2em 0 0 0', width: '3em', height: '3em'}}>
              <i className="fa fa-floppy-o fa-2x " aria-hidden="true"></i>
          </button>
          <span>   </span>
          <button 
            className="btn btn-outline-warning btn-sm"
            onClick={props.delete} 
            style={{padding: '0.2em 0 0 0', width: '3em', height: '3em'}}>
              <i className="fa fa-ban fa-2x" aria-hidden="true"></i>
          </button>
      </td>
    </tr>
  );
}

export default ModListItem;