const { gql } = require("apollo-server");
const { currentGlobalCases } = require("../covidData/currentGlobalCases");
const { casesByCountryName } = require("../covidData/casesByCountryName");
const { casesByState } = require("../covidData/casesByState");
const { globalCasesByDate } = require("../covidData/globalCasesByDate");
const { db } = require("../database/firebase");

//Global cases
const errors = [
  {
    casesByState: "invalid country",
  },
];

const typeDefs = gql`

  type GlobalCases {
    confirmed: Int
    recovered: Int
    critical: Int
    deaths: Int
    lastUpdate: String
  }

  type GlobalCasesByDate {
    confirmed: Int
    recovered: Int
    deaths: Int
    active: Int
    date: String
  }

  type CasesByCountryName {
    countrycode: String
    country: String
    latitude: String
    longitude: String
    confirmed: Int
    deaths: Int
    recovered: Int
  }

  type CasesByState {
    countrycode: String
    country: String
    state: String
    latitude: String
    longitude: String
    confirmed: Int
    deaths: Int
  }

  type Registered{
    email: String,
    password: String

  }

  type Query {
    getCurrentGlobalCases: [GlobalCases]
    getGlobalCasesByDate(id: String!): [GlobalCasesByDate]
    getCasesByCountryName(id: String!): CasesByCountryName
    getCasesByState(id: String!): CasesByState
  }

  type Mutation {
    addRegisteredUser(email: String, password: String): Registered
  }
`;



const dates = [];

const resolvers = {
  Query: {
    getCurrentGlobalCases: () => currentGlobalCases(),

    getGlobalCasesByDate(parent, args) {
      //id: Cases By Date

      db.collection("datesSearched").add({
        state: args.id,
      });

      return globalCasesByDate(args.id);
    },
    // id: Cases By Country Name
    getCasesByCountryName(parent, args) {

      db.collection("countrySearched").add({
        state: args.id,
      });

      return casesByCountryName(args.id.trim());
    },

    async getCasesByState(parent, args) {
      args.id = args.id.toUpperCase().trim() && args.id.toLowerCase().trim();

      db.collection("statesSearched").add({
        state: args.id,
      });

      if (!args.id) {
        return "invalid state";
      } else {
        return await casesByState(args.id);
      }
    },
  },
  Mutation:{
    addRegisteredUser(_,{email, password }){
      const registeredUser = {email, password}
      
      //write code for if user already exist : email validation
      // const emailExist =  db.collection('users').get().then((snapshot) => {
      //   snapshot.docs.forEach(doc => {
      //     const data = [doc.data()]
          
       
      //     return data.find((user ) => user.email === 'chris@gmail.com')
      //   })
      // })

      db.collection("users").add({
        email,
        password,
      });

      return registeredUser
    },
  }
 
  
};

console.log(dates);
module.exports = { typeDefs, resolvers };
