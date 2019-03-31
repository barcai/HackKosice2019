<template>
  <div class='dashboard'>
    <h1 class="headline text-uppercase darkgrey--text">Profile</h1>
    <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md4
      >
        <v-card class="v-card-profile">
          <v-card-title>
            <v-layout column align-center justify-center wrap>
              <v-flex xs12>
                <v-avatar size="100">
                  <img class="text-lg-center" src="/example-avatar.png">
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text class="text-xs-center">


            <h1 class="card-title font-weight-light mb-2">{{ userName }}</h1>
            <h6 class="category text-gray font-weight-thin">Level {{ level }}</h6>
            <h2 class="subheading text-capitalize mb-3">{{ levelName }}</h2>
            <v-btn
              color="success"
              round
              class="font-weight-light"
            >Add New Account</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
  export default {

    computed: {
      level () {
        return this.$store.getters.userLevel
      },
      levelName () {
        return this.$store.getters.userLevelName
      },
      userName () {
        return this.$store.getters.userName
      }
    }
  }
</script>
