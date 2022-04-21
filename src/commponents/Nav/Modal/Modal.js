import React from 'react';
import './modal.css'
import Regis from "./Forms/RegUser/regis";




const Modal = props => {

    return (
        <div className={`modal_wrapper > ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className='modal_body'>
                <div className='modal_close' onClick={props.onModalClose}>x</div>
                <h2>{props.title}</h2>
                <hr />
                {props.children}
                <Regis/>
            </div>
        </div>
    );
};

export default Modal;