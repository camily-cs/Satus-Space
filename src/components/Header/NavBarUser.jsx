import React from "react";
import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi"

import HidenSideBar from "../HidenSideBar";
import Logo from "../Logo";

function NavBarUser({extraButton}) {

    const [isSideBarVisible, setIsSideBarVisible] = useState(false)

    return (
        /* <!--Barra de Navegação--> */
        <nav class="navbar navbar-expand nav-bar-top d-lg-none mb-2 px-3">

            <Logo/>

            <GiHamburgerMenu  onClick={() => setIsSideBarVisible(true)} className="nav-icon ms-auto" />
            {isSideBarVisible ? (<HidenSideBar extraButton={extraButton} onClose={() => setIsSideBarVisible(false)}> </HidenSideBar>) : null}


        </nav>
    )
}

export default NavBarUser