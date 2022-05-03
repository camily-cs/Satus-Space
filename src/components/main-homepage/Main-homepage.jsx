import React from "react";
import "../bootstrap/Bootstrap.css"
import "./Main-homepage.css";
import logo from "../image/logo.png"
import fonteBranco from "../image/fonteBranco.png"

function MainHomepage(){
    return(
        /* <!--Conteúdo Princípal--> */

        <main className="container-fluid text-white">
            <div className="row justify-content-center align-items-center principal ">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="">

                    {/* Imagen da logo e da fonte */}
                        <img src={logo} className="my-2 img-fluid logo-main d-block mx-auto" alt="Logo da Satus Space"/>
                        <img src={fonteBranco} className="img-fluid fonte-main d-block mx-auto" alt="Satus Space"/>
                    </div>

                    <p className="text-white text-center responsive-font">"Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo."</p>

                    <p className="text-white text-center responsive-font ">-Paulo Freire</p>

                    <button className="d-block mx-auto button my-2">Confira</button>
                </div>
            </div>
        </main>

    )
}

export default MainHomepage;