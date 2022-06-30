import React from "react";
import NavBarFixed from "../../components/Header/NavBarFixed";
import estudante from "../../../src/assets/image/student.png"
import empresa from "../../../src/assets/image/empresa.png";

import "./style.css";

import { Link } from "react-router-dom";


function Cadastrar() {
    return (
        <>

            <div className="upperPart">
                <NavBarFixed/>
                <div className="container">

                    <div className="vh-forms text-white d-flex justify-content-center align-items-center">

                        <div className="row gy-2 button-cad">

                            <h3 className="text-center mb-2">Bem-Vindo a Satus Space!</h3>
                            <h4>Quem está se cadastrando?</h4>

                            <div className="col-md-5">


                                <Link className="link" to='/cadastrar/aluno'>
                                    <div className="d-flex align-items-center justify-content-center button-cadastro">

                                        <div>
                                            <img src={estudante} alt="Imagem de um ícone em formato de estudante" className="imagem" />
                                            <h4>Aluno</h4>
                                        </div>

                                    </div>
                                </Link>
                            </div>


                            <div className="col-md-5">
                                <Link className="link" to='/cadastrar/empresa'>
                                    <div className="d-flex align-items-center justify-content-center button-cadastro">

                                        <div>
                                            <img src={empresa} alt="Imagem de um ícone em formato de uma empresa" className="imagem" />
                                            <h4>Empresa</h4>
                                        </div>

                                    </div>
                                </Link>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Cadastrar;

