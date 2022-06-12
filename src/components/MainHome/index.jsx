import React from "react";
import "../Bootstrap/Bootstrap.css"
import logo from "../../../src/assets/image/logo.png"


function MainHomepage(){
    return(
        /* <!--Conteúdo Princípal--> */

        <main className="container-fluid text-white">
            <div className="row justify-content-center align-items-center principal ">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="">

                    {/* Imagen da logo e da fonte */}
                        <img src={logo} className="my-2 img-fluid logo-main d-block mx-auto" alt="Logo da Satus Space"/>
                        <img src="assets/image/fonteBranco.png" className="img-fluid fonte-main d-block mx-auto" alt="Satus Space"/>
                    </div>

                    <p className="text-white text-center responsive-font">"Se você pensa que não tem mais idade para certas coisas, queremos te dizer que talvez este seja o melhor momento para fazer algumas escolhas."</p>

                    <p className="text-white text-center responsive-font ">................</p>

                    <button className="d-block mx-auto button my-2">Confira</button>
                </div>
            </div>
        </main>

    )
}

export default MainHomepage;