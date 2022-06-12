import React from "react";
import NavBarLogo from "../components/Header/NavBarLogo";
import "../components/bootstrap/Bootstrap.css";

function Cadastrar(){
    return(
        <>
            <main className="upperPart">

                {/* <!--Barra de Navegação--> */}
                <NavBarLogo/>

                <div className="container-fluid">

                    <div className="row justify-content-center align-items-center vh-forms text-white">

                        {/* <!--Forms de Cadastro--> */}

                        <form className="px-2 col-lg-5 col-md-12 px-5 py-5 my-5 bg-im ">

                            <h3 className="text-center mb-2">Login</h3>
                            <label className="form-label" htmlFor="">E-mail:</label>
                            <input className="form-control mb-2" type="email" name="" id="" />

                            <label className="form-label" htmlFor="">Confirmar e-mail:</label>
                            <input className="form-control mb-2" type="email" name="" id="" />
                            
                            <label className="form-label mt-2" htmlFor="">Senha:</label>
                            <input className="form-control" type="password" name="" id="" />

                            <label className="form-label mt-2" htmlFor="">Confirmar senha:</label>
                            <input className="form-control" type="password" name="" id="" />
                            
                            <button className="d-block mx-auto mt-3 btn-form">Entrar</button>

                        </form>

                    </div>

                </div>

            </main>
        </>
    );
};

export default Cadastrar;