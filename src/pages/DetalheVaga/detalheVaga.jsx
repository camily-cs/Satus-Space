import React from "react";
import "./style.css";

import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { MdArrowBackIosNew } from "react-icons/md";
import NavBarUser from "../../components/Header/NavBarUser";


function DetalheVaga() {
    return (

        <div>
            <NavBarUser />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="vagas-detalhe col-lg-10 col-md-12">

                        <div className="card-header" >
                            <h3>Detalhes da Vaga</h3>
                        </div>
                        <div className="card-body">
                            <h2 className="titleDesc">Analista de dados</h2>

                            <p>Empresa D</p>
                            <p>São Paulo - SP</p>
                            <p>R$ 2000,00 a R$ 2700,00 (Bruto mensal)</p>
                            <p><span className="bold">Número de vagas:</span> 2</p>
                            <p><span className="bold">Tipo de contrato:</span> Efetivo - CLT - Período integral</p>

                            <h4 className="titleDesc">Descrição</h4>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                            <ul>
                                <li>requisito1</li>
                                <li>requisito1</li>
                                <li>requisito1</li>
                                <li>requisito1</li>
                                <li>requisito1</li>
                            </ul>

                            <ul>
                                <li>beneficio1</li>
                                <li>beneficio1</li>
                                <li>beneficio1</li>
                                <li>beneficio1</li>
                                <li>beneficio1</li>
                            </ul>

                            <h4 className="titleDesc">Bootcamp</h4>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>

                        </div>



                    </div>
                </div>
            </div>

            <Footer/>




            {/* <div className="containerDetVaga bg-dark">
                <div className="header">
                    <MdArrowBackIosNew />
                    <img src="" alt="" />
                </div>

                <div className="containerDetalhe">
                    
                    <div>
                        <p>Empresa D</p>
                        <p>São Paulo - SP</p>
                        <p>R$ 2000,00 a R$ 2700,00 (Bruto mensal)</p>
                        <p><span className="bold">Número de vagas:</span> 2</p>
                        <p><span className="bold">Tipo de contrato:</span> Efetivo - CLT - Período integral</p>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Descrição</h4>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Requisitos</h4>
                        <ul>
                            <li>requisito1</li>
                            <li>requisito1</li>
                            <li>requisito1</li>
                            <li>requisito1</li>
                            <li>requisito1</li>
                        </ul>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Benefícios</h4>
                        <ul>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                        </ul>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Bootcamp</h4>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    </div>
                </div>
                <button className="btnCandidatar">Candidatar</button>
            </div> */}
        </div>
    )
}

export default DetalheVaga;