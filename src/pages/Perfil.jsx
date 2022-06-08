import React from "react";


import { FiSearch } from "react-icons/fi";
import { BiBookAlt } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs"

function Perfil() {
    return (
        <>
            <div className="container text-white ">

                <div className="row gx-2 gy-2">

                    <section className="col-lg-12">
                        <div className="card section-perfil">

                            <div className="card-header px-4">
                                <h2>Sobre mim</h2>
                            </div>
                            
                            <div className="card-body d-flex justify-content-between px-4">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex tempora ipsum error, temporibus libero repellendus atque? Nesciunt hic placeat impedit quas, alias ducimus unde officiis temporibus beatae, cumque adipisci totam.</p>
                                <BsFillPersonFill className="card-icons"/>
                            </div>

                            <div className="card-footer px-4">
                                <h3>Editar dados</h3>
                            </div>
                        
                        </div>

                    </section>

                    <section className="col-lg-6">
                        <div className="section-perfil">

                            <h2>Personalização</h2>
                            <p> Personalize o seu perfil de forma simples, fácil e rápida da forma que você desejar.</p>
                            <h3>Personalizar perfil</h3>

                        </div>
                    </section>

                    <section className="col-lg-6">
                        <div className="section-perfil">

                            <h2>Nível de Perfil</h2>
                            <p> Suba o nível de seu perfíl preenchendo algumas informações que iremos pedir para facilitar sua busca por emprego e bootcamps</p>

                            <h3>Aumente seu nível</h3>

                        </div>
                    </section>

                    <section className="col-lg-6">

                        <div className="section-perfil">

                            <h2> Candidaturas</h2>

                        </div>

                    </section>


                    <section className="col-lg-6">

                        <div className="section-perfil">

                            <h2>Minhas Redes</h2>
                            <BsLinkedin />
                            <BsGithub />
                            <MdEmail />
                            <FaFacebookSquare />
                            <BsInstagram />

                        </div>

                    </section>

                    <section className="col-lg-6">
                        <div className="section-perfil">

                            <h2>Bootcamps em Andamento</h2>
                            <p>Veja os bootcamps que você está cursando no momento.</p>

                            <h3>Acessar</h3>
                        </div>

                    </section>

                    <section className="col-lg-6">
                        <div className="section-perfil">

                            <h2>Bootcamps Realizados</h2>
                            <p>Veja os bootcamps que você já concluiu e os seus certificados.</p>

                            <h3>Acessar</h3>
                        </div>

                    </section>


                    <section className="col-lg-12">
                        <div className="section-perfil">

                            <h2>Mais informações</h2>
                            <FiSearch /><h2>Procurar Vagas</h2>

                            <BiBookAlt /><h2>Minha Agenda</h2>
                        </div>

                    </section>

                </div>

            </div>
        </>
    )
}

export default Perfil;