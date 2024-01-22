import './work.css'

import Massive from './massive';
import Monkey from './monkey';
import Bravo from './bravo';
import Justask from './justask';

function Work() {

    return (

        <div className="work__container">
            <p className='work__title'>Take A Look At Some Of Our Projects!</p>

            < Massive />
            < Monkey />
            < Bravo />
            < Justask />
      
        </div>

    );
  }
  
  export default Work;