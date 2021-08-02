<template>
  <header class="header">
    <v-toolbar 
      id="toolbar"
      color="transparent"
      outlined
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link>
    </v-toolbar>
  </header>
</template>

<script>

export default {
  name: "HeaderComponent",

}
</script>

<style>
  .header {
    border-bottom: 1px solid #858585
  }

  #toolbar {
    box-shadow: none;
  }
</style>