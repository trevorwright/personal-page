import React from 'react'
import styled from 'styled-components'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'

import { media } from '../../styles'

const FooterStyled = styled.footer`
  padding: 16px 24px;
  background: #1976d2;
  color: #ffffff;
`

const FooterContentStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;

  ${media.small`
    flex-direction: row;
    justify-content: space-between;
  `};
`

const CopyrightStyled = styled.h6`
  font-size: 1.2em;
  font-weight: 300;
`

const SocialMediaContainerStyled = styled.div`
  display: flex;
  margin-bottom: 16px;

  & > *:not(:first-child) {
    margin-left: 24px;
  }

  ${media.small`
    margin-bottom: 0;
  `};
`

const SocialLinkStyled = styled.a`
  && {
    color: #ffffff;
  }
`

const MobileIcon = styled(FontAwesomeIcon)`
  ${media.small`
    display: none;
  `};
`

const StandardIcon = styled(FontAwesomeIcon)`
  display: none;

  ${media.small`
    display: initial;
  `};
`

const renderIcon = (icon, href) => (
  <SocialLinkStyled href={href}>
    <MobileIcon icon={icon} size="2x" />
    <StandardIcon icon={icon} size="3x" />
  </SocialLinkStyled>
)

const Footer = () => (
  <FooterStyled>
    <FooterContentStyled>
      <CopyrightStyled>Copyright © 2018 Trevor Wright</CopyrightStyled>
      <SocialMediaContainerStyled>
        {renderIcon(faTwitter, 'https://twitter.com/tdwright_')}
        {renderIcon(faInstagram, 'https://www.instagram.com/tdwright_/')}
        {renderIcon(faLinkedin, 'https://www.linkedin.com/in/trevor-wright-81668769/')}
      </SocialMediaContainerStyled>
    </FooterContentStyled>
  </FooterStyled>
)

export default Footer
