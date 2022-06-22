import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

import { FaSearch } from "react-icons/fa";

/* CSS do componente */
import "./style.css"
import { useState } from "react";

function SearchBar() {

    
    return (
        <>
            <nav class="navbar  d-flex justify-content-between transparent  pt-1">


                <div className="ms-3 d-flex align-items-center">
                    <Logo />
                    <input className="ms-5 d-none d-md-flex" placeholder="Pesquisar..." type="text" />
                </div>


                <Link to="/Perfil">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1660780800&v=beta&t=9ATeY8jmCSuPhhUZ-8wXqMXwdtE4yM9UCOs0Ddgi1y0" className="me-3 d-none d-md-flex perfil-navbar" alt="" />
                </Link>

                <FaSearch className="nav-icon me-3 d-md-none" />


            </nav>
        </>
    )
}

export default SearchBar;

