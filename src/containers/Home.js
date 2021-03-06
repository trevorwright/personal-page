import React from 'react'
import { withSiteData } from 'react-static'

import { PageSection } from '../components/common'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../Sections/About'
import WorkSkills from '../Sections/WorkSkills'
import WorkExperience from '../Sections/WorkExperience'
import Footer from '../components/Footer'

export default withSiteData(() => (
  <div>
    <Navigation />
    <Hero name="hero" />
    <PageSection name="about" title="About">
      <About />
    </PageSection>
    <PageSection name="experience" title="Experience" theme="alt">
      <WorkExperience />
    </PageSection>
    <PageSection name="skills" title="Skills">
      <WorkSkills />
    </PageSection>
    <Footer />
  </div>
))
