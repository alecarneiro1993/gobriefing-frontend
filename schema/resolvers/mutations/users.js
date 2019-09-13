import axios from 'axios';
import { isEqual } from 'lodash';

const users = {
  authenticate: async (obj, { input }) => {
    const {
      data: { token }
    } = await axios.post('/api/sessions/authenticate', { ...input });
    if (token) return { token };
    throw new Error('errors.sessions.wrong_credentials');
  },
  createUser: async (obj, { input }) => {
    const {
      data: { response }
    } = await axios.post('/users', { ...input });
    return { response };
  }
};

export default users;
