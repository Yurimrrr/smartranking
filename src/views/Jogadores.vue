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
    }
  })
}
</script>