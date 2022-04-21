import React from 'react';
import LOGO from '../../img/logo.png'
import GRADIENT from '../../img/gradient.png'
import WET_F from '../../img/wet_f.png'
import './header.css'
import Nav from "../Nav/Nav";
import Header1 from "./Header1";



const Header = (props) => {

    return (

        <div className="container">
            <div className="gradient">
                <img src={GRADIENT} alt="gradient"/>
            </div>
            <Nav modal={props.modal} modal1={props.modal1} />
            
            <div className="logo">
                <img src={LOGO} className="logo0" alt="logo"/>
            </div>
            <div className="wet_f">
                <img src={WET_F} className="wet_ff" alt="wet-f"/>
            </div>
            <Header1/>





        </div>

    );
};

export default Header;