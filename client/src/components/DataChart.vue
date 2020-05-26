<template>
  <ApolloQuery :query="require('../graphql/getTestGlobalCases.gql')">
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
            v-for="cases in data.getTestGlobalCases"
            :key="cases.confirmed"
          >
            Confirmed:{{cases.confirmed}}
          </h1>

          
        </div>

        <h2>{{ test() }}</h2>

        <div id="chart">
          <apexchart
            type="area"
            height="550"
            width="1000"
            :options="chartOptions"
            :series="test()"
          ></apexchart>
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
    getTestGlobalCases: {
      query: gql`
        query {
          getTestGlobalCases {
      confirmed
      recovered
      critical
      deaths
      testApi
    }
        }
      `,
    },
    // variables(){
    //   console.log(this.$apollo.queries)
    // },
    //  // Disable the query
    // skip () {
    //   return this.skipQuery
    // },
   },
  data: function() {
    return {
   
      message: "Jackie Santana",
      series: [
        {
          name: "Confirmed Cases",
          data: [
            2,
            41,
            35,
            51,
            55,
            400,
            62,
            69,
            91,
            148,
            150,
            160,
            170,
          ],
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
    test(){

      const num = this.$apollo.queries.getTestGlobalCases.vm._data.$apolloData.data.getTestGlobalCases[0].confirmed

      const newSeries = Array.from(this.series)
      newSeries[0].data.splice(2,1,num)
      
      // console.log(this.$apollo.queries.getTestGlobalCases.skip = true)
    
  

      return newSeries
    }
  },

  mounted() {
    // this.$apollo.queries.getTestGlobalCases.vm._data.$apolloData
    
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
