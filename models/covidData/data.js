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
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

const globalCasesByDate = (date) => {
  const axios = require("axios");

  axios({
    method: "GET",
    url: "https://covid-19-data.p.rapidapi.com/report/totals",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c",
      useQueryString: true,
    },
    params: {
      "date-format": "MM-DD-YYYY",
      format: "json",
      date: date,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const casesByState = (state) => {
  axios({
    method: "GET",
    url: "https://covid19-data.p.rapidapi.com/us",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid19-data.p.rapidapi.com",
      "x-rapidapi-key": "a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c",
      useQueryString: true,
    },
  })
    .then((response) => {
      const recoveredInUSA = response.data.recovered;

      const SouthCarolina = response.data.list[0];
      const Louisiana = response.data.list[1];
      const Virginia = response.data.list[2];
      const Idaho = response.data.list[3];
      const Iowa = response.data.list[4];
      const Kentucky = response.data.list[5];
      const Missouri = response.data.list[6];
      const Oklahoma = response.data.list[7];
      const Colorado = response.data.list[8];
      const Illinois = response.data.list[9];
      const Indiana = response.data.list[10];
      const Mississippi = response.data.list[11];
      const Nebraska = response.data.list[12];
      const Ohio = response.data.list[13];
      const Pennsylvania = response.data.list[14];
      const Washington = response.data.list[15];
      const Wisconsin = response.data.list[16];
      const Vermont = response.data.list[17];
      const Minnesota = response.data.list[18];
      const Florida = response.data.list[19];
      const NorthCarolina = response.data.list[20];
      const California = response.data.list[21];
      const NewYork = response.data.list[22];
      const Wyoming = response.data.list[23];
      const Michigan = response.data.list[24];
      const Maryland = response.data.list[25];
      const Alaska = response.data.list[26];
      const Kansas = response.data.list[27];
      const Tennessee = response.data.list[28];
      const Texas = response.data.list[29];
      const Maine = response.data.list[30];
      const Arizona = response.data.list[31];
      const Georgia = response.data.list[32];
      const Arkansas = response.data.list[32];
      const NewJersey = response.data.list[34];
      const SouthDakota = response.data.list[35];
      const Alabama = response.data.list[36];
      const Oregon = response.data.list[37];
      const WestVirginia = response.data.list[38];
      const NorthDakota = response.data.list[39];
      const Massachusetts = response.data.list[40];
      const Utah = response.data.list[41];
      const Montana = response.data.list[42];
      const NewHampshire = response.data.list[43];
      const NewMexico = response.data.list[43];
      const RhodeIsland = response.data.list[45];
      const Nevada = response.data.list[46];
      const WashingtonDC = response.data.list[47];
      const Connecticut = response.data.list[48];
      const Hawaii = response.data.list[49];
      const Delaware = response.data.list[50];
      const Guam = response.data.list[53];
      const NorthernMarianaIslands = response.data.list[54];
      const PuertoRico = response.data.list[55];
      const VirginIslands = response.data.list[56];

      switch (state) {
        case "south carolina":
          console.log(SouthCarolina);
          break;
        case "louisiana":
          console.log(Louisiana);
          break;
        default:
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  currentGlobalCases,
  globalCasesByDate,
  casesByState,
};
