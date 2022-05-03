import React from "react";
import '../bootstrap/Bootstrap.css'
import './Footer.css'
import logo from "../image/logo.png"
import fonteBranco from "../image/fonteBranco.png"

function Footer(){
    return(
        <footer className="container line">
            <div className="row py-5 text-white">

                <div className="col-3 text-center my-5">
                    <h3>Contato</h3>
                    <ul>
                        <li>Termos de Uso</li>
                        <li>Fale Conosco</li>
                        <li>Sobre Nós</li>
                        <li>Termos de Uso</li>
                    </ul>
                </div>

                <div className="col-3 my-5">
                    <h3>Empresa</h3>
                    <ul>
                        <li>Seja um de nós</li>
                        <li>Patrocine</li>
                    </ul>
                </div>

                <div className="col-3 my-5">
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li>Git</li>
                        <li>Link</li>
                        <li>Insta</li>
                    </ul>
                </div>

                <div className="col-3">
                    
                    <img src={logo} className='logo-img-footer d-block py-1 mx-auto' alt="Logo" />
                    <img src={fonteBranco} className='fonte-img-footer d-block py-1 mx-auto' alt="Logo" />
                    <p>Satus Space é uma plataforma de aprendizado na área de tecnologia para pessoas com mais de 40 anos. Para que elas possam iniciar o sonho de trabalhar no ramo de tecnologia. Somos o seu espaço para um novo começo.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;

