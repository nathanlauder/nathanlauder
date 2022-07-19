import styled from 'styled-components';

const NavOption = styled.div`
  padding: 1.5rem 1rem;

  @media screen and (max-width: 800px) {
    padding: 1.5rem 0.7rem;
  }

  &:hover {
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
  }
`;

export default NavOption;