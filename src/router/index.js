import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import Recarga from '../views/Recarga.vue'
import Registro from '../views/Registro.vue'
import Confirmacion from '../views/Confirmacion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/recarga',
    name: 'Recarga',
    component: Recarga
  },
  {
    path: '/confirmacion',
    name: 'Confirmacion',
    component: Confirmacion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
