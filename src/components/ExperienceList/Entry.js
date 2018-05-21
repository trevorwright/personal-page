import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch'

import { media } from '../../styles'

const EntryStyled = styled.div`
  position: relative;
  margin-bottom: 30px;
  text-align: left;
  z-index: 5;

  ::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 22px;
    width: 3px;
    background: #1976d2;
    z-index: -1;

    ${media.medium`
      left: 277px;
    `};
  }

  ::after {
    position: absolute;
    content: '';
    top: 100%;
    bottom: -30px;
    left: 22px;
    width: 3px;
    background: #1976d2;
    z-index: -1;

    ${media.medium`
      left: 277px;
    `};
  }

  &:last-of-type {
    ::after {
      background: linear-gradient(to bottom, #1976d2, rgba(52, 152, 219, 0));
    }
  }
`

const EntryIconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #1976d2;

  ${media.medium`
    margin-left: 255px;
  `};
`

const EntryDetailsStyled = styled.div`
  margin-left: 60px;

  ${media.medium`
    margin: 0;
  `};
`

const DateRangeStyled = styled.span`
  color: #757575;
  font-weight: 300;

  ${media.medium`
    position: absolute;
    left: 0;
    top: 12px;
    text-align: right;
    width: 240px;
  `};
`

const EntryCardStyled = styled.div`
  padding: 12px;
  background: #ffffff;

  ${media.medium`
    margin-left: 320px;
  `};
`

const EmployerNameStyled = styled.h3`
  font-size: 1.5em;
`

const JobTitleStyled = styled.h4`
  color: #757575;
  font-weight: 300;
`

const JobDescriptionStyled = styled.p`
  margin-top: 12px;
`

const Entry = () => (
  <EntryStyled>
    <EntryIconStyled>
      <FontAwesomeIcon icon={faCodeBranch} color="#ffffff" size="lg" />
    </EntryIconStyled>
    <EntryDetailsStyled>
      <DateRangeStyled>September 2016 - September 2017</DateRangeStyled>
      <EntryCardStyled>
        <EmployerNameStyled>Prodigy Game</EmployerNameStyled>
        <JobTitleStyled>Specialization Lead</JobTitleStyled>
        <JobDescriptionStyled>
          Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt sem convallis
          auctor senectus quam vestibulum eleifend litora elementum orci condimentum eget himenaeos
          fames sed rhoncus nunc nisi euismod nisl lacinia tristique arcu mauris leo phasellus
          maecenas dictum viverra vivamus
        </JobDescriptionStyled>
      </EntryCardStyled>
    </EntryDetailsStyled>
  </EntryStyled>
)

export default Entry
