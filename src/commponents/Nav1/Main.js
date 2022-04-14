import React from 'react';
import Regularly from "./Types/Regularly";
import Deep from "./Types/Deep";
import Office from "./Types/Office";
import Windows from "./Types/Windows";
import {deepPage, officePage, windowsPage} from "../Utils/Constants";

const Main = (props) => {

    switch (props.page)
    {
        case deepPage: return(<Deep/>)
        case officePage: return (<Office/>)
        case windowsPage: return (<Windows/>)
        default: return (<Regularly/>)
    }

};

export default Main;