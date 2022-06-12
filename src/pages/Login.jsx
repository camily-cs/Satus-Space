import React from "react";
import NaveBarLogo from "../components/Header/NavBarLogo";
import student from "../components/image/student.png"
import empresa from "/image/empresa.png"


function Login() {
    return (
        <>
            {/* Login Noelia  */}

            <div className="upperPart">
                <NaveBarLogo />
                <div className="container">

                    <div className="row gx-5 justify-content-center align-items-center vh-forms text-white text-center">
                        <h3 className="text-center mb-2">Bem-Vindo a Satus Space!</h3>
                        <p>Qual será o tipo de cadastro?</p>

                        <div className="col-5">
                                <div className="d-flex align-items-center justify-content-center button-cadastro">

                                    <div>
                                        <img src={student} alt="Imagem de um ícone em formato de estudante" className="imagem"/>
                                        <h4>Aluno</h4>
                                    </div>

                                </div>
                        </div>

                        <div className="col-5">
                            <div className="d-flex align-items-center justify-content-center button-cadastro">

                                <div>
                                    <img src={empresa} alt="Imagem de um ícone em formato de uma empresa" className="imagem"/>
                                    <h4>Empresa</h4>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;

