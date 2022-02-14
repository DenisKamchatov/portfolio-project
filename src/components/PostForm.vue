<template>
    <v-col cols="auto">
      <v-dialog
          transition="dialog-top-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
          >Создать новый пост</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="primary"
                dark
            >Создайте новый пост</v-toolbar>
            <v-form class="text-h2 pa-5">
                <v-text-field
                    label="Название поста"
                    hide-details="auto"
                ></v-text-field>
                <v-text-field
                    label="Содержание поста"
                ></v-text-field>
                <v-card-actions class="justify-end">
                  <v-btn
                      text
                      color="primary"
                      @click="dialog.value = false"
                      type="submit"
                  >Создать пост</v-btn>
                  <v-btn
                      text
                      color="error"
                      @click="dialog.value = false"
                  >Закрыть</v-btn>
                </v-card-actions>
            </v-form>

          </v-card>
        </template>
      </v-dialog>
    </v-col>
</template>

<script>
export default {
  name: "PostForm",
}
</script>

<style scoped>

</style>