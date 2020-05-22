const { gql } = require("apollo-server");
const { currentGlobalCases } = require("../covidData/currentGlobalCases");
const { casesByCountryName } = require("../covidData/casesByCountryName");
const { casesByState } = require("../covidData/casesByState");
const { globalCasesByDate } = require("../covidData/globalCasesByDate");

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

  type Query {
    getCurrentGlobalCases: [GlobalCases]
    getGlobalCasesByDate(id: String!): [GlobalCasesByDate]
    getCasesByCountryName(id: String!): CasesByCountryName
    getCasesByState(id: String!): CasesByState
  }
`;

const resolvers = {
  Query: {
    getCurrentGlobalCases: () => currentGlobalCases(),

    getGlobalCasesByDate(parent, args) {
      //id: Cases By Date

      return globalCasesByDate(args.id);
    },
    // id: Cases By Country Name
    getCasesByCountryName(parent, args) {
      return casesByCountryName(args.id.trim());
    },

    getCasesByState(parent, args) {
      args.id = args.id.toUpperCase().trim() && args.id.toLowerCase().trim();

      if (!args.id) {
        return "invalid state";
      }

      return casesByState(args.id);
    },
  },
};
module.exports = { typeDefs, resolvers };
