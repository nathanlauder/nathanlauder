import styled from 'styled-components';
import React from 'react';
import TextLoop from 'react-text-loop';


const Landing = (props) => {
    return(
        <Container id="landing">
            <Greeting>
                <div id="headshot">
                    <img src="imgs/headshot.jpg" alt="Nathan Lauder" />
                </div>
                <div id="welcome">
                    Welcome! <br /> I'm Nathan, and I'm a <div id="loop"><TextLoop children={['student', 'developer', 'problem solver', 'self-learner', 'forward thinker']} interval={5000} fade={true} springConfig={{stiffness: 100, damping: 10}}></TextLoop></div>
                </div>
            </Greeting>
        </Container>
    );
}

const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98vh;
    padding: 1rem;
    background-image: url('imgs/space.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 600px) {
        margin-left: 1rem;
    }
`;

const Greeting = styled.div `
    margin-left: 2rem;
    #loop div {
        color: #ff00d4;
        font-size: 2rem;
        
    }
    div#welcome {
        text-align: center;
        font-size: 2rem;
        letter-spacing: 3;
        line-height: 1.2;
    }
    #headshot  {
        margin: 1rem;
        /* background-color: yellow; */
        text-align: center;
        img {
            border-radius: 50%;
            border: 2.5pt solid#d7d7d7;
            width: 15rem;
        }
    }

    @media (max-width: 600px) {
        #loop div {
            font-size: 1.5rem;
        }
        div#welcome {
            font-size: 1.5rem;
        }
        #headshot img {
            width: 8rem;
        }

    }
`;

export default Landing;