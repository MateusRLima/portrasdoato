<template>
  <div>
    <header-component
      :isWhite="false"
      color="#C9C9C9"
      textColor="#2A2A2A"
      style="z-index: 2"
    ></header-component>
    <main class="mt-5 authors-main">
      <v-container class="authors-sheet">
      <h1 class="my-10 authors-content">Expediente</h1>
        <v-row class="authors-content" style="margin-bottom: 5rem">
          <v-col>
            <div class="text-center">
              <img
                class="rounded-circle perfil mb-10"
                src="../assets/Flávia.jpeg"
                width="150px"
                height="150px"
              />
              <h3>Flávia Castro</h3>
              <h4>Estudante</h4>
            </div>
          </v-col>
          <v-col>
            <div class="text-center">
              <img
                class="rounded-circle perfil mb-10"
                src="../assets/Débora.jpeg"
                width="150px"
                height="150px"
              />
              <h3>Débora Oliveira</h3>
              <h4>Estudante</h4>
            </div>
          </v-col>
          <v-col>
            <div class="text-center">
              <img
                class="rounded-circle perfil mb-10"
                src="../assets/authors/Adriana.jpeg"
                width="150px"
                height="150px"
              />
              <h3>Adriana Santana</h3>
              <h4>Orientadora</h4>
            </div>
          </v-col>
        </v-row>
        <h1 class="text-center my-10 authors-content">Colaboradores</h1>
        <v-row class="authors-content my-10">
          <v-col>
            <div class="text-center">
              <img
                class="rounded-circle perfil mb-10"
                src="../assets/authors/Mateus.jpg"
                width="150px"
                height="150px"
              />
              <h3>Mateus Rosa de Lima</h3>
              <h4>Programador</h4>
            </div>
          </v-col>
          <v-col>
            <div class="text-center">
              <img
                class="rounded-circle perfil mb-10"
                src="../assets/authors/Maria.jpg"
                width="150px"
                height="150px"
              />
              <h3>Maria Luiza Barros</h3>
              <h4>UX Designer</h4>
            </div>
          </v-col>
          <v-col>
            <div class="text-center">
              <img
                class="rounded-circle perfil mb-10"
                src="../assets/authors/Igor.jpg"
                width="150px"
                height="150px"
              />
              <h3>Igor Golpian</h3>
              <h4>Cientista de Dados</h4>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>

.authors-sheet {
  background-color: #f8f8f8;
  text-align: justify;
}

.authors-content {
  padding: 0 2rem;
  text-align: center;
  color: #616161;
  font: "Open Sans", sans-serif;
}

@media only screen and (min-width: 768px) {
  .authors-sheet {
    background-color: #f8f8f8;
    text-align: justify;
    padding: 1rem 15rem;
  }

  .perfil {
    object-fit: cover;
    object-position: top;
  }
}
</style>