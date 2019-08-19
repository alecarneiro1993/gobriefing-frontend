import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "@material-ui/core";

import { CENTER, WHITE, LIGHT_WHITE, FULL, FLEX } from "utils/constants";
import SairaTypography from "../saira_typography";
import RobotoTypography from "../roboto_typography";

const GradientOverlay = styled(Box)`
  background: ${({ color: { from, to } }) => `linear-gradient(${from}, ${to});`}
  opacity: 1;
  height: ${FULL}vh;
  display: ${FLEX};
  align-items: ${CENTER};
  justify-content: ${CENTER};
`;

const Title = styled(SairaTypography)`
  color: ${WHITE};
`;

const Subtitle = styled(RobotoTypography)`
  color: ${LIGHT_WHITE};
`;

function BackgroundWrapper(props) {
  const { title, subtitle, color } = props;
  return (
    <Box>
      <GradientOverlay color={color}>
        <Box>
          <Title component="h1" variant="h2" align={CENTER}>
            {title}
          </Title>
          <Subtitle component="h2" variant="subtitle1" align={CENTER}>
            {subtitle}
          </Subtitle>
        </Box>
      </GradientOverlay>
    </Box>
  );
}

const BackgroundOverlay = styled(BackgroundWrapper)`
  background-position: ${CENTER};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export default BackgroundOverlay;

BackgroundWrapper.propTypes = {
  color: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string }),
  title: PropTypes.string,
  subtitle: PropTypes.string
};

BackgroundWrapper.defaultProps = {
  color: {},
  title: "",
  subtitle: ""
};

GradientOverlay.propTypes = {
  color: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string })
};
GradientOverlay.defaultProps = {
  color: {}
};
