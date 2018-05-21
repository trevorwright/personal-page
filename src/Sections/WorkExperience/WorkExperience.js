import React from 'react'

import ExperienceList from '../../components/ExperienceList'

const WorkExperience = () => (
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
)

export default WorkExperience
