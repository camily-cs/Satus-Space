import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/index";
import BootcampCard from "../../components/BootcampCard";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import "./style.css";

import { AiOutlineLeft } from "react-icons/ai"
import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"


function Bootcamp() {


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



    const extraButton = escuro ? <li onClick={mudarTema} style={temaCard}><BsFillMoonFill />Alterar Tema</li> : <li onClick={mudarTema} style={temaCard}><BsSun /> Alterar Tema</li>


    const [bootcampDados] = useState([
        {
            curso: "Curso de HTML e CSS",
            concluido: 100,
            empresa: "Satus Space",
            vaga: "desenvolvedor web",
            prof: "Gustavo Guanabara",
            button: "Certificado"
        },


    ])

    return (
        <div style={temaBg}>
            <SearchBar

                extraButton={extraButton}
                styleComponent={temaCard}

            />

            <div className="container bootcamps-andamento">

                <div className="d-flex my-5">
                    <Link to="/Perfil" style={temaBg}>
                        <AiOutlineLeft className="my-auto" />
                        <h2 className="ms-3">Bootcamps Realizados</h2>
                    </Link>
                </div>

        
                {bootcampDados.map((bootcamp) => (
                    <BootcampCard

                        curso={bootcamp.curso}
                        concluido={bootcamp.concluido}
                        empresa={bootcamp.empresa}
                        vaga={bootcamp.vaga}
                        prof={bootcamp.prof}
                        button={bootcamp.button}
                        styleComponent={temaCard}

                    />))}

                    


            </div>

            <Footer
            
                    styleComponent={temaBg}
            
            />

        </div>
    )
}


export default Bootcamp;