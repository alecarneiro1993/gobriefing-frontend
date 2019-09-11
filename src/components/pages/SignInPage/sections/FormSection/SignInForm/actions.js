import { SET_TOKEN } from 'utils/constants/types';

export function setToken(token) {
  return { type: SET_TOKEN, payload: token };
}
