import React from 'react'
import { node, string, func } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const MenuItemStyled = styled.ul`
  margin: 26px 0;
`

const MobileItem = ({ target, children, onClick }) => (
  <Link key={target} to={target} smooth duration={500} offset={-60} onClick={onClick}>
    <MenuItemStyled key={target} target={target}>
      {children}
    </MenuItemStyled>
  </Link>
)

MobileItem.propTypes = {
  target: string.isRequired,
  children: node.isRequired,
  onClick: func.isRequired,
}

export default MobileItem
