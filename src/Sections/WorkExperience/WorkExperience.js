import React from 'react'

import ExperienceList from '../../components/ExperienceList'

const WorkExperience = () => (
  <ExperienceList>
    <ExperienceList.Entry
      startDate="December 2019"
      endDate="Current"
      employer="Prodigy Game"
      title="Engineering Manager & Domain Lead"
    >
      <p>
        Work closely with product and design leads to define and lead our
        educator platforms. Technically lead and mentor multiple teams which are
        responsible for feature delivery in a collection of our systems.
      </p>
      <p>
        Managing direct reports who are both individual contributors as well as
        managers, providing training and mentorship.
      </p>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="October 2017"
      endDate="December 2019"
      employer="Prodigy Game"
      title="Specialization Lead"
    >
      <p>
        Working as apart of a team to continually deliver high quality and high
        impact features for our customers using modern technologies such as
        React, Styled-Components, Webpack, Babel, GraphQL and Apollo.
      </p>
      <p>
        Leading the transition of products from BackboneJS to React and
        front-end initiatives including patterns, technology and team education.
      </p>
      <p>
        Managing direct reports with communication, coaching, mentorship, career
        development, regular 1 on 1 meetings and performance reviews.
      </p>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="February 2017"
      endDate="October 2017"
      employer="Prodigy Game"
      title="Full Stack Web Developer & Scrum Master"
    >
      <p>
        Worked with a team to develop a variety of front-end features for
        teacher and parent single page application experiences using BackboneJS,
        Handlebars, jQuery, SASS, and PHP. Developed backend features in micro
        services with technologies such as NodeJS, SQL and DynamoDB.
      </p>
      <p>
        Worked as the Scrum Master for the team keeping track and removing any
        blockers the team faced. Ran all scrum related ceremonies including
        sprint planning, retrospective and review.
      </p>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="May 2011"
      endDate="February 2017"
      employer="ABELSoft"
      title="Full Stack Developer"
    >
      <p>
        Started and worked as a lead developer on the redesign projects of the
        two flagship products. Led efforts to select new technologies and define
        best practices in the code base.
      </p>
      <p>
        Developed desktop solutions for both Medical and Dental products with
        Microsoft technologies (C#, C++, WPF, MS SQL). Kept team organized and
        on track with project tasks. Handled bugs as well as customer issues and
        requests.
      </p>
    </ExperienceList.Entry>
  </ExperienceList>
)

export default WorkExperience
