import React from 'react'
import { withSiteData } from 'react-static'

import Navigation from '../components/Navigation'
import Hero from '../components/Hero'

export default withSiteData(() => (
  <div>
    <Navigation />
    <Hero />
  </div>
))
