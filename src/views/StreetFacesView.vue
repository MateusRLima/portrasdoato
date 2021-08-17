<template>
  <div>
    <header-component
      :isWhite="false"
      color="#C9C9C9"
      textColor="#2A2A2A"
      style="z-index: 2"
    ></header-component>
    <main class="mt-16">
      <div style="position: relative">
        <img class="news-banner" src="../assets/materia2.jpg" />
        <div
          style="
            text-align: left;
            position: absolute;
            top: 10px;
            color: grey;
            font-size: 0.8rem;
            left: 10px;
          "
        >
          Mulheres tampam as bocas com fitas em protesto contra a repressão
          <br />
          de manifestantes na Câmara Municipal do Rio de Janeiro, 2013. Foto:
          Reprodução/Fernando Frazão
        </div>
      </div>
      <v-container class="pt-0 news-sheet">
        <v-row>
          <v-col>
            <div class="news-title">
              <h1>Rostos da rua</h1>
            </div>
          </v-col>
        </v-row>
        <div class="news-content">
          <p>
            Em outubro de 2013, o fotógrafo Fernando Frazão, da Agência Brasil,
            capturou a manifestação simbólica de duas mulheres, que taparam suas
            bocas com fitas adesivas representando a repressão sofrida por quem
            decide lutar por direitos no Brasil. A imagem é única e ao mesmo
            tempo não é. Ela se repete de forma literal na realidade de milhares
            de manifestantes brasileiros que tiveram seus direitos humanos
            violados nas ruas.
          </p>
          <p class="mb-10">
            Resgatamos a história de quatro deles, residentes de cidades
            diferentes, profissões diferentes e realidades completamente
            distintas. A única coisa que eles têm em comum é a repressão que
            sofreram enquanto tentavam lutar pela sua dignidade.
          </p>
          <v-item-group>
            <v-container class="pa-0">
              <v-row>
                <v-col
                  v-for="enterview in enterviews"
                  :key="enterview"
                  cols="15"
                  md="6"
                >
                  <v-item v-slot="{ active }">
                    <v-card
                      flat
                      :color="active ? '#F8F50D' : ''"
                      class="d-flex align-center justify-center"
                      dark
                      height="100"
                      @click="goTo(enterview)"
                    >
                      <v-scroll-y-transition>
                        <div
                          v-if="active"
                          class="black--text"
                          style="font: 1rem Libre Baskerville, serif"
                        >
                          {{ enterview }}
                        </div>
                        <div
                          class="white--text"
                          style="font: 1rem Libre Baskerville, serif"
                          v-else
                        >
                          {{ enterview }}
                        </div>
                      </v-scroll-y-transition>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </div>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  name: "StreetFacesView",

  data: () => ({
    selectedEnterview: "",
    enterviews: [
      "Ednalva Franco, motorista de aplicativo",
      "Dayvid Bacelar, petroleiro",
      "Jeremias Nascimento, rodoviário",
      "Francis Herbert, técnico de enfermagem",
    ],
  }),
  methods: {
    goTo(enterview) {
      if (enterview === "Francis Herbert, técnico de enfermagem") {
        this.$router.push("/francis");
        window.scrollTo(0, 0);
      } else if (enterview === "Jeremias Nascimento, rodoviário") {
        this.$router.push("/jeremias");
        window.scrollTo(0, 0);
      } else if (enterview === "Ednalva Franco, motorista de aplicativo") {
        this.$router.push("/ednalva");
        window.scrollTo(0, 0);
      } else if (enterview === "Dayvid Bacelar, petroleiro") {
        this.$router.push("/dayvid");
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style >
.news-sheet {
  background-color: #f8f8f8;
}

.news-title {
  text-align: left;
  padding: 1rem;
  color: #2a2a2a;
  font: 1rem "Libre Baskerville", serif;
  background: #f8f50d;
  font-weight: bold;
  position: relative;
  top: -30%;
  z-index: 1;
}

.news-banner {
  width: 100%;
  height: 25rem;
  object-fit: cover;
  object-position: 50% 35%;
  position: relative;
  z-index: 0;
}

.news-subtitle {
  text-align: justify;
  color: #616161;
  font: 0.8rem "Open Sans", sans-serif;
}

.news-tags {
  margin-top: 5rem;
  color: #616161;
  font: 1rem "Open Sans", sans-serif;
}

.news-tags h3 {
  margin-bottom: 5rem;
}

.news-content {
  text-align: justify;
  color: #616161;
  font: 1rem "Open Sans", sans-serif;
}

.content-subtitle {
  color: #616161;
  text-align: justify;
}

.content-manchete:nth-child(2n) {
  animation: fade 5s infinite;
}

.content-manchete:nth-child(1n) {
  animation: fade 5s infinite;
}

@keyframes fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@media only screen and (min-width: 768px) {
  .news-sheet {
    padding: 10rem;
    background-color: #f8f8f8;
  }

  .news-banner {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  .news-title {
    text-align: center;
    padding: 1rem;
    color: #2a2a2a;
    font: 0.9rem "Libre Baskerville", serif;
    background: #f8f50d;
    font-weight: bold;
    position: relative;
    top: -30%;
    z-index: 1;
  }

  .news-subtitle {
    text-align: justify;
    color: #616161;
    font: 0.8rem "Open Sans", sans-serif;
  }

  .news-tags {
    margin-top: 5rem;
    color: #616161;
    font: 1rem "Open Sans", sans-serif;
  }

  .news-tags h3 {
    margin-bottom: 5rem;
  }

  .news-content {
    text-align: justify;
    color: #616161;
    font: 1rem "Open Sans", sans-serif;
  }

  .content-subtitle {
    color: #616161;
    text-align: justify;
  }

  .content-manchete {
    position: relative;
    width: 25%;
    height: 25%;
  }

  .carousel-text {
    font-size: 1rem;
  }
}
</style>