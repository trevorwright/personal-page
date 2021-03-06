import React from 'react'
import styled from 'styled-components'

import { media } from '../../styles'

import NamePlate from './NamePlate'

import workspaceImage from '../../../assets/images/workspace.jpg'

const HeroStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${workspaceImage});
  background-size: cover;
  height: 80vh;
  min-height: 500px;
  max-height: 1080px;

  ::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #1976d2;
    opacity: 0.8;
  }

  ${media.small`
    background-position: bottom;
    background-attachment: fixed;
  `};
`

const NamePlatedStyled = styled(NamePlate)`
  z-index: 10;
`

const Hero = () => (
  <HeroStyled>
    <NamePlatedStyled />
  </HeroStyled>
)

export default Hero
