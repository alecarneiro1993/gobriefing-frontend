import React from "react";
import { Container } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";

const PageWrapper = styled(Container)`
  height: 100vh;
  padding: 0;
`;

export function PageContainer(props) {
  return (
    <StylesProvider injectFirst>
      <PageWrapper {...props} />
    </StylesProvider>
  );
}
