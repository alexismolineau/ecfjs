import React from 'react';

import Button from '../Utils/Button';

const Modal = props => {

    return(
        
        props.displayModal ?
        <div className="modal fade show ">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <Button type={"button"} classList={"btn-close"} ariaLabel={"Close"} method={props.handleDisplayModal}/>
                    </div>
                    <div className="modal-body">
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>
                        <p>lorem</p>
                        <p>ipsum</p>

                    </div>
                    <div className="modal-footer">
                        <Button type={"button"} classList={"btn btn-primary"} btnContent={"Fermer"} method={props.handleDisplayModal}/>
                    </div>
                </div>
            </div>
        </div>
        :
        null
        
    )
}

export default Modal