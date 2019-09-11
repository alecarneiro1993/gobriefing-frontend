import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import {
  DARK_RED, RIGHT, TOP, ERROR, CENTER,
} from 'utils/constants/values';

function ErrorToast(props) {
  return (
    <Snackbar
      variant={ERROR}
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: RIGHT, vertical: TOP }}
      ContentProps={{
        style: { backgroundColor: DARK_RED, justifyContent: CENTER },
      }}
      {...props}
    />
  );
}

export default ErrorToast;
