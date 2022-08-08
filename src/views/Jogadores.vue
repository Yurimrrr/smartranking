<template>
  <Layout :tela="'jogadores'" :data="formData"/>
</template>

<script>
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
      jogadores: [
        {
          nome: "Yuri",
          categoria: { 
            nome: "A"
          },
        },
        {
          nome: "Cleitinho",
          categoria: { 
            nome: "B"
          },
        },
        {
          nome: "Matheus",
          categoria: { 
            nome: "C"
          },
        },
        {
          nome: "Igor",
          categoria: { 
            nome: "A"
          },
        }
      ]
    }
  })
}
</script>