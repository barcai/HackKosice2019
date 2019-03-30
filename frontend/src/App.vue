<template>
  <v-app>
    <NavigationDrawer 
      v-if="$route.path != '/login'"
    />
    <v-content>
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
