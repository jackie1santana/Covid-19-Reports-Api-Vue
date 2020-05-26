const axios = require("axios");

const currentGlobalCases = () => 
  axios({
    method: "GET",
    url: "https://covid-19-data.p.rapidapi.com/totals",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c",
      useQueryString: true,
    },
    params: {
      format: "json",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });



    const testGlobalCases = [
      {
          confirmed: 53003060,
          recovered: 240050,
          critical: 3000,
          deaths: 30045895,
          lastUpdate: "2020-05-26T18:15:02+02:00",
          testApi: true
      }
  ]
  
module.exports = { currentGlobalCases, testGlobalCases };
