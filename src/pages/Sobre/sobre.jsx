import React from "react";
import "./style.css";
import missao from "../../../src/assets/image/missao.png";
import visao from "../../../src/assets/image/visao.png"
import valores from "../../../src/assets/image/valores.png"

import NavBarLogo2 from "../../components/Header/NavBarLogo2";

function Sobre() {
    return (
        <>
            
            <NavBarLogo2/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center sobre">
                    <div className="text-white text-center">
                        <h1>Sobre nós</h1>
                        <p className="mx-auto" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate quia ratione aperiam dolor, est iure mollitia, aliquam inventore explicabo cumque quos voluptas in perspiciatis voluptatem magni corrupti quam consequatur.</p>
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