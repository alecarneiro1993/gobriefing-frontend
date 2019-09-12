import axios from 'axios';

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
      data: { isCreated }
    } = await axios.post('/api/users', { ...input });
    if (isCreated) return { isCreated };
    throw new Error('errors.users.creation_failed');
  }
};

export default users;
