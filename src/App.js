import './App.css'

import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import NavBar from "./components/navbar";
import Dropdown from './components/home/dropdown';

import Home from './components/home/home';
import Services from './components/services/services';
import Work from './components/work/work';
import About from './components/about/about'
import Careers from './components/careers/careers';


function App() {

  var screen = window.innerWidth
  let nav = null

  if (screen <= 600) {
    nav = <Dropdown />;
  } else {
    nav = <NavBar />;
  }

  return (
    <div className="App">
      { nav }
      < Routes >
        < Route path="/" element={ < Home /> } />
        < Route path="/services" element={ < Services /> } />
        < Route path="/work" element={ < Work />} />
        < Route path="/about" element={ < About />} />
        < Route path="/careers" element={ < Careers />} />
      </ Routes >

    </div>
  );
}

export default App;
