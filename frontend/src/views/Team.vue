<template>
  <div class="team">
    <h1 class="headline text-uppercase darkgrey--text">Team</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm4 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="150" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Dominik Béla', role: 'Web developer', avatar: '/avatar-1.jpg' },
        { name: 'Matej Ballo', role: 'Web developer', avatar: '/avatar-2.png' },
        { name: 'Zsombor Udvardy', role: 'Web developer', avatar: '/avatar-3.jpg' }
      ]
    }
  }
}
</script>