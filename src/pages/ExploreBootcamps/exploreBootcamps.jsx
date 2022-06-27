import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar";

import { AiOutlineLeft } from "react-icons/ai"

function ExploreBootcamps() {
    return (
        <>
            <SearchBar />

            <div className="container text-white">

                <div className="d-flex my-5">
                    <Link className="link d-flex" to="/Perfil">
                        <AiOutlineLeft className="my-auto" />
                        <h2 className="ms-3">Bootcamps Realizados</h2>
                    </Link>
                </div>





            </div>
        </>
    )
}

export default ExploreBootcamps;