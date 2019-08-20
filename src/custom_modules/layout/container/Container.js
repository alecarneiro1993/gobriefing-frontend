import React from "react";
import PropTypes from "prop-types";
import { Container as MUIContainer, Grid } from "@material-ui/core";
import styled from "styled-components";

import { FULL } from "utils/constants";

const ContainerWrapper = styled(MUIContainer)`
  height: ${({ height }) => height || "auto"};
  padding: 0;
`;

const GridWrapper = styled(Grid)`
  height: ${FULL}%;
  padding: 0;
`;

export default function Container({ children, height, ...rest }) {
  return (
    <ContainerWrapper height={height}>
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
  ]).isRequired,
  height: PropTypes.string
};

Container.defaultProps = {
  height: "auto"
};
