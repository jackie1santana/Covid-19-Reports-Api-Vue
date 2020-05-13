const express = require('express')
const app = express()
const cors = require('cors')
const admin = require('firebase-admin');
const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./models/graphqlSchema/schema')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});