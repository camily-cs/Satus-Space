import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";

import HidenSideBar2 from "../HidenSideBar2";


function NavBar() {

  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  return (
    /* <!--Barra de Navegação--> */
    <nav class="navbar navbar-expand transparent px-3 ">


      <div class="navbar-nav mx-lg-auto d-none d-md-flex">

        {/* <!--Botões de Navegação--> */}
        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2 " to='/' >Home</Link>

        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2 " to='/Sobre' >Sobre Nós</Link>

        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2 " to='/Login' >Entrar</Link>

        <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2 " to='/Cadastrar'>Cadastrar-se</Link>



      </div>

      <GiHamburgerMenu onClick={() => setIsSideBarVisible(true)} className="nav-icon ms-auto d-md-none" />
      {isSideBarVisible ? (<HidenSideBar2 onClose={() => setIsSideBarVisible(false)}> </HidenSideBar2>) : null }





      </nav>
      )
}
      export default NavBar;

      {/* <nav class="navbar navbar-expand navbar-dark fixed-top custom pt-3">
        

        <div class="container-fluid">

            <Link className="" to="/">
                <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                <img className="navbar-fonte d-block" src={fonteBranco} alt="Logo" />
            </Link>
            
      

        </div>

    </nav> */}