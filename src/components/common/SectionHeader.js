import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

import { media } from '../../styles'

const SectionHeaderStyled = styled.h2`
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 300;

  ::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    right: 0;
    height: 1px;
    width: 50px;
    margin: 0 auto;
    background: #1976d2;
  }

  ${media.small`
    font-size: 2em;
    margin-bottom: 40px;
  `};
`

const SectionHeader = ({ children }) => <SectionHeaderStyled>{children}</SectionHeaderStyled>

SectionHeader.propTypes = {
  children: node.isRequired,
}

export default SectionHeader
