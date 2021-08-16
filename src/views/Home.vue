<template>
  <div class="home">
    <header class="home-header">
      <v-toolbar
        id="toolbar"
        color="transparent"
      >
        <img @click="goToHome()" src="../assets/logo-white.svg" class="logo-header">
        <v-spacer></v-spacer>
        <router-link id="router-link" style="color: #FCFCFC" to="/about">Sobre o projeto</router-link>
        <router-link id="router-link" style="color: #FCFCFC" to="/authors">Expediente</router-link>
        <router-link id="router-link" style="color: #FCFCFC" to="/authors">Agradecimentos</router-link>
      </v-toolbar>
    </header>
    <main class="mb-16">
      <v-card color="transparent" flat>
        <v-container>
          <v-row >
            <v-col cols="5" class="px-0 ml-16" align-self="center">
              <div class="title">
                <h1 class="principal-title">
                  Trabalhadores no ponto,<br /> criminosos nas ruas
                </h1>
                <h2 class="principal-subtitle">
                  Um olhar sobre registros da última década que mostram como o poder judiciário,
                  a polícia e a mídia têm sido utilizados para ‘criminalizar’ quem protesta.
                </h2>
              </div>
            </v-col>
            <v-col align-self="end" cols="3">
              <v-btn class="pr-0" @click="goToVnews()" text color="#C4C4C4">Ver mais <v-icon color="#F8F50D">mdi-chevron-right</v-icon></v-btn>
            </v-col>
            <v-col align-self="end" cols="3">
              <p class="cite ma-0">
                <span class="big-quote">“</span>A Justiça existe para permitir que aqueles que não têm voz possam ser ouvidos. Mas, hoje, está se tornando a ferramenta usada por essas pessoas poderosas para reprimir aqueles que não tem voz
                <br />
                <br />
                Clément Voule, relator da ONU sobre Liberdade de Associação e Reunião Pacífica
              </p>
            </v-col>
          </v-row>
          <v-slide-group
            class="px-0 mt-16 news-slider"
            active-class="success"
          >
            <template #next>
              <v-icon color="#F8F50D">
                  mdi-chevron-right
              </v-icon>
            </template>
            <template #prev>
              <v-icon color="#F8F50D">
                  mdi-chevron-left
              </v-icon>
            </template>
            <v-slide-item
              light
            >
              <v-card
                tile
                color="#FCFCFC"
                class="slide-item mr-5 pa-2"
              >
              <v-card-text class="pa-0">
                <v-container class="pa-0" >
                  <v-row align="flex-start">
                    <v-col cols="6" class="pb-0 px-6 pt-6" align="left">
                      <v-chip outlined color="#2A2A2A" class="mb-5" label>
                        10min de leitura
                      </v-chip>
                      <h3 class="news-list-title">
                        Trabalhadores no ponto,<br /> criminosos nas ruas
                      </h3>
                      <h4 class="news-list-subtitle">
                        Um olhar sobre registros da última década que...
                      </h4>
                      <v-btn class="pl-0" small @click="goToVnews()" text color="#2A2A2A">Ver mais <v-icon color="#2A2A2A">mdi-chevron-right</v-icon></v-btn>
                    </v-col>
                    <v-col cols="6" class="pa-0">
                      <div class="d-flex justify-center chip-group">
                        <v-chip color="#2A2A2A" dark class="chip mx-4" small label>
                          <p class="ma-0 white--text">Reportagem</p>
                        </v-chip>
                        <v-chip color="#2A2A2A" dark class="chip" small label>
                          <p class="ma-0">Criminalização</p>
                        </v-chip>
                      </div>
                      <img class="news-image" src="../assets/cards/materia1.jpg">
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item
              light
            >
              <v-card
                tile
                color="#FCFCFC"
                class="slide-item mr-5 pa-2"
              >
              <v-card-text class="pa-0">
                <v-container class="pa-0" >
                  <v-row align="flex-start">
                    <v-col cols="6" class="pb-0 px-6 pt-6" align="left">
                      <v-chip outlined color="#2A2A2A" class="mb-5" label>
                        15min de leitura
                      </v-chip>
                      <h3 class="news-list-title mb-5">
                        Rostos da rua
                      </h3>
                      <h4 class="news-list-subtitle mb-5">
                        Em outubro de 2013, o fotógrafo Fernando Frazão, da Agência...
                      </h4>
                      <v-btn class="pl-0" small @click="goToSnews()" text color="#2A2A2A">Ver mais <v-icon color="#2A2A2A">mdi-chevron-right</v-icon></v-btn>
                    </v-col>
                    <v-col cols="6" class="pa-0">
                      <div class="d-flex justify-center chip-group">
                        <v-chip color="#2A2A2A" dark class="chip mx-4" small label>
                          <p class="ma-0">Perfis</p>
                        </v-chip>
                        <v-chip color="#2A2A2A" dark class="chip" small label>
                          <p class="ma-0">Manifestantes</p>
                        </v-chip>
                      </div>
                      <img class="news-image" src="../assets/cards/materia2.jpg">
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item
              light
            >
              <v-card
                tile
                color="#FCFCFC"
                class="slide-item mr-5 pa-2"
              >
              <v-card-text class="pa-0">
                <v-container class="pa-0">
                  <v-row align="flex-start">
                    <v-col cols="6" class="pb-0 px-6 pt-6" align="left">
                      <v-chip outlined color="#2A2A2A" class="mb-3" label>
                        7min de leitura
                      </v-chip>
                      <h3 class="news-list-title">
                        Mulheres no centro: a década de protestos no campo
                      </h3>
                      <h4 class="news-list-subtitle">
                        “É melhor morrer na luta que morrer de fome”
                      </h4>
                      <v-btn class="pl-0" small @click="goToWnews()" text color="#2A2A2A">Ver mais <v-icon color="#2A2A2A">mdi-chevron-right</v-icon></v-btn>
                    </v-col>
                    <v-col cols="6" class="pa-0">
                      <div class="d-flex justify-center chip-group">
                        <v-chip color="#2A2A2A" dark class="chip mx-4" small label>
                          <p class="ma-0">Dados</p>
                        </v-chip>
                        <v-chip color="#2A2A2A" dark class="chip" small label>
                          <p class="ma-0">Reivindicações</p>
                        </v-chip>
                      </div>
                      <img class="news-image" style="object-position: 80% 50%" src="../assets/cards/materia3.png">
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              </v-card>
            </v-slide-item>
           <v-slide-item
              light
            >
              <v-card
                tile
                color="#FCFCFC"
                class="slide-item mr-5 pa-2"
              >
              <v-card-text class="pa-0">
                <v-container class="pa-0">
                  <v-row align="flex-start">
                    <v-col cols="6" class="pb-0 px-6 pt-6" align="left">
                      <v-chip outlined color="#2A2A2A" class="mb-5" label>
                        8min de leitura
                      </v-chip>
                      <h3 class="news-list-title">
                        Protesto: o que é permitido por lei?
                      </h3>
                      <h4 class="news-list-subtitle">
                        Entenda seus direitos como manifestante e saiba... 
                      </h4>
                      <v-btn class="pl-0" small @click="goToPnews()" text color="#2A2A2A">Ver mais <v-icon color="#2A2A2A">mdi-chevron-right</v-icon></v-btn>
                    </v-col>
                    <v-col cols="6" class="pa-0">
                      <div class="d-flex justify-center chip-group">
                        <v-chip color="#2A2A2A" dark class="chip mx-4" small label>
                          <p class="ma-0">Reportagem</p>
                        </v-chip>
                        <v-chip color="#2A2A2A" dark class="chip" small label>
                          <p class="ma-0">Leis</p>
                        </v-chip>
                      </div>
                      <img class="news-image" style="object-position: 80% 50%" src="../assets/cards/materia4.jpg">
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              </v-card>
            </v-slide-item>
            <!-- <v-slide-item
              light
            >
              <v-card
                @click="goToPnews()"
                tile
                color="#FCFCFC"
                class="slide-item mr-5 pa-2"
              >
              <v-card-text class="pa-0">
                <v-container class="pa-0">
                  <v-row align="flex-start">
                    <v-col cols="6" class="pb-0 px-6 pt-6" align="left">
                      <v-chip outlined color="#2A2A2A" class="mb-5" label>
                        5min de leitura
                      </v-chip>
                      <h3 class="news-list-title">
                        Protesto: o que é permitido por lei?
                      </h3>
                      <h4 class="news-list-subtitle">
                        Entenda seus direitos como manifestante e saiba...
                      </h4>
                      <v-btn class="pl-0" small @click="goToPnews()" text color="#2A2A2A">Ver mais <v-icon color="#2A2A2A">mdi-chevron-right</v-icon></v-btn>
                    </v-col>
                    <v-col cols="6" class="pa-0">
                      <div class="d-flex justify-center chip-group">
                        <v-chip color="#2A2A2A" dark class="chip mx-4" small label>
                          <p class="ma-0">Expresso</p>
                        </v-chip>
                        <v-chip color="#2A2A2A" dark class="chip" small label>
                          <p class="ma-0">Como ajudar</p>
                        </v-chip>
                      </div>
                      <img class="news-image" style="object-position: 80% 50%" src="../assets/cards/materia4.jpg">
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              </v-card>
            </v-slide-item> -->
          </v-slide-group>
        </v-container>
      </v-card>
    </main>
    
  </div>
