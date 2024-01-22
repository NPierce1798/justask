import './careers.css'

import py from '../../images/python.png'
import js from '../../images/JavaScript.png'
import c from '../../images/cplus.png'
import ruby from '../../images/ruby.png'
import html from '../../images/html.png'
import css from '../../images/css.png'

import Infobar from './infobar';

function Careers () {

    return (
        <div className='careers__container'>

            < Infobar />
            <div className='careers__logo-container'>
                <img src={py} className='careers__img'/>
                <img src={js} className='careers__img'/>
                <img src={c} className='careers__img'/>
                <img src={ruby} className='careers__img'/>
                <img src={html} className='careers__img' style={{'width': '85px'}} />
                <img src={css} className='careers__img' style={{'width': '60px'}} />
            </div>
            <div className='careers__text-container'>
                <p className='careers__heading'>Learn About The Roles We Work With On Our Projects</p>
                <p className='careers__job-title'>Full Stack Developers</p>
                <p className='careers__job-description'> Our Full Stack Developers take lead on most of our projects, utilizing a combined 15 years of experience. They help guid the process to the completed project so everything is finished cleanly and smoothly.</p>
                <p className='careers__job-title'>Machine Learning Engineers</p>
                <p className='careers__job-description'> Our Machine Learning Engineers don't just code, but they keep us up to date with new cutting edge developments in Machine Learning Algorithms. Tasked with completing our predictive models through creating, testing, and fine-tuning.</p>
                <p className='careers__job-title'>Web Developers</p>
                <p className='careers__job-description'> Our team of web developers work with you to create a custom home for you apps or products to smoothly connect you to your customers or clients.</p>
                <p className='careers__job-title'>Web Designers</p>
                <p className='careers__job-description'> Our designers help guide our developers in creating a clean and seamless setup to display your project in a way that captivates users.</p>
            </div>
        </div>
    );
}

export default Careers;