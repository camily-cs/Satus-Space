import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

/* pages */
import Index from './pages/Index/index';
import Login from "./pages/Login/login";
import LoginAluno from './pages/LoginAluno/loginAluno';
import Cadastrar from "./pages/Cadastrar/cadastrar";
import Perfil from "./pages/Perfil/perfil";
import Sobre from "./pages/Sobre/sobre";
import Vagas from "./pages/Vagas/vagas";
import DetalheVaga from "./pages/DetalheVaga/detalheVaga";
import Empresa from "./pages/Empresa/empresa";
import Bootcamp  from "./pages/Bootcamps/bootcamps";
import BootcampsAndamento from "./pages/BootcampsAndamento/bootcampsandamentos";
import UserArea from "./pages/UserArea/UserArea";
/* CSS global */
import "./App.css"



function App() {
  return (
    <Router>

      <div className="App">
        <Routes>

          <Route path='/' exact element={<Index/>}/>

          <Route path='/Login' exact element={<Login/>}/>

          <Route path='/Login/Aluno' exact element={<LoginAluno/>}/>

          <Route path='/Cadastrar' exact element={<Cadastrar/>}/>

          <Route path='/Perfil' exact element={<Perfil/>}/>

          <Route path='/Empresa' exact element={<Empresa/>}/>

          <Route path='/Sobre' exact element={<Sobre/>}/>

          <Route path='/Vagas' exact element={<Vagas/>}/>

          <Route path='/DetalheVaga' exact element={<DetalheVaga/>}/>

          <Route path='/Bootcamp' exact element={<Bootcamp/>}/>

          <Route path='/Bootcamp/Andamento' exact element={<BootcampsAndamento/>}/>

          <Route path='/User/Area' exact element={<UserArea/>}/>


        </Routes>
      </div>  

    </Router>
  );
}

export default App;
