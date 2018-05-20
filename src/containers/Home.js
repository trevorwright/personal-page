import React from 'react'
import { withSiteData } from 'react-static'

import { SectionHeader, PageSection } from '../components/common'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'

export default withSiteData(() => (
  <div>
    <Navigation />
    <Hero />
    <PageSection center>
      <SectionHeader>About Me</SectionHeader>
    </PageSection>
  </div>
))
