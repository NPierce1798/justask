import Video from "./video";
import './home.css'

function Learn () {
    return (
        <div className="learn__container">
            <p className="learn__heading">Learn With One Of Our Founders:</p>
            <p className="learn__description">We believe in always expanding your knowledge and learning new things. Learn more with us by checking out Jared -- A JustAsk Founder -- and coding with him while he streams or by watching back one of his other videos.</p>
            < Video />
        </div>
    );
}

export default Learn;