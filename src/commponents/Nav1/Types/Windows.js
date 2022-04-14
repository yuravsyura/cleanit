import React from 'react';
import './windows.css'
import VAC_CLEAN4 from "../../../img/vac_clean4.png";
import Bottom_column from "../../Bottom_column/Bottom_column";
import GRADIENT2 from '../../../img/Wawe1.png'

const Windows = () => {
    return (
        <div>
            <div className="triangle4"/>
            <div className="gradient04">
            <img src={GRADIENT2} alt="gradient2"/></div>
            <div className="vac_clean4">
                <img src={VAC_CLEAN4} className="vac_clean004" alt="vac_clean4"/>
                <div className="description6">
                    <a className="ws">Windows</a>
                    <div className="desc10"><a className="desc10">
                        The cleaner comes every morning or evening to<br/>
                        restore cleanliness and order.</a></div>
                    <div className="desc11"><a className="desc11">
                        Wipe all accessible surfaces, switches and door handles<br/>
                        Washing windows, mirrors and glass surfaces<br/>
                        Washing furniture inside and outside<br/>
                        Wiping the walls<br/>
                        Washing chandeliers and lamps<br/>
                        We wash the floor, wipe the baseboards and vacuum the carpet<br/>
                        We take out the garbage</a></div>
                    <div><a href="#" className="check_availability3"><button className="btn6">Check availability</button></a></div>
                </div>
            </div>
            <Bottom_column/>
        </div>
    );
};

export default Windows;