import React from "react";
import Hidden from "@material-ui/core/Hidden";

import { PageContainer, Row, Column } from "custom_modules/layout";
import { SairaTypography } from "custom_modules/elements";
import { PRODUCT_NAME, PRIMARY, CENTER } from "utils/constants";

import { PresentationSection, FormSection } from "./sections";

class SignInPage extends React.Component {
  render() {
    return (
      <PageContainer maxWidth={false}>
        <Row>
          <Hidden smDown>
            <Column md={7} lg={7} xl={8}>
              <PresentationSection />
            </Column>
          </Hidden>
          <Column xs sm md lg xl>
            <Hidden mdUp>
              <SairaTypography
                gutterBottom
                component="h1"
                variant="h3"
                align={CENTER}
                color={PRIMARY}
              >
                {PRODUCT_NAME}
              </SairaTypography>
            </Hidden>
            <FormSection />
          </Column>
        </Row>
      </PageContainer>
    );
  }
}

export default SignInPage;
