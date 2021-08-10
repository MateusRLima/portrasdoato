<template>
  <div>
    <header-component
      :isWhite="false"
      color="#C9C9C9"
      textColor="#2A2A2A"
      style="z-index: 2"
    ></header-component>
    <main class="mt-16">
      <img
        class="news-banner"
        src="https://storage.googleapis.com/news-storage-ea132.appspot.com/images/1628175900171.png"
      />
      <v-container class="pt-0 news-sheet">
        <v-row>
          <v-col>
            <div class="news-title">
              <h1>Trabalhadores no ponto, criminosos nas ruas</h1>
            </div>
            <div class="news-subtitle">
              <h2>
                Um olhar sobre registros da última década que mostram como o
                poder judiciário, a polícia e a mídia têm sido utilizados para
                ‘criminalizar’ quem protesta
              </h2>
            </div>
          </v-col>
          <v-col>
            <div class="news-tags">
              <p>Autores: Débora Oliveira</p>
            </div>
          </v-col>
        </v-row>
        <div class="news-content mt-10">
          <p>
            <q>Ninguém gosta de fazer protesto, fazemos porque precisamos</q>,
            diz o presidente do Sindicato dos Petroleiros em Pernambuco
            (SINDIPETRO-PE), Rogério Almeida, em meio a tosse. Mesmo
            diagnosticado com Covid-19, ele insistiu em falar conosco por meio
            de uma videochamada (maio, 2021). Ser ouvido, para Rogério, é uma
            questão muito forte. Seu papel no sindicato é dar voz aos interesses
            dos colegas de profissão. Ele precisa ter atenção da mídia, da
            polícia e do poder judiciário sempre que sua categoria realiza um
            protesto, quando a negociação com seus empregadores não chega em um
            acordo comum. Mas ao sair nas ruas, há medo do que vão falar.
            <q>A sociedade não entende nossos motivos</q>, explica.
            <q
              >O que se fala é que somos um bando de desocupados, arruaceiros,
              prejudicando a locomoção - essa é a criminalização.</q
            >
          </p>
        </div>
        <v-carousel
          cycle
          height="250"
          class="my-10"
          :show-arrows="false"
          hide-delimiter-background
          progress-color="#2A2A2A"
          light
        >
          <v-carousel-item>
            <v-card flat height="100%" color="#EBEBEB">
              <v-card-title> Entenda: </v-card-title>
              <v-card-text class="text-justify">
                <p class="carousel-text">
                  No Brasil, o DIREITO AO PROTESTO é garantido pela Constituição
                  por meio de três leis: a liberdade de expressão, a liberdade
                  de associação e a liberdade de reunião, a mais explícita de
                  todas. Por meio dela é garantido a todo brasileiro reunir-se
                  pacificamente, sem armas, em locais abertos ao público
                  independentemente de autorização, sendo apenas exigido um
                  aviso prévio à autoridade competente.<br /><br />
                  ONG Artigo 19
                </p>
              </v-card-text>
            </v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card flat height="100%" color="#EBEBEB">
              <v-card-title> O que é o protesto? </v-card-title>
              <v-card-text class="text-justify">
                <p class="carousel-text">
                  Ato coletivo em que pessoas se reúnem publicamente para
                  expressar uma opinião pública. Uma reação solitária ou em
                  grupo contra algo ou alguém. Ferramenta de apoio para que as
                  pessoas sejam ouvidas e também influenciam outras pessoas para
                  conseguir apoio e pedir por mudanças.
                </p>
              </v-card-text>
            </v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card flat height="100%" color="#EBEBEB">
              <v-card-title class="text-left">
                CRIMINALIZAR: considerar crime, definir ato como crime, tornar
                criminal.
              </v-card-title>
              <v-card-text class="text-justify">
                <p class="carousel-text">
                  Os crimes são definidos pelo Poder Legislativo. Depois,
                  aplicados pelas instituições de controle social: a Polícia, o
                  Ministério Público, e o Poder Judiciário, Na atuação desses
                  atores, que elegem quando, como e contra quem agir, se
                  materializa a criminalização de grupos sociais marginalizados.
                  Um processo chamado pelo jurista argentino Eugenio Raúl
                  Zaffaroni de “seletividade”.
                </p>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <h2 class="content-subtitle my-10">A seletividade</h2>
        <v-card flat outlined color="#F8F50D">
          <v-card-text class="black--text text-center">
            <p>
              <q>
                A Justiça existe para permitir que aqueles que não têm voz
                possam ser ouvidos. Mas, hoje, está se tornando a ferramenta
                usada por essas pessoas poderosas para reprimir aqueles que não
                tem voz
              </q>
              <br />
              <br />
              Clément Voule, relator da ONU sobre Liberdade de Associação e
              Reunião Pacífica
            </p>
          </v-card-text>
        </v-card>
        <div class="news-content mt-10">
          <p>
            Cada vez mais leis estão sendo usadas para restringir o espaço que a
            sociedade civil tem para expressar seus direitos. Foi o que defendeu
            o então relator da ONU sobre Liberdade de Associação e Reunião
            Pacífica, Clément Voule, quando veio x ao Brasil no ano de 2018. Ao
            listar oito tendências mundiais na repressão às manifestações, a
            primeira citação de Voule foram as leis.
          </p>
          <p>
            No mesmo ano, a ONG Artigo 19 publicou um levantamento com mais de
            40 propostas legislativas (PL's) que surgiram no Congresso Nacional
            visando 'regulamentar' os protestos. Elas propõem dispositivos
            legais sem endereço específico, mas, alertam os pesquisadores da
            ONG, são mais um recurso passível de ser usado de forma arbitrária
            contra manifestantes pacíficos
          </p>
          <div
            is="script"
            class="flourish-embed flourish-hierarchy"
            src="https://public.flourish.studio/resources/embed.js"
            data-src="visualisation/6886506"
          ></div>
          <div
            is="script"
            class="flourish-embed flourish-hierarchy"
            src="https://public.flourish.studio/resources/embed.js"
            data-src="visualisation/6887003"
          ></div>
          <p class="mt-10">
            O Partido do Movimento Democrático Brasileiro (PMDB) foi o que mais
            propôs dispositivos considerados pela ONG como negativos para o
            direito de protesto no Brasil. Dentre as propostas da sigla, está um
            projeto que pretende vetar o uso de máscaras em manifestações, sob a
            justificativa de permitir aos policiais abordar pessoas que tentem
            esconder sua identificação.
          </p>
          <p>
            As máscaras, no entanto, são usadas por muitos manifestantes para se
            protegerem de substâncias tóxicas, como bombas de gás lacrimogêneo e
            fumaças. Nesse caso, o projeto poderia estar colocando mais pessoas
            em risco em situações de embate com a polícia nos protestos.
          </p>
          <p>
            A sigla que teve mais propostas avaliadas como positivas pela Artigo
            19 foi o PT (Partido dos Trabalhadores), tendo colocado em pauta o
            PL 7951/2014, que propunha anistia e anulação de condenações e ações
            penais contra pessoas e lideranças de movimentos sociais, sindicais
            e estudantis que tenham participado de greves, ocupações e
            manifestações.
          </p>
          <p>
            Segundo a ONG, o projeto seria um avanço contra a já crescente
            criminalização das manifestações e as pessoas que participam dela de
            forma legítima. Outro destaque é o PL 300/2013, proposta lançada no
            ano das Jornadas de Julho, que propunha limitar o uso de armas não
            letais pela polícia e incluir em toda tropa pelo menos uma pessoa
            especializada em mediação e negociação em manifestações. Esta foi
            arquivada em 2018, com o fim do mandato do senador Lindbergh Farias
            (PT-RJ), que a propôs.
          </p>
          <p>
            Isso aconteceu pois todo PL que não tem sua votação finalizada antes
            do término do mandato do propositor, é arquivado.
          </p>
          <p>
            Para entrar em vigor, as propostas passam por várias instâncias
            legislativas. De acordo com o
            <a
              target="_blank"
              href="https://www.camara.leg.br/entenda-o-processo-legislativo/"
              >site</a
            >
            da Câmara dos Deputados, após a apresentação, a proposta vai para
            uma das comissões existentes, depois, é despachada para a Comissão
            de Finanças e Tributação (CTF), se tiver impacto financeiro. Do
            contrário, ela vai para a Comissão de Constituição de Justiça e de
            Cidadania (CCJC). Se tudo ocorrer bem, segue para o Senado e depois
            para a sanção presidencial. Mas a lei só passa a estar em vigor
            depois de 45 dias da sua publicação no Diário Oficial. Esse tempo
            pode variar a depender da proposta.
          </p>
          <p>
            O processo não é nada linear, ou seja, uma proposta pode ir e voltar
            de uma casa várias vezes. Além disso, há outros caminhos possíveis,
            quando há divergências entre as comissões e a proposta é encaminhada
            ao Plenário da Câmara.
          </p>
          <p>
            Em todo caso, nenhum dos projetos catalogados pela Artigo 19
            conseguiu sair das casas legislativas e pelo menos nove foram
            arquivados (mas podem voltar a tramitar); os demais seguem
            aguardando o próximo passo.
          </p>
          <iframe
            class="my-10"
            title="Até onde chegaram os projetos de lei sobre protestos"
            aria-label="table"
            id="datawrapper-chart-CHLER"
            src="https://datawrapper.dwcdn.net/CHLER/1/"
            scrolling="no"
            frameborder="0"
            style="width: 0; min-width: 100% !important; border: none"
            height="653"
          >
          </iframe>
          <p>
            Enquanto as PLs caminhavam para chegar às ruas, os movimentos
            sociais respondiam às arbitrariedades já presentes nas manifestações
            da última década. Com cenários totalmente distintos, as cidades de
            Londrina e São Paulo encabeçaram a criação de Comitês Contra
            Repressão e Criminalização dos Movimentos Sociais. Um surgiu em
            2013, o outro, em 2019. Ambos pretendiam juntar um time de
            advogados, sindicatos, comunicadores, partidos políticos,
            associações, coletivos e qualquer entidade civil disposta a
            acobertar os manifestantes vitimados.
          </p>
          <p>
            Quando Evaristo Colmán, professor da Universidade Estadual de
            Londrina (UEL), passou a integrar o comitê londrino, ele já
            observava uma ofensiva do poder judiciário às greves de docentes. O
            professor conta que no início dos anos 2000, precisou se esconder
            para não ser preso, pois havia perseguição da Justiça Estadual
            contra os dirigentes da greve.
          </p>
          <p>
            Em 2015, quando lutaram contra as mudanças na Previdência estadual
            de servidores públicos do Paraná, sofreram excessiva repressão
            policial e investigação do Ministério Público (MP). Segundo notícias
            publicadas na época, mais de 200 pessoas saíram feridas das
            manifestações. “O MP, provocado pela Associação Comercial da cidade,
            instaurou procedimento investigatório para apurar o "crime" de
            recebermos salário estando parados”, relembra o professor,
            “questionaram Reitoria, Conselho Universitário… mas é natural que
            nas greves de docentes haja reposição do calendário”.
          </p>
          <p>
            Para o pesquisador e jornalista Murilo Pantoja, outro integrante do
            Comitê Contra a Repressão dos Movimentos Sociais de Londrina, o
            direito de greve das organizações sindicais estava sendo violado
            sistematicamente pela Justiça. “O sindicato deflagrava uma greve, a
            justiça então dizia ‘deflagre, mas deixe 70% do efetivo
            funcionando’. Uma greve com 30% dos funcionários parados não é
            greve”.
          </p>
          <p>
            Esta lógica é a mesma relatada pelo petroleiro Rogério Almeida. Ao
            relembrar a última tentativa da sua categoria de interromper
            atividades, ele não esconde sua indignação. “A Justiça pediu que
            mantivéssemos 90% dos trabalhadores e isso não é greve”, diz, “a
            greve é o único instrumento do trabalhador para forçar uma
            negociação com as empresas. Se a gente não causar incômodo, algo que
            cutuque os gestores, nunca teremos resultado”.
          </p>
          <p>
            Há anos, os petroleiros lutam contra a privatização de refinarias e
            fábricas da Petrobras. Atualmente, as maiores pautas da categoria
            são contra o aumento no preço do gás de cozinha e dos combustíveis,
            o medo de demissões em massa e a suspensão de direitos trabalhistas
            no curso do desmonte da Petrobras. “Essas questões não chegam à
            sociedade como um todo, só chega que somos um bando de desocupados,
            arruaceiros, prejudicando a locomoção”, lamenta Rogério.
          </p>
          <p>
            Nos últimos dois anos de pandemia (2020 - 2021), os petroleiros
            realizaram pelo menos cinco greves. Em 2021, o Tribunal Superior do
            Trabalho (TST) publicou uma
            <a
              target="_blank"
              href="http://aplicacao4.tst.jus.br/consultaProcessual/consultaTstNumUnica.do?consulta=Consultar&conscsjt=&numeroTst=1000376&digitoTst=17&anoTst=2018&orgaoTst=5&tribunalTst=00&varaTst=0000&submit=Consultar"
              >decisão</a
            >
            considerando abusiva uma das greves nacionais realizadas pela
            categoria em 2018. A justificativa do ministro Ives Gandra Martins
            era o caráter ‘político-partidário’ do ato. É um entendimento que
            vem atingindo várias outras tentativas de paralisação, desde que a
            categoria passou a se posicionar contra a privatização.
          </p>
          <v-carousel
            cycle
            height="250"
            class="my-10"
            :show-arrows="false"
            hide-delimiter-background
            progress-color="#2A2A2A"
            light
          >
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  Por que os trabalhadores fazem greve?
                </v-card-title>
                <v-card-text class="text-justify carousel-text">
                  <p class="carousel-text">
                    As Greves hoje são regulamentadas pela Lei 7783 de 1989,
                    conhecida como Lei da Greve. Segundo ela, os trabalhadores
                    têm direito a fazerem greves para defenderem seus direitos.
                    Frequentemente, as greves são deflagradas quando os
                    funcionários não conseguem chegar a um acordo com o
                    empregador.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title> O que são greves abusivas? </v-card-title>
                <v-card-text class="text-justify carousel-text">
                  <p class="carousel-text">
                    A greve é legítima quando seus motivos são relacionados a o
                    espectro do trabalho, ou seja, é por reajuste de salários,
                    contra quebra de contratos, contra demissões arbitrárias ou
                    qualquer outro tema que diz respeito à relação funcionário e
                    empregador. Quando o motivo não se relaciona com o trabalho,
                    as decisões judiciais sobre a greve não são atendidas, os
                    trabalhadores causam degradação ou extrapolam os
                    dispositivos da Lei da Greve, a Justiça a declara abusiva.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  Quantos % do efetivo deve funcionar em uma greve?
                </v-card-title>
                <v-card-text class="text-justify">
                  <p class="carousel-text">
                    Depende de cada caso. Segundo a Lei, em serviços essenciais,
                    metade dos trabalhadores devem estar ativos, mas isso varia
                    de acordo com o serviço. No caso dos ônibus, a Justiça
                    determina que 30% da frota continue rodando.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
          </v-carousel>
          <p>
            Os ministros contrários à decisão, no entanto, têm outro
            entendimento sobre a greve dos petroleiros. Segundo
            <a
              href="https://www.tst.jus.br/-/tst-considera-abusiva-greve-dos-petroleiros-de-2018"
              target="_blank"
              >nota</a
            >
            do TST, para o relator do caso, Mauricio Godinho Delgado, a
            preservação da condição estatal da Petrobras e a manutenção dos
            empregos pelos trabalhadores,
            <q>obviamente ameaçado pela possível privatização das empresas</q>,
            são
            <q
              >interesses abrangidos pelo direito fundamental de greve previsto
              na Constituição da República</q
            >.
          </p>
          <p>
            Sendo político ou não, o medo de demissões logo se tornou real para
            funcionários da Petrobras. Em 2020, outra greve foi declarada
            abusiva pelo ministro Ives Martins, desta vez, por
            <q
              >não cumprirem diversas determinações de outras liminares
              concedidas à empresa para garantir as atividades</q
            >, uma delas, a de preservar 90% do efetivo durante o ato nacional.
          </p>
          <p>
            A greve, que mobilizou 80% dos servidores da Petrobras, cerca de 14
            mil trabalhadores de todo o Brasil, foi contra a demissão de 1 mil
            funcionários da Fábrica de Fertilizantes Nitrogenados do Paraná
            (Fafen-PR), comprada da mineradora Vale em 2013 e descontinuada no
            último ano por “insustentabilidade econômica”. Segundo a Federação
            Única dos Petroleiros, foi a segunda maior mobilização da categoria
            na história, ficando atrás apenas da realizada em 1995.
          </p>
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1am2Ij7ZX8LU7aVKKDWH8W4Y4Ca7IoN3BEcUMvWPwasA&font=Default&lang=pt-br&initial_zoom=2&height=650"
            width="100%"
            height="650"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            frameborder="0"
          ></iframe>
          <p>
            Com as sanções autorizadas pela justiça em várias greves,
            trabalhadores já foram demitidos, suspensos ou tiveram cortes
            salariais. E seguem sofrendo punições em uma relação historicamente
            problemática com a direção da Petrobras. Alessandro Trindade,
            petroleiro que dirige o Sindicato no Norte Fluminense
            (Sindipetro-NF), foi um dos demitidos por justa causa na pandemia. A
            causa, segundo a empresa: Alessandro ajudou a organizar a ocupação
            de um terreno da estatal, denominada Campo dos Refugiados, que
            abriga cerca de 40 famílias em Itaguaí, município do Rio de Janeiro.
          </p>
          <p>
            A história repercutiu nos portais das centrais sindicais e é
            conhecida por petroleiros de todo Brasil. Rogério diz que o colega
            foi demitido injustamente quando encabeçou outra forma de protesto:
            a solidariedade. Alessandro criou o grupo “Petroleiros Solidários”
            para auxiliar famílias que não tinham o que comer durante a pandemia
            e foi ao Campo dos Refugiados com o objetivo de distribuir cestas
            básicas. A visita que lhe custou o emprego e lhe rendeu uma
            acusação.
          </p>
          <p>
            Indignada com a decisão, a FUP entrou com uma ação na Justiça do
            Trabalho contra a demissão de Alessandro e denunciaram o caso à
            Corte Interamericana de Direitos Humanos (IDH) e ao Conselho
            Nacional de Direitos Humanos (CNDH). Todos os processos seguem em
            tramitação. Segundo a organização, as despesas do petroleiro até que
            a resolução do caso estão sendo providas pela FUP.
          </p>
          <p>
            Em julho de 2021, cerca 1,5 mil moradores da ocupação foram
            retirados do terreno, em uma ação de reintegração de posse. A
            maioria sem lugar para ir.
          </p>
          <p>
            A luta por um teto também foi a razão que levou quatro lideranças do
            Movimento de Trabalhadores sem Terra (MST) para trás das grades em
            2019. Angélica dos Santos Lima, Sidney Ferreira Silva, Janice
            Ferreira Silva e Ednalva Silva Ferreira foram acusados de extorquir
            moradores de ocupações de prédios abandonados em São Paulo, cobrando
            taxas de manutenção abusivas para as famílias. Pouco mais de um mês
            depois, todos foram soltos.
          </p>
          <p>
            Para defendê-los, foi criado o Comitê Permanente Contra A
            Criminalização Dos Movimentos Sociais de São Paulo. Este anunciou
            nas ruas o início de suas atividades, com cartazes e faixas deixando
            claro que a luta pelo trabalho e condições de vida não pode ser
            outra coisa senão política.
          </p>
          <figure class="my-10">
            <img
              src="../assets/image1.jpg"
              alt="Manifestantes saíram em passeata pelo centro de São Paulo"
              style="width: 100%"
            />
            <figcaption>
              Manifestantes saíram em passeata pelo centro de São Paulo -
              Rodrigo Gomes | RBA
            </figcaption>
          </figure>
          <p>
            O objetivo do comitê era acudir estas lideranças em processos
            considerados por eles arbitrários e injustos, além de ajudar
            qualquer outro manifestante filiado ao movimento por moradia que
            necessitasse de respaldo jurídico.
          </p>
          <p>
            <q
              >A criminalização desses movimentos é uma forma comum de atuação
              do governo, de juízes e procuradores para reprimir a ação social.
              Por isso criamos o comitê, para dar apoio jurídico às lideranças
              ameaçadas, presas, para ouvir denúncias de manifestantes</q
            >, justifica Hugo Fanton, jornalista e representante do grupo.
            <q
              >Com a pandemia e a situação dos presos resolvida, tivemos que
              focar em outras demandas, como o ‘Despejo 0’</q
            >
            , completa.
          </p>
          <p>
            Ao que parece, os comitês renascem quando uma mobilização civil
            eclode, como foram as jornadas de julho ou o apoio aos líderes do
            MST que foram presos. Apesar disso, os representantes são unânimes
            em dizer que sofrer repressão não é um evento extraordinário, mas
            faz parte do dia a dia de quem protesta.
          </p>
          <h2 class="content-subtitle my-10">O discurso da maçã podre</h2>
          <v-card
            class="mb-10"
            flat
            outlined
            color="#F8F50D"
          >
            <v-card-text class="black--text text-center">
              <p>
                <q>
                  Gloriosa Polícia Civil / Em defesa de quem precisar / Gloriosa
                  Polícia Civil / Nossa Lei sabes honrar
                </q>
                <br />
                <br />
                Hino da Polícia Civil do Rio de Janeiro, <br />
                Composição: José Ribamar Serra e Silva - Sargento CBMERJ - RG
                00438
              </p>
            </v-card-text>
          </v-card>
          <p>
            Quando a repressão não vem por meio do mal uso da lei, ela é sentida
            no ato. No tiro de bala de borracha que deixou sequelas, no abuso
            dos dispositivos criminais, na força gratuita e injustificável da
            polícia.
          </p>
          <p>
            Se a situação sai do controle, o povo cobra explicações e a mídia
            repercute, a fórmula para contornar o problema já vem pronta:
            utiliza-se o discurso da maçã podre nas notas oficiais. Ao menos, é
            o que concluiu o ex-policial militar e doutor em Psicologia da
            Universidade de São Paulo (USP), Adilson Paes de Souza, após quase
            10 anos de estudo sobre violência policial.
          </p>
          <p>
            A principal pesquisa de Adilson busca entender o que leva um
            policial a desconsiderar a humanidade de um manifestante e atacá-lo
            de forma gratuita? Ele ainda não tem uma resposta.
          </p>
          <p>
            O que já descobriu até aqui é o caráter primordialmente mental da
            violência. Segundo sua pesquisa, a força não letal (armas de
            borrachas, cassetetes e outros instrumentos comuns em protestos)
            passa a virar letal quando a mentalidade do policial está
            ‘programada’ para ver o manifestante como o inimigo. Sendo assim,
            ele deve ser repreendido, dizimado.
            <q
              >Combater esse inimigo da nação é o que motiva e faz com que ele
              desconsidere os direitos e garantias individuais da outra pessoa.
              Deixa de vê-la como uma pessoa humana e a trata da pior maneira
              possível. Quando algo é visto como inimigo, o aparato vai se
              voltar para guerrear e eliminar ferozmente o inimigo</q
            >, explica o pesquisador.
          </p>
          <p>
            Em protestos em que o manifestante não é visto como opositor da
            nação e, consequentemente, da polícia, a situação naturalmente se
            inverte. Nesses casos, a instituição cumpre com o papel democrático
            que a criou: garantir o livre exercício de pensamento e opinião.
          </p>
          <p>
            A psicologia das massas, teoria base dos estudos de Adilson, explica
            como essa dinâmica é possível em instituições como a polícia.
            <q
              >Não é apenas sobre a singularidade do policial agindo de
              determinada maneira, mas também existe um ideal processado pelo
              grupo [a polícia como instituição]. O inimigo é escolhido pelo
              grupo, o policial, então, deve aderir aos valores processados
              pelos seus iguais e reproduz o modelo ou ele representa um perigo
              para o grupo</q
            >, argumenta.
          </p>
          <p>
            Desde 2013, este problema tem sido alvo de discussões na Câmara dos
            Deputados, impulsionado pelos sucessivos atos de violações dos
            direitos humanos nas Jornadas de Julho. Na época, a Comissão
            Interamericana de Direitos Humanos (CIDH) juntou-se a vários órgãos
            internacionais, manifestando-se contra detenções e agressões a
            manifestantes e jornalistas nos protestos que tomaram o país.
          </p>
          <p>
            Já no ano seguinte, uma série de ONGs e organizações brasileiras e
            estrangeiras apresentaram um relatório à CIDH sobre
            <a
              href="http://www.global.org.br/wp-content/uploads/2020/09/Viola%C3%A7%C3%B5es-de-Direitos-Humanos-em-protestos-no-Brasil.pdf"
              target="_blank"
              >Violações de Direitos Humanos em protestos no Brasil</a
            >. Além de denunciar várias violações praticadas em terras
            brasileiras a parâmetros internacionais de como a Justiça e a
            polícia deveriam proceder em caso de abuso da liberdade de expressão
            em protestos, o documento elucidou a discussão que se acendeu na
            época sobre a desmilitarização da Polícia Militar. Isto porque é ela
            a quem compete a maioria dos acompanhamentos de protesto e
            consequentemente, o alvo das denúncias.
          </p>
          <p>
            Em todo país, pessoas e até agentes policiais pediram o fim da PM.
          </p>
          <p>
            No relatório da CIDH, a questão do manifestante como inimigo da
            polícia é citada, juntando-os a jovens, negros e favelados,
            historicamente a parcela da população que mais morre nas mãos da
            polícia:
            <q
              >A corporação militar, por excelência, adota uma lógica bélica e
              que pressupõe a existência de um inimigo</q
            >, diz um trecho do documento de mais de 150 páginas.
          </p>
          <p>
            Mas, para o pesquisador e ex-PM, acabar com a polícia militar está
            longe de representar uma solução.
            <q
              >Dentro de um estado democrático de direito, a polícia está lá
              para assegurar que os direitos sejam fluidos para garantir a
              manifestação contra quem quer que seja e prender aqueles que vão
              lá para causar tumulto</q
            >, argumenta. Em casos de violência, completa,
            <q
              >é preciso descobrir quem deu a ordem. Tudo depende da ordem e das
              normas, existem normas para o uso da munição de borracha, normas
              para dispersar uma multidão</q
            >.
          </p>
          <p>
            Quando se deu conta, Adilson percebeu que não existia uma maçã podre
            na polícia, mas várias delas em profusão. O problema está no
            sistema.
            <q
              >O discurso se tratava apenas de uma maçã podre, um caso
              individual, eu percebi que no dia a dia não era assim, havia uma
              concordância quando não era explícita, sobre o comportamento
              abusivo dos policiais</q
            >, lembra.
          </p>
          <h2 class="content-subtitle my-10">
            Morreu na contramão, atrapalhando o tráfego
          </h2>
          <v-card flat class="my-10">
            <v-card-text>
              <v-container>
                <v-row class="manchete" >
                  <img class="content-manchete img-fluid"  src="../assets/manchete/1.png">
                  <img class="content-manchete1 img-fluid" src="../assets/manchete/2.png">
                  <img class="content-manchete img-fluid"  src="../assets/manchete/3.jpg">
                  <img class="content-manchete1 img-fluid"  src="../assets/manchete/4.jpg">
                  <img class="content-manchete img-fluid"  src="../assets/manchete/5.jpg">
                  <img class="content-manchete1 img-fluid"  src="../assets/manchete/6.png">
                  <img class="content-manchete img-fluid"  src="../assets/manchete/7.jpg">
                  <img class="content-manchete1 img-fluid"  src="../assets/manchete/8.png">
                  <img class="content-manchete img-fluid"  src="../assets/manchete/9.png">
                  <img class="content-manchete1 img-fluid" src="../assets/manchete/10.png">
                  <img class="content-manchete img-fluid" src="../assets/manchete/11.png">
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <p>
            As manchetes acima foram colhidas de capas de jornais, trechos de
            reportagens e leads (o primeiro e mais importante parágrafos das
            matérias no jornalismo). Elas têm em comum uma escolha editorial: a
            cobertura da ação do protesto.
          </p>
          <p>
            A ação do protesto, mais uma vez, é a variável comum dessas
            notícias. Elas olham para o que aconteceu, o que parou, quem se
            prejudicou, quem está reclamando disso, quando começou, que horas
            vai terminar.
          </p>
          <p>Que horas vão liberar o trânsito?</p>
          <p>
            Enquanto tentam responder a estas perguntas, os jornalistas esquecem
            de olhar para as razões que motivaram tantas pessoas ousarem
            atrapalhar o fluxo da cidade.
          </p>
          <p>
            Isto, segundo a professora e pesquisadora em Comunicação e Semiótica
            Denise Paiero, é um formato de narrativa sobre protestos banalizado
            na mídia. Quando os atos que rompem com o curso das cidades recebem
            mais destaques nos grandes veículos de comunicação brasileiros pelos
            problemas que causaram do que pelo motivo do protesto em si. Em seu
            livro “Atos que Viraram Fatos - O olhar do jornalismo e da história
            sobre os protestos de 2013 a 2016” ela analisa mais de dez anos de
            cobertura do jornalismo em protestos.
          </p>
          <p>
            <q
              >É uma falha, você não ouve o lado que deveria também estar sendo
              ouvido, você pode falar do trânsito, das consequências... mas é
              importante você tentar entender o que aquelas pessoas estão
              querendo</q
            >, defende Denise.
          </p>
          <p>
            Junto com a professora Rosana Schwartz, ambas docentes na
            Universidade Presbiteriana Mackenzie, Denise olhou atentamente para
            as escolhas de imagens utilizadas pelos jornais, os títulos e os
            recortes escolhidos para noticiar pequenos protestos que sempre
            irrompem no destaque para a ação do que para as reivindicações dos
            manifestantes. Diferentemente das grandes mobilizações nacionais,
            esses atos não são pauta obrigatória nos veículos, por isso, o foco
            da cobertura será em algo ‘noticiável’.
          </p>
          <p>
            <q
              >O protesto é colocado em terceiro plano. Primeiro, fala-se do
              caos que desequilibrou determinado local, em seguida, enfocam-se
              as consequências para a ordem da vida das pessoas, finalmente,
              entrevista-se pessoas comuns sobre os efeitos do protesto para a
              sua vida</q
            >, escreveu Denise em um trecho de sua pesquisa.
          </p>
          <p>
            É assim, no conjunto das palavras, escolhas e formatos editoriais
            que a mídia acaba criminalizando ou não um movimento social e seus
            protestos. <q>São coisas sutis e ao mesmo tempo não são</q>, explica
            a professora. Ela se refere ao efeito histórico das notícias. Com o
            passar dos anos, passam a criar um imaginário sobre os
            manifestantes, um estereótipo, por vezes negativo, que deslegitima
            qualquer ato que venha a ser ligado a eles.
          </p>
          <p>
            Seu interesse pelo tema dos protestos começou quando, pelos anos
            1990, conheceu um acampamento do Movimento dos Trabalhadores Sem
            Terra (MST), o maior de São Paulo.
          </p>
          <p>
            <q
              >Eu fui fazer uma cobertura para o jornal da faculdade. Depois,
              entendi como se dava esses movimentos e fiz um livro reportagem
              com meu colega, foi até publicado. E aí eu não parei de pesquisar
              isso. No meu mestrado, primeiro pesquisei a cobertura e os
              elementos da manifestação. Depois, acabei percebendo que se tinha
              uma tendência a criminalizar os protestos, em muitos momentos,
              havia uma relação muito próxima quando se falava de um
              manifestante e um terrorista, então depois, no meu doutorado, eu
              acabei falando de jornalismo e terrorismo</q
            >.
          </p>
          <h2 class="content-subtitle my-10">Terroristas, vândalos</h2>
          <p>
            Segundo a pesquisadora, o MST é um dos movimentos sociais mais
            criminalizados atualmente. <q></q> "A gente percebe movimentos em
            que a imprensa os coloca como ‘terroristas’. Quando convém, ela se
            utiliza disso, “esses terroristas, esses vândalos”, explica Denise.
          </p>
          <p>
            Ao buscar por “criminalização”, “mídia” e “mst” no diretório de
            pesquisas acadêmicas do Google, mais de 2,5 mil estudos se debruçam
            sobre como a imprensa brasileira atua no sentido de reforçar
            estereótipos negativos sobre os movimentos de luta pela terra.
          </p>
          <p>
            <a
              href="https://www.brazilianjournals.com/index.php/BRJD/article/view/13284/11162"
              target="_blank"
              >Uma deles</a
            >
            foi publicada em plena pandemia, pela pesquisadora da Universidade
            Federal do Paraná Francys Nogueira, que comparou a cobertura de
            jornais nacionais sobre o MST de 1950 a 1985 com as dos dias atuais.
            Segundo a pesquisadora, a cobertura negativa, reforçando a ideia de
            um movimento não social, mas criminoso, ainda persiste. Essa
            construção, argumenta, é focada na manutenção dos interesses de quem
            tem mais capital.
          </p>
          <p>
            Para Denise, é preciso olhar para a visão editorial do veículo e os
            interesses do jornal para identificar que tipo de cobertura sobre os
            movimentos de luta pela terra se irá consumir.
          </p>
          <p>
            <q
              >Todo veículo de comunicação é movido por interesses ideológicos,
              não podemos perder isso de vista</q
            >, explica.
            <q
              >Um protesto que caiba dentro da visão editorial do veículo vai
              ter mais destaque do que aquele que está contra o que o veículo
              entende como correto</q
            >, e completa, <q>depende do momento e depende da pauta</q>.
          </p>
          <p>
            Reféns dos critérios de noticiabilidade, os manifestantes dependem
            dos momentos em que os fatos se impõem, quando mesmo os mais
            contrários veículos não conseguem ignorar a desumanização da sua
            luta.
            <q
              >Isto aconteceu no Massacre dos Carajás, o MST conseguiu aparecer
              na imprensa de forma positiva. Eles humanizaram os sem terra;
              foram tentar entender quem eram aquelas pessoas</q
            >.
          </p>
          <p>
            Para também serem ouvidos e entendidos, os movimentos sindicais
            passaram a investir mais em comunicação para o público externo.
            <q
              >Na greve [dos petroleiros] em fevereiro, só conseguimos sair nos
              veículos nacionais depois do sétimo dia de greve, já tinha tanta
              coisa acontecendo… nada era registrado. Ainda divulgaram como se
              fosse uma questão puramente corporativa, tentando nos jogar contra
              a sociedade</q
            >, lamenta o diretor geral da FUP, Deyvid Bacelar.
            <q
              >Contratamos uma assessoria para identificar dentro dos veículos
              pessoas que podem dar a notícia de forma mais correta e
              imparcial</q
            >.
          </p>
          <p>
            A medida já promoveu avanços para a categoria, comemora Deyvid.
            <q
              >Aprendemos e, hoje, a FUP consegue falar em vários veículos de
              forma mais coerente</q
            >.
          </p>
          <p>
            Vitória. Conseguir comunicar suas demandas, para Denise, é a grande
            conquista dos trabalhadores.
            <q
              >No fundo, é esse o grande objetivo de um protesto. Conseguir
              manifestar seus problemas, trazer a tona, e ao mesmo tempo atrair
              o olhar das pessoas para conseguir a simpatia delas</q
            >.
          </p>
          <v-card
            class="mb-10"
            flat
            outlined
            color="#F8F50D"
          >
            <v-card-title class="black--text"> Fontes: </v-card-title>
            <v-card-text class="black--text">
              <p>
                Organização das Nações Unidas, Conectas Direitos Humanos, Artigo
                19, Tribunal Superior do Trabalho (TST), Câmara dos Deputados,
                Federação Única dos Petroleiros (FUP), Senado Federal, Centro de
                Documentação do Movimento dos Trabalhadores Sem Terra e Comissão
                Interamericana de Direitos Humanos.
              </p>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </main>
  </div>
</template>

<script>

!(function () {
  "use strict";
  window.addEventListener("message", function (e) {
    if (void 0 !== e.data["datawrapper-height"]) {
      var t = document.querySelectorAll("iframe");
      for (var a in e.data["datawrapper-height"])
        for (var r = 0; r < t.length; r++) {
          if (t[r].contentWindow === e.source)
            t[r].style.height = e.data["datawrapper-height"][a] + "px";
        }
    }
  });
})();

import { apiCreateNews } from "../services";

export default {
  name: "ViolenceView",

  data: () => ({
    title: "",
    subtitle: "",
    image: null,
    author: "",
    isMainNews: false,
    format: ["Dados", "Perfil", "Reportagem", "Expresso"],
    theme: "",
    tags: {},
    selectedFormat: "",
    newsDescription: "",
    fonts: "",
  }),

  mounted(){
    const listImage = document.querySelectorAll(".manchete > .content-manchete")
    const separator = Math.ceil(Math.random() * 7);
  
    listImage.forEach((item, i) => {
      console.log(item)
      if ((i + 1) % separator === 0) {
        item.classList.add('img-animation');
      }
    });
  },

  methods: {
    getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach((key) => formData.append(key, object[key]));
      return formData;
    },

    createNews() {
      this.tags.format = this.selectedFormat;
      this.tags.theme = this.theme;

      let data = new FormData();

      data.append("title", this.title);
      data.append("subtitle", this.subtitle);
      data.append("image", this.image);
      data.append("author", this.author);
      data.append("is_main_news", this.isMainNews);
      Object.keys(this.tags).forEach((key) => data.append(key, this.tags[key]));
      data.append("news", this.newsDescription);
      data.append("fonts", this.fonts);

      apiCreateNews(data).then((response) => {
        alert(response);
      });
    },
  },
};
</script>

