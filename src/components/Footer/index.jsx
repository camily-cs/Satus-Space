import React from "react";
import logo from "../../assets/image/logo.png";
import fonte from "../../assets/image/fonteBranco.png"
import "./style.css";
import { Link } from "react-router-dom";

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import {SiLinktree} from 'react-icons/si'

function Footer(){
    return(
        <footer className="container line">
            <div className="row py-5 text-white">

                <div className="col-lg-3 col-sm-6 col-12 my-lg-5 my-1 text-center">
                    <h3>Contato</h3>
                    <ul className="ul-footer">
                        <li>Termos de Uso</li>
                        <li>Fale Conosco</li>
                        <li>Sobre Nós</li>
                        <li>Termos de Uso</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-sm-6 col-12 my-lg-5 my-1 text-center">
                    <h3>Empresa</h3>
                    <ul className="ul-footer">
                        <li>Seja um de nós</li>
                        <li>Patrocine</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-sm-6 col-12 my-lg-5 my-1 text-center">
                    <h3>Redes Sociais</h3>
                    <ul className="ul-footer-icons">
                        
                        <a target="blank" href="https://github.com/Satus-Space">
                            <li><FaGithub/></li>
                        </a>
                        
                        <a target="blank" href="https://instagram.com/satus_space?igshid=YmMyMTA2M2Y=">
                            <li><FaInstagram/></li>
                        </a>

                        <a target="bank" href="https://linktr.ee/satusspace">
                            <li><SiLinktree/></li>    
                        </a>

                        <li><FaLinkedin/></li>
                        
                    </ul>
                </div>

                <div className="col-3 col-lg-3 col-sm-6 col-12">
                    
                    <img src={logo} className='logo-img-footer d-block py-1 mx-auto' alt="Logo" />

                    <img src={fonte} className='fonte-img-footer d-block py-1 mx-auto' alt="Fonte" />
                    <p className="text-center">Satus Space é uma plataforma de aprendizado na área de tecnologia para pessoas com mais de 40 anos. Para que elas possam iniciar o sonho de trabalhar no ramo de tecnologia. Somos o seu espaço para um novo começo.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;

