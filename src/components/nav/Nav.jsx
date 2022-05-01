import React from "react";
import "../bootstrap/Bootstrap.css"
import "./Nav.css";
import cerebro from "./cerebro.png";


function Nav(){
    return(
      /* <!--Barra de Navegação--> */
      <nav class="navbar navbar-expand shadow navbar-dark justify-content-center custom ">
        

        <div class="container-fluid">

          {/* <!-- Logo --> */}


            <div class="navbar-nav mx-lg-auto mx-md-auto ">

              {/* <!--Botões de Navegação--> */}
              <a class="nav-link button-a px-lg-4 px-md-4 px-sm-2" aria-current="page" href="./index.html">Home</a>
              <a class="nav-link button-a px-lg-4 px-md-4 px-sm-2" href="#">Sobre nós</a>
              <a class="nav-link button-a px-lg-4 px-md-4 px-sm-2" href="#">Entrar</a>
              <a class="nav-link button-a px-lg-4 px-md-4 px-sm-2" href="./cadastro.html">Cadastrar-se</a>

            </div>

          

        </div>

      </nav>
    )
}
export default Nav;