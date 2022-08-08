<template>
    <Layout :data="formData"/>
</template>

<script>
const axios = require('axios').default;
import Layout from '@/components/Layout.vue';

export default{
  components: { Layout },
  data: () => ({
    formData: {
      ranking: [
        {
          nome: "Yuri"
        },
        {
          nome: "Cleitinho"
        },
        {
          nome: "Matheus"
        },
        {
          nome: "Igor"
        },
        {
          nome: "Teste"
        }
        ],
      partidas: [
        {
          time1: "Yuri",
          time2: "Matheus"
        },
        {
          time1: "Cleitinho",
          time2: "Chico"
        },
        {
          time1: "Salsicha",
          time2: "EMPURRA"
        }
      ],
      partidas_pendentes: [
        {
          time1: "Igor",
          time2: "Cleitinho"
        },
        {
          time1: "Cleitinho",
          time2: "Teste"
        },
        {
          time1: "Teste",
          time2: "Cleitinho"
        }
      ]
    }
  }),

  mounted() {


    axios.get("http://localhost:8081/api/v1/jogadores", 
      {
        headers: {
          "Access-Control-Allow-Origin": "GET",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      }).then((response) => {
      if (response.status == 200) {
        this.ranking = response.data;
      }
    });
  }

}
</script>