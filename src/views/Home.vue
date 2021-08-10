<template>
  <div class="home">
    <header>
      <header-component></header-component>
    </header>
    <main class="mt-16">
      <v-card color="transparent" flat>
        <v-container>
          <v-row>
            <v-col cols="8" align-self="center">
              <h1 class="principal-title">
                Trabalhadores no ponto, criminosos nas ruas
              </h1>
              <h2 class="principal-subtitle">
                Um olhar sobre registros da última década que mostram como o poder judiciário,
                a polícia e a mídia têm sido utilizados para ‘criminalizar’ quem protesta.
              </h2>
            </v-col>
            <v-col align-self="end" cols="1">
              <v-btn @click="goToVnews()" text color="#C4C4C4">Ver mais <v-icon color="#F8F50D">mdi-chevron-right</v-icon></v-btn>
            </v-col>
          </v-row>
          <v-row class="py-0">
            <v-slide-group
              class="px-0 py-4"
              active-class="success"
              show-arrows
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
                  @click="goToPnews()"
                  height="20rem"
                  width="35rem"
                  tile
                  color="#FCFCFC"
                  class="ma-4 pa-4"
                >
                  <v-container>
                    <v-row>
                      <v-col>
                        <h3 class="news-list-title">
                          Protesto: o que é permitido por lei?
                        </h3>
                        <h4 class="news-list-subtitle mb-5">
                          Entenda seus direitos como manifestante e saiba o que recomendam os manuais de ‘conduta’ existentes 
                        </h4>
                        <v-btn text color="#2A2A2A">Ver mais <v-icon color="#2A2A2A">mdi-chevron-right</v-icon></v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-row>
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
    },

    goToVnews(){
      this.$router.push("/vnews")
    }
  }


}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
  
  .home{
    height: 100%;
    background: url('https://storage.googleapis.com/news-storage-ea132.appspot.com/images/1628175900171.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .principal-title{
    padding: 0.5rem;
    font: 1.5rem "Libre Baskerville", serif; ;
    background: #F8F50D ;
    font-weight: bold;
  }

  .principal-subtitle{
    margin-top: 1rem;
    color: #B5B5B5;
    font:  1rem  "Open Sans", sans-serif;
  }

  .news-list-title{
    color:#2A2A2A;
    margin-top: 2rem;
    font: 2rem "Libre Baskerville", serif; ;
    text-align: left;
  }

  .news-list-subtitle{
    color:#2A2A2A;
    margin-top: 1rem;
    font: 1rem "Open Sans", sans-serif;
    text-align: left;
  }

  .news-image{
    object-fit: contain;
    background: no-repeat center center fixed;
  }

  .news-time{
    border-radius: 3px;
  }

  @media only screen and (min-width: 768px) {
    .home{
      height: 100%;
      background: url('https://storage.googleapis.com/news-storage-ea132.appspot.com/images/1628175900171.png') no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
    
    .principal-title{
      padding: 1rem;
      margin-top: 5rem;
      font: 1.5rem "Libre Baskerville", serif; ;
      background: #F8F50D ;
    }

    .principal-subtitle{
      color: #B5B5B5;
      font:  1rem  "Open Sans", sans-serif;
    }

    .news-list-title{
      color:#2A2A2A;
      margin-top: 2rem;
      font: 2rem "Libre Baskerville", serif; ;
      text-align: left;
    }

    .news-list-subtitle{
      color:#2A2A2A;
      margin-top: 1rem;
      font: 1rem "Open Sans", sans-serif;
      text-align: left;
    }

    .news-image{
      background: no-repeat center center fixed;
      height: 100%;
    }

    .news-time{
      border-radius: 3px;
    }
  }

</style>