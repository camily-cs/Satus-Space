import React from "react";
import "../Bootstrap/Bootstrap.css"
import { Link } from "react-router-dom";
import logo from "../../../src/assets/image/logo.png";


function NavBarLogo() {
    return(
        <nav class="navbar navbar-expand navbar-dark fixed-top custom pt-3">
        

            <div class="container-fluid">

                <Link className="" to="/">
                    <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                    <img className="navbar-fonte d-block" src="assets/image/fonteBranco.png" alt="Logo" />
                </Link>
                
          

            </div>

        </nav>
    )
}

export default NavBarLogo