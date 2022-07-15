import styled from 'styled-components';
import colors from '../util/colors';

const SectionTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  margin: ${({ margin }) => margin || '2rem'} 0;  
  color: ${({ color }) => color || colors.black};  
`;

export default SectionTitle;