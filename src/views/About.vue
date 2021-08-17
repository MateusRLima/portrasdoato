<template>
  <div>
    <header-component
      :isWhite="false"
      color="#C9C9C9"
      textColor="#2A2A2A"
      style="z-index: 2"
    ></header-component>
    <main class="mt-16 about-main">
      <v-container class="about-sheet">
        <v-row class="about-content mb-10">
          <v-col class="pa-0">
            <h2 class="about-subtitle text-center mt-10">Sobre o projeto</h2>
            <p class="by">Por Débora Oliveira</p>
          </v-col>
          <p>
            Por Trás do Ato é um especial realizado como projeto de conclusão do
            curso de Jornalismo da Universidade Federal de Pernambuco (UFPE),
            sob orientação da professora Adriana Santana.
          </p>
          <p>
            Começou com uma inquietação minha, aleatória e noturna. “Por que as
            pessoas protestam?” era a pergunta que voltava à minha mente.
            Procurei a resposta em notícias e mal encontrei. A razão? Não
            estavam lá.
          </p>
          <p>
            A inquietação virou pesquisa. Em 2019, o projeto de “Base de dados
            sobre protestos” foi inscrito como uma pesquisa secular para o
            Programa Institucional de Bolsas de Iniciação Científica (PIBIC),
            sob orientação do professor Rodrigo Cunha (a quem devo muito). A
            ideia era criar uma base de dados a partir de notícias sobre os
            protestos ocorridos no Brasil na última década.
          </p>
          <p>
            No início de 2020, a pesquisa foi descontinuada. Por falta de
            recursos e de saúde mental. Descobrimos que montar uma base de dados
            é algo extremamente caro.
          </p>
          <p>
            Mas a inquietação continuou quando tive que decidir meu tema de TCC.
            Flávia aceitou o desafio de buscarmos agregadores de dados sobre
            protestos e produzirmos uma reportagem sobre isso. Ela tinha as
            mesmas dúvidas que eu em sua mente, o mesmo descontentamento com a
            cobertura atual da imprensa sobre os protestos no Brasil.
          </p>
          <p>
            Em nossas pesquisas, uma luta em específico chamou nossa atenção: a
            do trabalhador. Todo manifestante, seja militante, ativista,
            experiente ou iniciante, rico ou pobre é um trabalhador e a causa
            trabalhista é o tema de muitos protestos ao redor do mundo,
            principalmente em solo brasileiro. E isto é tão latente e importante
            para os trabalhadores, que as únicas bases de protesto existentes
            atualmente são sobre temas trabalhistas. A dignidade do trabalho é
            violada historicamente no campo e na cidade e percebemos que este
            deveria ser o foco da nossa investigação.
          </p>
          <p>Foi assim que nasceu o projeto Por Trás do Ato.</p>
          <p>
            Queríamos entender quais padrões essas bases revelavam, quais as
            histórias e lutas por trás dos números. Lutas que vão além de pedir
            por melhores salários e condições de trabalho, mas que envolvem
            vidas e a destruição delas, a dignidade humana, o direito de
            subsistência. As histórias de pessoas protestando no meio de
            multidões são maiores do que conseguimos enxergar em fotos e dados.
            São mais complexas que as controvérsias reportadas em notícias
            diárias. Ouvir essas narrativas foi doloroso, mas encontramos um
            sentido em compartilhá-las com todos vocês.
          </p>
          <p>
            Foram meses de dedicação, várias entrevistas, leituras, pesquisas e
            análises que provocaram dúvidas, emoções positivas e negativas. Ao
            ler as reportagens, esperamos que você entenda e sinta um pouco de
            tudo isso.
          </p>
        </v-row>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-main {
  background-color: #f8f8f8;
}

.about-sheet {
  background-color: #f8f8f8;
  text-align: justify;
}

.by {
  font-size: 0.8rem;
}

.about-content {
  padding: 0 2rem;
  text-align: justify;
  color: #616161;
  font: 1rem "Open Sans", sans-serif;
}

@media only screen and (min-width: 768px) {
  .about-sheet {
    background-color: #f8f8f8;
    text-align: justify;
    padding: 1rem 10rem;
  }
}
</style>