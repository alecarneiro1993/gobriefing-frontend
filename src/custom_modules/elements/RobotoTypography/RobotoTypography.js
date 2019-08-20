import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { ROBOTO_FONT, INHERIT } from "utils/constants";

function RobotoTypographyWrapper({ customColor, ...rest }) {
  return <Typography {...rest} />;
}

const RobotoTypography = styled(RobotoTypographyWrapper)`
  font-family: ${ROBOTO_FONT};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  color: ${({ customColor }) => customColor || ""};
`;

RobotoTypographyWrapper.propTypes = {
  customColor: PropTypes.string
};

RobotoTypographyWrapper.defaultProps = {
  customColor: INHERIT
};

export default RobotoTypography;
