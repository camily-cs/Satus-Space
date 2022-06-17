import React from "react";

import "./style.css";

import { RiSuitcaseLine } from "react-icons/ri"

function AgendaBox() {
    return (
        <>
            <li className="mx-auto mt-2 d-flex align-items-center justify-content-center">

                <RiSuitcaseLine />

                <div className="ms-4 text-center">
                    <p>Exntrevisa Empresa X</p>
                    <span>22 Julho - 10:00</span>
                </div>

            </li>
        </>
    )
}

export default AgendaBox;