import React from 'react'
import FooterImage from './footer.png'
import './style.scss'

const Footer = () => (
  <section
    className="footer"
    style={{ backgroundImage: `url(${FooterImage})` }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5">
          <h2 className="h1">Contact us</h2>
          <p>
            We are looking for industry stakeholders to participate in this collective effort of adopting Blockchain in real estate. <br/><br/>
            If you have a strong use case or would like to sponsor the R&D of a particular initiative, please contact us...
          </p>
        </div>
        <div className="col-12 col-md-6 offset-md-1">
          <div className="form-holder">
            <form>
              <div className="row">
                <div className="col-12 text-center">
                  <a href="mailto:kc@cto.ai?subject=RBI Inquiry" className="btn-blue big">
                    Send us an email
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 copy-text">
          <p>Copyright 2018, RBI</p>
        </div>
      </div>
    </div>
  </section>
)

export default Footer
