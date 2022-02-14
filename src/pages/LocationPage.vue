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
        <v-card-title class="justify-center">{{ locationData.name }}</v-card-title>
        <v-card-text>Тип: {{ locationData.type }}</v-card-text>
        <v-card-text>Измерение: {{ locationData.dimension }}</v-card-text>

        <v-card-subtitle class="font-weight-bold d-flex justify-center mb-3">Персонажи из этого измерения ({{ getCharactersInLocation.length }})</v-card-subtitle>

        <v-row class="d-flex flex-wrap justify-space-between">
          <v-hover
              v-slot="{ hover }"
              v-for="(character, i) in getCharactersInLocation"
              :key="character.id"
          >
            <v-card
                :elevation="hover ? 5 : 2"
                :class="{ 'on-hover': hover }"
                max-width="30%"
                class="mt-3 card"
                v-if="i <= count"
                :to="{name: 'CharacterPage', params: {id: character.id}}"
            >
              <v-img
                  :src="character.image"
              />
              <v-card-text>{{ character.name }}</v-card-text>
            </v-card>
          </v-hover>
        </v-row>
        <div class="d-flex justify-end">
          <v-btn
              v-if="getCharactersInLocation.length > count"
              color="primary"
              class="mt-8"
              @click="moreCharacters"
          >
            Показать еще
          </v-btn>
          <v-btn
              color="primary"
              class="mt-8"
              disabled
              v-else
          >
            Показать еще
          </v-btn>

        </div>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "LocationPage",
  data: () => ({
    count: 20
  }),
  computed: {
    ...mapGetters(['allLocations', 'getCharactersInLocation']),
    locationId() {
      return parseInt(this.$route.params.id)
    },
    locationData() {
      return this.allLocations.find(location => location.id === this.locationId)
    },
  },
  methods: {
    ...mapActions(['fetchLocations', 'fetchCharacterInLocation', 'fetchCharacters']),
    moreCharacters() {
      console.log(this.getCharactersInLocation.length)
      this.count += 20
    }
  },
  async mounted() {
    await this.fetchLocations()
    await  this.fetchCharacters()

    for (const page of this.locationData.residents) {
      await this.fetchCharacterInLocation(page)
    }
  }
}
</script>

<style scoped>
  .card {
    cursor: pointer;
  }
</style>