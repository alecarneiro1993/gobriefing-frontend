import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

export function PageHeading({ children, ...rest }) {
  return (
    <Typography {...rest} component="h1" variant="h4">
      {children}
    </Typography>
  );
}

PageHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
