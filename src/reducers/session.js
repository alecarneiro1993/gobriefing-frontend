import { SET_TOKEN } from 'utils/constants/types';

const initialState = {
  token: '',
};

function session(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
}

export default session;
