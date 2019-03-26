import React, { Component, Fragment } from 'react'

import Icon from './icon.svg'
import BackgroundImage from './real.svg'

class Applications extends Component {
  render() {
    const { data } = this.props
    // const icon = get(data, 'icon.childImageSharp.fixed')

    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="h1">
                Use Cases
                </h2>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={Icon} alt="icon" />
                  <h3>
                  Event Catalog
                  </h3>
                  <p>
                  Using Blockchain to help drive adoption the RESO event catalog. Register standards based events to the ledger which can easily be received by other parties in the network.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={Icon} alt="icon" />
                  <h3>
                    Unique Property
                  </h3>
                  <p>
                  A community supported ledger for identification of unique property records using RESO standards. A crowdsourced stratey ensures the most compliant method for measuring uniquness.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={Icon} alt="icon" />
                  <h3>
                  Have an idea?
                  </h3>
                  <p>
                    We are looking for industry stakeholders to help drive new and exciting use cases for Blockchain in every real estate business. Contact us below with your ideas...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="real-estate"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-5">
                <h2 className="h1">
                  Building the future of real estate data, together
                </h2>
                <p>
                Blockchain, much like our real estate technology community relies on a network of passionate and interest aligned people to deliver the most reliable data to market. <br/><br/>
                The main goal of RBI is to inspire all of the smartest technologist in real estate to continue to do this, while collaboratively adopting Blockchain to help facilitate this.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Applications

// export const query = graphql`
//     icon: file(name: { eq: "icon" }) {
//       childImageSharp {
//         sizes(quality: 100) {
//           ...GatsbyImageSharpSizes_withWebp
//         }
//       }
//     }
// `
