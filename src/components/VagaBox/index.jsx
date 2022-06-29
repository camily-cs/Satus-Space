import React from "react";

import "./style.css"

function VagaBox() {
    return (
        <>
            <div className="row vaga-box p-3 mt-2">
                <div className="col-md-4 col-6 fw-bold ">Analista de dados</div>
                <div className="col-md-2 col-6 text-muted">São-Paulo-SP</div>
                <div className="col-md-4 col-6 text-muted">Empresa D</div>
                <div className="col-md-2 col-6"><button>Candidatar</button></div>
            </div>
        </>
    )
}

export default VagaBox;