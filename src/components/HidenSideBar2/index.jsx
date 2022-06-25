import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./style.css";

const HidenSideBar = ({ id = "hiden-side-bar" , onClose = () =>{}, children}) => {

    const clickFora = (e) => {
        if(e.target.id === id) onClose()
    }

    return (
        <>
            <div id={id} onClick = {clickFora} className="hiden-side-bar">
                <div className="side-bar-nav">

                    <div className="side-bar-header">
                        <Logo  />
                    </div>

                    <ul>
                        {children}
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre" className="link">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link to="/login" className="link">Entrar</Link>
                        </li>
                        <li>
                            <Link to="/cadastrar" className="link">Cadastrar-se</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default HidenSideBar;