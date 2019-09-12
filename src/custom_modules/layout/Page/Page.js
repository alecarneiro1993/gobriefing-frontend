// @flow

import React from 'react';
import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import styled from 'styled-components';

const PageWrapper = styled(Container)`
  display: flex;
  align-items: center;
  padding: 0;
`;

type Props = {};

export default function Page(props: Props) {
  return (
    <StylesProvider injectFirst>
      <PageWrapper {...props} component="main" />
    </StylesProvider>
  );
}
