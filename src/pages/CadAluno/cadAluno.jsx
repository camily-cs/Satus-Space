import React from "react";
import { Link } from "react-router-dom";

import NavBarFixed from "../../components/Header/NavBarFixed";



function CadAluno(){
    return(
        <>
            <main className="upperPart">

                {/* <!--Barra de Navegação--> */}
                <NavBarFixed/>

                <div className="container-fluid">

                    <div className="row justify-content-center align-items-center vh-forms text-white">

                        {/* <!--Forms de Cadastro--> */}

                        <form className="px-2 col-lg-5 col-md-12 px-5 py-5 my-5 bg-im ">

                            <h3 className="text-center mb-2">Cadastrar aluno</h3>
                            <label className="form-label" htmlFor="">E-mail:</label>
                            <input className="form-control mb-2" type="email" name="" id="" />

                            <label className="form-label" htmlFor="">Confirmar e-mail:</label>
                            <input className="form-control mb-2" type="email" name="" id="" />
                            
                            <label className="form-label mt-2" htmlFor="">Senha:</label>
                            <input className="form-control" type="password" name="" id="" />

                            <label className="form-label mt-2" htmlFor="">Confirmar senha:</label>
                            <input className="form-control" type="password" name="" id="" />
                            

                            <Link className="link" to="/user/area">
                                <button className="d-block mx-auto mt-3 btn-form">Entrar</button>
                            </Link>
                            

                        </form>

                    </div>

                </div>

            </main>
        </>
    );
};

export default CadAluno;