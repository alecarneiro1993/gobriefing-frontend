import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "@material-ui/core";

import { CENTER } from "utils/constants";

const ImageOverlayColor = styled(Box)`
  background: ${({ color }) => `linear-gradient(${color});`}
  opacity: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

function ImageBackgroundWrapper(props) {
  const { primaryText, secondaryText, color } = props;
  return (
    <Box
      style={{
        backgroundPosition: { CENTER },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      <ImageOverlayColor color={color}>
        <Box>
          <Box
            style={{
              fontSize: "3.4rem",
              fontFamily: "Saira Stencil One, cursive"
            }}
          >
            {primaryText}
          </Box>

          <Box style={{ fontSize: "1.3rem" }}>{secondaryText}</Box>
        </Box>
      </ImageOverlayColor>
    </Box>
  );
}

export default function ImageBackground(props) {
  return <ImageBackgroundWrapper {...props} />;
}

ImageBackground.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string
};

ImageBackgroundWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string
};

ImageBackground.defaultProps = {
  color: ""
};

ImageBackgroundWrapper.defaultProps = {
  color: ""
};
