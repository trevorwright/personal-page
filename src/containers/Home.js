import React from 'react'
import { withSiteData } from 'react-static'

import { SectionHeader, PageSection, ImageBlurb } from '../components/common'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ExperienceList from '../components/ExperienceList'
import Education from '../components/Education'

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
        <ExperienceList.Entry
          startDate="October 2017"
          endDate="Current"
          employer="Prodigy Game"
          title="Specialization Lead"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt sem convallis
          auctor senectus quam vestibulum eleifend litora elementum orci condimentum eget himenaeos
          fames sed rhoncus nunc nisi euismod nisl lacinia tristique arcu mauris leo phasellus
          maecenas dictum viverra vivamus"
        />
        <ExperienceList.Entry
          startDate="February 2017"
          endDate="October 2017"
          employer="Prodigy Game"
          title="Full Stack Web Developer"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt sem convallis
          auctor senectus quam vestibulum eleifend litora elementum orci condimentum eget himenaeos
          fames sed rhoncus nunc nisi euismod nisl lacinia tristique arcu mauris leo phasellus
          maecenas dictum viverra vivamus"
        />
        <ExperienceList.Entry
          startDate="May 2011"
          endDate="February 2017"
          employer="ABELSoft"
          title="Full Stack Developer"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt sem convallis
          auctor senectus quam vestibulum eleifend litora elementum orci condimentum eget himenaeos
          fames sed rhoncus nunc nisi euismod nisl lacinia tristique arcu mauris leo phasellus
          maecenas dictum viverra vivamus"
        />
      </ExperienceList>
    </PageSection>
    <PageSection name="education">
      <SectionHeader>Education</SectionHeader>
      <Education
        school="Mohawk College"
        startDate="January 2010"
        endDate="December 2014"
        topic="Software Engineering"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit non primis cum nisi etiam magna
      faucibus curabitur lectus mi malesuada ultrices."
      />
    </PageSection>
  </div>
))
