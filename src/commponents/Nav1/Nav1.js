import React from 'react';
import "./nav1.css"
// import Windows from "./Types/Windows";
// import Deep from "./Types/Deep";
// import Office from "./Types/Office";
// import Regularly from './Types/Regularly'
import {deepPage, officePage, regularlyPage, windowsPage} from "../Utils/Constants";
// import TRIANGLE2 from '../../img/triangle2.svg'

const Nav1 = (props) => {
    return (
        <div className="rectangle">
            <div className="nav_bar">
                <a className="regularly" onClick={() => props.changePage(regularlyPage)} >Regularly Cleaning</a>
                <a className="deep" onClick={() => props.changePage(deepPage)}>Deep Cleaning</a>
                <a className="office" onClick={() => props.changePage(officePage)}>Office Cleaning</a>
                <a className="windows" onClick={() => props.changePage(windowsPage)}>Windows Cleaning</a>
            </div>
            <div className="rectangle2"/>



            {/*<div className="triangle"/>*/}
            {/*<Regularly />*/}
            {/*<Deep/>*/}
            {/*<Office/>*/}
            {/*<Windows/>*/}
        </div>
    );
};

export default Nav1;