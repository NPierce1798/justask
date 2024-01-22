import './services.css'

import dsml from '../../images/dsml.png'
import cons from '../../images/cons.png'
import web from '../../images/web.png'

function InfoLeft() {

    return (

        <div className="services__info-container">

            <div className='services__card-row'>
               


                <div className='services__info-card-light'>

                    <div className='services__info-card-title'>
                        <img src={dsml} className='services__image' />
                        <p className='services__title-light'>Data & AI</p>
                    </div>

                    <ul className='services__ul'>
                        <li className='services__li-light'>Large Language Models (LLMs)</li>
                        <li className='services__li-light'>LLM Agents</li>
                        <li className='services__li-light'>Model Fine Tuning</li>
                        <li className='services__li-light'>Prompt Engineering</li>
                        <li className='services__li-light'>OpenAI API Integration</li>
                        <li className='services__li-light'>Generative AI</li>
                        <li className='services__li-light'>Image Recognition</li>
                    </ul>

                </div>


                <div className='services__info-card-dark'>

                    <div className='services__info-card-title'>
                        <img src={cons} className='services__image' />
                        <p className='services__title-dark'>Consultancy</p>
                    </div>

                    <ul className='services__ul'>
                        <li className='services__li'>Fractional CTO</li>
                        <li className='services__li'>Project Planning</li>
                        <li className='services__li'>Website Performance</li>
                        <li className='services__li'>Website Accesibility Features</li>
                        <li className='services__li'>Search Engine Optimization</li>
                    </ul>

                </div>

                
            </div>


            <div className='services__card-row'>
                <div className='services__info-card-dark'>

                    <div className='services__info-card-title'>
                        <img src={web} className='services__image' />
                        <p className='services__title-dark'>Web & App</p>
                    </div>

                    <ul className='services__ul'>
                        <li className='services__li'>Web App Creation</li>
                        <li className='services__li'>Mobile App Creation</li>
                        <li className='services__li'>Web Scraping</li>
                        <li className='services__li'>Custom Websites</li>
                    </ul>

                </div>


                <div className='services__info-card-light'>

                    <div className='services__info-card-title'>
                        
                        <p className='services__title-light'>Other</p>
                    </div>


                        <p className='services__li-light' style={{"margin-left": '35px'}}>If you dont see what you need here, contact us anyway! If its software related, we can help!</p>

                </div>
            </div>

        </div>

    );
  }
  
  export default InfoLeft;