// @flow

import React from 'react';
import { capitalize } from 'lodash';

import * as toasters from './toasters';

function Toast({ variant, ...rest }: { variant: string, rest: Array<any> }) {
  const Toast = toasters[capitalize(variant)] || toasters.ErrorToast;
  return <Toast {...rest} />;
}

export default Toast;
