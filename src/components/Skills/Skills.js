import React from 'react'
import styled from 'styled-components'

import javascriptImage from '../../../assets/images/skills/javascript.png'
import htmlImage from '../../../assets/images/skills/html.png'
import cssImage from '../../../assets/images/skills/css.png'
import csharpImage from '../../../assets/images/skills/csharp.png'
import nodeImage from '../../../assets/images/skills/node.png'
import graphqlImage from '../../../assets/images/skills/graphql.png'
import reactImage from '../../../assets/images/skills/react.png'
import electronImage from '../../../assets/images/skills/electron.png'
import angularImage from '../../../assets/images/skills/angular.png'
import webpackImage from '../../../assets/images/skills/webpack.png'
import sassImage from '../../../assets/images/skills/sass.png'
import gulpImage from '../../../assets/images/skills/gulp.png'
import backboneImage from '../../../assets/images/skills/backbone.png'
import handlebarsImage from '../../../assets/images/skills/handlebars.png'
import mobileImage from '../../../assets/images/skills/mobile.png'
import cplusplusImage from '../../../assets/images/skills/cplusplus.png'
import swiftImage from '../../../assets/images/skills/swift.png'
import reduxImage from '../../../assets/images/skills/redux.png'
import apolloImage from '../../../assets/images/skills/apollo.png'
import awsImage from '../../../assets/images/skills/aws.png'

import Skill from './Skill'

const SkillLayoutStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Skills = () => (
  <SkillLayoutStyled>
    <Skill image={htmlImage} name="HTML 5" />
    <Skill image={cssImage} name="CSS 3" />
    <Skill image={javascriptImage} name="Javascript" />
    <Skill image={reactImage} name="React" />
    <Skill image={reduxImage} name="Redux" />
    <Skill image={webpackImage} name="Webpack" />
    <Skill image={graphqlImage} name="GraphQL" />
    <Skill image={apolloImage} name="Apollo" />
    <Skill image={sassImage} name="SASS" />
    <Skill image={nodeImage} name="Node JS" />
    <Skill image={electronImage} name="Electron" />
    <Skill image={awsImage} name="AWS" />
    <Skill image={angularImage} name="Angular" />
    <Skill image={gulpImage} name="Gulp" />
    <Skill image={backboneImage} name="Backbone" />
    <Skill image={handlebarsImage} name="Handlebars" />
    <Skill image={mobileImage} name="Mobile Apps" />
    <Skill image={swiftImage} name="Swift" />
    <Skill image={csharpImage} name="C#" />
    <Skill image={cplusplusImage} name="C++" />
  </SkillLayoutStyled>
)

export default Skills
