import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";


function NavBarLogo() {
    return(
        <nav class="navbar navbar-expand transparent fixed-top pt-3">
        

            <div class="container-fluid">

                <Logo/>

            </div>

        </nav>
    )
}

export default NavBarLogo