import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

import { CENTER, FULL, FLEX } from "utils/constants";

const GradientOverlay = styled(Box)`
  background: ${({ color: { from, to } }) => `linear-gradient(${from}, ${to});`}
  height: ${FULL}vh;
  display: ${FLEX};
  align-items: ${CENTER};
  justify-content: ${CENTER};
`;

export default GradientOverlay;
