import Vue from 'vue'
import VueRouter from 'vue-router'
import Ranking from '../views/Ranking.vue';
import Jogadores from '../views/Jogadores.vue'
import Categorias from '../views/Categorias.vue'
import Desafios from '../views/Desafios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '/jogadores',
    name: 'jogadores',
    component: Jogadores
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categorias
  },
  {
    path: '/desafios',
    name: 'desafios',
    component: Desafios
  }
]

const router = new VueRouter({
  routes
})

export default router
