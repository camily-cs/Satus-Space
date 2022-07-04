import { Link } from "react-router-dom";
import "./style.css";

function BootcampBox({bootcamp , empresa , tecnologias ,  button, styleComponent}) {
  return (
    <div>
      <div className="row d-flex bootcamp" style={styleComponent}>
        <div className="col-lg-3  p-2 py-4  ">
          <img src="https://i.ytimg.com/vi/Ejkb_YpuHWs/maxresdefault.jpg?v=5f8061fa" className="img-fluid " alt="imgBootcamp"/>
        </div>

        <div className="d-flex justify-content-center align-items-center  col-lg-7 col-md-7 py-4 ">
          <div>
            <h4>{bootcamp}</h4>
            <progress value="70" max="100" className="barraProgresso">70 %</progress>
            <p>{bootcamp}, {empresa}, {tecnologias}</p>
            <Link to='/DetalheVaga'></Link><button className="mx-auto d-block">{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootcampBox;
