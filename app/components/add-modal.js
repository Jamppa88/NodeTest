import React, { Component } from 'react';

const AddModal = (props) => {
    const name = props.name? props.name: '';
    return (
        <div className="modal fade" id="add-modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add monster</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Added {name}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary modal-btn" data-dismiss="modal" onClick={props.back.bind(null, 0)}>Back to Listing</button>
                        <button type="button" className="btn btn-primary modal-btn" data-dismiss="modal">Add another</button>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default AddModal;