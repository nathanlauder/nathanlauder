import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
  position: relative;
  /* container is 250 with 40px of padding, want 40px of space from line */
  left: ${({ side }) => (side === 'left' ? `calc(50% - 330px)` : `calc(50% + 40px)`)};
  margin-bottom: 3rem;

  padding: 10px 20px;
  border: 2px solid gray;
  border-radius: 6px;
  box-shadow: 2px 2px 4px #6c6c6c;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: ${({ side }) => (side === 'left' ? `calc(100% + 27px)` : `calc(0% - 53px)`)};
    background-color: var(--navy);
    border: 4px solid var(--white);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  div {
    ${({ side }) => (side === 'left' && `text-align: right; `)};
    letter-spacing: 0.5px;
  }


  @media screen and (max-width: 750px) {
    width: 220px;
    left: ${({ side }) => (side === 'left' ? `calc(50% - 300px)` : `calc(50% + 40px)`)};
  }

  @media screen and (max-width: 650px) {
    width: 250px;
    left: calc(20% + 40px);

    &::after {
      left: calc(0% - 53px);
    }

    div {
      text-align: left;
    }
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    left: calc(10% + 40px);

    &::after {
      left: calc(0% - 53px);
    }
  }

  @media screen and (max-width: 400px) {
    width: 220px;
  }
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  ${({ side }) => (side === 'left' && `text-align: right; `)};
`;

const Date = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  letter-spacing: 0.5px;
  font-size: 1.1rem;

  #hereLink {
    text-decoration: underline;
  }
`;

const LineEvent = ({
  side, title, date, children
}) => (
  <Container side={side}>
    <Title side={side}>{title}</Title>
    <Date>{date}</Date>
    {children}
  </Container>
);

LineEvent.propTypes = {
  side: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export { Description };
export default LineEvent;