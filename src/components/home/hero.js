import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import Typed from "typed.js";

function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Build Your Dreams With Us"],
            typeSpeed: 75,
            backSpeed: 150,
            loop: false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (

        <div className="hero__container">
            <div className="hero__heading">
                <span ref={el}  />
            </div>
            <p className="hero__p">Schedule A Free Project Estimate Today</p>
            <Link  to='https://calendly.com/justaskcodes23/30min' target="_blank" ><button className="hero__button" >Schedule A Session</button></Link>
      
        </div>

    );
  }
  
  export default Hero;