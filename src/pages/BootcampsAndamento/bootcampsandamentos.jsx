import React from "react";
import SearchBar from "../../components/SearchBar/index";
import { AiOutlineLeft } from "react-icons/ai"

import {FiPlay} from "react-icons/fi"

import "./style.css";

function BootcampsAndamento() {
    return (
        <>
            <SearchBar/>
            <div className="container text-white">

            <div className="d-flex my-5">
                    <AiOutlineLeft className="my-auto"/>
                    <h2 className="ms-3">Bootcamps em Andamento</h2>
                </div>

                <div className="row g-5">
            
                    <div className="col-md-4 ">
                        <div className="video-box">
                           <img src="https://i.ytimg.com/vi/Ejkb_YpuHWs/maxresdefault.jpg?v=5f8061fa" className="img-fluid" alt="" />
                            <div className="d-flex align-items-center justify-content-between footer-video p-3">
                                <div>
                                <p>Introdução ao Curso</p>
                                <p>Empresa X</p>
                                </div>
                                <FiPlay className=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="video-box">
                           <img src="https://i.ytimg.com/vi/jgQjeqGRdgA/maxresdefault.jpg" className="img-fluid" alt="" />
                            <div className="d-flex align-items-center justify-content-between footer-video p-3">
                                <div>
                                <p>Introdução ao Curso</p>
                                <p>Empresa X</p>
                                </div>
                                <FiPlay className=""/>
                            </div>
                        </div>
                    </div><div className="col-md-4 ">
                        <div className="video-box">
                           <img src="https://i.ytimg.com/vi/xS2D9x8odoE/maxresdefault.jpg" className="img-fluid" alt="" />
                            <div className="d-flex align-items-center justify-content-between footer-video p-3">
                                <div>
                                <p>Introdução ao Curso</p>
                                <p>Empresa X</p>
                                </div>
                                <FiPlay className=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="video-box">
                           <img src="https://images.passeidireto.com/thumbnails/video/93566925/thumb.jpg.large" className="img-fluid" alt="" />
                            <div className="d-flex align-items-center justify-content-between footer-video p-3">
                                <div>
                                <p>Introdução ao Curso</p>
                                <p>Empresa X</p>
                                </div>
                                <FiPlay className=""/>
                            </div>
                        </div>
                    </div><div className="col-md-4 ">
                        <div className="video-box">
                           <img src="https://i.ytimg.com/vi/I_vi2q6sC1k/maxresdefault.jpg" className="img-fluid" alt="" />
                            <div className="d-flex align-items-center justify-content-between footer-video p-3">
                                <div>
                                <p>Introdução ao Curso</p>
                                <p>Empresa X</p>
                                </div>
                                <FiPlay className=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="video-box">
                           <img src="https://i.ytimg.com/vi/reFQrqxOzsg/maxresdefault.jpg" className="img-fluid" alt="" />
                            <div className="d-flex align-items-center justify-content-between footer-video p-3">
                                <div>
                                <p>Introdução ao Curso</p>
                                <p>Empresa X</p>
                                </div>
                                <FiPlay className=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default BootcampsAndamento;