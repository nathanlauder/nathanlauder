import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import NavOption from './NavOption';
import Link from './Link';
import colors from '../util/colors';

const Container = styled.div`
  z-index: 1;
  @media screen and (min-width: 641px) {
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
    padding: 1rem 2.5rem 1rem 1rem;
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

const HamMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
            <Link href="#experience" onClick={() => closeMenu()}>
              <NavOption>Experience</NavOption>
            </Link>
            <Link href="#projects" onClick={() => closeMenu()}>
              <NavOption>Projects</NavOption>
            </Link>
            <Link href="#tools" onClick={() => closeMenu()}>
              <NavOption>Tools</NavOption>
            </Link>

            <Link href="#timeline" onClick={() => closeMenu()}>
              <NavOption>History</NavOption>
            </Link>
            <Link href="#footer" onClick={() => closeMenu()}>
              <NavOption>Contact</NavOption>
            </Link>
          </HamNav>
        </HamburgerOptions>
      )}
    </Container>
  );
};

export default HamMenu;