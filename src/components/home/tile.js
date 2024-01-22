import custom from "../../images/setting.png"
import data from "../../images/data-analytics.png"
import eff from "../../images/productivity.png"

function Tile() {

    return (

        <div className="tile__container">

            <div className="tile__section-container">
                <a href="https://www.flaticon.com/free-icons/optimization-analysis" className="tile__a"><img className="tile__icon-custom" src={custom} /></a>
                <p className="tile__title">Custom Solutions</p>
                <p className="tile__description">We have years of experience building solutions for web apps, web scraping, predictive modeling, NLP and more.</p>
            </div>

            <div className="tile__divider"> </div>

            <div className="tile__section-container">
                <a href=""><img src={data} className="tile__icon-data" /></a>
                <p className="tile__title">Leverage Your Data</p>
                <p className="tile__description">Make the most of your data and leverage it to bring your customers the best solutions.</p>
            </div>

            <div className="tile__divider"> </div>

            <div className="tile__section-container">
                <a href=""><img src={eff} className="tile__icon-eff" /></a>
                <p className="tile__title">Reach Maximum Efficiency</p>
                <p className="tile__description">Automate your process to save time and money using one of our custom solutions.</p>
            </div>

        </div>

    );
  }
  
  export default Tile;