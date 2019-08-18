import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export default function Row({ children, ...rest }) {
  return (
    <Grid container direction="row" {...rest}>
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
