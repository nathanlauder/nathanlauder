import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Components/SectionTitle';
import DarkSubtitle from '../Components/DarkSubtitle';

const Education = () => (
  <Container id="education">
    <SectionTitle>Education</SectionTitle>
    <PencilBox>
      <div id="technical">
        <div>
          <div id="logo1">Creighton</div>
          <div id="logo2">University</div>
        </div>
        <div id="majorMinor">
          <div>
            B.S. in Computer Science
          </div>
          <div>
            Minor in Data Science
          </div>
        </div>
      </div>
      <div>
        <DarkSubtitle>Pertinent Courses</DarkSubtitle>
        <div>
          <ul id="courses">
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Programming Languages</li>
            <li>Web Programming</li>
            <li>Mobile App Development</li>
            <li>Software Engineering</li>
            <li>Capstone</li>
            <li>Machine Learning</li>
          </ul>
        </div>
      </div>
    </PencilBox>
  </Container>
);

const Container = styled.div`
  margin: 5rem 0 5rem 3.5rem;
`;

const PencilBox = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Newsreader&display=swap');
  margin-left: 3.5rem;
  margin-right:1rem;
  color: black;
  display: flex;
  justify-content: space-evenly;
  #technical {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }
  #majorMinor div{
    font-size: 1.5rem;
    margin: 0 auto;
    line-height: 30px;
  }
  div#logo1, div#logo2 {
    margin: 0 auto;
    font-family: "Newsreader", serif;
    font-size: 3rem;
    color: #00008c;
    letter-spacing: 1.2px;
  }
  ${DarkSubtitle} {
    font-size: 1.6rem;
  }
  #courses {
    font-size: 1.4rem;
  }
  div ul li {
    margin-bottom: 1rem;
    list-style: none;
  }

  @media (max-width: 768px) {
    margin-left: 0rem;
    flex-direction: column;
    text-align: center;
    div#logo1, div#logo2 {
      font-size: 2.5rem;
    }
    div#logo2 {
      margin-bottom: 1rem;
    }
    #majorMinor div {
      font-size: 1rem;
    }
    ${DarkSubtitle} {
      font-size: 1.3rem;
      margin-top: 2rem;
    }
    #courses {
      font-size: 1.1rem;
      margin-left: -2rem;
    }
  }
`;

export default Education;