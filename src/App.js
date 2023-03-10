import './assets/css/App.scss';
import './assets/css/reset.css';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Aboutme from './pages/aboutme/Aboutme';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Travel from './pages/travel/Travel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aboutme/>
      <Resume/>
      <Portfolio/>
      <Routes>
        <Route path='/travel'element={<Travel/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
