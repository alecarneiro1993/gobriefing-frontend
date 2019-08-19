import React from "react";
import { Container } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";

const PageWrapper = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
`;

export default function PageContainer(props) {
  return (
    <StylesProvider injectFirst>
      <PageWrapper {...props} component="main" />
    </StylesProvider>
  );
}
