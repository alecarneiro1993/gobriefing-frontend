import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export function Row({ children, ...props }) {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
