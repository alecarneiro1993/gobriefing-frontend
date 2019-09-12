// @flow

import React from 'react';
import type { ChildrenArray, Element } from 'react';
import Grid from '@material-ui/core/Grid';

type Props = {
  children: ChildrenArray<Element<any>>
};

function Column(props: Props) {
  const { children, ...rest } = props;
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
}

export default Column;
