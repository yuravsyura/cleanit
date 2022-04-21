

import React from 'react';
import VAC_CLEAN from '../../../img/vac_clean.png'
import './regularly.css'
import Bottom_column from "../../Bottom_column/Bottom_column";
import GRADIENT2 from "../../../img/Wawe1.png";
const Regularly = () => {
    return (
        <div>
            <div className="triangle"/>
            <div className="gradient01">
                <img src={GRADIENT2} alt="gradient2"/></div>
            <div className="vac_clean">
                <img src={VAC_CLEAN} className="vac_clean001" alt="vac_clean"/>
                <div className="description2">
                    <a className="rl">REGULARLY</a>
                   <div className="desc3"><a className="desc3">
                        This is our standard – what we do with every order.
                        We can also add custom services to customize your cleaning offer.</a></div>
                    <div className="desc4"><a className="desc4">
                        We wash the floor and wipe the baseboards<br/>
                        Carpets vacuuming (with your vacuum cleaner if you don’t have a<br/>
                        vacuum cleaner don’t worry, we brush carpets)<br/>
                            Wipe all accessible surfaces<br/>
                            Wipe the switches and door handles<br/>
                            We clean mirrors and glass surfaces<br/>
                            We collect and take out the garbage</a></div>
                    <div><a href="#" className="check_availability"><button className="btn3">Check availability</button></a></div>
                </div>
            </div>
            <Bottom_column/>
        </div>
            

    );
};

export default Regularly;