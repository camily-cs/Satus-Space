import React from "react";
import { useState } from "react";
import "./style.css";

import Sidebar from "../../components/SideBar";
import AgendaBox from "../../components/AgendaBox";
import BootcampCard from "../../components/BootcampCard";
import Footer from "../../components/Footer/index"
import NavBarUser from "../../components/Header/NavBarUser";


import { RiSuitcaseLine } from "react-icons/ri"

import userArea from "../../../src/assets/image/user-area.png"



function UserArea() {

    const [bootcampDados] = useState([
        {
            curso: "Curso de HTML e CSS",
            concluido: 55,
            empresa: "Satus Space",
            vaga: "desenvolvedor web",
            prof: "Gustavo Guanabara",
            button: "Continuar"
        },


    ])

    return (
        <>
            <NavBarUser/>

            <div className="container-fluid text-white">
                <div className="row gx-2 gy-2">
                    <Sidebar />

                    <div className="col-lg-8 col-md-8">

                        <div className="row gx-2 gy-2 ">

                            <div className="col-lg-12 welcome ">

                                <div className="d-flex align-items-center welcome-section px-3">
                                    <div className="col-8 px-3">
                                        <h1>Olá Usuário !</h1>
                                        <p>Tenha um ótimo dia.</p>
                                    </div>

                                    <div className="col-4">
                                        <img src={userArea} className=" ms-md-5 img-fluid welcome-img" alt="" srcset="" />
                                    </div>

                                    
                                </div>
                            </div>


                            {/*  Seção bootcamps */}
                            <div className="col-lg-12 bootcamp-section ">

                                <div className="bootcamp-section">
                                    <div className="d-flex justify-content-between card-header">

                                        <h3>Bootcamps em andamento</h3>
                                        <button className="">Filtro</button>

                                    </div>

                                    <div className="card-body">


                                        {bootcampDados.map((bootcamp) => (
                                            <BootcampCard

                                                curso={bootcamp.curso}
                                                concluido={bootcamp.concluido}
                                                empresa={bootcamp.empresa}
                                                vaga={bootcamp.vaga}
                                                prof={bootcamp.prof}
                                                button={bootcamp.button}

                                            />))}

                                        {bootcampDados.map((bootcamp) => (
                                            <BootcampCard

                                                curso={bootcamp.curso}
                                                concluido={bootcamp.concluido}
                                                empresa={bootcamp.empresa}
                                                vaga={bootcamp.vaga}
                                                prof={bootcamp.prof}
                                                button={bootcamp.button}

                                            />))}




                                        {/* Componentizar */}



                                    </div>



                                    {/* <div className="card-header">
                                        <h3>Bootcamps recomendados</h3>
                                    </div> */}

                                    {/* <div className="card-body">

                                        {bootcampDados.map((bootcamp) => (
                                            <BootcampCard

                                                curso={bootcamp.curso}
                                                concluido={bootcamp.concluido}
                                                empresa={bootcamp.empresa}
                                                vaga={bootcamp.vaga}
                                                prof={bootcamp.prof}
                                                button={bootcamp.button}

                                            />))}

                                    </div> */}

                                    <div className="card-footer">

                                        <p className="text-center" >Encontre mais Bootcamps</p>

                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 col-md-4 ">

                        <div className="agenda-section px-1">
                            <div className="card-header">
                                <h3>Minha Agenda</h3>
                            </div>
                            <div className="card-body">
                                <div className="row gx-2">

                                    {/* Componetizar */}
                                    <AgendaBox />
                                    <AgendaBox />


                                </div>
                            </div>


                        </div>



                    </div>



                </div>
            </div>

            <Footer/>

        </>
    )
}

export default UserArea;