import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const ImageStyled = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  flex-shrink: 0;
`

const Image = ({ image, alt, ...rest }) => <ImageStyled src={image} alt={alt} {...rest} />

Image.propTypes = {
  image: string.isRequired,
  alt: string.isRequired,
}

export default Image
