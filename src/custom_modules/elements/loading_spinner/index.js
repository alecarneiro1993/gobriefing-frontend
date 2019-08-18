import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import styled from "styled-components";

const AbsoluteContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: CENTER;
  align-items: CENTER;
`;

export default function LoadingSpinner() {
  return (
    <AbsoluteContainer>
      <CircularProgress />
    </AbsoluteContainer>
  );
}
