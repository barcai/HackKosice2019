<template>
  <div class='analysis'>
    <h1 class="headline text-uppercase darkgrey--text">Analysis</h1>
    <v-container class="my-5">

      <v-layout row wrap align-center justify-space-between>
        <v-flex xs12 md6>
          <v-card
            class="ma-1"
            color="grey lighten-4"
          >
            <AnalyticsCardHeader mainIcon="payment" mainTitle="Transaction Types" />
            <v-sheet min-width="300">
              <GChart
                type="PieChart"
                :data="transactionData"
                :options="pieChartOptions"
              />
            </v-sheet>
          </v-card>
        </v-flex>

        <v-flex xs12 md6>
          <v-card
            class="ma-1"
            color="grey lighten-4"
          >
            <AnalyticsCardHeader mainIcon="money" mainTitle="Spending Categories" />
            <v-sheet min-width="300">
              <GChart
                type="PieChart"
                :data="spendingCategoriesData2"
                :options="pieChartOptions"
              />
            </v-sheet>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center justify-space-between>
        <v-flex xs12>
          <v-card
            class="ma-1"
            color="grey lighten-4"
          >
            <AnalyticsCardHeader mainIcon="money" mainTitle="Your Spending by Categories/Month" />
            <v-sheet min-width="300">
              <GChart
                type="ColumnChart"
                :data="spendingCategoriesData"
                :options="pieChartOptions"
              />
            </v-sheet>
          </v-card>
        </v-flex>
      </v-layout>

              
      <!-- <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    /> -->
    </v-container>
  </div>
</template>

<script>
  import { GChart } from 'vue-google-charts'
  import AnalyticsCardHeader from "@/components/AnalyticsCardHeader";
  
  export default {
    data () {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        transactionData: [
          ['S', 'January', 'February', 'March'],
          ['Transfer', 1030, 540, 350],
          ['Card', 1000, 400, 200],
          ['Viamo', 1170, 460, 250],
        ],
        spendingCategoriesData: [
          ['Month', 'Groceries', 'Rent', 'Restaurants'],
          ['December', 1030, 540, 350],
          ['January', 1000, 400, 200],
          ['February', 1170, 460, 250],
          ['March', 660, 1120, 300]
        ],
        spendingCategoriesData2: [
          ['Type', 'January', 'February', 'March'],
          ['Groceries', 1030, 540, 350],
          ['Rent', 1000, 400, 200],
          ['Restaurants', 1170, 460, 250],
        ],
        pieChartOptions: {
          is3D: true,
          legend: 'left'
        }
      }
    },
    components: {
      GChart,
      AnalyticsCardHeader
    }
  }
</script>
