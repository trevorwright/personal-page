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

const LOCATIONS = [
  {
    text: 'About',
    target: 'about',
  },
  {
    text: 'Experience',
    target: 'experience',
  },
  {
    text: 'Education',
    target: 'education',
  },
  {
    text: 'Skills',
    target: 'skills',
  },
  {
    text: 'Contact',
    target: 'contact',
  },
]

const Navigation = () => (
  <HeaderStyled>
    <NavigationStyled>
      {LOCATIONS.map(({ text, target }) => (
        <NavigationItem key={target} target={target}>
          {text}
        </NavigationItem>
      ))}
    </NavigationStyled>
  </HeaderStyled>
)

export default Navigation
