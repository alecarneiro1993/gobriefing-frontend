import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export function Column({ children, ...props }) {
  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
