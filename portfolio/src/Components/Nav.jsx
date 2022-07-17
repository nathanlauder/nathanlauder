import styled from 'styled-components';

const Nav = styled.div`
  display: flex;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export default Nav;