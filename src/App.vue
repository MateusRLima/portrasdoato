<template>
  <v-app>
    <router-view/>
    <footer>
      <footer-component></footer-component>
    </footer>
  </v-app>
</template>

<script>

export default {

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f8f8f8;

}


</style>
