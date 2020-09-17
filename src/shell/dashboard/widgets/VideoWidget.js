import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class VideoWidget extends Component {
  render() {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ClMxCoE7R5o"
        config={{
          youtube: {
            playerVars: { modestbranding: 1 }
          }}}
        playing
        width={680}
      />
    );

  }
}

export default VideoWidget;