import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export function Row({ children, ...rest }) {
  return (
    <Grid container {...rest}>
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
