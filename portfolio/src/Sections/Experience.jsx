/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import FeaturedPosition from '../Components/FeaturedPosition';
import SectionTitle from '../Components/SectionTitle';
import colors from '../util/colors';
import positions from '../util/positions';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12rem;
`;

const PositionsContainer = styled.div``;

const ExperienceContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 1rem;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const WorkContainer = styled.button`
  text-align: left;
  background-color: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;

  @media screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const PositionTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
`;

const CompanyTitle = styled.div`
  margin-bottom: 0.25rem;
`;

const PositionDescription = styled.div`
  max-width: 33%;
`;

const FeaturedWrapper = styled.div`

`;

const Experience = () => {
  const [featuredPositionActive, activateFeaturedPosition] = useState(false);
  const [skillsList, setSkillsList] = useState(null);
  const [positionDescription, setPositionDescription] = useState(null);

  const featureNewPosition = (description, skills) => {
    setPositionDescription(description);
    setSkillsList(skills);
    activateFeaturedPosition(true);
  };

  return (
    <>
      <SectionTitle color={colors.white}>Experience</SectionTitle>
      <Wrapper id="experience">
        {/* <SkewedContainer
      bgColor={colors.accent}
      top="right"
      bottom="left"
      style={{ marginBottom: '1rem' }}
    >
      <ExperienceContainer>
        <WorkContainer bgColor={colors.black} textColor={colors.white}>
          <WorkContainerTitle>
            Current Position
          </WorkContainerTitle>
          <PositionTitle>Software Engineer - JPMorgan Chase &amp; Co.</PositionTitle>
          <PositionDescription>
            At JPMorgan Chase, I work in Corporate and Investment Banking to develop software
            for both internal and external clients.
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
    </SkewedContainer> */}
        <PositionsContainer>
          <ExperienceContainer>
            <WorkContainer
              onClick={() => featureNewPosition(positions.jpmc.description, positions.jpmc.skills)}
            >
              <PositionTitle>Software Engineer</PositionTitle>
              <CompanyTitle>JPMorgan Chase & Co.</CompanyTitle>
            </WorkContainer>
          </ExperienceContainer>
          <ExperienceContainer>
            <WorkContainer
              onClick={() => featureNewPosition(positions.dmsi.description, positions.dmsi.skills)}
            >
              <PositionTitle>Software Engineer Intern</PositionTitle>
              <CompanyTitle>DMSi Software</CompanyTitle>
            </WorkContainer>
          </ExperienceContainer>
          <ExperienceContainer>
            <WorkContainer
              onClick={() => featureNewPosition(positions.gehc.description, positions.gehc.skills)}
            >
              <PositionTitle>Software Engineer Intern</PositionTitle>
              <CompanyTitle>General Electric Healthcare</CompanyTitle>
            </WorkContainer>
          </ExperienceContainer>
        </PositionsContainer>
        { featuredPositionActive && (
          <FeaturedWrapper>
            <FeaturedPosition
              description={positionDescription}
              skills={skillsList}
              closeFeature={() => activateFeaturedPosition(false)}
            />
          </FeaturedWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default Experience;