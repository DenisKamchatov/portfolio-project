<template>
  <div>
    <v-app-bar
        color="grey darken-4"
        dense
        dark
        height="60px"
        fixed
    >
      <v-toolbar-title>Рик и Морти</v-toolbar-title>

      <v-spacer />

      <v-btn  outlined to="/" class="mr-5">
        Главная
      </v-btn>
      <v-btn  outlined :to="{name: 'LocationsPage'}" class="mr-5">
        Локации
      </v-btn>
      <v-btn  outlined :to="{name: 'CharactersPage'}">
        Карточки
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
</style>