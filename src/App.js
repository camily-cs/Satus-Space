import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Index from './pages/Index';
import Login from './pages/Login';


function App() {
  return (
    <Router>

      <div className="App">
        <Routes>

          <Route path='/' exact element={<Index/>}/>

          <Route path='/Login' exact element={<Login/>}/>
             

        </Routes>
      </div>  

    </Router>
  );
}

export default App;
