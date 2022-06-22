import React from "react";

import {FiPlay} from "react-icons/fi"

import "./style.css";

function BootcamapsCardVideo({curso, empresa, thumbnail}) {
    return (
        <>
            <div className="col-md-4 ">
                <div className="video-box">
                    <img src={thumbnail} className="img-fluid" alt="" />
                    <div className="d-flex align-items-center justify-content-between footer-video p-3">
                        <div>
                            <p>{curso}</p>
                            <p>{empresa}</p>
                        </div>
                        <FiPlay className="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BootcamapsCardVideo;