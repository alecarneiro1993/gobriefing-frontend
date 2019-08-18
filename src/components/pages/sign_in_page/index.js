import React from "react";

import { PageContainer, Row, Column } from "custom_modules";

import { PresentationSection, FormSection } from "./sections";

class SignInPage extends React.Component {
  render() {
    return (
      <PageContainer maxWidth={false}>
        <Row>
          <Column xs={7}>
            <PresentationSection />
          </Column>
          <Column xs={5}>
            <FormSection />
          </Column>
        </Row>
      </PageContainer>
    );
  }
}

export default SignInPage;
