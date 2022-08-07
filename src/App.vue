<template>
  <v-app>
    <NavBar/>
    <v-contet>
      <router-view></router-view>
    </v-contet>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>
