import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <div className="navbar__container">
        <div className="navbar__logo-container">
          < Link to='/' ><img className="navbar__logo" src={logo} /></ Link >
        </div>
        <div className="navbar__button-container">
          < Link to='/services' ><button className="navbar__button">Services</button></ Link >
          < Link to='/work' ><button className="navbar__button">Our Work</button></ Link >
          < Link to='/about' style={{'display': 'none'}}><button className="navbar__button">About</button></ Link >
          < Link to='/careers' ><button className="navbar__button">Careers</button></ Link >
          < Link to='https://calendly.com/justaskcodes23/30min' target="_blank"><button className="navbar__button-contact">Contact</button></ Link >
        </div>
      </div>

    );
  }
  
  export default NavBar;