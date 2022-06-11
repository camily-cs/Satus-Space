import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Index from './pages/Index';
import Login from "./pages/Login";
import LoginAluno from './pages/LoginAluno';
import Cadastrar from "./pages/Cadastrar";
import Perfil from "./pages/Perfil";
import Sobre from "./pages/Sobre";
import Vagas from "./pages/Vagas";
import Empresa from "./pages/Empresa";
import Bootcamp  from "./pages/Bootcamps";



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

          <Route path='/Bootcamp' exact element={<Bootcamp/>}/>


        </Routes>
      </div>  

    </Router>
  );
}

export default App;
