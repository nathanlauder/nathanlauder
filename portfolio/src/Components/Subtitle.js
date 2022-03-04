import styled from "styled-components";

const Subtitle = styled.div`
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  border-image-slice: 1;
  padding: 10px;
  font-size: 1.3rem;
`;

export default Subtitle;