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

    /* :first-child {
      margin-bottom: 15rem;
    } */
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
`;

const PositionDescription = styled.div`
  margin: 0 2rem;
`;

const Experience = () => (
  <SkewedContainer
    bgColor={colors.black}
    top="right"
    bottom="left"
    style={{ marginBottom: '1rem' }}
  >
    <SectionTitle color={colors.white} margin="1rem">Experience</SectionTitle>
    <ExperienceContainer id="experience">
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
      {/* <SpotLight>
        <WorkCard
          position="Software Engineer Intern"
          company="DMSi Software"
          date="Current"
          description="I am currently working at DMSi as a Software Engineer.
          I am working in Web Development as we migrate applications."
          logo="https://www.dmsi.com/wp-content/themes/dmsi/img/dmsi-logo.svg"
        />
      </SpotLight>
      <WorkCards>
        <WorkCard
          position="Software Engineer"
          company="JPMorgan Chase &amp; Co."
          date="July 2022"
          description="After graduation, I will be joining JPMC as a Software Engineer
          in the Software Engineer Program."
          logo={jpmcl}
        />
        <WorkCard
          position="Software Engineer Intern"
          company="General Electric Healthcare"
          date="Summer 2021"
          description="During my second summer at GEHC, I worked as a SWE Intern building
          a backend integration between portfolio management systems."
          logo={ge}
        />
        <WorkCard
          position="Vulnerability Management Knowledge Lead Intern"
          company="General Electric Healthcare"
          date="Summer 2020"
          description="During my first summer at GEHC, I was in the Security,
          Risk, and Compliance team working on the resource Wiki for the ops team and stakeholders."
          logo={ge}
        />
      </WorkCards> */}
    </ExperienceContainer>
  </SkewedContainer>
);

export default Experience;