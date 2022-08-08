<template>
  <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent" shaped>
              <v-subheader>RANKING</v-subheader>
              <v-list-item
                v-for="n in this.data.ranking"
                :key="n"
                link
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ n.nome }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item
                link
                color="grey lighten-4"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    Refresh
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <div v-if="tela == 'home'">
            <HomeVue :data="data"></HomeVue>
          </div>
          <div v-else-if="tela == 'jogadores'">
            <JogadoresVue :data="data"></JogadoresVue>
          </div> 
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import HomeVue from './Home.vue'
import JogadoresVue from './Jogadores.vue'
export default{
  components: {
    HomeVue,
    JogadoresVue
  },
  props: { 
    tela: { 
      required: false,
      type: String,
      default: 'home'
    },
    data: {},
  },

  mounted(){
    console.log(this.data);
  }
  // data: () => ({
    
  // }),
}
</script>