import React from "react";

import { ImageBackground } from "custom_modules";

export function PresentationSection() {
  const props = {
    src:
      "https://dslv9ilpbe7p1.cloudfront.net/hownJrwXlTVdURCWN3Sj1g_store_header_image",
    color: "rgba(255,102,51,0.4)"
  };
  return <ImageBackground {...props} />;
}
