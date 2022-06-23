import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";

import { GiHamburgerMenu } from "react-icons/gi"

/* CSS do componente */
import "./style.css"

function PerfilBar() {
    return (
        <>
            <nav class="navbar  fixed-top d-flex justify-content-between transparent  pt-1">


                <div className="ms-3 d-flex align-items-center">
                    <Logo />
                </div>
                <Link to='/perfil'>
                    <img src="https://media-exp2.licdn.com/dms/image/C4D03AQERFmUysyUMXQ/profile-displayphoto-shrink_800_800/0/1569545019530?e=1661385600&v=beta&t=pctslMBGgaLu4Ng5r7a9qQ5APo-1YLzHz0OnK4rjBQg" className="me-3 d-none d-md-flex perfil-navbar" alt="" />
                </Link>

                <GiHamburgerMenu className="nav-icon me-3 d-md-none" />


            </nav>
        </>
    )
}

export default PerfilBar;