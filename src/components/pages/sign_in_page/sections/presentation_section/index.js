import React from "react";
import { useTranslation } from "react-i18next";

import { BackgroundOverlay } from "custom_modules";
import { PRODUCT_NAME } from "utils/constants/values";

export default function PresentationSection() {
  const { t } = useTranslation();
  const props = {
    src:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/8e/6a/d0/american-power.jpg",

    title: PRODUCT_NAME,
    subtitle: t("catch_phrase"),
    color: {
      from: "#667eea",
      to: "#764ba2"
    }
  };
  return <BackgroundOverlay {...props} />;
}
