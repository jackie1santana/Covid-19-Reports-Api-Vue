const axios = require("axios");

const casesByState = state =>
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
      const NewMexico = response.data.list[44];
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
        case "sc":
          return SouthCarolina;
          break;
        case "louisiana":
        case "la":
          return Louisiana;
          break;
        case "virginia":
        case "va":
          return Virginia;
          break;
        case "idaho":
        case "id":
          return Idaho;
          break;
        case "iowa":
        case "ia":
          return Iowa;
          break;
        case "kentucky":
        case "ky":
          return Kentucky;
          break;
        case "missouri":
        case "mo":
          return Missouri;
          break;
        case "oklahoma":
        case "ok":
          return Oklahoma;
          break;
        case "colorado":
        case "co":
          return Colorado;
          break;
        case "indiana":
        case "in":
          return Indiana;
          break;
        case "mississippi":
        case "ms":
          return Mississippi;
          break;
        case "nebraska":
        case "ne":
          return Nebraska;
          break;
        case "ohio":
        case "oh":
          return Ohio;
          break;
        case "pennsylvania":
        case "pa":
          return Pennsylvania;
          break;
        case "washington":
        case "wa":
          return Washington;
          break;
        case "wisconsin":
        case "wi":
          return Wisconsin;
          break;
        case "vermont":
        case "vt":
          return Vermont;
          break;
        case "minnesota":
        case "mn":
          return Minnesota;
          break;
        case "florida":
        case "fl":
          return Florida;
          break;
        case "north carolina":
        case "nc":
          return NorthCarolina;
          break;
        case "california":
        case "ca":
          return California;
          break;
        case "new york":
        case "ny":
          return NewYork;
          break;
        case "wyoming":
        case "wy":
          return Wyoming;
          break;
        case "michigan":
        case "mi":
          return Michigan;
          break;
        case "maryland":
        case "md":
          return Maryland;
          break;
        case "alaska":
        case "ak":
          return Alaska;
          break;
        case "kansas":
        case "ks":
          return Kansas;
          break;
        case "tennessee":
        case "tn":
          return Tennessee;
          break;
        case "tx":
        case "texas":
          return Texas;
          break;
        case "arizona":
        case "az":
          return Arizona;
          break;
        case "maine":
        case "me":
          return Maine;
          break;
        case "georgia":
        case "ga":
          return Georgia;
          break;
        case "arkansas":
        case "ar":
          return Arkansas;
          break;
        case "new jersey":
        case "nj":
          return NewJersey;
          break;
        case "south dakota":
        case "sd":
          return SouthDakota;
          break;
        case "alabama":
        case "al":
          return Alabama;
          break;
        case "oregon":
        case "or":
          return Oregon;
          break;
        case "west virginia":
        case "wv":
          return WestVirginia;
          break;
        case "north dakota":
        case "nd":
          return NorthDakota;
          break;
        case "massachusetts":
        case "ma":
          return Massachusetts;
          break;
        case "utah":
        case "ut":
          return Utah;
          break;
        case "montana":
        case "mt":
          return Montana;
          break;
        case "new hampshire":
        case "nh":
          return NewHampshire;
          break;
        case "new mexico":
        case "nm":
          return NewMexico;
          break;
        case "rhode island":
        case "ri":
          return RhodeIsland;
          break;
        case "nevada":
        case "nv":
          return Nevada;
          break;
        case "washington d.c.":
        case "washington dc":
        case "dc":
        case "d.c.":
          return WashingtonDC;
          break;
        case "connecticut":
        case "ct":
          return Connecticut;
          break;
        case "hawaii":
        case "hi":
          return Hawaii;
          break;
        case "delaware":
        case "de":
          return Delaware;
          break;
        case "guam":
        case "gu":
          return Guam;
          break;
        case "northern mariana islands":
        case "mp":
          return NorthernMarianaIslands;
          break;
        case "puerto rico":
        case "pr":
          return PuertoRico;
          break;
        case "virgin islands":
        case "vi":
          return VirginIslands;
          break;
        default:
          throw new Error("The state you entered in is invalid");
          break;
      }
    })
    .catch((error) => {
      console.log(error);
    });

module.exports = { casesByState };
