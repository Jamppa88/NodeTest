import React, { Component } from 'react';

const DeleteModal = (props) => {
    const name = props.data? props.data.name: '';
    return (
        <div className="modal fade" id="delete-modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete monster</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete {name}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger modal-btn" onClick={props.confirm}>Delete</button>
                        <button type="button" className="btn btn-secondary modal-btn" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default DeleteModal;