// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function FormText({ input, ...custom }: { input: Function }) {
  return <TextField {...input} {...custom} />;
}
