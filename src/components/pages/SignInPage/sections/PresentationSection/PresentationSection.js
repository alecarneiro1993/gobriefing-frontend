import React from "react";
import { useTranslation } from "react-i18next";

import {
  GradientOverlay,
  SairaTypography,
  RobotoTypography
} from "custom_modules/elements";
import { Block } from "custom_modules/layout";
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
      <Block>
        <SairaTypography
          gutterBottom
          component="h1"
          variant="h3"
          align={CENTER}
          color={WHITE}
        >
          {PRODUCT_NAME}
        </SairaTypography>
      </Block>
      <Block>
        <RobotoTypography
          gutterBottom
          component="h1"
          variant="h3"
          align={CENTER}
          color={LIGHT_WHITE}
        >
          {t("catch_phrase")}
        </RobotoTypography>
      </Block>
    </GradientOverlay>
  );
}
