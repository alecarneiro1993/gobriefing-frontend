import React from "react";
import PropTypes from "prop-types";
import { Container as MUIContainer, Grid } from "@material-ui/core";
import styled from "styled-components";

const ContainerWrapper = styled(MUIContainer)`
  height: 100vh;
  padding: 0;
`;

const GridWrapper = styled(Grid)`
  height: 100vh;
  padding: 0;
`;

export function Container({ children, ...rest }) {
  return (
    <ContainerWrapper>
      <GridWrapper container {...rest}>
        {children}
      </GridWrapper>
    </ContainerWrapper>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
