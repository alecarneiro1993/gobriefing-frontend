import styled from 'styled-components';
import Box from '@material-ui/core/Box';

import { CENTER, FULL, FLEX } from 'utils/constants';

const GradientOverlay = styled(Box)`
  background: ${({ color: { from, to } }) => `linear-gradient(${from}, ${to});`}
  height: ${({ height }) => (height ? `${height}vh` : `${FULL}vh`)} ;
  display: ${FLEX};
  align-items: ${CENTER};
  justify-content: ${CENTER};
`;

export default GradientOverlay;
