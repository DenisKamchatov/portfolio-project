<template>
  <div>
    <v-app-bar
        color="deep-black accent-4"
        dense
        dark
    >
      <v-toolbar-title>Рик и Морти</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn outlined to="/" class="mr-5">
        Главная
      </v-btn>
      <v-btn outlined :to="{name: 'LocationsPage', params:{id: getCharactersPage}}" class="mr-5">
        Локации
      </v-btn>
      <v-btn outlined :to="{name: 'CharactersPage', params:{id: getCharactersPage}}">
        Карточки
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "Header",
  computed: {
    ...mapGetters(['getCharactersPage'])
  }
}
</script>

<style scoped>

</style>