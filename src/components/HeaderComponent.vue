<template>
  <header class="header">
    <v-toolbar
      id="toolbar"
      :color="color"
    >
      <img @click="goToHome()" v-if="!isWhite" src="../assets/logo.svg" class="logo-header">
      <img @click="goToHome()" v-else src="../assets/logo-white.svg" class="logo-header">
      <v-spacer></v-spacer>
      <router-link id="router-link" :style="{color: textColor}" to="/about">Sobre o projeto</router-link>
      <router-link id="router-link" :style="{color: textColor}" to="/authors">Expediente</router-link>
      <router-link id="router-link" :style="{color: textColor}" to="/acknowledgment">Agradecimentos</router-link>
    </v-toolbar>
    <div v-if="!isWhite" class="progress-container">
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
      required: false,
      default: true,
      type: Boolean,
    },
    textColor: {
      required: false,
      default: "#FBFBFB",
      type: String,
    }
  },

  methods: {
    goToHome(){
      this.$router.push("/")
    }
  },
}
</script>

<style>
  .header {
    border-bottom: 1px solid #858585;
    z-index: 2;
    width: 100%;
  }

  #toolbar {
    box-shadow: none;
    padding: 0px;
  }

  .logo-header{
    cursor: pointer;
  }

  .progress-container {
    width: 100%;
    height: 4px;
    background: #C9C9C9;
  }

  .progress-bar {
    height: 4px;
    background: #2A2A2A;
    width: 0%;
  }

  #router-link {
    margin-right: 1rem;
    text-decoration: none;
    font-size: 0.6rem;
  }
  
  @media only screen and (min-width: 768px) {
    .header {
      border-bottom: 1px solid #858585;
      z-index: 1;
      position: fixed;
      width: 100%;
    }
  
    #toolbar {
      box-shadow: none;
      padding: 0px;
    }
  
    #router-link {
      margin-right: 5rem;
      text-decoration: none;
      font-size: 1rem;
    }
  
    .progress-container {
      width: 100%;
      height: 4px;
      background: #C9C9C9;
    }
  
    .progress-bar {
      height: 4px;
      background: #2A2A2A;
      width: 0%;
    }
  }

</style>