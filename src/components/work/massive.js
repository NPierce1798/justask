import massive from '../../images/massive.png'

function Massive() {

    return (

        <div className="massive__container">
            <a className='massive__a' href='https://usemassive.com/' target='_blank' rel="noreferrer"><img src={massive} className='massive__image' /></a>
                <div className='massive__text-container'>
                    <p className='massive__title'>Massive</p>
                    <p className='massive__description'>Massive finds & automatically applies you to jobs at 30,000+ world-changing companies.</p>
                </div>
        </div>

    );
  }
  
  export default Massive;
