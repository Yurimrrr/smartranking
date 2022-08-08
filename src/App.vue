<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main class="indigo lighten-5">
      <v-contet>
        <router-view></router-view>
      </v-contet>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
  data: () => ({
    
  }),
};
</script>
