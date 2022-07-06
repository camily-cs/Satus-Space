import React, { Component } from "react";

/* CSS do componente */
import "./style.css"

function LogoDinamica({logo,fonte}) {
    return (
        <>
            <div>
                <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                <img className="navbar-fonte d-block" src={fonte} alt="Logo" />
            </div>
        </>
    )
}

export default LogoDinamica