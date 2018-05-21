import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

const SkillLayoutStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1024px;
`

const Skills = ({ children }) => <SkillLayoutStyled>{children}</SkillLayoutStyled>

Skills.propTypes = {
  children: node.isRequired,
}

export default Skills
