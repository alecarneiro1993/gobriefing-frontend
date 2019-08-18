import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Row, Column, PageHeading } from "custom_modules";
import { CENTER, FULL } from "utils/constants";

import SignInForm from "./sign_in_form";

export default function FormSection() {
  const { t } = useTranslation();
  return (
    <Container height={FULL} alignContent={CENTER}>
      <Row justify={CENTER} styles={{ padding: "3rem" }}>
        <Column xs={10}>
          <PageHeading align={CENTER}>{t("pages.sign_in.heading")}</PageHeading>
        </Column>
      </Row>
      <Row justify={CENTER}>
        <Column xs={10}>
          <SignInForm />
        </Column>
      </Row>
    </Container>
  );
}
