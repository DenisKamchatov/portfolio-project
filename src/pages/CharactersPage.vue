<template>
  <v-container>
    <h1 class="text-center pb-5">Карточки с персонажами из Рика и Морти</h1>
    <v-text-field
        v-model="search"
        label="Поиск персонажа"
        placeholder="Имя персонажа по-английски"
    ></v-text-field>
    <v-row class="justify-center">
      <v-hover
          v-for="(character, i) in searchCharacters"
          :key="i"
          v-slot="{ hover }"
      >
        <v-card
            :elevation="hover ? 5 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto card mx-4 my-4 col-3"
            max-width="344"
            v-if="i <= count"
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
          <v-card-text>{{ character.id }}</v-card-text>
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
        <v-card
            :elevation="hover ? 5 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto card mx-4 my-4 col-3 d-none"
            max-width="344"

            v-else

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
    <h2 class="text-center my-6" v-if="searchCharacters.length === 0">Персонажа с таким именем нет :(</h2>
    <div v-if="searchCharacters.length !== 0" class="d-flex justify-end my-10">
      <v-btn color="primary" @click="moreCharacters">Показать еще</v-btn>
    </div>
  </v-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"
export default {
  name: "Posts",
  components: {
  },
  data: () => ({
    count: 20,
    search: '',
  }),
  computed: {
    ...mapGetters(["allCharacters", 'getCountCharactersPages']),
    searchCharacters() {
      return this.allCharacters.filter(character => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions(['fetchAllCharacters']),
    ...mapMutations(['reloadAllCharacters', 'nextPage']),
    deleteCharacters() {
      this.reloadAllCharacters()
    },
    moreCharacters() {
      this.count += 20
    }
  },
  async mounted() {
    for (let i = 1; i <= this.getCountCharactersPages; i++) {
      await this.fetchAllCharacters(i)
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