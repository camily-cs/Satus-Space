import React from "react";
import "./style.css";
import SearchBar from "../../components/SearchBar/index";
import { AiOutlineLeft } from "react-icons/ai"

function Bootcamp() {
    return (
        <>
            <SearchBar />
            
            <div className="container text-white">
                <div className="d-flex my-5">
                    <AiOutlineLeft className="my-auto"/>
                    <h2 className="ms-3">Bootcamps Realizados</h2>
                </div>
               
                <div className="row d-flex justify-content-center">

                    <div className="col-3 p-2 py-4 bootcamp">
                        <img src="https://i.ytimg.com/vi/Ejkb_YpuHWs/maxresdefault.jpg?v=5f8061fa" className="img-fluid" alt="" srcset="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-center col-6 py-4 bootcamp">
                        <div>
                        <h4>Curso de CSS</h4>
                        <p>100% Concluído</p>
                        <p>Nome da empresa, vaga, nome do curso e professores</p>
                        <button className="mx-auto d-block">Certificado</button>
                        </div>
                    </div>
                    
                </div>
            
            </div>

        </>
    )
}


export default Bootcamp;