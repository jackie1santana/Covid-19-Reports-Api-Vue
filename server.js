const express = require("express");
const app = express();
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccount.json')
const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./models/graphqlSchema/schema");


dotenv.config({ path: "./config/.env" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Will this break the program?

if (process.env.NODE_ENV === "production") {
  // We are running in production mode
} else {
  // We are running in development mode
  var PORT = process.env.PORT;
}

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-covid-19-project.firebaseio.com",
});

const db = firebase.firestore()


// db.collection('users').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//       console.log(doc.data())
//   })
// })


const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
