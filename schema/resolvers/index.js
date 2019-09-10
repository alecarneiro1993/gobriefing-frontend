import { users } from "./types";
const resolvers = {
  Query: {
    ...users
  }
};

export { resolvers };
