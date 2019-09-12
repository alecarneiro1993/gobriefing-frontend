// @flow

import React from 'react';
import type { ChildrenArray, Element } from 'react';
import { Grid } from '@material-ui/core';

type Props = {
  children: ChildrenArray<Element<any>>
};

function Row(props: Props) {
  const { children, ...rest } = props;
  return (
    <Grid container item {...rest}>
      {children}
    </Grid>
  );
}

export default Row;
