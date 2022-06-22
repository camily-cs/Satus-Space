import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/index";
import BootcampCard from "../../components/BootcampCard";

import { Link } from "react-router-dom";

import "./style.css";



import { AiOutlineLeft } from "react-icons/ai"


function Bootcamp() {

    const [bootcampDados] = useState([
        {
            curso: "Curso de HTML e CSS",
            concluido: 100,
            empresa: "Satus Space",
            vaga: "desenvolvedor web",
            prof: "Gustavo Guanabara",
            button: "Continuar"
        },
        

    ])

    return (
        <>
            <SearchBar />
            
            <div className="container text-white">
                <Link className="link" to="/Perfil">
                <div className="d-flex my-5">
                    <AiOutlineLeft className="my-auto"/>
                    <h2 className="ms-3">Bootcamps Realizados</h2>
                </div>
                </Link>
                
               {bootcampDados.map((bootcamp)=>(
                <BootcampCard

                curso={bootcamp.curso}
                concluido={bootcamp.concluido}
                empresa={bootcamp.empresa}
                vaga={bootcamp.vaga}
                prof={bootcamp.prof}
                button={bootcamp.button}

                />))}
                
            
            </div>

        </>
    )
}


export default Bootcamp;