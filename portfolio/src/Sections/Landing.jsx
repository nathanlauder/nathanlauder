import styled from 'styled-components';
import React from 'react';
import { TextLoop } from 'react-text-loop-next';

const Landing = () => (
  <Container id="landing">
    <Headshot>
      <img src="imgs/2021HeadshotBW.png" alt="Nathan Lauder" />
    </Headshot>
    <Greeting>
      Welcome!
      <br />
      I'm Nathan, and I'm a
      <div id="loop">
        <TextLoop
          children={['developer', 'problem solver', 'self-learner', 'forward thinker']}
          id="textLoop"
          interval={5000}
          fade
          springConfig={{
            stiffness: 100,
            damping: 10
          }}
        />
      </div>
    </Greeting>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 1rem;
  z-index: 1;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
`;

const Headshot = styled.div`
  margin: 1rem;
  width: 30%;
  img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 50%;
  }
`;

const Greeting = styled.div`
  font-size: 2rem;
  text-align: right;

  #loop div {
    font-size: 2rem;
  }

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
    #loop div {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 0.5rem;
    text-align: center;
  }
`;

export default Landing;