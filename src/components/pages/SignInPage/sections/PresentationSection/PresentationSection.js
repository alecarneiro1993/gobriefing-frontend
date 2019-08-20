import React from "react";
import { useTranslation } from "react-i18next";

import {
  GradientOverlay,
  SairaTypography,
  RobotoTypography
} from "custom_modules/elements";
import { Container, Row, Column } from "custom_modules/layout";
import {
  PRODUCT_NAME,
  CENTER,
  WHITE,
  LIGHT_WHITE,
  H1,
  H2,
  SUBTITLE
} from "utils/constants/values";

export default function PresentationSection() {
  const { t } = useTranslation();
  return (
    <GradientOverlay color={{ from: "#667eea", to: "#764ba2" }}>
      <Container>
        <Row>
          <Column md>
            <SairaTypography
              component={H1}
              variant={H2}
              align={CENTER}
              customColor={WHITE}
            >
              {PRODUCT_NAME}
            </SairaTypography>
          </Column>
        </Row>
        <Row>
          <Column md>
            <RobotoTypography
              component={H2}
              variant={`${SUBTITLE}1`}
              align={CENTER}
              customColor={LIGHT_WHITE}
            >
              {t("catch_phrase")}
            </RobotoTypography>
          </Column>
        </Row>
      </Container>
    </GradientOverlay>
  );
}
