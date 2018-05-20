import React from 'react'
import { node, bool, string, oneOf } from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../../styles'

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

  ${props => css`
    background: ${THEMES[props.theme].background};
  `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${media.small`
      padding: 20px 40px;
    `};
`

const PageSection = ({ children, ...rest }) => (
  <PageSectionStyled {...rest}>{children}</PageSectionStyled>
)

PageSection.propTypes = {
  children: node.isRequired,
  name: string,
  center: bool,
  theme: oneOf(['default', 'alt']),
}

PageSection.defaultProps = {
  center: false,
  name: undefined,
  theme: 'default',
}

export default PageSection
