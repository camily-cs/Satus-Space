import React from "react";
import "../bootstrap/Bootstrap.css"
import "../image/logo_fonte.png"
import "./style.css"

import { AiFillHome } from "react-icons/ai";


export const MenuVagas = () => {
    return(
        <div className="container col-md-3 ">
            <img src="./image/logo_fonte.png" alt="" />
            <ul>
                <li><AiFillHome/></li>
            </ul>
        </div>
    )
}
