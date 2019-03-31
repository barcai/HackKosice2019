<template>
  <div class='history'>
    <h1 class="headline text-uppercase darkgrey--text">History</h1>
    <v-container class="my-5">

      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('Amount')" slot="activator">
            <v-icon small left>attach_money</v-icon>
            <span class="caption text-lowercase">By amount</span>
          </v-btn>
          <span>Sort by amount of the transaction</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('Date')" slot="activator">
            <v-icon small left>calendar_today</v-icon>
            <span class="caption text-lowercase">By date</span>
          </v-btn>
          <span>Sort by the date of the transaction</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat v-for="(transaction, index) in transactions" :key="index">
        <v-layout row wrap class="pa-3">
          <v-flex xs12 sm10 class="pa-1 project">
            <v-layout row wrap class="pa-3">
              <v-flex xs6 sm4 md2 v-for="(value, field, index) in transaction" :key="index" class="pa-1 project">
                <div :class="`${field == highlightedField ? 'font-weight-bold' : ''} caption grey--text`">{{ field }}</div>

                <div v-if="field == 'Date'">
                  <div :class="`${field == highlightedField ? 'font-weight-bold' : ''}`">
                    {{ value.toLocaleString('en-GB', { timeZone: 'UTC' }) }}
                  </div>
                </div>
                <div v-else>
                  <div :class="`${field == highlightedField ? 'font-weight-bold' : ''}`">
                    {{ value }}
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs6 sm2 class="pa-1 project">
            <div >
              <v-chip large class="success white--text my-2 headline">+{{ Math.floor(Math.random() * transaction.Amount) }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>
  import weddingInput from "@/inputs/2_wedding";
  export default {
    data() {
      return {
        currentStartingIndex: 0,
        pageSize: 10,
        transactions: weddingInput,
        inverseSort: false,
        highlightedField: null
      }
    },
    methods: {
      sortBy(prop) {
        this.inverseSort = !this.inverseSort
        this.highlightedField = prop
        if (this.inverseSort) {
          this.transactions.sort((a,b) => a[prop] > b[prop] ? -1 : 1)
        } else {
          this.transactions.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        }
      }
    },
  }
</script>
