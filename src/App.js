
import './App.css';
import Nav from './components/nav/Nav';
import MainHomepage from './components/main-homepage/Main-homepage';
import SectionHomepage from './components/section-homepage/Section-homepage';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainHomepage/>
      <SectionHomepage/>
    </div>  
  );
}

export default App;
