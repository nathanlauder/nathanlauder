import React from 'react';
import styled from 'styled-components';
import SkewedContainer from 'sc-react';
import SectionTitle from '../Components/SectionTitle';
import colors from '../util/colors';

const ExperienceContainer = styled.div`
  display: flex;
  text-align: center;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const WorkContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  width: 50%;

  @media screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const WorkContainerTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const PositionTitle = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
`;

const PositionDescription = styled.div`
  margin: 0 2rem;
`;

const Experience = () => (
  <div id="experience">
    <SkewedContainer
      bgColor={colors.black}
      top="right"
      bottom="left"
      style={{ marginBottom: '1rem' }}
    >
      <SectionTitle color={colors.white} margin="1rem">Experience</SectionTitle>
      <ExperienceContainer>
        <WorkContainer bgColor={colors.black} textColor={colors.white}>
          <WorkContainerTitle>
            Current Position
          </WorkContainerTitle>
          <PositionTitle>SEP Software Engineer - JPMorgan Chase &amp; Co.</PositionTitle>
          <PositionDescription>
            At JPMorgan, I work in the Wholesale Payments department.  I am continuing to use React
            and learning Java Springboot.
          </PositionDescription>
        </WorkContainer>
        <WorkContainer bgColor={colors.black} textColor={colors.white}>
          <WorkContainerTitle>
            Previous Position
          </WorkContainerTitle>
          <PositionTitle>Software Engineer Intern - DMSi Software</PositionTitle>
          <PositionDescription>
            At DMSi, I worked with a team in an effort to migrate a legacy Windows application
            to the web.  During this time, I leveraged my knowledge of React while learning a
            little bit of Go.
          </PositionDescription>
        </WorkContainer>
      </ExperienceContainer>
    </SkewedContainer>
  </div>
);

export default Experience;