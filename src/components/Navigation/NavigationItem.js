import React from 'react'
import { string, node } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const NavigationItemStyled = styled.li`
  display: inline-block;
  margin: 0 8px;
`

const NavigationItem = ({ children, target }) => (
  <NavigationItemStyled>
    <Link to={target} smooth duration={500} offset={-80}>
      {children}
    </Link>
  </NavigationItemStyled>
)

NavigationItem.propTypes = {
  children: node.isRequired,
  target: string.isRequired,
}

export default NavigationItem
