<template>
  <div>
    <header-component
      :isWhite="false"
      color="#C9C9C9"
      textColor="#2A2A2A"
      style="z-index: 2"
    ></header-component>
    <main class="mt-16">
      <div style="position: relative;">
          <img class="wnews-banner" src="../assets/materia3.jpg" />
          <div class="text-left" style="position: absolute; top: 10px; color: grey; font-size: 0.8rem; left: 10px">Trabalhadores essenciais em manifestação exigindo melhores condições de trabalho e em repúdio às ações do governo Bolsonaro de incentivo ao fim do isolamento social. São Paulo, 2020. <br /> Foto: Reprodução/Vanessa Nicolav</div>
      </div>
      <v-container class="pt-0 wnews-sheet">
        <v-row>
          <v-col>
            <div class="wnews-title">
              <h1>Mulheres no centro: a década de protestos no campo</h1>
            </div>
            <div class="wnews-subtitle">
              <h2>
               “É melhor morrer na luta que morrer de fome” <br />
                Margarida Maria Alves
              </h2>
            </div>
          </v-col>
        </v-row>
        <div class="wnews-content mt-10">
          <p>
            O Brasil tem cerca de 851 milhões de áreas rurais, onde vive uma população de mais de 29 milhões de pessoas, formada, em maioria, por quilombolas, camponeses e povos indígenas. Mas as pautas do campo têm dificuldade para chegar ao conhecimento das cidades. <q>Esse é um processo histórico. Com a Ditadura Militar, houve uma expansão da colonização na Amazônia que gerou uma série de conflitos, mas os meios de comunicação não faziam a cobertura disso</q>, explica o documentarista Flávio Marcos, do Centro de Documentação Dom Tomás Balduíno (CEDOC), mantido pela Comissão Pastoral da Terra (CPT).
          </p>
          <p>
            Desde 1985, o CEDOC passou a centralizar a documentação dos conflitos no campo feita pela Pastoral da Terra. Um trabalho de 46 anos, iniciado na fundação da organização, em 1975. <q>Tudo era feito manualmente. No final da década de 80, começaram os primeiros programas e foi criada a base de dados na linguagem doors. No final dos anos 90, foi feito um último banco de dados chamado data CPT</q>, explica Flávio.
          </p>
          <p>
            Uma base histórica que, apesar de limitada por depender das notificações dos protestantes e notícias publicadas, oferece um rico olhar para a evolução dos protestos no campo.
          </p>
          <h2 class="content-subtitle my-10">
           Veja a evolução das pautas do campo, na última década
          </h2>
          <div is="script" class="flourish-embed" src="https://public.flourish.studio/resources/embed.js" data-src="story/956920"></div>
          <p>
            O destaque da década foram as duas edições das Marchas das Margaridas. Ambas tiveram como causas principais a luta contra a injustiça e violência contra a mulher, o direito à educação, trabalho, saúde e soberania alimentar.
          </p>
          <p>
            Margarida, o nome que encabeça a manifestação, foi uma defensora dos direitos humanos e a primeira mulher presidente do Sindicato dos Trabalhadores Rurais de Alagoa Grande, na Paraíba, até 1983, quando foi assassinada a mando de usineiros alagoanos. Segundo sua biografia, disponível no site da <a href="http://www.fundacaomargaridaalves.org.br/homenagens/" target="_blank" >Fundação</a> que também leva seu nome, seu filho e marido presenciaram tudo. Até hoje, ninguém foi condenado pelo crime.
          </p>
          <p>
            A partir dos anos 2000, a marcha das Margaridas passou a mobilizar milhares de mulheres contra a fome, a pobreza e a violência sexista, pautas que faziam parte do trabalho de Margarida. Na última década, as duas marchas levaram mais de 140 mil pessoas à Brasília, sendo as maiores do período.
          </p>
          <h2 class="content-subtitle my-10">
           Protestos virtuais e ações de solidariedade se destacam na pandemia
          </h2>
          <div is="script" class="flourish-embed" src="https://public.flourish.studio/resources/embed.js" data-src="visualisation/7016857"></div>
          <p>
            Nunca se registrou tantas ações de solidariedade como em 2020. Sem poder ir às ruas, a população rural trocou as marchas e romarias por tuitaços e doações. Antes disso, apenas 5 protestos tinham registrado ações de doação simbólicas. As ações de solidariedade tomaram forma de luta contra a fome, impulsionada pela pandemia e reivindicaram, em sua maioria, a soberania alimentar dos povos rurais, acesso a cestas básicas e saúde e se manifestaram contra a utilização de agrotóxicos na produção de alimentos.
          </p>
          <p>
            2020 também foi o ano com mais registros de protestos na última década, com cerca de 1,3 mil em todo país, junto a 2019, que registrou números semelhantes. O único ano que também superou os mil registros de protesto foi 2016, com 1 mil notificações. Foi também o primeiro ano em que houve protestos diretamente contra o Governo Federal. Pelo menos sete mobilizações no último ano de pandemia foram denominadas “contra o Governo Bolsonaro”.
          </p>
          <h2 class="content-subtitle my-10">
           O que inspira os protestos da população rural do seu Estado?
          </h2>
          <div is="script" class="flourish-embed" src="https://public.flourish.studio/resources/embed.js" data-src="visualisation/6887296"></div>
        </div>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  name: "WomanView",
};
</script>

<style >
.wnews-sheet {
  background-color: #f8f8f8;
}

.wnews-title {
  text-align: center;
  padding: 1rem;
  color: #2a2a2a;
  font: 1rem "Libre Baskerville", serif;
  background: #f8f50d;
  font-weight: bold;
  position: relative;
  top: -20%;
  z-index: 1;
}

.wnews-banner {
  width: 100%;
  height: 25rem;
  object-fit: cover;
  position: relative;
  z-index: 0;
}

.wnews-subtitle {
  text-align: center;
  color: #616161;
  font: 0.8rem "Open Sans", sans-serif;
}

.wnews-tags {
  margin-top: 5rem;
  color: #616161;
  font: 0.5rem "Open Sans", sans-serif;
}

.wnews-tags h3 {
  margin-bottom: 5rem;
}

.wnews-content {
  text-align: justify;
  color: #616161;
  font: 1rem "Open Sans", sans-serif;
  line-height: 1.6rem;
}

.content-subtitle {
  color: #616161;
  text-align: justify;
}

.font-special {
  color: #8e8e8e;
  font: 1.1rem "Libre Baskerville", serif;
  line-height: 1.6rem;
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
  .wnews-sheet {
    padding: 15rem;
    background-color: #f8f8f8;
  }

  .wnews-banner {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    object-position: top;
    position: relative;
    z-index: 0;
  }

  .wnews-title {
    padding: 1rem;
    color: #2a2a2a;
    font: 1rem "Libre Baskerville", serif;
    background: #f8f50d;
    font-weight: bold;
    position: relative;
    top: -20%;
    z-index: 1;
  }

  .wnews-subtitle {
    text-align: center;
    color: #616161;
    font: 0.8rem "Open Sans", sans-serif;
  }

  .wnews-tags {
    margin-top: 5rem;
    color: #616161;
    font: 1rem "Open Sans", sans-serif;
  }

  .wnews-tags h3 {
    margin-bottom: 5rem;
  }

  .wnews-content {
    text-align: justify;
    color: #616161;
    font: 1rem "Open Sans", sans-serif;
    line-height: 1.6rem;
  }

  .font-special {
    color: #8e8e8e;
    font: 1.3rem "Libre Baskerville", serif;
    line-height: 1.6rem;
  }

  .content-subtitle {
    color: #616161;
    text-align: center;
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