import './assets/css/App.scss';
import './assets/css/reset.css';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Aboutme from './pages/aboutme/Aboutme';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aboutme/>
      <Resume/>
      <Portfolio/>
      <Footer/>

    </div>
  );
}

export default App;
