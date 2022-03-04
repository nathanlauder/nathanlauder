import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WorkCard = ({
  position
}) => (
  <Card>
    <div>{position}</div>
  </Card>
);

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  padding: 2rem;
  width: 15rem;
`;

// validate props
WorkCard.propTypes = {
  position: PropTypes.string.isRequired
  // company: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired
};

export default WorkCard;