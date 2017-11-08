import React from 'react';

const ListItem = (props) => {
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">Ancient Green Dragon</td>
      <td className="align-middle">Modi</td>
      <td className="align-middle">Disadvantage</td>
      <td className="align-middle">Ei</td>
      <td className="align-middle">
          <button 
            className="btn btn-outline-primary btn-sm" 
            onClick={props.modify}
            style={{padding: '0.3em 0 0 0.2em', width: '3em', height: '3em'}}>
              <i className="fa fa-pencil-square-o fa-2x " aria-hidden="true"></i>
          </button>
          <span>   </span>
          <button 
            className="btn btn-outline-danger btn-sm"
            onClick={props.delete} 
            style={{padding: '0.2em 0 0 0', width: '3em', height: '3em'}}>
              <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
          </button>
      </td>
    </tr>
  );
}

export default ListItem;