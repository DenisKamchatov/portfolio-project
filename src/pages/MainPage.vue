<template>
  <main class="main">
    <div class="main__text">
      <h1 class="main__title">Добро пожаловать на сайт с полным списком персонажей из мультсериала "Рик и Морти"</h1>
      <div class="d-flex flex-column align-center justify-center mt-15">
        <p class="mb-0">Нажмите на кнопку, чтобы посмотреть список персонажей: </p>
        <v-btn
          outlined
          color="white"
          class="mt-4"
          :to="{name: 'CharactersPage'}"
        >
          Персонажи
        </v-btn>
      </div>
    </div>
    <div class="blackout"></div>
    <v-img
        :src="images.mainImage"
        height="100vh"
    />
  </main>
</template>

<script>

export default {
  name: "MainPage",
  data: () => ({
    images: {
      mainImage: require('../assets/images/main-theme.jpg'),
    }
  }),
}
</script>

<style scoped>
  .main {
    background-color: #262626;
  }
  .blackout {
    position: absolute;
    background-color: #000000;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  p {
    color: #BDBDBD;
  }

  .main__text {
    position: absolute;
    z-index: 2;
    top: 35%;
    width: 100%;
    padding: 0 100px;
    color: #EEEEEE;

  }
  .main__title {
    text-align: center;
  }
</style>