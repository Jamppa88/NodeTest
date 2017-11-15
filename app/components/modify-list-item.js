import React from 'react';

const ModListItem = (props) => {
  if (!props.rights) {
    return (
      <tr>
        <td colSpan="5">You dirty little hacker ;)</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td className="align-middle"><input type="text" className="form-control form-control-sm modify-box modify-input" name="name" defaultValue={props.data.name} /></td>
        <td className="align-middle"><input type="number" className="form-control form-control-sm modify-box modify-input" name="mod" style={{maxWidth: '4em'}} defaultValue={props.data.mod} /></td>
        <td className="align-middle">
          <select className="form-control form-control-sm modify-box modify-input" name="adv" defaultValue={props.data.adv} >
            <option value="normal">Normal</option>
            <option value="adv">Advantage</option>
            <option value="disadv">Disadvantage</option>
          </select>
        </td>
        <td className="align-middle align-content-center align-items-center align-self-center" >
          <input type="checkbox" className="checkbox modify-box modify-input" name="isPC" style={{height: '1.8em', width: '1.8em'}} defaultChecked={props.data.isPC} />
        </td>
        <td className="align-middle" style={{minWidth: '95px'}}>
            <button 
              className="btn btn-success btn-sm modify-box" 
              onClick={props.save}
              style={{padding: '0.2em 0 0 0', width: '3em', height: '3em', marginTop: '0.2em'}}>
                <i className="fa fa-floppy-o fa-2x " aria-hidden="true"></i>
            </button>
            <span>   </span>
            <button 
              className="btn btn-outline-warning btn-sm modify-box"
              onClick={props.cancel} 
              style={{padding: '0.2em 0 0 0', width: '3em', height: '3em', marginTop: '0.2em'}}>
                <i className="fa fa-ban fa-2x" aria-hidden="true"></i>
            </button>
            <input type="hidden" value={props.data.id} className="modify-input" name="id" />
        </td>
      </tr>
    );
  }
  
}

export default ModListItem;