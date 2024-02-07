import arrow from "../../images/arrow.png"

function Process() {

    return (

        <div className="process__container">
            <p className="process__heading">How It Works:</p>

            <div className="process__1">
                <p className="process__title">1</p>
                <div className="process__desc-container">
                    <p className="process__description"><span className="big-desc">Schedule a call.</span>Meet with <a style={{ color: "aqua" }} href="https://www.linkedin.com/in/jawerty">Jared</a> and he will be your "CTO for an hour".</p>
                    <div className="process__underline"> </div>
                </div>
                <img src={arrow} className="process__arrow" />

                <p className="process__title">2</p>
                <div className="process__desc-container">
                    <p className="process__description"><span className="big-desc">Meet with the team!</span>Talk to us about your issues and how we can be of service.</p>
                    <div className="process__underline"> </div>
                </div>
                <img src={arrow} className="process__arrow" />
                

                <p className="process__title">3</p>
                <div className="process__desc-container">
                    <p className="process__description"><span className="big-desc">Designing and planning:</span> We work to scope out your project and he technologies required.</p>
                    <div className="process__underline"> </div>
                </div>
                <img src={arrow} className="process__arrow" />


                <p className="process__title">4</p>
                <div className="process__desc-container">
                    <p className="process__description"><span className="big-desc">We build your startup!</span> We work together to make your project idea a reality.</p>
                    <div className="process__underline"> </div>
                </div>
            </div>
        </div>

    );
  }
  
  export default Process;