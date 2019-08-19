import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Row, Column, SairaTypography } from "custom_modules";
import { CENTER, FULL, SECONDARY } from "utils/constants";

import SignInForm from "./sign_in_form";

export default function FormSection() {
  const { t } = useTranslation();
  return (
    <Container height={`${FULL}%`} alignContent={CENTER}>
      <Row justify={CENTER}>
        <Column xs={4} align={CENTER}>
          <SairaTypography
            gutterBottom
            component="h1"
            variant="h4"
            color={SECONDARY}
          >
            {t("pages.sign_in.heading")}
          </SairaTypography>
        </Column>
      </Row>
      <Row>
        <Column xs>
          <SignInForm />
        </Column>
      </Row>
    </Container>
  );
}
