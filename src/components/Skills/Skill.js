import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { media } from '../../styles'

const SkillStyled = styled.div`
  margin: 6px;
  padding: 8px;
  border: 1px solid #dcd9d9;
  border-radius: 5px;
  background: #ffffff;
  width: 100px;

  ${media.small`
    width: 160px;
    padding: 12px;
  `};
`

const SkillLogoStyled = styled.img`
  height: 50px;

  ${media.small`
    height: 75px;
  `};
`

const SkillNameStyled = styled.h3`
  margin-top: 4px;
  color: #757575;
  font-weight: 300;

  ${media.small`
    margin-top: 8px;
  `};
`

const Skill = ({ image, name }) => (
  <SkillStyled>
    <SkillLogoStyled src={image} alt={`${name} logo`} />
    <SkillNameStyled>{name}</SkillNameStyled>
  </SkillStyled>
)

Skill.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
}

export default Skill
