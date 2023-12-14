import React from 'react';
import styled from 'styled-components';
// import { TextLoop } from 'react-text-loop-next';

const Landing = () => (
  <Container id="landing">
    {/* <Headshot>
      <img src="imgs/2021HeadshotBW.png" alt="Nathan Lauder" />
    </Headshot> */}
    <Greeting>
      <div id="welcome">Hi, my name is</div>
      <div id="name">Nathan Lauder</div>
      <div id="statement">I build software for the web.</div>

      <div id="description">
        I'm a software engineer with a great enthusiasm for
        Web Development. Currently, I am focused on API
        development at <span className="accent">JPMorgan Chase & Co.</span>
      </div>
      {/* <span id="loop">
        <TextLoop
          id="textLoop"
          interval={5000}
          fade
          springConfig={{
            stiffness: 100,
            damping: 10
          }}
        >
          <div>UI Development</div>
          <div>API Development</div>
          <div>self teaching</div>
          <div>development optimization</div>
        </TextLoop>
      </span> */}
    </Greeting>
  </Container>
);

const Container = styled.div`
  height: 96vh;
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

// const Headshot = styled.div`
//   margin: 1rem;
//   width: 30%;
//   img {
//     width: 100%;
//   }

//   @media screen and (max-width: 600px) {
//     width: 50%;
//   }
// `;

const Greeting = styled.div`
  .accent {
    color: var(--accent);
  }

  #description {
    margin-top: 1rem;
    width: 50%;
    white-space: pre-wrap;
  }

  #welcome, #statement, #loop div {
    font-size: 1.7rem;
    color: rgba(250, 250, 250, 0.8);
  }

  #name {
    color: var(--accent);
    font-size: 4.5rem;
    font-weight: bold;
    margin: 0.75rem 0 0.75rem -0.5rem;
  }

  #statement {
    margin-bottom: 0.125rem;
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