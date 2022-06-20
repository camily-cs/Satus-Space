import React from "react";
import NaveBarLogo from "../../components/Header/NavBarLogo";
import estudante from "../../../src/assets/image/student.png"
import empresa from "../../../src/assets/image/empresa.png";

import "./style.css";

import { Link } from "react-router-dom";


function Login() {
    return (
        <>
            {/* Login Noelia  */}

            <div className="upperPart">
                <NaveBarLogo />
                <div className="container">

                    <div className="row gx-4 gy-1 justify-content-center align-items-center vh-forms text-white text-center">


                        <div className="col-md-8" >
                            <h3 className="text-center mb-2">Bem-Vindo a Satus Space!</h3>
                            <h4>Quem está fazendo login ?</h4>
                        </div>



                        <div className="col-md-5">
                            <Link className="link" to='/login/aluno'>
                                <div className="d-flex align-items-center justify-content-center button-cadastro">

                                    <div>
                                        <img src={estudante} alt="Imagem de um ícone em formato de estudante" className="imagem" />
                                        <h4>Aluno</h4>
                                    </div>

                                </div>
                            </Link>
                        </div>


                        <div className="col-md-5">
                            <Link className="link" to='/login/empresa'>
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

        </>
    );
};

export default Login;

