import React, { Component } from "react";

import logo from "../../../src/assets/image/logo.png";
import fonte from "../../../src/assets/image/fonteBranco.png";

/* CSS do componente */
import "./style.css"

function Logo() {
    return (
        <>
            <div>
                <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                <img className="navbar-fonte d-block" src={fonte} alt="Logo" />
            </div>
        </>
    )
}

export default Logo