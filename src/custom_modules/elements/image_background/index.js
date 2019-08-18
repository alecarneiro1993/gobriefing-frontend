import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "@material-ui/core";

export const ImageBackground = styled(Box)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-image: ${({ src }) => `url(${src})`};
`;

ImageBackground.propTypes = {
  src: PropTypes.string.isRequired
};
