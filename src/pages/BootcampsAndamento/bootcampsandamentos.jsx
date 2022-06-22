import React from "react";

import BootcamapsCardVideo from "../../components/BootcamapsCardVideo";

import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar/index";

import { AiOutlineLeft } from "react-icons/ai"


import "./style.css";
import { useState } from "react";


function BootcampsAndamento() {

    const [bootcampDados] = useState([
        {
            curso: "Curso de HTML e CSS",
            empresa: "Satus Space",
            thumbnail: "https://i.ytimg.com/vi/Ejkb_YpuHWs/maxresdefault.jpg?v=5f8061fa"
        }
        
    ])

    return (
        <>
            <SearchBar/>
            <div className="container text-white">
                <Link className="link" to="/Perfil">
                <div className="d-flex my-5">
                    <AiOutlineLeft className="my-auto"/>
                    <h2 className="ms-3">Bootcamps em Andamento</h2>
                </div>
                </Link>
                <div className="row g-5">
            
                   {bootcampDados.map((bootcamp)=>(
                    <BootcamapsCardVideo

                    curso={bootcamp.curso}
                    empresa={bootcamp.empresa}
                    thumbnail={bootcamp.thumbnail}

                    />))}

                </div>
            </div>
        </>
    )
};

export default BootcampsAndamento;