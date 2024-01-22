import YouTube from "react-youtube";
import React from "react";

class Video extends React.Component {
    render() {
      const options = {
        height: '390',
        width: '640',
        margin: 'auto',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
      return <div className="video-container"><YouTube videoId="C9ALpMH3trI?si=pyf5TBuT2y3zHDti" options={options} onReady={this._onReady} id="video"/></div>;
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

  export default Video;



