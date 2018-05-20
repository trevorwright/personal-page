import React from 'react'
import styled from 'styled-components'

import { media } from '../../styles'

import NavigationItem from './NavigationItem'

const HeaderStyled = styled.header`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  text-align: center;

  ${media.small`
    display: block;
  `};
`

const NavigationStyled = styled.ul`
  display: inline-block;
  justify-content: center;
  margin: 0 4px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const Navigation = () => (
  <HeaderStyled>
    <NavigationStyled>
      <NavigationItem target="about">About</NavigationItem>
      <NavigationItem target="experience">Experience</NavigationItem>
      <NavigationItem target="education">Education</NavigationItem>
      <NavigationItem target="skills">Skills</NavigationItem>
      <NavigationItem target="contact">Contact</NavigationItem>
    </NavigationStyled>
  </HeaderStyled>
)

export default Navigation
