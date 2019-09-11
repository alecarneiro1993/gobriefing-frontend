import React from 'react';

import { SairaTypography, GradientOverlay } from 'custom_modules/elements';
import {
  QUARTER,
  LIGHT_PURPLE,
  LIGHT_PINK,
  WHITE,
  H1,
  H3,
  CENTER,
  PRODUCT_NAME,
} from 'utils/constants/values';

function MobileLogoHeader() {
  return (
    <GradientOverlay
      height={QUARTER}
      color={{ from: LIGHT_PURPLE, to: LIGHT_PINK }}
    >
      <SairaTypography
        gutterBottom
        customColor={WHITE}
        component={H1}
        variant={H3}
        align={CENTER}
      >
        {PRODUCT_NAME}
      </SairaTypography>
    </GradientOverlay>
  );
}

export default MobileLogoHeader;
