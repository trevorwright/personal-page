import React from 'react'
import ExperienceList from '../../components/ExperienceList'

const WorkExperience = () => (
  <ExperienceList>
    <ExperienceList.Entry
      startDate="June 2021"
      endDate="Current"
      employer="Prodigy Education"
      title="Front-End Architect"
    >
      <p>
        Working with the architecture team to develop broader technical
        direction across the company. We ensure secure and scalable solutions as
        well as work to set standards and best practices all our products.
      </p>
      <div>Own the companies internal design-system:</div>
      <ul>
        <li>Being the resident React expert</li>
        <li>Coaching and mentoring team members across the company</li>
        <li>Ensuring a light weight and highly composable component library</li>
        <li>Providing appropriate tooling to teams for rapid execution</li>
        <li>Driving accessibility across our products</li>
        <li>Building a inner source community around the design-system</li>
      </ul>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="December 2019"
      endDate="July 2021"
      employer="Prodigy Education"
      title="Sr. Engineering Manager & Domain Lead"
    >
      <p>
        Worked closely with product and design leads to set the direction of our
        educator platforms by setting direction, prioritization, planning and
        execution. Lead up to 4 product teams in a technical along with people
        management which included managing both individual contributors and
        other managers.
      </p>
      <div>Key highlights:</div>
      <ul>
        <li>Technically led rebranding the company and all products</li>
        <li>Launched internal design-system</li>
        <li>Supported launch of co-op program</li>
        <li>Launched accelerator program</li>
        <li>Ran internal front-end meetups</li>
      </ul>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="October 2017"
      endDate="December 2019"
      employer="Prodigy Education"
      title="Specialization Lead"
    >
      <p>
        Working as apart of a team to continually deliver high quality and high
        impact features for our customers using modern technologies such as
        React, Styled-Components, Webpack, Babel, GraphQL and Apollo.
      </p>
      <p>
        Leading the transition of products from BackboneJS to React along with
        front-end initiatives including patterns, best practices and team
        education.
      </p>
      <p>
        Managing direct reports with communication, coaching, mentorship, career
        development, regular 1 on 1 meetings and performance reviews.
      </p>
    </ExperienceList.Entry>
    <ExperienceList.Entry
      startDate="February 2017"
      endDate="October 2017"
      employer="Prodigy Education"
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
