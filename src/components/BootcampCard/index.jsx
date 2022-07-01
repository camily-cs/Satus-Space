import React from "react";

function BootcampCard({curso , concluido , empresa , vaga , prof, button, styleComponent}) {
    return (
        <>
            <div className="row d-flex justify-content-center" style={styleComponent}>

                <div className="col-lg-5 col-md-5 p-2 py-4 bootcamp">
                    <img src="https://i.ytimg.com/vi/Ejkb_YpuHWs/maxresdefault.jpg?v=5f8061fa" className="img-fluid" alt="" srcset="" />
                </div>

                <div className="d-flex justify-content-center align-items-center  col-lg-7 col-md-7 py-4 bootcamp">
                    <div>
                        <h4>{curso}</h4>
                        <p>{concluido}%</p>
                        <p>{empresa}, {vaga}, {curso} e {prof}</p>
                        <button className="mx-auto d-block">{button}</button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default BootcampCard;