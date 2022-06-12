import React from "react";
import "./style.css";

import logo from "../../../src/assets/image/logo.png"
import fonteBranco from "../../../src/assets/image/fonteBranco.png"

import { AiFillHome } from "react-icons/ai"
import { RiSuitcaseLine } from "react-icons/ri"
import { FaRegCompass } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { FiSun } from "react-icons/fi"
import { BsGear } from "react-icons/bs"
import { HiOutlineLogout } from "react-icons/hi"

function Sidebar() {
    return (
        <>
            <div className="d-flex justify-content-between flex-column flex-shrink-0 p-3 teste fonte ">
                <a href="/">
                    <img className="my-1 navbar-logo d-block mx-auto" src={logo} alt="Logo" />
                    <img className="navbar-fonte d-block mx-auto" src={fonteBranco} alt="Logo" />
                </a>

                <ul className="ps-2 nav nav-pills flex-column sider-bar-ul">
                    <li className="">
                        <a href="#" className=" text-white" aria-current="page">
                            <AiFillHome className="me-2" />
                            Home
                        </a>
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
        </>
    );
};
export default Sidebar;