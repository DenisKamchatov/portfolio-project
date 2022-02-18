import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../pages/MainPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/locations/',
    name: 'LocationsPage',
    component: () => import(/* webpackChunkName: "LocationsPage" */'../pages/LocationsPage')
  },
  {
    path: '/location/:id',
    name: 'LocationPage',
    component: () => import(/* webpackChunkName: "LocationPage" */'../pages/LocationPage')
  },
  {
    path: '/characters/',
    name: 'CharactersPage',
    component: () => import(/* webpackChunkName: "CharactersPage" */'../pages/CharactersPage')
  },
  {
    path: '/character/:id',
    name: 'CharacterPage',
    component: () => import(/* webpackChunkName: "CharacterPage" */'../pages/CharacterPage')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
