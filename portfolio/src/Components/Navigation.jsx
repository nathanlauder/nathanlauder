import styled from 'styled-components';
import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {HiCode} from 'react-icons/hi';
import {BsPencil} from 'react-icons/bs';
import {VscTools} from 'react-icons/vsc';
import {RiContactsLine} from 'react-icons/ri';

const iconStyle = { 
    fontSize: "2.3rem", 
    color: "#00eef9"
};

const Navigation = (props) => {
    return(
        <Container>
            <Logo>
               <a href="https://www.nathanlauder.com"><img src="imgs/NLogo.png" alt="Logo" /> </a>
            </Logo>
            <Nav>
               <div id="icon">
                  <a href="#landing"><AiOutlineHome style={iconStyle} className="icons"/></a>
                  <span id="extra">Home</span>
               </div>
               <div id="icon">
                  <a href="#projects"><HiCode style={iconStyle} className="icons"/></a>
                  <span id="extra">Projects</span>
               </div>
               <div id="icon">
                  <a href="#toolkit"><VscTools style={iconStyle} className="icons"/></a>
                  <span id="extra">Tools</span>
               </div>
               <div id="icon">
                  <a href="#education"><BsPencil style={iconStyle} className="icons"/></a>
                  <span id="extra">Education</span>
               </div>
            </Nav>
            <Contact>
               <div id="icon">
                  <a href="#footer"><RiContactsLine style={iconStyle} className="icons"/></a>
                  <span id="extra">Contact</span>
               </div>
            </Contact>
        </Container>
    );
};

const Container = styled.div `
   div#icon:hover span#extra {
      visibility: visible;
   }
   span#extra {
      visibility: hidden;
      margin-left: 0.5rem;
      background-color: #707070;
      padding: 5px;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
   }
   float: left;
   display: flex;
   flex-direction: column;
   position: fixed;
   z-index: 3;
   justify-content: space-between;
   align-items: center;
   margin-right: 1rem;
   width: 2.5rem;
   height: 98vh;
   background-color: #0e0e0e;
   padding: 1rem;
   border-right: 1pt solid #939393;
   @media (max-width: 600px) {
      width: 1rem;
   }
`;

const Logo = styled.div `
   width: 2.3rem;
   img {
      animation: spinLogo 4s infinite ease-in-out;
      width: 100%;
      @keyframes spinLogo {
         40% {
         transform: rotate(0deg);
         }
         100% {
         transform: rotate(360deg);
         }
      }
   }
   @media (max-width: 600px) {
      width: 1.9rem;
      padding: 0.3rem;
   }
`;

const Nav = styled.div `
   display:flex;
   flex-direction: column;
   
   div {
      margin: 0.75rem;
   }
   
   @media (max-width: 600px) {
      .icons {
         width: 1.9rem;
      }
   }
`;

const Contact = styled.div `
   margin-bottom: 0.7rem;
   @media (max-width: 600px) {
      .icons {
         width: 1.7rem;
      }
   }
`;

export default Navigation;