</template>

<script>

// import { apiListNews } from "../services"

export default {
  name: "Home",

  data: () => ({
    items: [],
  }),

  methods: {
    goToPnews(){
      this.$router.push("/pnews")
      window.scrollTo(0,0);
    },

    goToVnews(){
      this.$router.push("/vnews")
      window.scrollTo(0,0);
    },

    goToSnews(){
      this.$router.push("/snews")
      window.scrollTo(0,0);
    },

    goToWnews(){
      this.$router.push("/wnews")
      window.scrollTo(0,0);
    }
  }


}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

  .home-header {
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

  #router-link {
    margin-right: 1rem;
    text-decoration: none;
    font-size: 0.6rem;
  }
  
  .home{
    height: 100%;
    background: url('../assets/materia1.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .principal-title{
    width: 100%;
    margin-top: 5rem;
    font: 2rem "Libre Baskerville", serif; ;
    background: #F8F50D ;
    font-weight: bolder;
    }

  .principal-subtitle{
    margin-top: 1rem;
    color: #B5B5B5;
    font:  1rem  "Open Sans", sans-serif;
  }

  .slide{
    width: 75%;
  }

  .slide-item{
    height: 14rem;
    width: 33rem;
  }

  .news-list-title{
    color:#2A2A2A;
    font: 1.5rem "Libre Baskerville", serif; ;
    text-align: left;
  }

  .news-list-subtitle{
    margin: 1rem 0;
    color:#2A2A2A;
    font: 0.8rem "Open Sans", sans-serif;
    text-align: left;
  }

  .chip-group{
    position: absolute;
    margin-top: 1rem;
    width: 50%;
    z-index: 1;
  }
  
  .news-image{
    width: 14.5rem;
    height: 13rem;
    object-fit: cover;
    filter: opacity(0.6);
    z-index: 0;
  }

  .news-time{
    border-radius: 3px;
  }


  @media only screen and (min-width: 768px) {
    .home-header {
      border-bottom: 1px solid #858585;
      z-index: 1;
      width: 100%;
    }
    
    .cite{
      font: 1rem "Libre Baskerville", serif;
      color: #B5B5B5;
      text-align: justify;
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

    .home{
      height: 100%;
      background: url('../assets/materia1.jpg') no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }

    .big-quote{
      font-size: 2rem;
      color: #F8F50D;
    }

    .news-slider{
      width: 120rem;
    }

    .slide-item{
      height: 14rem;
      width: 33rem;
    }
    
    .principal-title{
      width: 100%;
      margin-top: 5rem;
      font: 2.2rem "Libre Baskerville", serif; ;
      background: #F8F50D ;
      font-weight: bolder;
    }

    .principal-subtitle{
      text-align: left;
      color: #B5B5B5;
      font:  1rem  "Open Sans", sans-serif;
    }

    .news-list-title{
      color:#2A2A2A;
      font: 1rem "Libre Baskerville", serif; ;
      text-align: left;
      font-weight: 600;
    }

    .news-list-subtitle{
      margin: 1rem 0;
      color:#2A2A2A;
      font: 0.8rem "Open Sans", sans-serif;
      text-align: left;
    }

    .chip-group{
      position: absolute;
      margin-top: 1rem;
      width: 50%;
      z-index: 1;
    }
    
    .news-image{
      width: 16.3rem;
      height: 15rem;
      object-fit: cover;
      filter: opacity(0.6);
      z-index: 0;
    }

    .news-time{
      border-radius: 3px;
    }
  }

</style>