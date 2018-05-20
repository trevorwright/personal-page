import React from 'react'
import { string, node } from 'prop-types'
import styled from 'styled-components'

const NavigationItemStyled = styled.li`
  display: inline-block;
  margin: 0 8px;
`

const NavigationItem = ({ children, target }) => (
  <NavigationItemStyled>
    <a href={`#${target}`}>{children}</a>
  </NavigationItemStyled>
)

NavigationItem.propTypes = {
  children: node.isRequired,
  target: string.isRequired,
}

export default NavigationItem
