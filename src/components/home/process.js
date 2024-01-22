import arrow from "../../images/arrow.png"

function Process() {

    return (

        <div className="process__container">
            <p className="process__heading">How It Works:</p>

            <div className="process__1">
                <p className="process__title">1</p>
                <div className="process__desc-container">
                    <p className="process__description">Schedule a call with our team and talk about your project idea, goals, and strategy to create a plan of action.</p>
                    <div className="process__underline"> </div>
                </div>
                <img src={arrow} className="process__arrow" />

                <p className="process__title">2</p>
                <div className="process__desc-container">
                    <p className="process__description">We research any information necessary to bring you the best results possible. </p>
                    <div className="process__underline"> </div>
                </div>
                <img src={arrow} className="process__arrow" />
                

                <p className="process__title">3</p>
                <div className="process__desc-container">
                    <p className="process__description">We build your idea, step by step, keeping you up to date on our progress along the way.</p>
                    <div className="process__underline"> </div>
                </div>
                <img src={arrow} className="process__arrow" />


                <p className="process__title">4</p>
                <div className="process__desc-container">
                    <p className="process__description">The finished product! We showcase the complete result, and make final alterations.</p>
                    <div className="process__underline"> </div>
                </div>
            </div>
        </div>

    );
  }
  
  export default Process;