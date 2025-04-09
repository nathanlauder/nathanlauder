import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';
import colors from '../util/colors';

const Wrapper = styled.div``;

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
  <Wrapper id="experience">
    <div style={{ backgroundColor: colors.black, padding: '1rem' }}>
      <SectionTitle color={colors.white} margin="1rem">Experience</SectionTitle>
      <ExperienceContainer>
        <WorkContainer bgColor={colors.black} textColor={colors.white}>
          <WorkContainerTitle>
            Current Position
          </WorkContainerTitle>
          <PositionTitle>Software Engineer - Kognitiv Edge</PositionTitle>
          <PositionDescription>
            At Kognitiv Edge, I write software to transform the defense industry. In
            conjunction with my team, I found the most cost effective implementations
            to work in the Defense space.
          </PositionDescription>
        </WorkContainer>
        <WorkContainer bgColor={colors.black} textColor={colors.white}>
          <WorkContainerTitle>
            Previous Position
          </WorkContainerTitle>
          <PositionTitle>Associate Software Engineer - JPMorgan Chase &amp; Co.</PositionTitle>
          <PositionDescription>
            At JPMorgan Chase, I worked in Cooporate and Investment Banking aiding in the upkeep
            of software.
          </PositionDescription>
        </WorkContainer>
      </ExperienceContainer>
    </div>
  </Wrapper>
);

export default Experience;