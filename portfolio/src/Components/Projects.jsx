import styled from 'styled-components';
import React from 'react';

const Projects = (props) => {
    return(
        <Container id="projects">
            <div id="sectionTitle">
                Projects
            </div>
            <ProjectContainer>
            <ProjectCard id="card">
                    <div id="title">
                        4-year Plan &amp; Registration System
                    </div>
                    <div id="projectImage">
                        <img src="imgs/library.jpg" alt="battleship" />
                    </div>
                    <div id="description">
                        A ReactJS PWA built to provide four-year plan support and registration
                        integration to our school for a capstone project.
                    </div>
                </ProjectCard>
                <ProjectCard id="card">
                    <div id="title">
                        Mobile Dashboard
                    </div>
                    <div id="projectImage">
                        <img src="imgs/dashboard.png" alt="dashboard" />
                    </div>
                    <div id="description">
                        A mobile dashboard PWA I made for myself using ReactJS &amp; multiple APIs 
                    </div>
                </ProjectCard>
                <ProjectCard id="card">
                    <div id="title">
                        Battleship Solver
                    </div>
                    <div id="projectImage">
                        <img src="imgs/battleship1.jpg" alt="battleship" />
                    </div>
                    <div id="description">
                        A battleship board solver (the old school newspaper version) 
                        which utilizes recursive backtracking to find all possible solutions 
                        to a battleship puzzle.
                    </div>
                </ProjectCard>
            </ProjectContainer>
        </Container>
    );
}

const Container = styled.div `
    margin-left: 4.5rem;
    margin-bottom: 2rem;
    padding: 1rem;
    @media (max-width: 600px) {
        margin-left: 2rem;
    }
`;

const ProjectContainer = styled.div `
    display: grid;

    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    
    @media (max-width: 1150px) {
        #card {
            width: 15rem;
        }
    }
    @media (max-width: 1050px) {
        grid-template-columns: auto;
        #card {
            width: 18rem;
        }
    }
    @media (max-width: 450px) {
       #card {
          width: 12rem;
       }
    }
`;

// const ProjectContainer = styled.div `
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     @media (max-width: 900px) {
//         flex-direction: column;
//     }
// `;

const ProjectCard = styled.div `
    background-color: #2b2b2b;
    margin: 1rem auto;
    width: 18rem;
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
    
    #title {
        margin: 0 0.5rem 0.5rem 0;
        font-size: 1.5rem;
    }
    #projectImage {
        margin: 1rem auto;
        width: 10rem;
        border-radius: 1rem;
    }
    #description {
        margin: 0.5 0.5rem 0.5rem 0;
        font-size: 1rem;
        line-height: 22.5px;
    }
    img {
        border-radius: 0.5rem;
        width: 100%;
    }
    
`;

export default Projects;