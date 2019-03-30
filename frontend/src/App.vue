<template>
  <v-app>
    <NavigationDrawer 
      v-if="$route.path != '/login'"
    />
    <v-content class="mx-4 mb-4 mt-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'

export default {
  name: 'App',
  components: {
    NavigationDrawer
  },
  data () {
    return {
      //
    }
  }
}
</script>
