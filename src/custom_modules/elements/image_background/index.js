import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const ImageOverlayColor = styled(Box)`
  background-color: ${({ color }) => color};
  height: 100vh;
`;

function ImageBackgroundWrapper({ color, src }) {
  return (
    <Box
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        backgroundImage: `url(${src})`
      }}
    >
      <ImageOverlayColor color={color} />
    </Box>
  );
}

export function ImageBackground(props) {
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
