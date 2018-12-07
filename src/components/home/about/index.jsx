import React from 'react'
import VideoPlayer from './videoplayer'

const About = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start">
          <h2>About RBI</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <VideoPlayer />
      </div>
    </div>
  </section>
)

export default About
