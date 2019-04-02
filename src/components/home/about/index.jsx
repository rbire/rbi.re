import React from 'react'
import VideoPlayer from './videoplayer'

const About = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start">
          <h2>About RBI</h2>
          <p>
          The Real Estate Blockchain Initiative is an open initiative dedicated to advancing the use of standards-compliant Blockchain solutions in real estate
          The initiative aims to provide an open source "on ramp" to making it easy for any company to adopt RESO standards on Blockchain.
          <br/><br/>
          For more information check out the following video...
          </p>
        </div>
        <VideoPlayer />
      </div>
    </div>
  <a name="uses" />
  </section>
)

export default About
