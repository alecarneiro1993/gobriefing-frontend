import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  padding: ${({ padding }) => padding || '0.7rem 1rem'};
  margin: ${({ margin }) => margin || '.5rem 0 0 0'};
  background-color: ${({ color }) => color || ''};
  color: white;
`;

export default StyledButton;
