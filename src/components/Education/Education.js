import React from 'react'
import { string, node } from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../../styles'

const detailsStyles = css`
  color: #757575;
  font-weight: 300;
`

const EducationStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 12px;
  border: 1px solid #dcd9d9;
  border-radius: 5px;
  background: #ffffff;
  text-align: left;
`

const SchoolNameStyled = styled.h3`
  font-size: 1.5em;

  ${media.medium`
    display: inline-block;
  `};
`

const DateRangeStyled = styled.span`
  ${detailsStyles};

  ${media.medium`
    float: right;
  `};
`

const TopicStyled = styled.h4`
  ${detailsStyles};
`

const DescriptionContainerStyled = styled.div`
  margin-top: 8px;
`

const Education = ({
  school, startDate, endDate, topic, description,
}) => (
  <EducationStyled>
    <SchoolNameStyled>{school}</SchoolNameStyled>
    <DateRangeStyled>
      {startDate} - {endDate}
    </DateRangeStyled>
    <TopicStyled>{topic}</TopicStyled>
    <DescriptionContainerStyled>
      {typeof description === 'string' ? <p>{description}</p> : { description }}
    </DescriptionContainerStyled>
  </EducationStyled>
)

Education.propTypes = {
  school: string.isRequired,
  startDate: string.isRequired,
  endDate: string.isRequired,
  topic: string.isRequired,
  description: node.isRequired,
}

export default Education
