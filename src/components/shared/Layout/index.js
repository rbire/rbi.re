import React from 'react'
import emergence from 'emergence.js'

import Header from 'components/shared/Header'
import Footer from 'components/shared/Footer'
import { siteMetadata } from '../../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'scss/main.scss'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
