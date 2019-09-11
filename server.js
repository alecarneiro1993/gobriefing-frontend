require("@babel/register");
require("@babel/polyfill");

const axios = require("axios");
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Accept"] = "application/json";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
