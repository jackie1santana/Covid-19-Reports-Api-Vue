<template>
  <div>
    <h1>Covid 19 Data</h1>
    <h3>Current Cases as of 5/20/20</h3>
    <h4>[current cases here..coming soon [Active, Critical, Recovered, Deaths]]</h4>
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
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      series: [
        {
          name: "Confirmed Cases",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 150, 160, 170],
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
            "Dec"
          ],
        },
        colors: ['#00aae4', '#ff0000'],
      },
    };
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
ß
