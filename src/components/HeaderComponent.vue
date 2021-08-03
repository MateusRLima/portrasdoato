<template>
  <header class="header">
    <v-toolbar 
      id="toolbar"
      :color="color"
      style="color: black"
    >
      <img v-if="!isWhite" src="../assets/logo.svg">
      <img v-else src="../assets/logo-white.svg">
      <v-spacer></v-spacer>
      <router-link id="router-link" :style="{color: textColor}" to="/about">Sobre o projeto</router-link>
      <router-link id="router-link" :style="{color: textColor}" to="/">Autoras</router-link>
      <v-spacer></v-spacer>
      <router-link id="router-link" :style="{color: textColor}" to="/about">Login</router-link>
    </v-toolbar>
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
  </header>
</template>

<script>

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

export default {
  name: "HeaderComponent",

  props: {
    color: {
      required: false,
      default: "transparent",
      type: String,
    },
    isWhite: {
      required: true,
      default: true,
      type: Boolean,
    },
    textColor: {
      required: true,
      default: "#FBFBFB",
      type: String,
    }
  },



  methods: {
    
  },


}
</script>

<style>
  .header {
    border-bottom: 1px solid #858585;
    z-index: 1;
    position: fixed;
    width: 100%;
  }

  #toolbar {
    box-shadow: none;
  }

  #router-link {
    margin-right: 5rem;
    text-decoration: none;
  }

  .progress-container {
    width: 100%;
    height: 8px;
    background: #ccc;
  }

  .progress-bar {
    height: 8px;
    background: #F8F50D;
    width: 0%;
  }

</style>