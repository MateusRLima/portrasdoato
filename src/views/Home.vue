<template>
  <div class="home">
    <header class="home-header">
      <v-toolbar id="toolbar" color="transparent">
        <img
          @click="goToHome()"
          src="../assets/logo-white.svg"
          class="logo-header"
        />
        <v-spacer></v-spacer>
        <router-link id="router-link" style="color: #fcfcfc" to="/about"
          >Sobre o projeto</router-link
        >
        <router-link id="router-link" style="color: #fcfcfc" to="/authors"
          >Expediente</router-link
        >
        <router-link id="router-link" style="color: #fcfcfc" to="/authors"
          >Agradecimentos</router-link
        >
      </v-toolbar>
    </header>
    <main class="mb-16">
      <v-card color="transparent" flat>
        <v-container>
          <v-row>
            <v-col cols="5" class="px-0 ml-16" align-self="center">
              <div class="title">
                <h1 class="principal-title">
                  Trabalhadores no ponto,<br />
                  criminosos nas ruas
                </h1>
                <h2 class="principal-subtitle">
                  Um olhar sobre registros da última década que mostram como o
                  poder judiciário, a polícia e a mídia têm sido utilizados para
                  ‘criminalizar’ quem protesta.
                </h2>
              </div>
            </v-col>
            <v-col align-self="end" cols="3">
              <v-btn class="pr-0" @click="goToVnews()" text color="#C4C4C4"
                >Ver mais
                <v-icon color="#F8F50D">mdi-chevron-right</v-icon></v-btn
              >
            </v-col>
            <v-col align-self="end" cols="3">
              <p class="big-cite ma-0">
                <span class="big-quote">“</span>A Justiça existe para permitir
                que aqueles que não têm voz possam ser ouvidos. Mas, hoje, está
                se tornando a ferramenta usada por essas pessoas poderosas para
                reprimir aqueles que não tem voz
                <br />
                <br />
                Clément Voule, relator da ONU sobre Liberdade de Associação e
                Reunião Pacífica
              </p>
            </v-col>
          </v-row>
          <v-slide-group class="px-0 mt-16 news-slider" active-class="success">
            <template #next>
              <v-icon color="#F8F50D"> mdi-chevron-right </v-icon>
            </template>
            <template #prev>
              <v-icon color="#F8F50D"> mdi-chevron-left </v-icon>
            </template>
            <v-slide-item light>
              <card-news
                title="Trabalhadores no ponto, criminosos nas ruas"
                subtitle="Um olhar sobre registros da última década que"
                readTime="10"
                format="Reportagem"
                theme="Criminalização"
                imgName="materia1.jpg"
                @sendTo="goToVnews"
              ></card-news>
            </v-slide-item>
            <v-slide-item light>
              <card-news
                title="Rostos da rua"
                subtitle=" Em outubro de 2013, o fotógrafo Fernando Frazão"
                readTime="15"
                format="Perfis"
                theme="Manifestantes"
                imgName="materia2.jpg"
                @sendTo="goToSnews"
              ></card-news>
            </v-slide-item>
            <v-slide-item light>
              <card-news
                title="Mulheres no centro: a década de protestos no campo"
                subtitle="“É melhor morrer na luta que morrer de fome”"
                readTime="7"
                format="Dados"
                theme="Manifestantes"
                imgName="materia3.png"
                @sendTo="goToWnews"
              ></card-news>
            </v-slide-item>
            <v-slide-item light>
               <card-news
                title="Protesto: o que é permitido por lei?"
                subtitle="Entenda seus direitos como manifestante e saiba"
                readTime="8"
                format="Reportagem"
                theme="Leis"
                imgName="materia4.jpg"
                @sendTo="goToPnews"
              ></card-news>
            </v-slide-item>
            <v-slide-item light>
               <card-news
                title="10 anos de greves: brasileiros lutam por um salário digno"
                subtitle="Uma década, três governos, uma pandemia."
                readTime="8"
                format="Expresso"
                theme="Como ajudar"
                imgName="materia5.jpg"
                @sendTo="goToTnews"
              ></card-news>
            </v-slide-item>
          </v-slide-group>
        </v-container>
      </v-card>
    </main>
  </div>
</template>

<script>

import CardSlideItem from '../components/HomeView/CardSlideItem.vue'

export default {
  name: "Home",

  components: {
    "card-news" : CardSlideItem
  },

  data: () => ({
    items: [],
  }),

  methods: {
    goToPnews() {
      this.$router.push("/pnews");
      window.scrollTo(0, 0);
    },

    goToVnews() {
      this.$router.push("/vnews");
      window.scrollTo(0, 0);
    },

    goToSnews() {
      this.$router.push("/snews");
      window.scrollTo(0, 0);
    },

    goToWnews() {
      this.$router.push("/wnews");
      window.scrollTo(0, 0);
    },

    goToTnews() {
      this.$router.push("/tnews");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>

.home-header {
  border-bottom: 1px solid #858585;
  z-index: 2;
  width: 100%;
}

#toolbar {
  box-shadow: none;
  padding: 0px;
}

.logo-header {
  cursor: pointer;
}

#router-link {
  margin-right: 5rem;
  text-decoration: none;
  font-size: 1rem;
}

.home {
  height: 100%;
  background: url("../assets/materia1.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.principal-title {
  width: 100%;
  margin-top: 5rem;
  font: 2rem "Libre Baskerville", serif;
  background: #f8f50d;
  font-weight: bolder;
}

.principal-subtitle {
  margin-top: 1rem;
  color: #b5b5b5;
  font: 1rem "Open Sans", sans-serif;
}

.big-cite{
  text-align: justify;
  color: #b5b5b5;
}

.big-quote {
  font: 2rem "Libre Baskerville", serif;
  font-size: 2rem;
  color: #f8f50d;
}

.slide {
  width: 75%;
}

</style>