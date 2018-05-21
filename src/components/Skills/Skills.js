import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

const SkillLayoutStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Skills = ({ children }) => <SkillLayoutStyled>{children}</SkillLayoutStyled>

Skills.propTypes = {
  children: node.isRequired,
}

export default Skills
