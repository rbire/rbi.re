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
                  Blockchain
                  <br />
                  Applications
                </h2>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={Icon} alt="icon" />
                  <h3>
                    Property
                    <br /> management
                  </h3>
                  <p>
                    Real estate property transfers can be registered on a public
                    blockchain ledger, leveraging auditability for external
                    stakeholders and lowering bureaucracy times and costs.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={Icon} alt="icon" />
                  <h3>
                    Home automation
                    <br /> services
                  </h3>
                  <p>
                    Smart contract technologies coupled with shared transactions
                    ledgers could automate service provision both in the context
                    of home automation and post-occupancy management.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={Icon} alt="icon" />
                  <h3>
                    Home
                    <br /> sharing
                  </h3>
                  <p>
                    Among decentralized applications built on top of blockchain
                    infrastructures, automatic home sharing services represent
                    an interesting evolution of current centralized homestay
                    networks.
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
                  Main areas of interest in the Real Estate
                </h2>
                <p>
                  Digital asset & Risk Management: decentralized information
                  layers enable interoperable management for trading and post
                  trading activities, which are typically related to financial
                  assets lifecycle. In particular, Smart Bond maps a meaningful
                  scenario in terms of process automation and dematerialization
                  opportunities.
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
