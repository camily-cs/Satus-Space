import React from "react";
import "./style.css";
import missao from "../../../src/assets/image/missao.png";
import visao from "../../../src/assets/image/visao.png"
import valores from "../../../src/assets/image/valores.png"
import equipe from "../../../src/assets/image/equipe.png"
import NavBarLogo2 from "../../components/Header/NavBarLogo2";

function Sobre() {
    return (
        <>
            <NavBarLogo2 />
            <div className="container-fluid">

                <div className="row sobre">

                    <div className="col-md-6">
                        <h1>Sobre nós</h1>
                        <p className="mx-auto" >
                            A Satus Space tem o propósito de gerar oportunidades e capacitar pessoas de 40 anos ou mais através da educação e da tecnologia ajudando-os a se reinserir no mercado de trabalho.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={equipe} alt="Imagem da equipe" />
                    </div>

                </div>
            </div>
            <div className="container text-white ">
                <div className="row g-5">
                    <div className="col-md-4">

                        <div className="mvv-cont">

                            <div className=" text-center">
                                <img src={missao} alt="Logo" className="mvv mt-5" />
                                <h2>Missão</h2>
                            </div>

                            <p className="px-3 mt-5">Nossa missão é desenvolver pessoas com mais de 40 anos que almejam trabalhar no ramo da tecnologia.</p>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="mvv-cont">

                            <div className="text-center">
                                <img src={visao} alt="Logo" className="mvv mt-5" />
                                <h2>Visão</h2>
                            </div>
                            <p className="px-3 mt-5">Ser a plataforma que possibilite o início de uma nova trajetória profissional no mercado da tecnologia para incluir pessoas com baixas oportunidades.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5 ">
                        <div className="mvv-cont">
                            <div className="text-center">

                                <img src={valores} alt="Logo" className="mvv mt-5" />

                                <h2>Valores</h2>
                            </div>
                            <p className="px-3 mt-5">Inclusão digital, comprometimento, pessoas, inovação, educação, diversidade, ética, transparência.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Sobre; 