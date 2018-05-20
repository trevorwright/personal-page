import React from 'react'
import styled from 'styled-components'

import { media } from '../../styles'

const NamePlateStyled = styled.div`
  text-align: center;
`

const NameStyled = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  ${media.small`
    font-size: 3em;
  `};
`

const TitleStyled = styled.h3`
  font-size: 1.5em;
  color: #bbdefb;
  font-weight: 500;
  letter-spacing: 0.05em;

  ${media.small`
    font-size: 2.5em;
  `};
`

const NamePlate = ({ ...rest }) => (
  <NamePlateStyled {...rest}>
    <NameStyled>Trevor Wright</NameStyled>
    <TitleStyled>Specialization Lead</TitleStyled>
    <TitleStyled>Full Stack Web Developer</TitleStyled>
  </NamePlateStyled>
)

export default NamePlate
