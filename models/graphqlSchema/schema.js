const { gql } = require('apollo-server')
const axios = require("axios");

//Global cases
axios({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/totals",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":"a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c",
    "useQueryString":true
    },"params":{
    "format":"json"
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];

  const typeDefs = gql`
    type Book {
      title: String,
      author: String
  }

  type Query{
      getBooks: [Book]
  }
  `

const resolvers = {
  Query: {
    getBooks: () => books
  }
}
  

  module.exports = { typeDefs, resolvers }
