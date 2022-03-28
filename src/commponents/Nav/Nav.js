import React from 'react';
import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <a href="#home" className="home">Home</a>
            <a href="#book" className="book">Book</a>
            <a href="#j_o_t" className="j_o_t">Join our team</a>
            <div className="btt"><a href="#sign_up" className="sign_up"><button className="btn">Sign up</button></a></div>

        </div>


    );
};

export default Nav;