import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch';

import { media } from '../../styles';

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
`;

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
`;

const EntryDetailsStyled = styled.div`
  margin-left: 60px;

  ${media.medium`
    margin: 0;
  `};
`;

const DateRangeStyled = styled.div`
  color: #757575;
  font-weight: 300;
  margin-bottom: 8px;

  ${media.medium`
    position: absolute;
    left: 0;
    top: 12px;
    text-align: right;
    width: 240px;
  `};
`;

const EntryCardStyled = styled.div`
  padding: 12px;
  background: #ffffff;
  border: 1px solid #dcd9d9;
  border-radius: 5px;

  ${media.medium`
    margin-left: 320px;
  `};
`;

const JobTitleStyled = styled.h3`
  font-size: 1.5em;
`;

const EmployerNameStyled = styled.h4`
  color: #757575;
  font-weight: 300;
`;

const JobDescriptionStyled = styled.div`
  margin-top: 12px;

  & > *:not(:first-child) {
    margin-top: 12px;
  }
`;

const Entry = ({ startDate, endDate, employer, title, children }) => (
  <EntryStyled>
    <EntryIconStyled>
      <FontAwesomeIcon icon={faCodeBranch} color="#ffffff" size="lg" />
    </EntryIconStyled>
    <EntryDetailsStyled>
      <DateRangeStyled>
        {startDate} - {endDate}
      </DateRangeStyled>
      <EntryCardStyled>
        <JobTitleStyled>{title}</JobTitleStyled>
        <EmployerNameStyled>{employer}</EmployerNameStyled>
        <JobDescriptionStyled>
          {typeof children === 'string' ? <p>{children}</p> : children}
        </JobDescriptionStyled>
      </EntryCardStyled>
    </EntryDetailsStyled>
  </EntryStyled>
);

Entry.propTypes = {
  startDate: string.isRequired,
  endDate: string.isRequired,
  employer: string.isRequired,
  title: string.isRequired,
  children: node.isRequired,
};

export default Entry;
