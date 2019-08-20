import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { ROBOTO_FONT, PRIMARY } from "utils/constants";

const RobotoTypography = styled(Typography)`
  font-family: ${ROBOTO_FONT};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  color: ${({ color }) => color || PRIMARY};
`;

export default RobotoTypography;
