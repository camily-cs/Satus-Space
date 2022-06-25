import React from "react";

import "./style.css";

import { RiSuitcaseLine } from "react-icons/ri"

function AgendaBox() {
    return (
        <>

            <div className="col-md-12 col-sm-6 mt-3">
                <div className="agenda-box py-1">




                    <div className="col-3 d-flex justify-content-center">

                        <div className="agenda-icon">
                            <RiSuitcaseLine />
                        </div>

                    </div>

                    <div className="col-9">
                        <p>Entrevista Empresa X</p>
                        <p>20 Julho - 9:30</p>
                    </div>



                </div>


            </div>







        </>
    )
}

export default AgendaBox;