import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "@material-ui/core";

import { CENTER } from "utils/constants";

const ImageOverlayColor = styled(Box)`
  background: ${({ color }) => `linear-gradient(${color});`}
  
  opacity: 0.7;
  height: 100vh;
`;

function ImageBackgroundWrapper({ color, src }) {
  return (
    <Box
      style={{
        backgroundPosition: { CENTER },
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
