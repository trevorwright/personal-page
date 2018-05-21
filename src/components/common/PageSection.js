import React from 'react'
import { node, string, oneOf } from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../../styles'

import { SectionHeader } from '../common'

const THEMES = {
  default: {
    background: '#FFFFFF',
  },
  alt: {
    background: '#F5F5F5',
  },
}

const PageSectionStyled = styled.section`
  padding: 20px;
  border-bottom: 1px solid #dcd9d9;
  text-align: center;

  ${props => css`
    background: ${THEMES[props.theme].background};
  `};

  ${media.small`
      padding: 40px;
    `};
`

const PageSection = ({ title, children, ...rest }) => (
  <PageSectionStyled {...rest}>
    <SectionHeader>{title}</SectionHeader>
    {children}
  </PageSectionStyled>
)

PageSection.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  name: string.isRequired,
  theme: oneOf(['default', 'alt']),
}

PageSection.defaultProps = {
  theme: 'default',
}

export default PageSection
