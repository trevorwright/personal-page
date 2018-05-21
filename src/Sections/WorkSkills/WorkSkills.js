import React from 'react'

import Skills from '../../components/Skills'

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

const SKILLS = [
  { name: 'HTML 5', image: htmlImage },
  { name: 'CSS 3', image: cssImage },
  { name: 'JavaScript', image: javascriptImage },
  { name: 'React', image: reactImage },
  { name: 'Redux', image: reduxImage },
  { name: 'Webpack', image: webpackImage },
  { name: 'GraphQL', image: graphqlImage },
  { name: 'Apollo', image: apolloImage },
  { name: 'SASS', image: sassImage },
  { name: 'Node', image: nodeImage },
  { name: 'Electron', image: electronImage },
  { name: 'AWS', image: awsImage },
  { name: 'Angular', image: angularImage },
  { name: 'Gulp', image: gulpImage },
  { name: 'Backbone', image: backboneImage },
  { name: 'Handlebars', image: handlebarsImage },
  { name: 'Mobile Apps', image: mobileImage },
  { name: 'Swift', image: swiftImage },
  { name: 'C#', image: csharpImage },
  { name: 'C++', image: cplusplusImage },
]

const WorkSkills = () => (
  <Skills>{SKILLS.map(({ name, image }) => <Skills.Item name={name} image={image} />)}</Skills>
)

export default WorkSkills
