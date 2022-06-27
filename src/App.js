import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

/* pages */
import Index from './pages/Index/index';


/* Páginas de login */
import Login from "./pages/Login/login";
import LoginAluno from './pages/LoginAluno/loginAluno';
import LoginEmpresa from "./pages/LoginEmpresa/loginEmpresa";

/* Páginas de cadastro */
import Cadastrar from "./pages/Cadastrar/cadastrar";
import CadAluno from "./pages/CadAluno/cadAluno";
import CadEmpresa from "./pages/CadEmpresa/cadEmpresa";

/* Páginas de bootcamp */
import Bootcamp  from "./pages/Bootcamps/bootcamps";
import BootcampsAndamento from "./pages/BootcampsAndamento/bootcampsandamentos";
import ExploreBootcamps from "./pages/ExploreBootcamps/exploreBootcamps";

/* Video aulas */
import VideoAula from "./pages/VideoAula/videoAula";


import Perfil from "./pages/Perfil/perfil";
import Sobre from "./pages/Sobre/sobre";
import Vagas from "./pages/Vagas/vagas";
import DetalheVaga from "./pages/DetalheVaga/detalheVaga";
import Empresa from "./pages/Empresa/empresa";

import UserArea from "./pages/UserArea/UserArea";
import Mensagens from "./pages/Mensagens/mensagens";
/* CSS global */
import "./App.css"



function App() {
  return (
    <Router>

      <div className="App">
        <Routes>

          <Route path='/' exact element={<Index/>}/>

          {/* Páginas de Login */}
          <Route path='/Login' exact element={<Login/>}/>
          <Route path='/Login/Aluno' exact element={<LoginAluno/>}/>
          <Route path='/Login/Empresa' exact element={<LoginEmpresa/>}/>

          {/* Páginas de cadastro */}
          <Route path='/Cadastrar' exact element={<Cadastrar/>}/>
          <Route path='/Cadastrar/Aluno' exact element={<CadAluno/>}/>
          <Route path='/Cadastrar/Empresa' exact element={<CadEmpresa/>}/>
         
          {/* Páginas de bootcamp */}
          <Route path='/Bootcamp' exact element={<Bootcamp/>}/>
          <Route path='/Bootcamp/Andamento' exact element={<BootcampsAndamento/>}/>
          <Route path='/Bootcamp/Explorar' exact element={<ExploreBootcamps/>}/>

          <Route path='/Video' exact element={<VideoAula/>}/>

          <Route path='/Perfil' exact element={<Perfil/>}/>

          <Route path='/Empresa' exact element={<Empresa/>}/>

          <Route path='/Sobre' exact element={<Sobre/>}/>

          <Route path='/Vagas' exact element={<Vagas/>}/>

          <Route path='/DetalheVaga' exact element={<DetalheVaga/>}/>

          <Route path='/User/Area' exact element={<UserArea/>}/>

          <Route path= '/Mensagens' exact element={<Mensagens/>}/>


        </Routes>
      </div>  

    </Router>
  );
}

export default App;
