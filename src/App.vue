<template>
  <v-app>
    <Header />
    <router-view class="mt-16"/>
  </v-app>
</template>

<script>

import Header from "./components/Header";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    ...mapGetters(['getCountCharactersPages']),
  },
  methods: {
    ...mapActions(['fetchAllCharacters', 'fetchAllLocations', 'fetchCharacterInLocation']),
  },
  async mounted() {
    for (let i = 1; i <= this.getCountCharactersPages; i++) {
      await this.fetchAllCharacters(i)
    }

    for (let i = 1; i <= 7; i++) {
      await this.fetchAllLocations(i)
    }

  }
}
</script>

