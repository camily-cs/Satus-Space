import React from "react";
/* import Sidebar from "../components/Sidebar"; */
import { BsSearch } from "react-icons/bs";
import { MdRoom } from "react-icons/md";
import { MdOutlinePaid } from "react-icons/md";

import "../css/vagas.css";


function Vagas() {
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="container bg-dark col-md-9">
        <div className="topContainer">
          <h1>Vagas</h1>
          <img src="" alt="" className="imgUsuario" />
        </div>

        <div className="inputs">
          <div className="input">
            <div className="svgBackground">
              <BsSearch />
            </div>
            <input type="search" placeholder="Cargo" />
          </div>

          {/*  mudar type e colocar option */}
          <div className="input">
            <div className="svgBackground">
              <MdRoom />
            </div>
            <select>
              <option>Estado</option>
              <option value="1">SP</option>
              <option value="1">RJ</option>
              <option value="1">SC</option>
              <option value="1">MG</option>
            </select>
          </div>

          <div className="input">
            <div className="svgBackground">
                <MdOutlinePaid/>
            </div>
            <select>
              <option>Faixa salarial</option>
              <option value="1">De R$ 1.000,00 á R$ 2.000,00</option>
              <option value="1">De R$ 2.000,00 á R$ 3.000,00</option>
              <option value="1">De R$ 3.000,00 á R$ 3.500,00</option>
              <option value="1">Acima de R$ 3.500,00 </option>
            </select>
          </div>
          <button>Pesquisar</button>
          {/* <Vaga/> */}
        </div>

        <div className="form-check form-switch ">
          <input className=" teste form-check-input checkbox" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault"/>
        </div>
      </div>
    </div>
  );
}

export default Vagas;
