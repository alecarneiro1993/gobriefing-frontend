import React from "react";
import { Container } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";

const PageWrapper = styled(Container)`
  display: flex;
  align-items: center;
  padding: 0;
`;

export default function Page(props) {
  return (
    <StylesProvider injectFirst>
      <PageWrapper {...props} component="main" />
    </StylesProvider>
  );
}
