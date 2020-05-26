const axios = require("axios");

const casesByCountryName = countryName => 

    axios({
      method: "GET",
      url: "https://covid19-data.p.rapidapi.com/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid19-data.p.rapidapi.com",
        "x-rapidapi-key": "a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c",
        useQueryString: true,
      },
      params: {
        //start    
        country: countryName === 'us' ? 'United States of America' : 

        countryName === 'usa' ? 'United States of America' : 

        countryName === 'united states' ? 'United States of America' : 
        
        !countryName ? 'You entered an invalid country' : countryName
        //enf of ternary
      },
    })
      .then((response) => {
      
        
       return response.data
      })
      .catch((error) => {
        console.log(error);
      });
  

  module.exports = { casesByCountryName }