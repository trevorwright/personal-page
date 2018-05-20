import React from 'react'
import styled from 'styled-components'

const NamePlateStyled = styled.div`
  text-align: center;
`

const NameStyled = styled.h1`
  color: #fff;
  font-size: 5em;
  font-weight: 700;
  line-height: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const TitleStyled = styled.h3`
  color: #bbdefb;
  font-size: 2.5em;
  font-weight: 500;
  line-height: 1.4em;
  letter-spacing: 0.05em;
`

const NamePlate = ({ ...rest }) => (
  <NamePlateStyled {...rest}>
    <NameStyled>Trevor Wright</NameStyled>
    <TitleStyled>Specialization Lead</TitleStyled>
    <TitleStyled>Full Stack Web Developer</TitleStyled>
  </NamePlateStyled>
)

export default NamePlate
