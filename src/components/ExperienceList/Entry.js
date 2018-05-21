import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch'

const EntryStyled = styled.div`
  position: relative;
  padding-bottom: 30px;
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
`

const EntryDetailsStyled = styled.div`
  margin-left: 60px;
`

const DateRangeStyled = styled.span``

const EntryCardStyled = styled.div`
  padding: 12px;
  background: #ffffff;
`

const EmployerNameStyled = styled.h3``

const JobTitleStyled = styled.h4``

const JobDescriptionStyled = styled.p``

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
