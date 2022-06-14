import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/image/logo.png";
import fonte from "../../../src/assets/image/fonteBranco.png";

/* CSS do componente */
import "./style.css"

function Logo(){
    return(
        <>
            <Link className="" to="/">
                <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                <img className="navbar-fonte d-block" src={fonte} alt="Logo" />
            </Link>
        </>
    )
}

export default Logo