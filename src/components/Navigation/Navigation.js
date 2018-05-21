import React from 'react'
import styled from 'styled-components'

import NavigationDesktop from './Desktop'
import NavigationMobile from './Mobile'

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  text-align: center;
`

const Navigation = () => (
  <HeaderStyled>
    <NavigationDesktop />
    <NavigationMobile />
  </HeaderStyled>
)

export default Navigation
