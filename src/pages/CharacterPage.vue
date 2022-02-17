<template>
  <v-container class="pt-8">
    <p><span @click="deleteCharacters"><router-link :to="{name: 'CharactersPage'}">Карточки с персонажами</router-link></span> / Персонаж: {{ characterData.name }}</p>
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
        <v-card-text class="d-flex">
          Происхождение:&nbsp;
          <p @click="deleteCharacters">
            <router-link :to="{name: 'LocationPage', params:{id: getOneLocation.id,characterId: characterData.id, character: characterData.name}}">{{ characterData.location.name }}</router-link>
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "CharacterPage",
  computed: {
    ...mapGetters(["allCharacters", "getOneLocation", "getCountCharactersPages"]),
    characterId() {
      return parseInt(this.$route.params.id)
    },
    characterData() {
      return this.allCharacters.find(character => character.id === this.characterId)
    },

  },
  methods: {
    ...mapActions(['fetchAllCharacters', 'fetchLocation']),
    ...mapMutations(['reloadAllCharacters']),
    deleteCharacters() {
      this.reloadAllCharacters()
    },
  },
  async mounted() {
    for (let i = 1; i <= this.getCountCharactersPages; i++) {
      await this.fetchAllCharacters(i)
    }

    const url = this.characterData.location.url
    await this.fetchLocation(url)
  },
}
</script>

<style scoped>

</style>