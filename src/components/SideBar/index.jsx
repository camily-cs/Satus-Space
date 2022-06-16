import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";

import "./style.css";


import logo from "../../../src/assets/image/logo.png"
import fonteBranco from "../../../src/assets/image/fonteBranco.png"

import "./style.css"

import { AiFillHome } from "react-icons/ai"
import { RiSuitcaseLine } from "react-icons/ri"
import { FaRegCompass } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { FiSun } from "react-icons/fi"
import { BsGear } from "react-icons/bs"
import { HiOutlineLogout } from "react-icons/hi"
import { FaSearch } from "react-icons/fa"

function Sidebar() {
    return (
        <>
            <div className="d-none d-md-flex justify-content-between flex-column = p-3 side-bar fonte ">
                <Link to='/'>
                    <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                    <img className="navbar-fonte d-block mx-auto" src={fonteBranco} alt="Logo" />
                </Link>

                <ul className="ps-2 nav nav-pills flex-column sider-bar-ul">
                    <li className="">
                        <Link className="text-white " to='/'>
                            <AiFillHome className="me-2" />
                            Home
                        </Link>
                    </li>
                    <li className="">
                        <a href="#" className="text-white ">
                            <RiSuitcaseLine className="me-2" />
                            Vagas
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="text-white ">
                            <FaRegCompass className="me-2" />
                            Explorar
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="text-white ">
                            <HiOutlineMail className="me-2" />
                            Mensagens
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="text-white ">
                            <FiSun className="me-2" />
                            Alterar o modo
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="text-white ">
                            <BsGear className="me-2" />
                            Configurações
                        </a>
                    </li>
                </ul>

                <div className="d-flex justify-content-center">
                    <a href="#" className="exit-button">
                        <HiOutlineLogout className="me-1" />
                        Sair
                    </a>

                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-bottom d-flex d-md-none shadow-sm fixed-bottom px-3">


                <RiSuitcaseLine />
                <FaRegCompass />
                <AiFillHome />
                <HiOutlineMail />

                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1660780800&v=beta&t=9ATeY8jmCSuPhhUZ-8wXqMXwdtE4yM9UCOs0Ddgi1y0" alt="" srcset="" />

            </nav>

            <nav class="navbar fixed-top   d-flex justify-content-between transparent  p-3">

                <div className="d-flex d-md-none">
                    <Logo/>
                </div>
                

                <input className="d-none d-md-flex nav-input-form" placeholder="Pesquisar..." type="text" />

                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1660780800&v=beta&t=9ATeY8jmCSuPhhUZ-8wXqMXwdtE4yM9UCOs0Ddgi1y0" className="me-3 d-none d-md-flex perfil-navbar" alt="" />
                <FaSearch className="nav-icon me-3 d-md-none" />

            </nav>
        </>
    );
};
export default Sidebar;