<style lang="sass">

.news-sheet
  background-color: #f8f8f8

.news-title
  text-align: left
  padding: 1rem
  color: #2a2a2a
  font: 1rem "Libre Baskerville", serif
  background: #f8f50d
  font-weight: bold
  position: relative
  top: -20%
  z-index: 1

.news-banner
  width: 100%
  height: 25rem
  object-fit: cover
  position: relative
  z-index: 0

.news-subtitle
  text-align: justify
  color: #616161
  font: 0.8rem "Open Sans", sans-serif

.news-tags
  margin-top: 5rem
  color: #616161
  font: 1.2rem "Open Sans", sans-serif

  h3
    margin-bottom: 5rem

.news-content
  text-align: justify
  color: #616161
  font: 1rem "Open Sans", sans-serif

.content-subtitle
  color: #616161
  text-align: justify

.content-manchete
  max-width: 100%
  height: auto
  -webkit-animation: fade 5s infinite linear
  animation: fade 5s infinite linear

.content-manchete1
  max-width: 100%
  height: auto
  -webkit-animation: fade 5s 10s infinite linear
  animation: fade 5s 10s infinite linear 

@keyframes fade
  0%,
    100%
    opacity: 0

  50%
    opacity: 1

@media only screen and (min-width: 768px)
  .news-sheet
    padding: 15rem
    background-color: #f8f8f8

  .news-banner
    width: 100%
    height: 25rem
    object-fit: cover
    position: relative
    z-index: 0

  .news-title
    text-align: left
    padding: 1rem
    width: 30rem
    color: #2a2a2a
    font: 1rem "Libre Baskerville", serif
    background: #f8f50d
    font-weight: bold
    position: relative
    top: -20%
    z-index: 1

  .news-subtitle
    text-align: justify
    color: #616161
    font: 0.8rem "Open Sans", sans-serif

  .news-tags
    margin-top: 5rem
    color: #616161
    font: 1.2rem "Open Sans", sans-serif

    h3
      margin-bottom: 5rem

  .news-content
    text-align: justify
    color: #616161
    font: 1rem "Open Sans", sans-serif

  .content-subtitle
    color: #616161
    text-align: justify

  .carousel-text
    font-size: 1rem

  .content-manchete
    max-width: 100%
    height: auto
    -webkit-animation: fade 5s infinite linear
    animation: fade 5s infinite linear

  .content-manchete1
    max-width: 100%
    height: auto
    -webkit-animation: fade 5s 10s infinite linear
    animation: fade 5s 10s infinite linear

  @keyframes fade
    0%,
    100%
      opacity: 0

    50%
      opacity: 1

</style>
 
