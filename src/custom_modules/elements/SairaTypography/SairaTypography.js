// @flow

import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { SAIRA_FONT } from 'utils/constants';

function SairaTypographyWrapper({
  customColor,
  ...rest
}: {
  customColor: string
}) {
  return <Typography {...rest} />;
}
const SairaTypography = styled(SairaTypographyWrapper)`
  font-family: ${SAIRA_FONT};
  color: ${({ customColor }) => customColor || ''};
`;

export default SairaTypography;
