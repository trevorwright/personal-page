import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'

import Navigation from '../components/Navigation'
import Hero from '../components/Hero'

const Junk = styled.div`
  height: 2000px;
`

export default withSiteData(() => (
  <div>
    <Navigation />
    <Hero />
    <Junk />
  </div>
))
