// @flow

import React from 'react';
import styled from 'styled-components';
import { Icon as MUIIcon } from '@material-ui/core';

function IconWrapper({ marginTop, ...rest }: { marginTop: string }) {
  return <MUIIcon style={{ marginTop: `${marginTop}rem` }} {...rest} />;
}

const Icon = styled(IconWrapper)`
  font-size: ${({ size }) => size || 'small'};
`;

export default Icon;
