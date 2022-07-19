import styled from 'styled-components';

const Link = styled.a`
  font-size: ${({ size }) => size || 1}rem;
  text-decoration: none;
  color: ${({ color }) => color || '#000000'};
`;

export default Link;