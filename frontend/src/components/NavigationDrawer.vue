<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/example-avatar.png">
          </v-avatar>
        </v-flex>
        <v-flex class="mt-5">
          <p class="headline text-capitalize">{{ userName }}</p>
        </v-flex>
        <v-flex class="mt-3">
          <v-progress-circular
            :value="21"
            color="indigo darken-2"
          ></v-progress-circular>
        </v-flex>
        <v-flex class="mt-1">
          <span class="caption">21.430/100.000</span>
        </v-flex>
        <v-flex class="mt-3 mb-0">
          <p class="subheading text-capitalize gray--text darken-2">Level {{ level }}</p>
        </v-flex>
        <v-flex class="mt-0 mb-3">
          <p class="subheading text-uppercase">{{ levelName }}</p>
        </v-flex>
      </v-layout>

      <v-list>
          <v-list-tile v-for="item in items" :key="item.text" router :to="item.path">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      fixed
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-toolbar-title class="headline text-uppercase ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Bankee</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Log out</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { icon: 'account_circle', text: 'Profile', path: '/profile'},
                { icon: 'show_chart', text: 'Analysis', path: '/analysis'},
                { icon: 'history', text: 'History', path: '/history'},
                { icon: 'person', text: 'Team', path: '/team'}
            ],
            valueDeterminate: 50
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

<style>

</style>
