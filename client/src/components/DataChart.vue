<template>
<div>
    <h1>Current Global Covid 19 Data</h1>
  <div id="chart">
      <apexchart type="pie" width="500" :options="chartOptions" :series="series"></apexchart>
  </div>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        'apexchart': VueApexCharts
    },
     data: function() {
    return {
      series: [44, 55, 13, 43],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            colors: ['#0080ff', '#FF9800', '#e5e500', '#e50000'],
            labels: ['Confirmed', 'Recovered', 'Critical', 'Deaths'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom',
                }
              }
            }]
          },
          
          
        }
     }
}
</script>

<style lang="scss">

    #chart{
       display: flex;
       justify-content: center;
    }
</style>