import { usersQueries } from "./queries";
import { usersMutations } from "./mutations";
const resolvers = {
  Query: {
    ...usersQueries
  },
  Mutation: {
    ...usersMutations
  }
};
export { resolvers };
