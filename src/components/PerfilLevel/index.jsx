import React from "react";
import { BiMedal } from "react-icons/bi"


function PerfilLevel({level, styleComponent}) {
    return (
        
            <div className="col-md-6 col-5 card-icon" >
                <div className={level} style={styleComponent}>
                    <BiMedal />
                    <span>{level}</span>
                </div>
            </div>
        
    )
}

export default PerfilLevel;