import styled from 'styled-components';

const Nav = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default Nav;