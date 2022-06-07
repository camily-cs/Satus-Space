import React from "react";


import {FiSearch} from "react-icons/fi";
import {BiBookAlt} from "react-icons/bi";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {FaFacebookSquare} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";

function Perfil(){
  return(
    <>
        <div className="container text-white ">

            <div className="row">

                <section className="col-lg-12 section-perfil mb-3">
                    <h2> Sobre mim </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus quos culpa possimus sunt commodi, consequuntur accusantium. Perferendis deserunt atque quae soluta omnis deleniti ducimus corrupti cumque vero. Ad, incidunt.</p>        

                <h3>Editar dados</h3>

                </section>
            
            </div>

            <div className="row gx-3 gy-3">
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
                <BsLinkedin/>
                <BsGithub/>
                <MdEmail/>
                <FaFacebookSquare/>
                <BsInstagram/>
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
                <FiSearch/><h2>Procurar Vagas</h2>

                <BiBookAlt/><h2>Minha Agenda</h2>  
                    </div>
                    
                </section>

                </div>            
        </div>
    </>
  )  
}

export default Perfil;