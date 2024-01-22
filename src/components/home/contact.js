import './home.css'
import { Link } from 'react-router-dom'

function Contact () {
    return (
        <div className="contact__container">

                <p className='contact__heading'>Why Choose Us:</p>
                <p className='contact__description'>We love what we do, and we take pride in the products we deliver. We work with you to bring your ideas to life using efficient design and clean UI. When we get up in the morning, we do so looking forward to the next project we get to be a part of, and it doesn&#39;t end there, our engineers are constantly honing their skills and learning new techniques as technology evolves and changes. We love keeping up with the bleeding edge of technology, and setting up for scalable, future proof solutions to any problem.</p>
                <Link className='contact__cta'  to='https://calendly.com/justaskcodes23/30min' target="_blank">Schedule A Free Estimate!</Link>
                
        </div>
    );
}

export default Contact;