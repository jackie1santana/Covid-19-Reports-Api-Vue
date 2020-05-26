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
  
module.exports = { currentGlobalCases };
