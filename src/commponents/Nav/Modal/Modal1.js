import React from 'react';
import './modal.css'
import WorkForms1 from "./Forms/WorkForms1";

const Modal1 = props => {
    return (
        <div className={`modal_wrapper > ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className='modal_body'>
                <div className='modal_close' onClick={props.onModalClose}>x</div>
                <h2>{props.title}</h2>
                <hr />
                <WorkForms1 />
                {props.children}
            </div>
        </div>
    );
};

export default Modal1;