import React from "react";

import "./style.css";

import Sidebar from "../../components/SideBar";
import VagaBox from "../../components/VagaBox";
import AgendaBox from "../../components/AgendaBox";

import { RiSuitcaseLine } from "react-icons/ri"



function UserArea() {
    return (
        <>


            <div className="container text-white">
                <div className="row gx-2 gy-2">


                    <div className="col-9 b">

                        <div className="row gx-2 gy-2 ">

                            <div className="col-12 welcome b">

                                <div className="d-flex align-items-center welcome-section px-3">

                                    <div>
                                        <h1>Olá Usuário !</h1>
                                        <p>Tenha um ótimo dia.</p>

                                        {/* Falta a img */}

                                    </div>

                                </div>

                                
                            </div>


                           {/*  Seção vagas */}
                            <div className="col-12 vagas b">

                                <div className="vagas-section">
                                    <div className="d-flex justify-content-between card-header">

                                        <h2>Vagas</h2>
                                        <button className="">Filtro</button> 

                                    </div>
                                    
                                    <div className="card-body p-4">

                                        
                                        <VagaBox/>
                                        <VagaBox/>
                                        {/* Componentizar */}

                                    </div>


                                    <div className="card-footer">
                                    
                                        <p className="text-center" >Encontre mais vagas</p>

                                    </div>
                                </div>


                                
                            </div>
                        </div>

                    </div>

                    <div className="col-3 b">

                        <div className="agenda-section px-3">
                            
                            <h3>Minha Agenda</h3>
                            <ul className=" justify-content-center">

                                {/* Componetizar */}
                                <AgendaBox/>        
                                <AgendaBox/>


                            </ul>

                        </div>

                        

                    </div>



                </div>
            </div>

        </>
    )
}

export default UserArea;