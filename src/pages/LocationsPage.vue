<template>
  <v-container>
    <h1 class="text-center">Страница с локациями</h1>
    <v-row>
      <v-hover
        v-for="location in allLocations"
        :key="location.id"
        v-slot="{ hover }"
      >
        <v-card
            :elevation="hover ? 5 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto card mx-4 my-4 col-4"
            max-width="344"
        >
          <v-card-title>{{ location.name }}</v-card-title>
          <v-card-text>Тип: {{ location.type }}</v-card-text>
          <v-card-text>Измерение: {{ location.dimension }}</v-card-text>

          <div
              @click="deleteCharacters"
          >
            <v-btn
                color="primary"
                :to="{name: 'LocationPage', params:{id: location.id}}"
            >
              Подробнее
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"
export default {
  name: "LocationsPage",
  computed: {
    ...mapGetters(['allLocations']),
  },
  methods: {
    ...mapActions(['fetchLocations']),
    ...mapMutations(['reloadAllCharacters']),
    deleteCharacters() {
      this.reloadAllCharacters()
    },
  },
  async mounted() {
    await this.fetchLocations()
  }
}
</script>

<style scoped>

</style>