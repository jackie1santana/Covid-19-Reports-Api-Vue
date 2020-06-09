const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./model/graphqlSchema/schema");

//database is pulled in though graphql schema, which is required in server.js

dotenv.config({ path: "./config/.env" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



  var PORT = process.env.PORT;



const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
