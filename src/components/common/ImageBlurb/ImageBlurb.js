import React from 'react'
import { string, node } from 'prop-types'
import styled from 'styled-components'

import { media } from '../../../styles'

import Image from './Image'

const ImageBlurbStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;

  ${media.small`
    flex-direction: row;
    align-items: flex-start;
  `};
`

const ImageStyled = styled(Image)`
  margin: 0 0 20px 0;

  ${media.small`
    margin: 0 20px 0 0;
  `};
`

const ContentStyled = styled.div`
  text-align: left;

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`

const ImageBlurb = ({ image, alt, children }) => (
  <ImageBlurbStyled>
    <ImageStyled image={image} alt={alt} />
    <ContentStyled>{children}</ContentStyled>
  </ImageBlurbStyled>
)

ImageBlurb.propTypes = {
  image: string.isRequired,
  alt: string.isRequired,
  children: node.isRequired,
}

export default ImageBlurb
