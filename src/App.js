import './assets/css/App.scss';
import './assets/css/reset.css';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { useTrail, a } from '@react-spring/web'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Aboutme from './pages/aboutme/Aboutme';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>Fiona Nicdao</h1>
      <Header/>
      <Home/>
      <Aboutme/>
      <Footer/>

    </div>
  );
}

export default App;
