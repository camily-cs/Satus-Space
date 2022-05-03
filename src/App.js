
import './App.css';
import Nav from './components/nav/Nav';
import MainHomepage from './components/main-homepage/Main-homepage';
import SectionHomepage from './components/section-homepage/Section-homepage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <main className='upperPart' ><Nav /><MainHomepage/></main>
      
      
      <SectionHomepage/>
      <Footer/>
    </div>  
  );
}

export default App;
