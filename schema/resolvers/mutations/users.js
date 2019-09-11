import axios from "axios";

const users = {
  authenticate: async (obj, { input: { email, password } }) => {
    const {
      data: { token }
    } = await axios.post("/api/sessions/authenticate", { email, password });
    if (token) return { token };
    throw new Error("errors.sessions.wrong_credentials");
  }
};

export default users;
