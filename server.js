const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./model/graphqlSchema/schema");
const path = require('path') 


const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });


dotenv.config({ path: "./config/.env" });
var PORT = process.env.PORT;



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const publicDirectoryPath = path.join(__dirname, '/server/public')

app.use(express.static(publicDirectoryPath))


app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT} | GraphQL Server: http://localhost:${PORT}${server.graphqlPath}`)
);
