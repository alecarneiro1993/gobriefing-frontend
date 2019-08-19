import React from "react";
import { useTranslation } from "react-i18next";

import { ImageBackground } from "custom_modules";

export default function PresentationSection() {
  const { t } = useTranslation();
  const props = {
    src:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/8e/6a/d0/american-power.jpg",
    color: "#667eea, #764ba2",
    primaryText: "goBriefing",
    secondaryText: t("catch_phrase")
  };
  return <ImageBackground {...props} />;
}
