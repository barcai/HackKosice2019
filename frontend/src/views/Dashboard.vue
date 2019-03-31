<template>
  <div class='dashboard'>
    <h1 class="headline text-uppercase darkgrey--text">Dashboard</h1>
    <br>
     <v-layout row>
        <v-flex xs6>
          <v-card>
            <v-card-title>
            <div class="item"><h3 class="headline text-uppercase darkgrey--text">you spending</h3></div> 
            </v-card-title>
            <v-card-title>
            <div class="item"><h1 class="headline text-uppercase darkgrey--text">$210</h1></div> 
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-title>
            <div class="item"><h3 class="headline text-uppercase darkgrey--text">Saving on {Wedding}</h3></div> 
            </v-card-title>
            <v-card-title>
            <div class="item"><h1 class="headline text-uppercase darkgrey--text">$2200 of $4000</h1></div> 
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    <br>
     <v-layout row>
        <v-flex xs6>
          <v-card>
            <v-card-title>
            <div class="item"><h3 class="headline text-uppercase darkgrey--text">you spending</h3></div> 
            </v-card-title>
            <v-card-title>
            <div class="item"><h1 class="headline text-uppercase darkgrey--text">$210</h1></div> 
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-title>
            <div class="item"><h3 class="headline text-uppercase darkgrey--text">you spending</h3></div> 
            </v-card-title>
            <v-card-title>
            <div class="item"><h1 class="headline text-uppercase darkgrey--text">$210</h1></div> 
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
  </div>
</template>

<style>
.resultContainer {
  height: 350px;
}

.item {
  text-align: center;
  min-height: 50px;
  min-width: 300px;
  margin: 10px;
}
</style>

<script>
  export default {
  data () {
    return {
      alignmentsAvailable: ['align-center', 'align-end', 'align-space-around', 'align-space-between', 'align-start', ''],
      alignment: 'align-end',
      alignmentsContentAvailable: ['align-content-center', 'align-content-end', 'align-content-space-around', 'align-content-space-between', 'align-content-start', ''],
      justifyAvailable: ['justify-space-around', 'justify-center', 'justify-end', 'justify-space-between', 'justify-start', ''],
      justify: 'justify-center',
      reverse: false,
      flexDirectionAvailable: ['row', 'column', ''],
      flexDirection: 'row',
      fillHeight: true
    }
  },
  computed: {
    layoutAttributes () {
      return {
        [this.alignment]: true,
        [this.justify]: true,
        [this.flexDirection]: true,
        reverse: this.reverse,
        'fill-height': this.fillHeight
      }
    }
  },
  methods: {
    formatAttributes (attributes) {
      const attributeArray = []
      for (const Key in attributes) {
        if (!attributes.hasOwnProperty(Key) || Key === '' || attributes[Key] === false) continue
        attributeArray.push(Key.trim())
      }
      return `<v-layout ${attributeArray.join(' ')}/>`
    }
  }
  }
</script>
