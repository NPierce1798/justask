import icon from "../images/data-icon.png"

function InfoCard1() {

    return (

        <div className="infocard__container">

            <div className="infocard__title-container">
                <p className="infocard__cat"><img src={icon} className="infocard__icon" /> Ai / DATA</p>
                <p className="infocard__title">
                    Work With Our <span className="infocard__span">Team Of Experienced Engineers</span> To Craft A Solution That Gives Your Business A Leading Edge
                </p>
            </div>
            <p className="infocard__p">
                Learn how you can keep your business up to date with the ever evolving Tech. scene and utilize your data along with new advancements in Artificial Intelligence.
            </p>
        </div>

    );
  }
  
  export default InfoCard1;