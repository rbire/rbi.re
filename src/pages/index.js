import React from 'react'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import Hero from 'components/home/hero'
import About from 'components/home/about'
import Applications from 'components/home/applications'
import { siteMetadata } from '../../gatsby-config'

const Index = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Home" />
      <Hero />
      <About />
      <Applications />
    </Layout>
  )
}

export default Index
