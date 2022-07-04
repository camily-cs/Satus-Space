import React from "react";

import BootcamapsCardVideo from "../../components/BootcamapsCardVideo";

import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar/index";
import Footer from "../../components/Footer";

import { AiOutlineLeft } from "react-icons/ai"
import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"


import "./style.css";
import { useState } from "react";


function BootcampsAndamento() {


    const [escuro, setEscuro] = useState(false)

    const temaBg = {
        backgroundColor: escuro ? "var(--cor50)" : "var(--bgcolor3)",
        color: escuro ? "white" : "black"
    }


    const temaBord = {
        borderColor: escuro ? "white" : "black",
        color: escuro ? "white" : "white"
    }

    const temaCard = {
        backgroundColor: escuro ? "var(--bgcolor)" : "var(--bgcolor4)",
        color: escuro ? "white" : "black"
    }

    function mudarTema() {
        setEscuro(!escuro)
    }



    const extraButton = escuro? <li onClick={mudarTema} style={temaCard}><BsFillMoonFill/>Alterar Tema</li> : <li onClick={mudarTema} style={temaCard}><BsSun/> Alterar Tema</li>

    const [bootcampDados] = useState([
        {
            curso: "Curso de HTML e CSS",
            empresa: "Satus Space",
            thumbnail: "https://i.ytimg.com/vi/Ejkb_YpuHWs/maxresdefault.jpg?v=5f8061fa"
        }

    ])

    return (
        <div className="App" style={temaBg}>
            <SearchBar
            
            extraButton={extraButton}
            styleComponent={temaCard}

            />
            <div className="container bootcamps-andamento">

                <div className="d-flex my-5">
                    <Link to="/Perfil" style={temaBg}>
                        <AiOutlineLeft className="my-auto" />
                        <h2 className="ms-3">Bootcamps em Andamento</h2>
                    </Link>
                </div>

                <div className="row g-5">

                    {bootcampDados.map((bootcamp) => (
                        <BootcamapsCardVideo

                            curso={bootcamp.curso}
                            empresa={bootcamp.empresa}
                            thumbnail={bootcamp.thumbnail}

                        />))}

                </div>
            </div>

            <Footer styleComponent={temaBg}/>

        </div>
    )
};

export default BootcampsAndamento;