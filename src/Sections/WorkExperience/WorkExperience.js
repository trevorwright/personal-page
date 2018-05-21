import React from 'react'

import ExperienceList from '../../components/ExperienceList'

const WorkExperience = () => (
  <ExperienceList>
    <ExperienceList.Entry
      startDate="October 2017"
      endDate="Current"
      employer="Prodigy Game"
      title="Specialization Lead"
    >
      <p>
        Work as apart of a team to continually deliver high quality and high impact features for our
        customers using modern technologies such as React, Styled-Components, Webpack, Babel,
        Apollo, GraphQL and Apollo.
      </p>
      <p>
        Lead the transition of products from BackboneJS to React and continue to lead our front-end
        initiatives.
      </p>
      <p>
        Lead direct reports with communication, coaching, mentorship, career development, regular 1
        on 1 meetings and performance reviews.
      </p>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="February 2017"
      endDate="October 2017"
      employer="Prodigy Game"
      title="Full Stack Web Developer & Scrum Master"
    >
      <p>
        Worked with a team to develop a variety of front-end features for teacher and parent single
        page application experiences using BackboneJS, Handlebars, jQuery, SASS, and PHP. Developed
        backend features in micro services with technologies such as NodeJS, SQL and DynamoDB.
      </p>
      <p>
        Worked as the Scrum Master for my team keeping track of tasks and removing blockers the team
        faced. Also ran all scrum related meetings including sprint planning, retrospective and
        review.
      </p>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="May 2011"
      endDate="February 2017"
      employer="ABELSoft"
      title="Full Stack Developer"
    >
      <p>
        Created the proof of concept for a redesign of both products including defining new
        technologies and coding patterns. Continued to lead the design and development of the
        redesign projects.
      </p>
      <p>
        Developed desktop solutions for both Medical and Dental products with Microsoft technologies
        (C#, C++, WPF, MySQL). Kept team organized and on track with project tasks. Handled bugs as
        well as customer issues and requests.
      </p>
    </ExperienceList.Entry>
  </ExperienceList>
)

export default WorkExperience
