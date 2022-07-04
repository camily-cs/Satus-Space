import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/index.jsx";
import PerfilBar from "../../components/PerfilBar/index.jsx";
import PerfilLevel from "../../components/PerfilLevel/index.jsx";

import HtmlMedal from "../../components/Medal/htmlMedal.jsx";
import JavaMedal from "../../components/Medal/javaMedal.jsx";
import CssMedal from "../../components/Medal/cssMedal.jsx";
import JsMedal from "../../components/Medal/jsMedal.jsx";
import ReactMedal from "../../components/Medal/reactMedal.jsx";

/* CSS da página */
import "./style.css"


import { FiSearch } from "react-icons/fi";
import { BiBookAlt } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { BiPencil } from "react-icons/bi";

import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"





function Perfil() {


    const [escuro, setEscuro] = useState(false)

    const temaBg = {
        backgroundColor: escuro ? "var(--cor50)" : "var(--bgcolor3)",
        color: escuro ? "white" : "black"
    }


    const temaBord = {
        borderColor: escuro ? "white" : "black",
        color: escuro ? "white" : "white"
    }

    const temaCard = {
        backgroundColor: escuro ? "var(--bgcolor)" : "var(--bgcolor4)",
        color: escuro ? "white" : "black"
    }

    const logo = escuro ?  logoBranco : logoAzul
    const fonte = escuro ?  fonteBranco : fonteAzul

    function mudarTema() {
        setEscuro(!escuro)
    }

    const [levelDados] = useState([
        {
            nivel: "prata"
        }
    ])

    const buttonTheme = escuro ? <BsFillMoonFill/> : <BsSun/>



    return (
        <div className="App" style={temaBg}>



            <PerfilBar styleComponent={temaCard} />


            <div className="perfil">
                <div className="text-center mt-5">
                    <img src="https://media-exp2.licdn.com/dms/image/C4D03AQERFmUysyUMXQ/profile-displayphoto-shrink_800_800/0/1569545019530?e=1661385600&v=beta&t=pctslMBGgaLu4Ng5r7a9qQ5APo-1YLzHz0OnK4rjBQg" alt="Aurora" />

                    <strong className="mt-2 d-block" >Aurora Maria Seles</strong>
                    <p>Inscrito desde Fevereiro de 2022</p>

                    <div className="alterar-modo-button" onClick={mudarTema} style={temaBg}>
                        {buttonTheme}
                    </div>

                </div>



            </div>

            

            <div className="container text-white ">

                <div className="row justify-content-center gx-2 gy-2">

                    <section className="col-lg-10">
                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header px-4">
                                <h3>Sobre mim</h3>
                            </div>

                            <div className="card-body d-flex justify-content-between px-4">
                                <div className="row">
                                    <div className="col-md-9 col-7">

                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex tempora ipsum error, temporibus libero repellendus atque? Nesciunt hic placeat impedit quas, alias ducimus unde officiis temporibus beatae, cumque adipisci totam.</p>

                                    </div>

                                    <div className="col-md-3 col-5 card-icon">

                                        <div className="circle-icon" style={temaBord}>
                                            <BsFillPersonFill />
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="card-footer px-4">
                                <h4>Editar dados</h4>
                            </div>

                        </div>

                    </section>

                    <section className="col-lg-10">
                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header px-4">
                                <h3>Sobre mim</h3>
                            </div>

                            <div className="card-body px-4">
                                <div className="row">
                                    <div className="col-12 medal-icons" >

                                        <HtmlMedal />
                                        <JavaMedal />
                                        <CssMedal />
                                        <JsMedal />
                                        <ReactMedal />

                                    </div>
                                </div>

                            </div>

                            <div className="card-footer px-4">
                                <h4>Editar dados</h4>
                            </div>

                        </div>

                    </section>

                    <section className="col-lg-5">
                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header">
                                <h3>Personalização</h3>
                            </div>

                            <div className="card-body personalize">
                                <div className="row">

                                    <div className="col-md-6 col-7">
                                        <p>Personalize o seu perfil de forma simples, fácil e rápida da forma que você desejar.</p>
                                    </div>

                                    <div className="col-md-6 col-5 card-icon">
                                        <div className="circle-icon" style={temaBord}>
                                            <BiPencil />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">
                                <h4>Personalizar perfil</h4>
                            </div>

                        </div>
                    </section>

                    <section className="col-lg-5">
                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header">
                                <h3>Nível de Perfil</h3>
                            </div>
                            <div className="card-body personalize">

                                <div className="row">
                                    <div className="col-md-6 col-7">
                                        <p> Suba o nível de seu perfíl preenchendo algumas informações que iremos pedir para facilitar sua busca por emprego e bootcamps</p>
                                    </div>

                                    {levelDados.map((nivel) => (
                                        <PerfilLevel
                                            styleComponent={temaBord}
                                            level={nivel.nivel}

                                        />
                                    ))}



                                </div>


                            </div>

                            <div className="card-footer">
                                <h4>Aumente seu nível</h4>
                            </div>


                        </div>
                    </section>

                    <section className="col-lg-5">

                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header">
                                <h3> Candidaturas</h3>
                            </div>

                            <div className="card-body candidatura personalize ">


                                <ol>
                                    <li><span>10</span>Enviados</li>
                                    <li><span>5</span>Em processo</li>
                                    <li><span>1</span>Finalista</li>
                                </ol>


                            </div>

                        </div>

                    </section>


                    <section className="col-lg-5">

                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header">
                                <h3>Minhas Redes</h3>
                            </div>

                            <div className="card-body personalize px-md-5">

                                <ul className="d-flex justify-content-around">
                                    <li><BsLinkedin /></li>
                                    <li><BsGithub /></li>
                                    <li><MdEmail /></li>

                                </ul>
                                <ul className="mx-5 d-flex justify-content-around">
                                    <li><FaFacebookSquare /></li>
                                    <li><BsInstagram /></li>
                                </ul>

                            </div>



                        </div>

                    </section>

                    <section className="col-lg-5">
                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header">
                                <h3>Bootcamps em Andamento</h3>
                            </div>

                            <div className="card-body">
                                <p>Veja os bootcamps que você está cursando no momento.</p>
                            </div>
                            <Link className="link" to="/Bootcamp/Andamento">
                                <div className="card-footer">
                                    <h4>Acessar</h4>
                                </div>
                            </Link>

                        </div>

                    </section>

                    <section className="col-lg-5">
                        <div className="section-perfil" style={temaCard}>

                            <div className="card-header">
                                <h3>Bootcamps Realizados</h3>
                            </div>

                            <div className="card-body">
                                <p>Veja os bootcamps que você já concluiu e os seus certificados.</p>
                            </div>
                            <Link className="link" to="/Bootcamp">
                                <div className="card-footer">
                                    <h4>Acessar</h4>
                                </div>
                            </Link>

                        </div>

                    </section>


                    <section className="col-lg-10">
                        <div className="section-perfil info mb-5" style={temaCard}>

                            <div className="card-header">
                                <h3>Mais informações</h3>
                            </div>
                            <div className="card-body">
                                <div className="more-info">

                                    <div>
                                        <FiSearch className="" /><h4>Procurar Vagas</h4>
                                    </div>



                                    <IoIosArrowForward className="ms-auto" />

                                </div>

                                <div className="more-info">
                                    <div>
                                        <BiBookAlt className="me-2" /><h4>Minha Agenda</h4>
                                    </div>

                                    <IoIosArrowForward className="ms-auto" />

                                </div>
                            </div>


                        </div>

                    </section>

                </div>

            </div>

            <Footer
            
                styleComponent={temaBg}
                fonte={fonte}
                logo={logo}
            
            />
        </div>
    )
}

export default Perfil;