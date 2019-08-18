import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export default function Column({ children, ...rest }) {
  return (
    <Grid item {...rest}>
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
