import React from "react";
import { useTranslation } from "react-i18next";

import {
  GradientOverlay,
  BlockContainer,
  SairaTypography,
  RobotoTypography
} from "custom_modules/elements";
import {
  PRODUCT_NAME,
  CENTER,
  WHITE,
  LIGHT_WHITE
} from "utils/constants/values";

export default function PresentationSection() {
  const { t } = useTranslation();
  return (
    <GradientOverlay color={{ from: "#667eea", to: "#764ba2" }}>
      <BlockContainer>
        <SairaTypography
          gutterBottom
          component="h1"
          variant="h3"
          align={CENTER}
          color={WHITE}
        >
          {PRODUCT_NAME}
        </SairaTypography>
      </BlockContainer>
      <BlockContainer>
        <RobotoTypography
          gutterBottom
          component="h1"
          variant="h3"
          align={CENTER}
          color={LIGHT_WHITE}
        >
          {t("catch_phrase")}
        </RobotoTypography>
      </BlockContainer>
    </GradientOverlay>
  );
}
