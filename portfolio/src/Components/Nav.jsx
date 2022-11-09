import styled from 'styled-components';
import Link from './Link';

const Nav = styled.div`
  display: flex;

  ${Link} {
    &:not(:last-child) {
      border-right: 2px solid var(--black);

      &:hover {
        border-right: 2px solid white;
      }
    }
    
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;

    @media screen and (max-width: 800px) {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export default Nav;