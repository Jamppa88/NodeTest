import React from 'react';

const ListItem = (props) => {
  return (
    <tr>
      <td className="align-middle">{props.data.name}</td>
      <td className="align-middle">{props.data.mod}</td>
      <td className="align-middle">{props.data.adv}</td>
      <td className="align-middle">{props.data.isPC? 'Yes':'No'}</td>
      <td className="align-middle" style={{minWidth: '95px'}}>
          <button 
            className="btn btn-outline-primary btn-sm" 
            onClick={props.modify.bind(null,props.data.id)}
            style={{padding: '0.3em 0 0 0.2em', width: '3em', height: '3em', marginTop: '0.2em'}}
            disabled={!props.rights}>
              <i className="fa fa-pencil-square-o fa-2x " aria-hidden="true"></i>
          </button>
          <span>   </span>
          <button 
            className="btn btn-outline-danger btn-sm"
            onClick={props.delete.bind(null,props.data)} 
            style={{padding: '0.2em 0 0 0', width: '3em', height: '3em', marginTop: '0.2em'}}
            disabled={!props.rights}>
              <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
          </button>
      </td>
    </tr>
  );
}

export default ListItem;