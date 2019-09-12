// @flow

import React from 'react';
import type { ChildrenArray, Element } from 'react';
import Box from '@material-ui/core/Box';

type Props = {
  children: ChildrenArray<Element<any>>
};

function Block(props: Props) {
  const { children } = props;
  return <Box>{children}</Box>;
}

export default Block;
