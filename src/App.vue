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

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");


#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f8f8f8;

}


</style>
