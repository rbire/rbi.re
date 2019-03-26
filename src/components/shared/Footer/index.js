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
                  <h2>Contact us</h2>
                </div>
                <div className="col-12 form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 form-group">
                  <label>Industry segment</label>
                  <input
                    type="text"
                    name="industry"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn-blue big">
                    Tell me more
                  </button>
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
