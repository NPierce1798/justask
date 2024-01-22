import './home.css'

import Hero from './hero';
import Process from './process';
import Tile from './tile';
import Learn from './learn';
import Contact from './contact';

function Home() {

    return (

        <div className="home__container">
            < Hero />
            < Tile />
            < Process />
            < Learn />
            < Contact />
      
        </div>

    );
  }
  
  export default Home;