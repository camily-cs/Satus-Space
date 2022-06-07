import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Index from './pages/Index';
import Login from './pages/Login';
import Cadastrar from "./pages/Cadastrar";


function App() {
  return (
    <Router>

      <div className="App">
        <Routes>

          <Route path='/' exact element={<Index/>}/>

          <Route path='/Login' exact element={<Login/>}/>

          <Route path='/Cadastrar' exact element={<Cadastrar/>}/>

        </Routes>
      </div>  

    </Router>
  );
}

export default App;
