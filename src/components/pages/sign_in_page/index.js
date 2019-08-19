import React from "react";

import { PageContainer, Row, Column } from "custom_modules";

import { PresentationSection, FormSection } from "./sections";

class SignInPage extends React.Component {
  render() {
    return (
      <PageContainer maxWidth={false}>
        <Row>
          <Column smDown md={7} lg={7} xl={8}>
            <PresentationSection />
          </Column>
          <Column xs sm md lg xl>
            <FormSection />
          </Column>
        </Row>
      </PageContainer>
    );
  }
}

export default SignInPage;
