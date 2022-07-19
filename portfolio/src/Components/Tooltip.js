import styled from 'styled-components';

const Tooltip = styled.span`
  visibility: hidden;
  background-color: rgb(112, 112, 112);
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  white-space: nowrap;

  &:parent:hover {
    visibility: visible;
  }
`;

export default Tooltip;