import React from 'react';
import styled from 'styled-components';
import { SiPerl } from 'react-icons/si';
import SkewedContainer from 'sc-react';
import SectionTitle from '../Components/SectionTitle';

function Tools() {
  return (
    <Container id="toolkit">
      <SkewedContainer
        top="right"
        bottom="right"
        bgColor="#292929"
      >
        <SectionTitle>Tools</SectionTitle>
        <ToolBox>
          <div id="languages">
            <div className="subTitles">Languages</div>
            <ul>
              <li>
                <img src="imgs/javascript.svg" alt="language logo" id="langLogo" />
                Javascript
              </li>
              <li>
                <img src="imgs/html.svg" alt="language logo" id="langLogo" />
                HTML
              </li>
              <li>
                <img src="imgs/css.svg" alt="language logo" id="langLogo" />
                CSS
              </li>
              <li>
                <img src="imgs/java.svg" alt="language logo" id="langLogo" />
                Java
              </li>
              <li>
                <img src="imgs/r.svg" alt="language logo" id="langLogo" />
                R
              </li>
              <li>
                <img src="imgs/python.svg" alt="language logo" id="langLogo" />
                Python
              </li>
              <li>
                <img src="imgs/mysql.svg" alt="language logo" id="langLogo" />
                MySQL/SQL
              </li>
              <li>
                <img src="imgs/scheme.svg" alt="language logo" id="langLogo" />
                Scheme
              </li>
              <li>
                <SiPerl id="langLogo" size={40} color="white" />
                Perl
              </li>
            </ul>
          </div>
          <div id="frameworks">
            <div className="subTitles">Frameworks</div>
            <ul>
              <li>
                <img src="imgs/react.svg" alt="framework logo" id="langLogo" />
                ReactJS
              </li>
              <li>
                <img src="imgs/node.svg" alt="framework logo" id="langLogo" />
                NodeJS
              </li>
            </ul>
            <div className="subTitles">
              Currently Learning
            </div>
            <ul>
              <li>
                <img src="imgs/node.svg" alt="framework logo" id="langLogo" />
                ExpressJS
              </li>
              <li>
                <img src="imgs/mongoDB.svg" alt="framework logo" id="langLogo" />
                MongoDB
              </li>
            </ul>
            <div className="subTitles">
              Interests
            </div>
            <ul id="interestList">
              <li>Fullstack Development</li>
              <li>API Development</li>
              <li>Web Design/Programming</li>
            </ul>
          </div>
        </ToolBox>
      </SkewedContainer>

    </Container>

  );
}

const Container = styled.div`
    #sectionTitle {
        margin-left: 4.5rem;
    }
    @media (max-width: 600px) {
        #sectionTitle {
            margin-left: 1rem;
        }
    }
`;

const ToolBox = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    margin-left: 3.5rem;
    #langTitles {
        font-size: 1.4rem;
    }
    ul {
        list-style: none;
        /* list-style-position: outside; */
        color: white;
    }
    li {
        margin: 0.8rem 0;
        display: flex;
        align-items: center;
        text-align: left;
        font-size: 1rem;
    }
    #langLogo {
        margin: 0 1rem 1rem 0;
        width: 2rem;
    }
    #interestList li {
        margin-bottom: 2rem;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        margin-left: 2rem;
        #languages, #frameworks {
            margin: 1rem auto;
        }
    }
`;

export default Tools;