<template>
  <ApolloQuery
    ref="covidData"
    :query="require('../graphql/getCurrentGlobalCases.gql')"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <div>
        <h1>Covid 19 Data</h1>
        <h3>Current Cases as of 5/20/20</h3>
        <h4>
          [current cases here..coming soon [Active, Critical, Recovered,
          Deaths]]
        </h4>

        <div v-if="data">
          <h1
            v-for="cases in data.getCurrentGlobalCases"
            :key="cases.confirmed"
          >
            Confirmed:{{ cases.confirmed }}
          </h1>
        </div>


<!-- call this function to output the new data into the apexchart -->
  {{updateChart()}}
   
<div v-show="updateChart">

        <div id="chart">
          <apexchart
            type="area"
            height="550"
            width="1000"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import gql from "graphql-tag";



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
      message: "Jackie Santana",
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
          type: "line",
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

      let currentConfirmedCase = this.$refs.covidData.result.data.getCurrentGlobalCases[0]
        .confirmed;
 
      JSON.parse(JSON.stringify(currentConfirmedCase));
console.log(currentConfirmedCase)

    

      let num = [2000];
      let data = [currentConfirmedCase, 7, 7, 9, 0, 9, 8, 7, 95, 8, 8, 6, 2];
      data.splice(5, 1, num);

//this is how you update the apexChart , you pass in the apollo query data inot the series object like
      this.series = [
        {
          name: "Confirmed",
          data,
        },
        {
          name: "Deaths",
          data,
        },
      ];
    },
  },
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
  box-shadow: 7px 20px 12px -5px rgba(0, 0, 0, 0.56);
}
</style>
