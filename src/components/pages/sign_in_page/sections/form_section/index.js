import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Row, Column, PageHeading } from "custom_modules";

export function FormSection() {
  const { t } = useTranslation();
  return (
    <Container alignItems="center">
      <Row alignContent="center">
        <Column xs={8}>
          <PageHeading>{t("pages.sign_in.heading")}</PageHeading>
        </Column>
        <Column xs={8}>
          <PageHeading>{t("pages.sign_in.heading")}</PageHeading>
        </Column>
      </Row>
    </Container>
  );
}
