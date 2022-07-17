import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import NavOption from './NavOption';
import Link from './Link';
import colors from '../util/colors';

const HamMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <Container>
      <StyledHamburger
        toggled={menuOpen}
        toggle={setMenuOpen}
        color={colors.black}
      />

      {menuOpen && (
        <HamburgerOptions>
          <HamNav>
            <NavOption>
              <Link href="#experience">Experience</Link>
            </NavOption>
            <NavOption>
              <Link href="#projects">Projects</Link>
            </NavOption>
            <NavOption>
              <Link href="#toolkit">Tools</Link>
            </NavOption>
            <NavOption>
              <Link href="#education">Education</Link>
            </NavOption>
            <NavOption>
              <Link href="#footer">Contact</Link>
            </NavOption>
          </HamNav>
        </HamburgerOptions>
      )}
    </Container>
  );
};

const Container = styled.div`
  @media screen and (min-width: 600px) {
    display: none !important;
  }
`;

const StyledHamburger = styled(Hamburger)`
  position: relative;
  display: none;
`;

const HamburgerOptions = styled.div`
  position: absolute;
  top: 4rem; right: 0px;
`;

const HamNav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 3px 0 0 3px;
  box-shadow: -2px 2px 8px #757575;
  z-index: 10 !important;
  animation: slide 250ms ease;

  ${NavOption} {
    border: none;
    padding: 1rem 1.5rem;
  }

  @keyframes slide {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default HamMenu;