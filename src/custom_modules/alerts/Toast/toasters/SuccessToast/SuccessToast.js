// @flow

import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import {
  RIGHT, TOP, CENTER, GREEN,
} from 'utils/constants/values';

type Props = {};

function SuccessToast(props: Props) {
  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: RIGHT, vertical: TOP }}
      ContentProps={{
        style: { backgroundColor: GREEN, justifyContent: CENTER },
      }}
      {...props}
    />
  );
}

export default SuccessToast;
