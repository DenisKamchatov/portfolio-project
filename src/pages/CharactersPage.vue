<template>
  <v-container>
    <PostForm />
    <h1 class="text-center pb-5">Карточки с персонажами из Рика и Морти</h1>
    <v-text-field
        label="Поиск персонажа"
    ></v-text-field>
    <v-row class="justify-center">
      <v-hover
          v-for="(character, i) in allCharacters"
          :key="i"
          v-slot="{ hover }"
      >
        <v-card
            :elevation="hover ? 5 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto card mx-4 my-4 col-3"
            max-width="344"
        >
          <v-img
              :src="character.image"
              height="200px"
          ></v-img>

          <v-card-title class="text">
            {{ character.name }}
          </v-card-title>

          <v-card-subtitle class="text">
            Пол: {{ character.gender }}
            <v-spacer></v-spacer>
            Раса: {{ character.species }}
          </v-card-subtitle>
              <v-btn
                  color="primary"
                  :to="{name: 'CharacterPage', params:{id: character.id}}"
              >
                Посмотреть
              </v-btn>
        </v-card>
      </v-hover>
    </v-row>
    <div class="d-flex justify-end my-10">
      <v-btn v-if="getCharactersPage === 1" disabled>Предыдущая</v-btn>
      <v-btn v-else>Предыдущая</v-btn>
      <v-btn class="ml-4">Следующая</v-btn>
    </div>
  </v-container>
</template>

<script>
import PostForm from "../components/PostForm";
import {mapGetters, mapActions} from "vuex"
export default {
  name: "Posts",
  components: {
    PostForm
  },
  computed: {
    ...mapGetters(["allCharacters", 'getCharactersPage']),
  },
  methods: {
    ...mapActions(['fetchCharacters']),
  },
  async mounted() {
    await this.fetchCharacters(1)
  }
}
</script>

<style scoped>
.card {
  transition: 100ms ease-in-out;
}
.text {
  cursor: default;
}
</style>