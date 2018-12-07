import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import PlaySvg from './play.svg'

class VideoPlayer extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <div className="col-12 col-md-6 offset-md-1">
        <div className="video-bg d-flex justify-content-center align-items-center">
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button className="btn-play" onClick={this.openModal}>
            <img src={PlaySvg} alt="" />
          </button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer
