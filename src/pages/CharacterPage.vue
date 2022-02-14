<template>
  <v-container class="pt-8">
    <p><router-link :to="{name: 'CharactersPage'}">Карточки с персонажами</router-link> / Персонаж: {{ characterData.name }}</p>
    <v-container d-flex justify-center>
      <v-card class="pa-7" width="500px">
        <v-img
            :src="characterData.image"
            height="400px"
            d-block
        ></v-img>


        <v-card-title class="py-8 justify-center">
          {{ characterData.name }}
        </v-card-title>

        <v-card-text>Пол: {{ characterData.gender }}</v-card-text>
        <v-card-text>Раса: {{ characterData.species }}</v-card-text>
        <v-card-text>На данный момент: {{ characterData.status }}</v-card-text>
        <v-card-text >Происхождение: <router-link :to="{name: 'LocationPage', params:{id: getOneLocation.id,characterId: characterData.id, character: characterData.name}}">{{ characterData.location.name }}</router-link></v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CharacterPage",
  computed: {
    ...mapGetters(["allCharacters", "getCharactersPage", "getOneLocation"]),
    characterId() {
      return parseInt(this.$route.params.id)
    },
    characterData() {
      return this.allCharacters.find(character => character.id === this.characterId)
    },

  },
  methods: {
    ...mapActions(['fetchCharacters', 'fetchLocation'])
  },
  async mounted() {
    await this.fetchCharacters(this.getCharactersPage)

      const url = this.characterData.location.url
      await this.fetchLocation(url)





  },
}
</script>

<style scoped>

</style>