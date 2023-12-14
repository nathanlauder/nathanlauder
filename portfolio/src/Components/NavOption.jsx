import styled from 'styled-components';

const NavOption = styled.div`
  padding: 0.75rem 1rem;

  @media screen and (max-width: 800px) {
    padding: 0.75rem 0.7rem;
  }

  &:hover {
    background-color: var(--accent);
    color: var(--black);
    cursor: pointer;
  }
`;

export default NavOption;