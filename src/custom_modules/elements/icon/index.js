import React from "react";
import styled from "styled-components";
import { Icon as MUIIcon } from "@material-ui/core";

const IconComponent = styled(MUIIcon)`
  font-size: ${({ size }) => size || "small"};
  ${({ marginTop }) =>
    marginTop && `position: relative; margin-top: ${marginTop}px`}
`;

export default function Icon({ marginTop, ...rest }) {
  return <IconComponent marginTop={marginTop} {...rest} />;
}
