<template>
  <div class="home">
    <header>
    <header-component></header-component>
    </header>
    <main class="mt-16">
      <v-card>
        a
      </v-card>
    </main>
  </div>
</template>

<script>

import { apiListNews } from "../services"

export default {
  name: "Home",

  data: () => ({
    model: null,
  }),

  mounted(){
    apiListNews()
    .then(res => {
      console.log(res)
    })
  },

  methods: {
    goToTheNews(){

    }
  }


}
</script>
