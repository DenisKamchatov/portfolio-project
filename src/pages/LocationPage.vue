<template>
  <v-container class="pt-8">
    <p>
      <router-link :to="{name: 'LocationsPage'}">Страница с локациями</router-link>
      /
      <span v-if="$route.params.character">
        <router-link  :to="{name: 'CharacterPage', params:{id: $route.params.characterId}}">Персонаж: {{ $route.params.character }}</router-link>
        /
      </span>
      Измерение: {{ locationData.name }}
    </p>
    <v-container class="d-flex flex-column align-center">
      <h1 class="mt-3">Карточка измерения: {{ locationData.name }}</h1>
      <v-card class="pa-7 mt-8" width="500px">
        <v-card-title>{{ locationData.name }}</v-card-title>
        <v-card-text>Тип: {{ locationData.type }}</v-card-text>
        <v-card-text>Измерение: {{ locationData.dimension }}</v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "LocationPage",
  computed: {
    ...mapGetters(['allLocations']),
    locationId() {
      return parseInt(this.$route.params.id)
    },
    locationData() {
      return this.allLocations.find(location => location.id === this.locationId)
    }
  },
  methods: {
    ...mapActions(['fetchLocations']),
  },
  async mounted() {
    await this.fetchLocations()
  }
}
</script>

<style scoped>

</style>