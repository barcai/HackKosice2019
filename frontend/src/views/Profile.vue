<template>
  <div class='dashboard'>
    <h1 class="headline text-uppercase darkgrey--text">Profile</h1>
    <v-container
    fill-height
    fluid
    grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex xs12 md6>
          <v-card class="v-card-profile">
            <v-card-title>
              <v-layout column align-center justify-center wrap>
                <v-flex xs12>
                  <v-avatar size="100">
                    <img class="text-lg-center" src="https://api.adorable.io/avatars/285/abott@adorable.png">
                  </v-avatar>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-card-text class="text-xs-center">
              <h1 class="card-title font-weight-light mb-2">{{ userName }}'s wife</h1>
              <h6 class="category text-gray font-weight-thin">Level 5</h6>
              <h2 class="subheading text-capitalize mb-3">Financial GURU</h2>
              <v-list>
                <v-list-tile
                  v-for="bank in banks2"
                  :key="bank.title"
                  avatar
                >
                  <v-list-tile-avatar>
                    <v-avatar>
                      <img :src="bank.icon">
                    </v-avatar>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ bank.name }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-btn icon ripple>
                      <v-icon color="grey lighten-1">info</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-btn
                color="success"
                round
                class="font-weight-light"
              >Add New Account</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
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
              <v-list>
                <v-list-tile
                  v-for="bank in banks1"
                  :key="bank.title"
                  avatar
                >
                  <v-list-tile-avatar>
                    <v-avatar>
                      <img :src="bank.icon">
                    </v-avatar>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ bank.name }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-btn icon ripple>
                      <v-icon color="grey lighten-1">info</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
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
    data() {
      return {
        banks2: [
          {
            icon: 'https://lh3.googleusercontent.com/c_ZuGu8-lSYgnH7JaddLLAOIl-4wOPoF8XXsTr29hvZ8FUo-4Oo_jJD9ayc03KA4aw',
            name: 'Tatra Banka'
          },
          {
            icon: 'https://cdn6.aptoide.com/imgs/4/8/3/483fa096e40efb1cc7dcaedd747cb8ec_icon.png?w=256',
            name: 'Raiffeisen Bank'
          }
        ],
        banks1: [
          {
            icon: 'https://lh3.googleusercontent.com/c_ZuGu8-lSYgnH7JaddLLAOIl-4wOPoF8XXsTr29hvZ8FUo-4Oo_jJD9ayc03KA4aw',
            name: 'Tatra Banka'
          }
        ]
      }
    },

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
