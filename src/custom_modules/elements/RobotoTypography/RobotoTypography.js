// @flow

import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { ROBOTO_FONT } from 'utils/constants';

function RobotoTypographyWrapper({
  customColor,
  ...rest
}: {
  customColor: string
}) {
  return <Typography {...rest} />;
}

const RobotoTypography = styled(RobotoTypographyWrapper)`
  font-family: ${ROBOTO_FONT};
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
  color: ${({ customColor }) => customColor || ''};
  font-size: ${({ size }) => `${size}rem` || ''};
`;

export default RobotoTypography;
