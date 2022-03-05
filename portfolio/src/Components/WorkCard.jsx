import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WorkCard = ({
  position,
  company,
  date,
  description,
  logo
}) => (
  <Card>
    <Company>{ company } </Company>
    <Position>{ position }</Position>
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
    <Date>{ date }</Date>
    <Description>{ description }</Description>
  </Card>
);

const Card = styled.div`
  background-color: #303030;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  padding: 1rem;
  width: 15rem;
  margin: 0 auto;
  text-align: center;
`;

const Company = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Position = styled.div`
  /* margin-bottom: 0.5rem; */
`;

const LogoContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  margin: 1rem;
`;

const Logo = styled.img`

`;

const Date = styled.div``;

const Description = styled.div``;

// validate props
WorkCard.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default WorkCard;