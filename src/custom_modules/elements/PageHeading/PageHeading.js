// @flow

import React from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  children: string
};

export default function PageHeading(props: Props) {
  const { children, ...rest } = props;
  return (
    <Typography {...rest} gutterBottom component="h1" variant="h4">
      {children}
    </Typography>
  );
}
