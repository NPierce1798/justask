import bravo from '../../images/bravo.png'

function Bravo() {

    return (

        <div className="massive__container">
            <a className='massive__a' href='https://thebravoburrito.com/' target='_blank' rel="noreferrer"><img src={bravo} className='massive__image' /></a>
                <div className='massive__text-container'>
                    <p className='massive__title'>Bravo Burrito</p>
                    <p className='massive__description'>A custom website built for a resturaunt, with shopify liquid.</p>
                </div>
        </div>

    );
  }
  
  export default Bravo;
