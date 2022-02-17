import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../pages/MainPage";
import LocationsPage from "../pages/LocationsPage";
import LocationPage from "../pages/LocationPage";
import CharactersPage from "../pages/CharactersPage";
import CharacterPage from "../pages/CharacterPage";

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
    component: LocationsPage
  },
  {
    path: '/location/:id',
    name: 'LocationPage',
    component: LocationPage
  },
  {
    path: '/characters/',
    name: 'CharactersPage',
    component: CharactersPage
  },
  {
    path: '/character/:id',
    name: 'CharacterPage',
    component: CharacterPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
