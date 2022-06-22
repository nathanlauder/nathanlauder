import styled from 'styled-components';
import Link from './Link';

const NavOption = styled.div`
  padding: 1.5rem 1rem;

  &:not(:last-child) {
    border-right: 2px solid var(--black);
  }

  @media screen and (max-width: 800px) {
    padding: 1.5rem 0.7rem;
  }

  ${Link} {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;

    @media screen and (max-width: 800px) {
      font-size: 0.9rem;
    }
  }

  &:hover {
    background-color: var(--black);
    cursor: pointer;
    ${Link} {
      color: var(--white);
    }
  }
`;

export default NavOption;