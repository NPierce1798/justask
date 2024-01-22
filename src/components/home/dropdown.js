import logo from "../../images/logo-small.webp"
import { Link } from 'react-router-dom'


function Dropdown() {

    return (

      <div className="dropdown__container">
                <div className="dropdown__logo-container">
          < Link to='/' ><img className="dropdown__logo" src={logo} /></ Link >
        </div>
        <div className="dropdown__button-container">
          < Link to='/services' ><button className="dropdown__button">Services</button></ Link >
          < Link to='/work' ><button className="dropdown__button">Work</button></ Link >
          < Link to='/about' style={{'display': 'none'}}><button className="dropdown__button">About</button></ Link >
          < Link to='/careers' ><button className="dropdown__button">Careers</button></ Link >
          < Link to='https://calendly.com/justaskcodes23/30min' target="_blank"><button className="dropdown__button-contact">Contact</button></ Link >
        </div>
      </div>
    );
  }
  
  export default Dropdown;