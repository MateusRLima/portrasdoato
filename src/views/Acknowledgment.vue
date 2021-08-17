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
        <v-row class="about-content">
          <v-col class="pa-0">
            <h2 class="about-subtitle text-center my-10">Agradecimentos</h2>
          </v-col>
          <p>
            Nosso agradecimento coletivo a todos os pesquisadores, professores,
            advogados, programadores e qualquer pessoa que de alguma forma
            contribuiu com esse projeto. A Maria Luiza Barros, por se
            disponibilizar a fazer o design do site sem cobrar nada. A Mateus e
            Igor que nos prestaram seus serviços de tecnologia.
          </p>
          <p>
            Em especial, queremos agradecer aos manifestantes que se dispuseram
            a falar de um assunto tão doloroso. Ednalva, Francis, Jeremias e
            Deyvid. Nossa gratidão e solidariedade. Vocês nos ensinaram o valor
            de olhar para rostos desconhecidos com mais empatia e pensar duas
            vezes antes de tirar conclusões sobre a história de alguém.
          </p>
          <p>
            Ao professor Rodrigo Cunha, que ajudou a definir um objeto de
            pesquisa para a inquietação destas estudantes. À professora Paula
            Reis, que ajudou a lapidá-lo. Por fim, à nossa orientadora, Adriana
            Maria Santana, por nos ajudar a enxergar a melhor maneira de dar
            forma a esse projeto. Por entender nossas limitações e não desistir
            de nós.
          </p>
          <p>
            Agradecemos aos nossos amigos, Cinthia e Henrique, que foram
            parceiros em todos os trabalhos, desabafos e momentos de alegria
            vividos nesta universidade. Nossas aventuras estarão guardadas em
            nossos corações.
          </p>
        </v-row>
        <v-row class="about-content">
          <v-col class="pl-0">
            <h4 class="mb-5">Flávia Castro</h4>
            <p>
              Agradeço a Deus por, literalmente, TUDO. Agradeço a meus familiares Castros e Ferreiras, em especial a minha mãe, carinhosamente chamada de Emilia, mulher forte, guerreira e que sempre batalhou incansavelmente por mim.
            </p>
            <p>
              Ao Flávio, meu pai, de quem carrego até o nome, por todo amor, esforço, carinho e mesmo que indiretamente me ensinar a ter calma e paciência. Às minhas irmãs Raysa, Rayane e Eduarda, por sempre vibrarem pelas minhas conquistas. À Débora, minha companheira, amiga e irmã por todos esses anos, por me colocar para cima, me acalmar e ser parceira não só nesse trabalho, mas também na vida. Carlos Neto, a criança que tem meu coração e escuta meus desabafos mesmo sem entender nada. A  meus pets, meus filhos. Eles me acalmaram e me acompanharam nas madrugadas. Por fim, um agradecimento importante: Rony Lamonier, meu melhor amigo e meu amor, por me apoiar tanto, corrigir meus textos em todos esses anos, escutar meus desabafos, choros, me acalmar, por acreditar tanto em mim e por tantas outras coisas…
            </p>
            <p>
              Obrigada ao jornalismo que me fez vivenciar momentos únicos e escutar histórias  incríveis. 
            </p>
          </v-col>
          <v-col class="pr-0">
            <h4 class="mb-5">
              Débora Oliveira
            </h4>
            <p>
              Agradeço a minha mãe e irmã pelas madrugadas que suportaram a luz do quarto ligada, pelos pratos que lavaram por mim enquanto eu só sabia dizer que estava ocupada com o TCC; por escutar meu choro. Vocês são meu tudo e nas pequenas coisas me ajudaram a estar de pé.
            </p>
            <p>
              Minha gratidão a Flávia que sempre foi parceira nestes cinco anos, suportou minhas limitações e me mostrou as dela. Obrigada pelas tapiocas que você comprou para mim quando eu não tinha dinheiro na faculdade, ainda estou te devendo por isso. Obrigada por ficar firme até o fim.
            </p>
            <p>
              Agradeço a meu amigo Roberto, quem levarei no coração por todos os conselhos e oportunidades que me ajudou a enxergar. Por acreditar no meu potencial e me lembrar dele quando eu mesma não acreditava em mim.
            </p>
            <p>
              Nossa, são muitos anos e muitas pessoas, sou extremamente grata a todos que fizeram parte da minha trajetória na Universidade Federal de Pernambuco. Com todas as suas falhas, foi na universidade pública que tive a oportunidade de ter contato com os melhores professores e me formar como jornalista e cidadã. Espero que este direito siga inegociável para pessoas como eu.
            </p>
            
          </v-col>
        </v-row>
      </v-container>
    </main>
  </div>
</template>

<script>

export default {
  name: "Acknowledgment"
};

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