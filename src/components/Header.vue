<template>
  <div>
    <v-app-bar
        color="grey darken-4"
        dense
        dark
        height="65px"
        fixed
    >
      <v-toolbar-title
          @click="deleteCharacters('mainPage')"
      >
      <router-link
          to="/"
      >
        Рик и Морти
      </router-link>
      </v-toolbar-title>

      <v-spacer />

      <v-btn @click="deleteCharacters('mainPage')" outlined to="/" class="mr-5">
        Главная
      </v-btn>
      <v-btn @click="deleteCharacters('locationsPage')" outlined :to="{name: 'LocationsPage'}" class="mr-5">
        Локации
      </v-btn>
      <v-btn @click="deleteCharacters('charactersPage')" outlined :to="{name: 'CharactersPage'}">
        Персонажи
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex"
export default {
  name: "Header",
  data: () => ({
    delete: 0,

  }),

  methods: {
    ...mapMutations(['reloadAllCharacters']),
    ...mapActions(['fetchAllCharacters', 'fetchAllLocations']),
    deleteCharacters(num) {

      if (num === 'locationsPage') {
        this.reloadAllCharacters('characters')
      } else if (num === 'charactersPage') {
        this.reloadAllCharacters('locations')
      } else if (num === 'mainPage') {
        this.reloadAllCharacters('none')
      }
    },
  },

}
</script>

<style scoped>
  .router-link-active {
    color: white;
    text-decoration: none;
  }
</style>