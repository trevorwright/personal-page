import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import { Link } from 'react-scroll'

import { media } from '../../styles'

import { LOCATIONS } from './constants'

const NavigationMobileStyled = styled.button`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcd9d9;
  border-radius: 5px;
  margin: 8px;
  background: #ffffff;
  height: 40px;
  width: 40px;

  ${media.small`
    display: none;
  `};
`

const OpenMenuStyled = styled.div`
  position: fixed;
  top: 8px;
  bottom: 8px;
  right: 8px;
  left: 8px;
  display: flex;
  flex-direction: column;
  padding: 4px 10px;
  font-size: 1.6em;
  background: #ffffff;
  color: #1976d2;
  border-radius: 5px;
  border: 1px solid #dcd9d9;
`

const CloseButtonStyled = styled.button`
  color: #1976d2;
`

const MenuHeaderStyled = styled.div`
  text-align: right;
`

const MenuContentStyled = styled.ul`
  flex-grow: 1;
  padding: 20px;
`

const MenuItemStyled = styled.ul`
  margin: 26px 0;
`

class NavigationMobile extends Component {
  state = {
    menuOpen: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }))
  }

  renderClosedMenu = () => (
    <NavigationMobileStyled onClick={this.toggleMenu}>
      <FontAwesomeIcon icon={faBars} size="lg" color="#1976d2" />
    </NavigationMobileStyled>
  )

  renderOpenMenu = () => (
    <OpenMenuStyled>
      <MenuHeaderStyled>
        <CloseButtonStyled onClick={this.toggleMenu}>
          <FontAwesomeIcon icon={faTimes} size="lg" color="#1976d2" />
        </CloseButtonStyled>
      </MenuHeaderStyled>
      <MenuContentStyled>
        {LOCATIONS.map(({ target, text }) => (
          <Link
            key={target}
            to={target}
            smooth
            duration={500}
            offset={-60}
            onClick={this.toggleMenu}
          >
            <MenuItemStyled key={target} target={target}>
              {text}
            </MenuItemStyled>
          </Link>
        ))}
      </MenuContentStyled>
    </OpenMenuStyled>
  )

  render() {
    const { menuOpen } = this.state

    if (menuOpen) {
      return this.renderOpenMenu()
    }
    return this.renderClosedMenu()
  }
}

export default NavigationMobile
