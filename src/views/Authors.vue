<template>
  <div>
    <header-component
      :isWhite="false"
      color="#C9C9C9"
      textColor="#2A2A2A"
      style="z-index: 2"
    ></header-component>
    <main class="mt-16">
      <v-container class="authors-sheet">
        <v-row class="authors-content">
          <v-col cols="4">
            <img class="img-thumbnail" src="../assets/Flávia.jpeg" width="50%" />
          </v-col>
          <v-col cols="8">
            <h3 class="mb-10">Flávia Castro</h3>
            <p>
              Agradeço a Deus por, literalmente, TUDO. Agradeço a meus familiares
              Castros e Ferreiras, em especial a minha mãe, carinhosamente chamada
              de Emilia, mulher forte, guerreira e que sempre batalhou
              incansavelmente por mim.
            </p>
            <p>
              Obrigada ao jornalismo que me fez vivenciar momentos únicos e
              escutar histórias incríveis.
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-10 authors-content ">
          <v-col cols="4">
            <img class="img-thumbnail" src="../assets/Débora.jpeg" width="50%" />
          </v-col>
          <v-col cols="8">
            <h3 class="mb-10">Débora Oliveira</h3>
            <p>
              Agradeço a minha mãe e irmã pelas madrugadas que suportaram a luz do
              quarto ligada, pelos pratos que lavaram por mim enquanto eu só sabia
              dizer que estava ocupada com o TCC; por escutar meu choro. Vocês são
              meu tudo e nas pequenas coisas me ajudaram a estar de pé.
            </p>
            <p>
              Minha gratidão a Flávia que sempre foi parceira nestes cinco anos,
              suportou minhas limitações e me mostrou as dela. Obrigada pelas
              tapiocas que você comprou para mim quando eu não tinha dinheiro na
              faculdade, ainda estou te devendo por isso. Obrigada por ficar firme
              até o fim.
            </p>
            <p>
              Agradeço a meu amigo Roberto, quem levarei no coração por todos os
              conselhos e oportunidades que me ajudou a enxergar. Por acreditar no
              meu potencial e me lembrar dele quando eu mesma não acreditava em
              mim.
            </p>
            <p>
              Nossa, são muitos anos e muitas pessoas, sou extremamente grata a
              todos que fizeram parte da minha trajetória na Universidade Federal
              de Pernambuco. Com todas as suas falhas, foi na universidade pública
              que tive a oportunidade de ter contato com os melhores professores e
              me formar como jornalista e cidadã. Espero que este direito siga
              inegociável para pessoas como eu.
            </p>
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
  text-align: justify;
  color: #616161;
  font: 1rem "Open Sans", sans-serif;
}

@media only screen and (min-width: 768px){
	.authors-sheet {
		background-color: #f8f8f8;
		text-align: justify;
		padding: 1rem 15rem;
	}
}
</style>