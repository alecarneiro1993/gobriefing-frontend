import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

function BlockContainer({ children }) {
  return <Box>{children}</Box>;
}

export default BlockContainer;

BlockContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

BlockContainer.defaultProps = {
  children: []
};
