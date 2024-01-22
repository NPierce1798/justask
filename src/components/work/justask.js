import ja from '../../images/ja.png'

function Justask() {

    return (

        <div className="massive__container">
            <div className="monkey__text-container">
                <p className='massive__title'>JustAsk Codes</p>
                <p className='massive__description'>Ask an AI helper to find you answers from building code books.</p>
            </div>
                <div className='massive__text-container'>
                <a className='massive__a' href='https://justask.codes/' target='_blank' rel="noreferrer"><img src={ja} className='massive__image' /></a>
                </div>
        </div>

    );
  }
  
  export default Justask;