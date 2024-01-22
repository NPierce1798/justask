import { Link } from 'react-router-dom'

function Hero() {

    return (

        <div className="hero__container">
      
            <p className="hero__heading">Build Your Dreams With Us</p>
            <p className="hero__p">Schedule A Free Project Estimate Today!</p>
            <Link  to='https://calendly.com/justaskcodes23/30min' target="_blank" ><button className="hero__button" >Schedule A Session</button></Link>
      
        </div>

    );
  }
  
  export default Hero;