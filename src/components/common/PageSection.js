import React from 'react'
import { node, bool, string } from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../../styles'

const PageSectionStyled = styled.section`
  margin: 20px;

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${media.small`
      margin: 20px 40px;
    `};
`

const PageSection = ({ children, ...rest }) => (
  <PageSectionStyled {...rest}>{children}</PageSectionStyled>
)

PageSection.propTypes = {
  children: node.isRequired,
  name: string,
  center: bool,
}

PageSection.defaultProps = {
  center: false,
  name: undefined,
}

export default PageSection
