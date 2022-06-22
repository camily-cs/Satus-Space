import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/index.jsx";
import PerfilBar from "../../components/PerfilBar/index.jsx";
import PerfilLevel from "../../components/PerfilLevel/index.jsx";

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
import { AiOutlineLeft } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";



function Perfil() {

    const [levelDados] = useState([
        {
            nivel: "prata"
        }
    ])



    return (
        <>

            <PerfilBar />


            <div className="perfil">



                <AiOutlineLeft className="back-arrow" />

                <div className="text-center">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1660780800&v=beta&t=9ATeY8jmCSuPhhUZ-8wXqMXwdtE4yM9UCOs0Ddgi1y0" alt="matheus" />
                    <strong className="mt-2 d-block" >Matheus de França Cardoso</strong>
                    <p>Inscrito desde Fevereiro de 2022</p>
                </div>
            </div>

            <div className="container text-white ">

                <div className="row justify-content-center gx-2 gy-2">

                    <section className="col-lg-10">
                        <div className="section-perfil">

                            <div className="card-header px-4">
                                <h3>Sobre mim</h3>
                            </div>

                            <div className="card-body d-flex justify-content-between px-4">
                                <div className="row">
                                    <div className="col-md-9 col-7">

                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex tempora ipsum error, temporibus libero repellendus atque? Nesciunt hic placeat impedit quas, alias ducimus unde officiis temporibus beatae, cumque adipisci totam.</p>

                                    </div>

                                    <div className="col-md-3 col-5 card-icon">

                                        <div className="circle-icon">
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

                    <section className="col-lg-5">
                        <div className="section-perfil">

                            <div className="card-header">
                                <h3>Personalização</h3>
                            </div>

                            <div className="card-body personalize">
                                <div className="row">

                                    <div className="col-md-6 col-7">
                                        <p>Personalize o seu perfil de forma simples, fácil e rápida da forma que você desejar.</p>
                                    </div>

                                    <div className="col-md-6 col-5 card-icon">
                                        <div className="circle-icon">
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
                        <div className="section-perfil">

                            <div className="card-header">
                                <h3>Nível de Perfil</h3>
                            </div>
                            <div className="card-body personalize">

                                <div className="row">
                                    <div className="col-md-6 col-7">
                                        <p> Suba o nível de seu perfíl preenchendo algumas informações que iremos pedir para facilitar sua busca por emprego e bootcamps</p>
                                    </div>

                                    {levelDados.map((nivel)=>(
                                        <PerfilLevel
                                        
                                        level= {nivel.nivel}

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

                        <div className="section-perfil">

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

                        <div className="section-perfil">

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
                        <div className="section-perfil">

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
                        <div className="section-perfil">

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
                        <div className="section-perfil info mb-5">

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

            <Footer />
        </>
    )
}

export default Perfil;