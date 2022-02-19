<template>
  <v-container>
    <h1 class="text-center">Страница с локациями</h1>
    <v-text-field
        v-model="search"
        label="Поиск локации"
        placeholder="Название локации по-английски"
    ></v-text-field>
    <v-row>
      <v-hover
        v-for="(location, i) in searchLocations"
        :key="i"
        v-slot="{ hover }"
      >
        <v-card
            :elevation="hover ? 5 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto card mx-4 my-4 col-4 d-flex flex-column justify-space-between"
            max-width="344"
            v-if="location.id <= count"
        >
          <v-card-title>{{ location.name }}</v-card-title>
          <v-card-text>Тип: {{ location.type }}</v-card-text>
          <v-card-text>Измерение: {{ location.dimension }}</v-card-text>

            <v-btn
                color="primary"
                :to="{name: 'LocationPage', params:{id: location.id}}"
            >
              Подробнее
            </v-btn>
        </v-card>
        <v-card
            :elevation="hover ? 5 : 2"
            :class="{ 'on-hover': hover }"
            class="d-none mx-auto card mx-4 my-4 col-4"
            max-width="344"
            v-else
        >
          <v-card-title>{{ location.name }}</v-card-title>
          <v-card-text>Тип: {{ location.type }}</v-card-text>
          <v-card-text>Измерение: {{ location.dimension }}</v-card-text>

            <v-btn
                color="primary"
                :to="{name: 'LocationPage', params:{id: location.id}}"
            >
              Подробнее
            </v-btn>
        </v-card>
      </v-hover>
    </v-row>
    <h2 v-if="searchLocations.length === 0" class="text-center my-5">Локаций с таким названием нет:(</h2>
    <div class="d-flex justify-end mt-5" v-if="searchLocations.length !== 0">
      <v-btn
          color="primary"
          @click="moreLocations"
          v-if="allLocations.length > count"
      >
        Показать еще
      </v-btn>
      <v-btn
        v-else
        disabled
      >
        Показать еще
      </v-btn>
    </div>

  </v-container>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "LocationsPage",
  data: () => ({
    count: 21,
    search: '',
  }),
  computed: {
    ...mapGetters(['allLocations']),
    searchLocations() {
      return this.allLocations.filter(locations => {
        return locations.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    moreLocations() {
      this.count += 21
    },
  },

}
</script>

<style scoped>

</style>