import React from 'react';
import './deep.css'
import VAC_CLEAN2 from "../../../img/vac_clean2.png";
import Bottom_column from "../../Bottom_column/Bottom_column";
import GRADIENT2 from "../../../img/Wawe1.png";

const Deep = () => {
    return (
        <div>
            <div className="triangle2"/>
            <div className="gradient02">
                <img src={GRADIENT2} alt="gradient2"/></div>
            <div className="vac_clean2">
                <img src={VAC_CLEAN2} className="vac_clean002" alt="vac_clean2"/>
                <div className="description4">
                    <a className="dp">Deep</a>
                    <div className="desc6"><a className="desc6">
                        When our team comes to you, is managed by the manager.
                        The manager evaluates the duration, checks the quality and
                        answers all your questions.</a></div>
                    <div className="desc7"><a className="desc7">
                        Wipe all accessible surfaces, switches and door handles<br/>
                        Washing windows, mirrors and glass surfaces<br/>
                        Washing furniture inside and outside<br/>
                        Wiping the walls<br/>
                        Washing chandeliers and lamps<br/>
                        We wash the floor, wipe the baseboards and vacuum the carpet<br/>
                        We take out the garbage</a></div>
                    <div><a href="#" className="check_availability1"><button className="btn4">Check availability</button></a></div>
                </div>
            </div>
            <Bottom_column/>
        </div>
    );
};

export default Deep;