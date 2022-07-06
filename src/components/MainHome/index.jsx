import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


import logo from "../../../src/assets/image/logo.png"
import fonte from "../../../src/assets/image/fonteBranco.png"


function MainHomepage(){
    return(
        /* <!--Conteúdo Princípal--> */

        <main className="container-fluid text-white">
            <div className="row principal ">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div>
                    {/* Imagen da logo e da fonte */}
                        <img src={logo} className="my-2 img-fluid logo-main d-block mx-auto" alt="Logo da Satus Space"/>
                        <img src={fonte} className="img-fluid fonte-main d-block mx-auto" alt="Satus Space"/>
                    </div>
                    
                    <p>Transformando o público 40+ com a tecnologia.</p>
                    
                    {/* <p>"Se você pensa que não tem mais idade para certas coisas, queremos te dizer que talvez este seja o melhor momento para fazer algumas escolhas."</p> */}

                    <p className="text-white text-center responsive-font "></p>

                    <Link to="/Cadastrar">
                        <button className="d-block mx-auto button my-4">Cadastre-se</button>
                    </Link>
                   

                </div>
            </div>
        </main>

    )
}

export default MainHomepage;