import styled from 'styled-components';

const DarkSubtitle = styled.div`
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, rgba(1, 1, 1, 0), rgba(1, 1, 1, 1), rgba(1, 1, 1, 0));
  border-image-slice: 1;
  padding: 10px;
  width: 15rem;
  margin: 0 auto;
`;

export default DarkSubtitle;