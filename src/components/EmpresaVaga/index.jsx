import React from "react";


function EmpresaVaga({bootcamp,thumbnail,prof,quant}) {
    return (
        <>
            <div className="col-md-6 px-4">
                <img src={thumbnail} className="img-fluid imgVaga" alt="" />
                <p>BootCamp {bootcamp}</p>
                <p>Professor: <span>{prof}</span></p>
                <p>Quantidade de Inscritos: <span>{quant}</span></p>
                <button>
                    Mais informações
                </button>
            </div>
        </>
    )
};

export default EmpresaVaga;

