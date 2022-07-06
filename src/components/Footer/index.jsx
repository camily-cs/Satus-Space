import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'

function Footer({styleComponent, fonte, logo }) {
    return (
        <footer className="container line" style={styleComponent} >
            <div className="row py-5">

                <div className="col-lg-3 col-sm-6 col-12 my-lg-5 my-1 text-center">
                    <h3>Contato</h3>
                    <ul className="ul-footer">
                        <li><Link style={styleComponent} to="/termos/uso" className="link" >Termos de Uso</Link></li>
                        <li>Fale Conosco</li>
                        <li> <Link style={styleComponent} to="/sobre" className="link">Sobre Nós</Link> </li>
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

                        <a target="blank" href="https://github.com/Satus-Space" style={styleComponent}>
                            <li><FaGithub /></li>
                        </a>

                        <a target="blank" href="https://instagram.com/satus_space?igshid=YmMyMTA2M2Y=" style={styleComponent}>
                            <li><FaInstagram /></li>
                        </a>

                        <a target="bank" href="https://linktr.ee/satusspace" style={styleComponent}>
                            <li><SiLinktree /></li>
                        </a>
                        

                    </ul>
                </div>

                <div className="col-3 col-lg-3 col-sm-6 col-12">

                    <Link to="/">
                        <img src={logo} className='logo-img-footer d-block py-1 mx-auto ' alt="Logo" />

                        <img src={fonte} className='fonte-img-footer d-block py-1 mx-auto' alt="Fonte" />
                    </Link>

                    <p>Satus Space é uma plataforma de aprendizado na área de tecnologia para pessoas com mais de 40 anos.{/*  Para que elas possam iniciar o sonho de trabalhar no ramo de tecnologia. Somos o seu espaço para um novo começo. */}</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;

