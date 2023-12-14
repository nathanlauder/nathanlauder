import PropTypes from 'prop-types';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  position: relative;
`;

const Description = styled.div`
  color: var(--white);
  margin-bottom: 1rem;
`;

const PillCaddy = styled.div`
  display: flex;
  width: max-content;
  max-width: 90%;
  flex-wrap: wrap;
`;

const Pill = styled.div`
  background-color: var(--accent);
  color: var(--navy);
  font-weight: bolder;
  width: max-content;
  white-space: nowrap;
  padding: 0.15rem 0.5rem;
  border-radius: 15px;
  margin-bottom: 0.25rem;
  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1.5rem;
  right: -0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  svg { 
    font-size: 2rem;
  }
`;

const FeaturedPosition = ({ description, skills, closeFeature }) => (
  <Wrapper>
    <Description>
      {description}
    </Description>
    <PillCaddy>
      {skills.map((skill) => (
        <Pill key={skill}>{skill}</Pill>
      ))}
    </PillCaddy>
    <CloseButton onClick={closeFeature}>
      <IoIosClose />
    </CloseButton>
  </Wrapper>
);

FeaturedPosition.propTypes = {
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeFeature: PropTypes.func.isRequired
};

export default FeaturedPosition;