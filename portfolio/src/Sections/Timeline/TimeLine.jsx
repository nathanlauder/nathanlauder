import styled from 'styled-components';

const TimeLine = styled.div`
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: black;
    border-radius: 4px;
    top: 0;
    bottom: 0;
    left: 50%;
  }

  @media screen and (max-width: 650px) {
    &::after {
      left: 20%;
    }
  }

  @media screen and (max-width: 450px) {
    &::after {
      left: 10%;
    }
  }
`;

export default TimeLine;