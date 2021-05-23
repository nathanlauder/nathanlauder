/**
 * File to populate all components of the Footer section
 * @author Nathan Lauder
 * @version 5/3/2021
 */

import styled from 'styled-components';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import SkewedContainer from 'sc-react';

// aggregate all components of the footer
const Footer = (props) => {
    return(
        <Container id="footer">
            <SkewedContainer top="right" bgColor="#252525">
                <Content id="content">
                    <div id="connect">Elsewhere on the Web</div>
                    <div id="icons">
                        <a href="https://www.github.com/nathanlauder" target="_blank" rel="noreferrer"><FaGithub  /></a>
                        <a href="https://www.linkedin.com/in/nathan-lauder-1905b5193/" target="_blank" rel="noreferrer"><FaLinkedin id="icon"/></a>
                        <a href="mailto:laudern42@gmail.com" target="_blank" rel="noreferrer"><HiOutlineMail id="icon"/></a>
                    </div>
                    <div id="signature">
                        <img src="imgs/Signature.png" alt="signature" />
                    </div>
                    <div id="copy">
                        <small>Copyright &copy; Nathan Lauder. All rights reserved.</small>
                    </div>
                </Content>
            </SkewedContainer>
        </Container>
    );
}

const Container = styled.div ``;

const Content = styled.div `
    margin-left: 4.5rem;
    /* margin-top: 3.5rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    #connect {
        margin: 1rem auto;
        font-size: 1.7rem;
    }
    #icons {
        margin: 1rem; 
        display: flex;
        justify-content: center;
        a {
            color: white;
            margin: 0 1rem;
            svg {
                font-size: 3rem;
            }
        }
    }
    #signature {
        width: 15rem;
        margin: 1rem auto;
        img {
            width: 100%;
        }
    }
    #copy {
        padding: 0.5rem;
        text-align: center;
        margin-bottom: 0;
        
    }
    @media (max-width: 600px) {
        margin-left: 2rem;
        #connect {
            font-size: 1.3rem;
        }
        #icons a svg{ 
            font-size: 2rem;
        }
        #copy small{
            font-size: 0.8rem;
        }
        #signature {
            width: 24%;
        }
    }
`;

// exports the Footer components
export default Footer;

