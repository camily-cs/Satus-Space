import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../src/assets/image/logo.png";
import fonte from "../../../src/assets/image/fonteBranco.png";

import {GiHamburgerMenu} from "react-icons/gi"
import HidenSideBar2 from "../HidenSideBar2"; 

import "./Nav.css"


function NavBarLogoColor() {

    const [isSideBarVisible, setIsSideBarVisible] = useState(false)

    return (
        <>
            {/* Barra de Navegação */}
            <nav class="navbar navbar-expand nav-bar-top align-self-start justify-content-center">


                <div class="container-fluid">


                    <Link className="logo-nav-bar-top" to="/">
                        <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                        <img className="navbar-fonte d-block" src={fonte} alt="Logo" />
                    </Link>


                    <div class="navbar-nav mx-lg-auto ms-md-auto d-none d-md-flex ">

                        {/* <!--Botões de Navegação--> */}
                        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/' >Home</Link>

                        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/' >Sobre Nós</Link>

                        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/Login' >Entrar</Link>

                        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/Cadastrar'>Cadastrar-se</Link>

                        

                    </div>

                    <GiHamburgerMenu onClick={() => setIsSideBarVisible(true)} className="nav-icon ms-auto d-md-none" />
                    {isSideBarVisible ? (<HidenSideBar2 onClose={() => setIsSideBarVisible(false)}> </HidenSideBar2>) : null}



                </div>

            </nav>
        </>
    )
}

export default NavBarLogoColor;