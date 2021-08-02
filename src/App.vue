<template>
  <v-app>
    <header-component>
     
    </header-component>
    <router-view/>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue"

export default {
  components: {
    "header-component": HeaderComponent
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: no-repeat center;
  background-image: url("https://abglt.org.br/wp-content/uploads/2020/10/wallpaper-pc1-scaled.jpg");
}


</style>
