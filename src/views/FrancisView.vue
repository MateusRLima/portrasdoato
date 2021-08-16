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
        <img class="news-banner" src="../assets/1.png" />
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
          Protesto de profissionais da saúde em frente ao Hospital da
          Restauração, no Recife, em 2020. Francis é o homem em frente a
          viatura, no lado direito da foto. <br />
          Foto: Arquivo Pessoal/Francis Herbert
        </div>
      </div>
      <v-container class="pt-0 news-sheet">
        <v-row>
          <v-col>
            <div class="news-title">
              <h1>Sem oxigênio</h1>
            </div>
          </v-col>
        </v-row>
        <div class="news-content">
          <p>
            Nos últimos dois anos, assistimos muitas pessoas ficarem sem
            oxigênio. Em maio de 2020, quando o vigilante George Floyd foi
            estrangulado brutalmente por um policial norte-americano em
            Minneapolis, no estado de Minnesota. Em janeiro de 2021, quando o
            sistema de saúde de Manaus entrou em colapso por falta de cilindros
            de O2 e várias pessoas morreram de asfixia em leitos de UTIs.
          </p>
          <p class="mb-10">
            Francis Herbert, Técnico de Enfermagem de 48 anos, viu seu próprio
            filho perder o ar nos braços de um policial.
          </p>
          <p>
            Tudo aconteceu às vésperas da pandemia, em fevereiro de 2020. Como
            presidente do sindicato dos Auxiliares e Técnicos de Enfermagem,
            Herbert já pressentia o caos que viria pela frente. A categoria
            tentou negociar com o Governo, argumentando que não havia condições
            mínimas para enfrentar a covid-19.
          </p>
          <p>
            <q
              >Estávamos em uma situação precária… Salários baixos, sem
              insalubridade, adicional noturno. Nenhuma das unidades tinha EPI
              's. Não estavam nos dando as mínimas condições de trabalho, muito
              menos para enfrentar uma pandemia. Nós sabíamos que iam ter muitas
              mortes, mas o Governo não nos escutou</q
            >, relembra Herbert.
          </p>
          <p>
            Então os profissionais foram às ruas por 15 dias. No último dia de
            protesto, os manifestantes foram para a frente do Hospital da
            Restauração, na avenida Agamenon Magalhães, a principal do centro da
            cidade. Logo chegou o batalhão de choque, a mando de uma liminar
            concedida ao Governo do Estado permitindo o uso da força policial
            para retirar os profissionais de saúde da avenida.
          </p>
          <p>
            O cenário, segundo Herbert, foi radical.
            <q
              >Os policiais chegaram disparando balas de borracha, spray de
              pimenta, mulheres sendo combatidas com muita violência. Como eu
              fui representar o movimento, a polícia militar me deteve</q
            >. Dois policiais o imobilizaram. Nesse momento, seu filho estava ao
            seu lado e tentou impedir que a polícia o levasse. Foi quando um dos
            agentes o pegou pelo pescoço por trás, em uma manobra conhecida como
            ‘enforca gato’, a força foi tanta que o rapaz perdeu a consciência
            na hora e quase teve uma parada cardíaca.
          </p>
          <div class="my-10" >
            <video width="100%" controls>
              <source src="../assets/francis-video.mp4" type="video/mp4" />
              Seu navegador não suporta este vídeo, tente uma versão mais
              atualizada.
            </video>
            <p class="text-right" style="font-size: 0.8rem">
              O Sindicato Profissional dos Auxiliares e
              Técnicos de Enfermagem de Pernambuco (Satenpe) registrou a
              atividade policial durante o protesto, incluindo o momento em que
              o filho de Herbert foi imobilizado pelo pescoço.
            </p>
          </div>
          <p>
            <q
              >Eu não pude fazer nada... só vi meu filho sendo derrubado como se
              fosse animal. Só me passou na cabeça ele perdendo a consciência e
              sem oxigênio. Naquele momento a gente se pergunta o porquê a gente
              se mete nisso, sabe?</q
            >
          </p>
          <p>
            Sem poder dar assistência ao filho, Herbert foi levado a delegacia e
            até hoje responde a um processo por conta do protesto.
            <q
              >Precisei de toda uma assessoria jurídica para me soltarem naquele
              momento. Virei réu primário por lutar pelos meus direitos, por
              dignidade, pela vida. Até mesmo nós profissionais, ao irmos de
              encontro aos órgãos governamentais apenas pelo nosso trabalho,
              passamos a ser tratados como marginais</q
            >.
          </p>
          <!-- <img
            src="../assets/hebert e policiais.jpeg"
            class="my-10"
            width="100%"
            alt="hebert e policiais"
          /> -->
          <p>
            Não foi o primeiro desafio dele como manifestante. Quando trabalhava
            em Quipapá, município da Mata Sul de Pernambuco (PE), foi coagido
            por representantes da gestão da prefeitura a sair da cidade. Sofreu
            ameaças sucessivas. Sua categoria buscava pela redução da jornada de
            trabalho de 44 para 30 horas semanais, uma luta que vinha sendo
            travada em vários municípios da região metropolitana do Recife.
          </p>
          <p>
            Desde 2017, quando foi registrado como sindicato, o grupo de
            Auxiliares e Técnicos de Enfermagem de PE luta para serem
            reconhecidos como pessoas que doam suas vidas para cuidar de outras.
            Não pedem aplausos, mas condições de vida digna, saúde, um futuro
            para os filhos e direito de moradia.
            <q
              >A nossa atividade é de extrema importância na saúde, sem o
              profissional de enfermagem não existe condições de recuperar a
              vida, por mais que existam outros profissionais. O profissional de
              enfermagem te acompanha desde a sua entrada no hospital até sua
              saída, em vida ou em morte. É quem leva o corpo para ser entregue
              à família. É uma categoria que merece respeito. Não reconhecem o
              valor desse profissional</q
            >, lamenta Herbert.
          </p>
          <p>
            Hoje seu maior medo é expor seus familiares. Seu filho, de 24 anos,
            se recuperou fisicamente do golpe, mas não consegue mais estar em
            locais com muitas pessoas. Mesmo assim, ele segue com uma opinião
            muito clara sobre o medo no contexto da sua luta por dignidade.
          </p>
          <blockquote class="font-italic">
            “Eu acho que o medo nos mantém dentro de um cenário humano. Somos
            animais racionais, sabemos o risco e o perigo, mas o que me motiva
            dentro de protestos e dentro da luta é acreditar na nossa
            democracia. Eu acredito que todos têm direitos iguais, ser humano
            nenhum pode ser destratado. Nossa missão é implantar uma democracia,
            um direito de igualdade, para que possamos ser valorizados por
            aquilo que sabemos fazer, pelo que somos. Que a gente tenha condição
            de sobreviver do nosso trabalho, que não sejamos molas propulsoras
            de enriquecimento alheio. Na busca desses direitos que são
            sonegados, a recompensa é ver alguém feliz, ver alguém dizendo que
            valeu a pena lutar e mostrar que a democracia existe e a
            Constituição está sendo cumprida. Mesmo que eu não consiga tudo, só
            gostaria de me sentir útil e poder dizer que eu faço parte dessa
            nação e que nessa democracia eu sou respeitado.”
          </blockquote>
        </div>
        <v-btn class="mt-10" @click="goToPnews()" text color="#2A2A2A"
          >Protesto: o que é permitido por lei?
          <v-icon color="#2A2A2A">mdi-chevron-right</v-icon></v-btn
        >
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  name: "FrancisView",

  methods: {
    goToPnews() {
      this.$router.push("/pnews");
      window.scrollTo(0, 0);
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
  top: -50%;
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

.news-content {
  text-align: justify;
  color: #616161;
  font: 1rem "Open Sans", sans-serif;
}

.content-subtitle {
  color: #616161;
  text-align: justify;
}

@media only screen and (min-width: 768px) {
  .news-sheet {
    padding: 15rem;
    background-color: #f8f8f8;
  }

  .news-banner {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    object-position: 50% 65%;
    position: relative;
    z-index: 0;
  }

  .news-title {
    text-align: center;
    padding: 1rem;
    color: #2a2a2a;
    font: 1rem "Libre Baskerville", serif;
    background: #f8f50d;
    font-weight: bold;
    position: relative;
    top: -50%;
    z-index: 1;
  }

  .news-subtitle {
    text-align: justify;
    color: #616161;
    font: 0.8rem "Open Sans", sans-serif;
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
}
</style>