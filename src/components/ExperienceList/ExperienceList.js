import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

const ExperienceListStyled = styled.div`
  position: relative;
  margin: 0 auto;
`

const ExperienceList = ({ children }) => <ExperienceListStyled>{children}</ExperienceListStyled>

ExperienceList.propTypes = {
  children: node.isRequired,
}

export default ExperienceList
