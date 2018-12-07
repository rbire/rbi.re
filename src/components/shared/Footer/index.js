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
          <h2 className="h1">Lorem ipusm dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-12 col-md-6 offset-md-1">
          <div className="form-holder">
            <form>
              <div className="row">
                <div className="col-12 text-center">
                  <h2>Lorem Ipsum Dolor</h2>
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
