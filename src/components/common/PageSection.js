import React from 'react'
import { node, bool } from 'prop-types'
import styled, { css } from 'styled-components'

const PageSectionStyled = styled.section`
  margin: 20px;

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`

const PageSection = ({ children, ...rest }) => (
  <PageSectionStyled {...rest}>{children}</PageSectionStyled>
)

PageSection.propTypes = {
  children: node.isRequired,
  center: bool,
}

PageSection.defaultProps = {
  center: false,
}

export default PageSection
