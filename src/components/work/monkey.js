import monk from '../../images/monk.png'

function Monkey() {

    return (

        <div className="massive__container">
            <div className="monkey__text-container">
                <p className='massive__title'>Script Monkey</p>
                <p className='massive__description'>Generate your own unique stories, creating characters, the genre, and the setting with the click of a button.</p>
            </div>
                <div className='massive__text-container'>
                <a className='massive__a' href='https://script-monkey.streamlit.app/' target='_blank' rel="noreferrer"><img src={monk} className='massive__image' /></a>
                </div>
        </div>

    );
  }
  
  export default Monkey;