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
          <span
              @click="deleteCharacters"
          >
            <v-btn
                color="primary"
                :to="{name: 'CharacterPage', params:{id: character.id}}"
            >
              Посмотреть
            </v-btn>
          </span>
        </v-card>
      </v-hover>
    </v-row>
    <div class="d-flex justify-end my-10">
      <v-btn disabled>Предыдущая</v-btn>
      <v-btn class="ml-4" :to="{name: 'CharactersPage', params: {id: parseInt(getPage + 1)}}">Следующая</v-btn>
    </div>
  </v-container>
</template>

<script>
import PostForm from "../components/PostForm";
import {mapGetters, mapActions, mapMutations} from "vuex"
export default {
  name: "Posts",
  components: {
    PostForm,
  },
  data: () => ({
    page: 1
  }),
  computed: {
    ...mapGetters(["allCharacters", 'getPage']),
  },
  methods: {
    ...mapActions(['fetchAllCharacters']),
    ...mapMutations(['reloadAllCharacters']),
    deleteCharacters() {
      this.reloadAllCharacters()
    },
  },
  async mounted() {
    for (this.page; this.page <= 2; this.page++) {
      await this.fetchAllCharacters(this.page)
    }
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