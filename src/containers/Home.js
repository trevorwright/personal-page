import React from 'react'
import { withSiteData } from 'react-static'

import Navigation from '../components/Navigation'
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <Navigation />
    <h1 style={{ textAlign: 'center', paddingTop: '75px' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
))
