<template>
  <v-sheet
    min-height="70vh"
    rounded="lg"
  >
    
  </v-sheet>
</template>

<script>


export default{
  props: {
    data:{}
  },

  data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'nome',
        },
        { text: 'Categoria', value: 'categoria.nome' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        nome: '',
        categoria: ''
      },
      defaultItem: {
        nome: '',
        categoria: ''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Cadastrar' : 'Editar'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.jogadores = [
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
      },

      editItem (item) {
        this.editedIndex = this.jogadores.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.jogadores.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.jogadores.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.jogadores[this.editedIndex], this.editedItem)
        } else {
          this.jogadores.push(this.editedItem)
        }
        this.close()
      },
    },

  mounted() {
  }
}
</script>