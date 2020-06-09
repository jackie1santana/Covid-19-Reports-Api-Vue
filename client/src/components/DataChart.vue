<template>
  <ApolloQuery
    ref="covidData"
    :query="require('../graphql/getCurrentGlobalCases.gql')"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <div>
        <div id="outside_headTitle">
          <h1><span id="headTitle">Coronavirus Disease (COVID-19) Dashboard</span></h1>
        </div>

      
        <div  v-if="data">
          <div class="card-cases">
            <!-- CONFIRMED CARD -->
            <v-card class="mx-auto confirmed-card" max-width="344">
              <h2 v-for="cases in data.getCurrentGlobalCases" :key="cases">
                Confirmed Cases
                <hr />
                <br />
                <span style="color:#00aae4">
                  {{ cases.confirmed.toLocaleString() }}
                </span>
              </h2>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                  Infections Over Time
                </v-btn>
              </v-card-actions>
            </v-card>

            <!-- Death CARD -->
            <v-card class="mx-auto death-card" max-width="344">
              <h2 v-for="cases in data.getCurrentGlobalCases" :key="cases">
                <span v-bind:style="death_cases_title">Deaths</span>
                <hr />
                <br />

                <span style="color:#ff0000">
                  {{ cases.deaths.toLocaleString() }}
                </span>
              </h2>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                  Deaths Over Time
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>


<div class="case_passage">
 <h2  v-for="cases in data.getCurrentGlobalCases" :key="cases">Globally, <span class="font">as of</span> {{ isTime() }} CEST, {{ isToday() }}, <span class="font">there have been</span> {{cases.confirmed.toLocaleString()}} confirmed cases <span class="font">of COVID-19, including</span> {{cases.deaths.toLocaleString()}} deaths, <span class="font">reported to WHO.</span></h2>
</div>

        <!-- call this function to output the new data into the apexchart -->
        {{ updateChart() }}

        <div v-show="updateChart">
          <div id="chart">
            <apexchart
            height="550"
            width="1000"
              type="area"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
    </template>



    <div class="footer">
  <v-footer style="margin-top:80px;padding:20px;"
    color="primary lighten-1"
    padless
    
  >
    <v-row
      justify="center"
      no-gutters
      
    >
    <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
      <v-btn 
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
       </v-col>
       <v-col style="padding:10px;"
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Powered by Santana Inc.</strong> &reg;
      </v-col>
    </v-row>
  </v-footer>
  </div>
  </ApolloQuery>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import gql from "graphql-tag";
import moment from "moment";

export default {
  
  components: {
    apexchart: VueApexCharts,
  },
  apollo: {
    getCurrentGlobalCases: {
      query: gql`
        query {
          getCurrentGlobalCases {
            confirmed
            recovered
            critical
            deaths
            lastUpdate
          }
        }
      `,
    },
  },
  data: function() {
    return {
      num: true,
       links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      death_cases_title: {
        padding: "50px",
      },
      series: [
        {
          name: "Confirmed Cases",
          data: [2, 41, 35, 51, 55, 400, 62, 69, 91, 148, 150, 160, 170],
        },
        {
          name: "Deaths",
          data: [2, 6, 14, 20, 50, 62, 49, 91, 148, 150, 160, 162],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        markers: {
          size: 4,
        },
        title: {
          text: "Covid-19 Cases by Month",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        colors: ["#00aae4", "#ff0000"],
      },
      
    };
  },

  methods: {
  

    isToday() {
      return moment().format("MMMM Do YYYY");
    },
    isTime() {
      return moment().format('LTS');
    },

    updateChart() {
      //This is how you update an apexchart

      //  const max = 90;
      //  const min = 20;
      // const num = this.$apollo.queries.getCurrentGlobalCases.vm._data.$apolloData.data.getCurrentGlobalCases

      // console.log(this.$apollo.queries.getCurrentGlobalCases.vm._data.$apolloData.data.getCurrentGlobalCases[0])
      // let newSeries = this.$apollo.queries.getTestGlobalCases.vm._data.$apolloData.data.getTestGlobalCases[0].confirmed[0]
      //  const newData = this.series[0].data.map(() => {

      //    return Math.floor(Math.random() * (max - min + 1)) + min
      //  })
      // In the same way, update the series option

      let currentConfirmedCases = this.$refs.covidData.result.data
        .getCurrentGlobalCases[0].confirmed;

      JSON.parse(JSON.stringify(currentConfirmedCases));
      console.log(currentConfirmedCases);

      let currentDeathCases = this.$refs.covidData.result.data
        .getCurrentGlobalCases[0].deaths;

      JSON.parse(JSON.stringify(currentDeathCases));
      console.log(currentDeathCases);

      // let num = [2000];
      let confirmedData = [
        223700,
        3340235,
        5345045,
        3334045,
        6034045,
        currentConfirmedCases,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ];
      // confirmedData.splice(5, 1, num);

      // let num2 = [4000];
      let deathData = [
        1000,
        20000,
        90000,
        150000,
        203345,
        currentDeathCases,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ];
      // deathData.splice(7, 1, num2);

      //this is how you update the apexChart , you pass in the apollo query data inot the series object like
      this.series = [
        {
          name: "Confirmed",
          data: confirmedData,
        },
        {
          name: "Deaths",
          data: deathData,
        },
      ];
    },
  },
  mounted(){
    this.updateChart()
  }
};
</script>

<style lang="scss">
#chart {
  display: flex;
  justify-content: center;
  
}

#graph {
  background-color: white;
  border-radius: 5px;
  
 
}

.card-cases {
  display: flex;
  justify-content: center;
  border-radius: 5px;
  
}

.confirmed-card {
  margin: 20px;
  padding: 50px;
   
   -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.56);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.56);
}

.death-card {
  margin: 20px;
  padding: 50px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.56);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.56);
}

#outside_headTitle {
  margin: 40px;

  #headTitle {
    border: 1px solid rgb(206, 198, 198);
    border-radius: 4px;
    padding-left: 40px;
    padding-right: 40px;
    background: rgb(206, 198, 198);
    color: white;
     box-shadow: 7px 10px 12px -5px rgba(0,0,0,0.56);
  }


}

  .font{
  font-size: 20px;
  font-weight:lighter;
}

.case_passage{
    margin: 50px;
}

/* Cases Card */
@media all and (max-width: 672px){
  .card-cases {
    display: inline-block;
    justify-content: center;
    border-radius: 5px;
    
  }
}


@media all and (max-width: 834px){
  #outside_headTitle {
  margin: 40px;

  #headTitle {
    display: block;
    margin-right: 0.4em;
    border: 1px solid rgb(206, 198, 198);
    border-radius: 4px;
    padding-left: 40px;
    padding-right: 40px;
    background: rgb(206, 198, 198);
    color: white;
     box-shadow: 7px 10px 12px -5px rgba(0,0,0,0.56);
  }
  }
  }

  @media all and (max-width: 1013px){
   #chart{
     zoom: 80%;
   }
  }

 @media all and (max-width: 700px){
   #chart{
     zoom: 70%;
   }
  }

 @media all and (max-width: 700px){
   #chart{
     zoom: 60%;
   }
  }

  @media all and (max-width: 500px){
   #chart{
     zoom: 47%;
   }
  }

  @media all and (max-width: 360px){
   #chart{
     zoom: 35%;
   }

   
  }

html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
</style>
