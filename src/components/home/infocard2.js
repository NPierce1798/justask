import icon from "../images/web-icon.png"

function InfoCard1() {

    return (

        <div className="infocard__container">

            <div className="infocard__title-container">
                <p className="infocard__cat"><img src={icon} className="infocard__icon" /> Web Dev</p>
                <p className="infocard__title">
                    Ensure you have a <span className="infocard__span-web">friendly, easy to use, and modern</span> user interface so you can effectively help your clients, customers, and site visitors.
                    
                </p>
            </div>
            <p className="infocard__p">
                Work with our team to create an effective website or ui for your business that will drive traffic and leaves customers feelling happy to come back.
            </p>
        </div>

    );
  }
  
  export default InfoCard1;