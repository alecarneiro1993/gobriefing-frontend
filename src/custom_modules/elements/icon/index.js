import styled from "styled-components";
import { Icon as MUIIcon } from "@material-ui/core";

const Icon = styled(MUIIcon)`
  color: ${({ color }) => color || "primary"};
  font-size: ${({ size }) => size || "small"};
  text-align: ${({ align }) => align || "left"};
`;
export default Icon;
