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
          children={['student', 'developer', 'problem solver', 'self-learner', 'forward thinker']}
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
  background-color: #000;
`;

const Headshot = styled.div`
    margin: 1rem;
    width: 40%;
    img {
      width: 100%;
    }
`;

const Greeting = styled.div``;

export default Landing;