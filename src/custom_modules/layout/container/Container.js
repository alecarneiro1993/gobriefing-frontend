// @flow

import React from 'react';
import type { ChildrenArray, Element } from 'react';
import { Container as MUIContainer, Grid } from '@material-ui/core';
import styled from 'styled-components';

import { FULL } from 'utils/constants';

const ContainerWrapper = styled(MUIContainer)`
  height: ${({ height }) => height || 'auto'};
  padding: 0;
`;

const GridWrapper = styled(Grid)`
  height: ${FULL}%;
  padding: 0;
`;

type Props = {
  children: ChildrenArray<Element<any>>,
  height: string
};

function Container(props: Props) {
  const { children, height, ...rest } = props;
  return (
    <ContainerWrapper height={height}>
      <GridWrapper container {...rest}>
        {children}
      </GridWrapper>
    </ContainerWrapper>
  );
}

export default Container;
