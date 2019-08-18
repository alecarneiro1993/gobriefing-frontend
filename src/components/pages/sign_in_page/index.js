import React from "react";
import { Grid } from "@material-ui/core";

import { PageContainer, Row, Column } from "custom_modules";

class SignInPage extends React.Component {
  render() {
    return (
      <PageContainer>
        <Row>
          <Column xs="8">Side</Column>
          <Column xs="4">Form</Column>
        </Row>
      </PageContainer>
    );
  }
}

export { SignInPage };
