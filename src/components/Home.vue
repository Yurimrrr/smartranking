<template>
  <v-sheet
    min-height="70vh"
    rounded="lg"
  >
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-alert
            prominent
            type="info"
            icon="mdi-play-circle-outline"
          >Jogando agora</v-alert>
          <div class="" 
          v-for="partida in this.data.partidas"
          >
            <v-alert
              border="bottom"
              color="blue"
              outlined
            >{{partida.time1}} x {{partida.time2}} 
              <v-btn text x-small color="error">
              Assista ao vivo
              </v-btn>
            </v-alert>
            
            
          </div>
        </v-col>
        <v-col cols="4">
          <v-alert
            prominent
            type="warning"
            icon="mdi-clock-time-eight-outline"
          >Desafios pendentes</v-alert>
          <div class="" 
          v-for="partida in this.data.partidas_pendentes"
          >
            <v-alert
              border="bottom"
              color="orange"
              outlined
              type="info"
            >{{partida.time1}} x {{partida.time2}}</v-alert>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-alert
            prominent
            type="info"
            icon="mdi-format-list-checkbox"
          >Resultados anteriores</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>


export default{
  props: {
    data:{}
  },
  mounted() {
    
  }
  
  // data: () => ({
     
  // }),
}
</script>