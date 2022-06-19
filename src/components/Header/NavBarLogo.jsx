import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";


function NavBarLogo() {
    return(
        <nav class="navbar navbar-expand navbar-dark fixed-top nav-bar-top pt-1">
        

            <div class="container-fluid">

                <Logo/>

            </div>

        </nav>
    )
}

export default NavBarLogo