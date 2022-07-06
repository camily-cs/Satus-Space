import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import DropdownPerfil from "../DropdownPerfil";

import { GiHamburgerMenu } from "react-icons/gi"

/* CSS do componente */
import "./style.css"

function PerfilBar({styleComponent}) {

    const [isDropDownVisible, setDropDownVisible] = useState(false)

    return (
        <>
            <nav class="navbar-perfil  pt-1">

                <Link to="/user/area">
                    <div className="py-2 ps-2 d-flex">
                        <Logo />
                    </div>
                </Link>

                
                    
                    <div className="ms-auto">

                    <img src="https://media-exp2.licdn.com/dms/image/C4D03AQERFmUysyUMXQ/profile-displayphoto-shrink_800_800/0/1569545019530?e=1661385600&v=beta&t=pctslMBGgaLu4Ng5r7a9qQ5APo-1YLzHz0OnK4rjBQg"  onClick={() => setDropDownVisible(true)} className="me-3  d-none d-md-flex perfil-navbar" />

                    

                    </div >

                    {isDropDownVisible ? (<DropdownPerfil styleComponent={styleComponent}  onClose={() => setDropDownVisible(false)}> </DropdownPerfil>) : null}

                    
                    
                    

                    

                    
                

                <GiHamburgerMenu className="nav-icon me-3 d-md-none" />


            </nav>
        </>
    )
}

export default PerfilBar;