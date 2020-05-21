const { gql } = require("apollo-server");
const { 
  currentGlobalCases, 
  globalCasesByDate,
  casesByState
 } = require('../covidData/data')

class Covid {}
//Global cases

  // currentGlobalCases()
  // globalCasesByDate("04-02-2020")
  let state = 'south carolina' //can be any state
  state = state.toUpperCase() && state.toLowerCase()
  casesByState(state)

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
 {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    getBooks: [Book]
  }
`;

const resolvers = {
  Query: {
    getBooks: () => books,
  },
};

module.exports = { typeDefs, resolvers };
