<template>
  <v-app-bar
      app
      color="indigo darken-2"
      flat
    >
      <v-app-title class="text-uppercase grey--text">
        <span class="font-weight-light white--text">Smart</span>
        <span class="white--text">Ranking</span>
      </v-app-title>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="40"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link.text"
          router :to="link.route"
          class="white--text"
        >
          <v-icon class="white--text">{{link.icon}}</v-icon>
          {{ link.text }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>
</template>

<script>


export default{
  data: () => ({
      links: [
        {icon: '', text: 'Home', route: '/'},
        {icon: 'mdi-account', text: 'Jogadores', route: '/jogadores'},
        {icon: 'mdi-folder', text: 'Categorias', route: '/categorias'},
        {icon: 'mdi-arrow-right-drop-circle-outline', text: 'Desafios', route: '/desafios'},
      ],
    }),
}
</script>