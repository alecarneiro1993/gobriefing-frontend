import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { SAIRA_FONT, PRIMARY } from "utils/constants";

const SairaTypography = styled(Typography)`
  font-family: ${SAIRA_FONT};
  color: ${({ color }) => color || PRIMARY};
`;

export default SairaTypography;
