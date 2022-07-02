import React from "react";
import "./style.css";
import Sidebar from "../../components/SideBar";
import Vaga from "../../components/VagaBox";
import { BsSearch } from "react-icons/bs";
import { MdRoom } from "react-icons/md";
import { MdOutlinePaid } from "react-icons/md";
import NavBarUser from "../../components/Header/NavBarUser";
import BootcampCard from "../../components/BootcampCard";
import { useState } from "react";
import {BsFillMoonFill} from 'react-icons/bs';
import {BsSun} from 'react-icons/bs';
import { Link } from "react-router-dom";

function Vagas() {
  const [bootcampDados] = useState([
    {
      curso: "Curso de HTML e CSS",
      concluido: 55,
      empresa: "Satus Space",
      vaga: "desenvolvedor web",
      prof: "Gustavo Guanabara",
      button: "Continuar",
    },
  ]);

  /*inicio light e dark mode */
  const [escuro, setEscuro] = useState(false)

  const temaBg = {
      backgroundColor: escuro ? "var(--cor50)" : "var(--bgcolor3)",
      color: escuro ? "white" : "black"
  }

  const extraButton = escuro ? <Link to="#" onClick={mudarTema}> <BsFillMoonFill className="mx-2" /> Alterar Tema</Link> : <Link to="#" onClick={mudarTema}>< BsSun className="mx-2" /> Alterar Tema</Link>


  const temaCard = {
      backgroundColor: escuro ? "var(--bgcolor)" : "var(--bgcolor4)",
      color: escuro ? "white" : "black"
  }

  function mudarTema() {
      setEscuro(!escuro)
  }
/*fim light e dark mode */


  return (
    
    <div className="App" style={temaBg}>
      <NavBarUser />

      <div className="container-fluid">
        <div className="row">
          <Sidebar 
            extraButton={extraButton}
          />
          <div className="col-lg-10 col-md-12  vagas-main " style={temaCard}>
            <div className="card-header">
              <h3>Bootcamps</h3>
              <div className="inputs">
                <div className="input">
                  <div className="svgBackground">
                    <BsSearch />
                  </div>
                  <input type="search" placeholder="Cargo" />
                </div>


                <div className="input">
                  <div className="svgBackground">
                    <MdRoom />
                  </div>
                  <select>
                    <option>Estado</option>
                    <option value="1">AC</option>
                    <option value="2">AL</option>
                    <option value="3">AP</option>
                    <option value="4">AM</option>
                    <option value="5">BA</option>
                    <option value="6">CE</option>
                    <option value="7">DF</option>
                    <option value="8">ES</option>
                    <option value="9">GO</option>
                    <option value="10">MA</option>
                    <option value="11">MT</option>
                    <option value="12">MS</option>
                    <option value="13">MG</option>
                    <option value="14">PA</option>
                    <option value="15">PB</option>
                    <option value="16">PR</option>
                    <option value="17">PE</option>
                    <option value="18">PI</option>
                    <option value="19">RJ</option>
                    <option value="20">RN</option>
                    <option value="21">RS</option>
                    <option value="22">RO</option>
                    <option value="23">RR</option>
                    <option value="24">SC</option>
                    <option value="25">SP</option>
                    <option value="26">SE</option>
                    <option value="27">TO</option>
                  </select>
                </div>

                <div className="input">
                  <div className="svgBackground">
                    <MdOutlinePaid />
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
              </div> 
            </div>
            <div className="card-body">

              {bootcampDados.map((bootcamp) => (
                <BootcampCard
                  /* dark e light mode */
                  styleComponent={temaCard}

                  /* dados do curso */
                  curso={bootcamp.curso}
                  concluido={bootcamp.concluido}
                  empresa={bootcamp.empresa}
                  vaga={bootcamp.vaga}
                  prof={bootcamp.prof}
                  button={bootcamp.button}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vagas;
