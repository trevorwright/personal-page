import React from 'react'
import styled from 'styled-components'

import { media } from '../../styles'

import { LOCATIONS } from './constants'
import NavigationItem from './NavigationItem'

const NavigationStyled = styled.ul`
  display: none;
  justify-content: center;
  margin: 0 4px;
  padding: 20px;
  border: 1px solid #dcd9d9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  ${media.small`
    display: inline-block;
  `};
`

const Navigation = () => (
  <NavigationStyled>
    {LOCATIONS.map(({ text, target }) => (
      <NavigationItem key={target} target={target}>
        {text}
      </NavigationItem>
    ))}
  </NavigationStyled>
)

export default Navigation
