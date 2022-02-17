<template>
  <v-container>
    <h1 class="text-center">Страница с локациями</h1>
    <v-row>
      <v-hover
        v-for="(location, i) in allLocations"
        :key="i"
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
          <v-card-text>{{ location.id }}</v-card-text>

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
    <div class="d-flex justify-end mt-5">
      <v-btn
          color="primary"
      >
        Показать еще
      </v-btn>
    </div>

  </v-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"
export default {
  name: "LocationsPage",
  data: () => ({
    count: 20,
  }),
  computed: {
    ...mapGetters(['allLocations', 'getCountLocationsPages']),
  },
  methods: {
    ...mapActions(['fetchAllLocations']),
    ...mapMutations(['reloadAllCharacters']),
    deleteCharacters() {
      this.reloadAllCharacters()
    },
  },
  async mounted() {
    for (let i = 1; i <= 7; i++) {
      await this.fetchAllLocations(i)
    }
  }
}
</script>

<style scoped>

</style>