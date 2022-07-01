import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";



import { AiFillHome } from "react-icons/ai"
import { RiSuitcaseLine } from "react-icons/ri"
import { FaRegCompass } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsGear } from "react-icons/bs"
import { HiOutlineLogout } from "react-icons/hi"
import {BsFillPersonFill} from "react-icons/bs"

import "./style.css";

const HidenSideBar2 = ({ extraButton, id = "hiden-side-bar" , onClose = () =>{}, children}) => {

    const clickFora = (e) => {
        if(e.target.id === id) onClose()
    }

    return (
        <>
            <div id={id} onClick = {clickFora} className="hiden-side-bar">
                <div className="side-bar-nav2">

                    <div className="side-bar-header">
                        <Logo  />
                    </div>


                    <ul>
                        <li>
                            <Link to='/'>
                                <AiFillHome className="mx-2" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/perfil'>
                                <BsFillPersonFill className="mx-2" />
                                Perfil
                            </Link>
                        </li>
                        <li>
                            <Link to="/vagas">
                                <RiSuitcaseLine className="mx-2" />
                                Vagas
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaRegCompass className="mx-2" />
                                Explorar
                            </Link>
                        </li>
                        <li>
                            <Link to="/mensagens">
                                <HiOutlineMail className="mx-2" />
                                Mensagens
                            </Link>
                        </li>


                        <li className="">
                            <Link to="/">
                                <BsGear className="mx-2" />
                                Configurações
                            </Link>
                        </li>

                        <li className="">
                            {extraButton}
                        </li>

                    </ul>

                    <Link className="mx-auto mb-5" to="/">
                        <HiOutlineLogout />
                        Sair
                    </Link>

                </div>
            </div>
        </>
    )
}

export default HidenSideBar2;