import styled from 'styled-components';

const Link = styled.a`
  font-size: ${({ size }) => size || 1}rem;
  text-decoration: none;
  color: ${({ color }) => color || 'var(--accent)'};
  font-weight: 700;
`;

export default Link;