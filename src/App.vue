<template>
  <v-app>
    <Header />
    <router-view class="mt-16"/>
  </v-app>
</template>

<script>

import Header from "./components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

