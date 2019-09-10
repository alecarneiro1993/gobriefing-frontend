import axios from "axios";
import { isEqual } from "lodash";
import { AuthenticationError } from "apollo-server";

const users = {
  authenticate: (obj, { email, password }) => {
    return axios
      .post("/api/sessions/authenticate", { email, password })
      .then(({ data: { sessionKey } }) => {
        if (sessionKey) return sessionKey;
        throw new AuthenticationError("errors.sessions.wrong_credentials");
      });
  }
};

export default users;
