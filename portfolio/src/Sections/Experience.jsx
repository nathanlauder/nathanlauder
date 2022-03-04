import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';
import WorkCard from '../Components/WorkCard';

function Experience() {
  const ExperienceContainer = styled.div`
    margin-left: 4.5rem;
    text-align: center;

    @media (max-width: 600px) {
      margin-left: 1rem;
    }
  `;

  return (
    <ExperienceContainer>
      <SectionTitle>Experience</SectionTitle>
      <WorkCard postion="Software Engineer" company="Google" date="May 2020 - Present" description="I am currently working at Google as a Software Engineer. I am currently working on the Google Assistant and Google Home projects." image="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
    </ExperienceContainer>
  );
}

export default Experience;