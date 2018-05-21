import React from 'react'
import { withSiteData } from 'react-static'

import { SectionHeader, PageSection, ImageBlurb } from '../components/common'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ExperienceList from '../components/ExperienceList'

import trevorImage from '../../assets/images/trevor-wright.png'

export default withSiteData(() => (
  <div>
    <Navigation />
    <Hero />
    <PageSection name="about">
      <SectionHeader>About Me</SectionHeader>
      <ImageBlurb image={trevorImage} alt="Profile Image of Trevor Wright">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, id fusce morbi aliquam ultrices
          nisi venenatis, proin potenti odio tincidunt tempus volutpat. Mus amet aliquet vehicula
          lacinia penatibus dui rhoncus nisi nostra viverra taciti adipiscing, id fermentum sem
          faucibus facilisi maecenas inceptos euismod platea urna porttitor class.
        </p>
      </ImageBlurb>
    </PageSection>
    <PageSection name="experience" theme="alt">
      <SectionHeader>Experience</SectionHeader>
      <ExperienceList>
        <ExperienceList.Entry />
        <ExperienceList.Entry />
        <ExperienceList.Entry />
      </ExperienceList>
    </PageSection>
  </div>
))
