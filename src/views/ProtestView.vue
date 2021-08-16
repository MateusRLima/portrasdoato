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
          <img class="pnews-banner" src="../assets/materia4.jpg" />
          <div style="position: absolute; top: 10px; color: grey; font-size: 0.8rem; left: 10px">Constituição Federal. Foto: Reprodução/Ricardo</div>
      </div>
      <v-container class="pt-0 pnews-sheet">
        <v-row>
          <v-col>
            <div class="pnews-title">
              <h1>Protesto: o que é permitido por lei?</h1>
            </div>
            <div class="pnews-subtitle">
              <h2>
                No mundo todo, organizações civis criaram manuais para
                manifestantes, que exploram os direitos e deveres de quem decide
                ir às ruas e trazem dicas de segurança
              </h2>
            </div>
          </v-col>
        </v-row>
        <div class="pnews-content mt-10">
          <p>
            O que posso fazer como manifestante? Quando posso ou não ser
            revistado? Um policial pode me prender ou agredir? O que devo levar
            para protestar em segurança? Essas são apenas algumas das perguntas
            de um manifestante de ‘primeira viagem’ e até mesmo dos já
            experientes.
          </p>
          <p>
            Pensando nisso, várias organizações da sociedade civil, ONGs e
            Órgãos Internacionais criaram manuais para pessoas que decidem ir às
            ruas. Analisamos mais de 15 destas cartilhas, dentre as disponíveis
            online e gratuitamente. Elas variam de tom, as leis expostas, como
            elas podem ser utilizadas em caso de abordagem policial, sugestões
            de formas de protestos e orientações sobre o que levar para a rua.
            Aquelas produzidas na pandemia não esquecem de apontar as medidas
            sanitárias que se deve tomar ao ir às ruas. A maioria são destinadas
            aos manifestantes no geral, outras abrangem um grupo específico,
            como jornalistas ou mulheres.
          </p>
          <p>
            Antes de tudo, deve-se ter em mente: protestar é um direito
            garantido desde 1988 pela Constituição Federal. Segundo o Artigo 5º,
            inciso XVI, todos podem se reunir pacificamente, sem armas, em
            locais abertos ao público. Por isso, em um protesto, a única arma do
            manifestante, cuja iminência de ter seus direitos violados o
            espreita a todo momento, é conhecer estes a fundo e estar preparado
            para registrar provas contra quem o reprime.
          </p>
          <h2 class="content-subtitle my-10">
            Quais os direitos de quem protesta?
          </h2>
          <p>
            Os principais direitos que aparecem nas cartilhas são: ser revistado
            (a) por policiais do mesmo sexo, o direito à livre manifestação,
            saber a identificação dos policiais que irão realizar a abordagem,
            filmar a ação policial, não ser algemado (a) se você não ofereceu
            resistência à prisão, entre outros.
          </p>
          <p>
            O coletivo Urucum, formado por produtores audiovisuais, criou o
            <a
              target="_blank"
              href="https://pt.calameo.com/read/003562786d3fb9498e998"
              >“Manual para pessoas manifestantes”</a
            >
            em 2014, um ano marcado por protestos contra a realização da Copa do
            Mundo de Futebol no Brasil. De olho em quem vai fazer a cobertura
            dos atos, o manual destaca as leis que nos garantem o direito de
            registrar os acontecimentos. Além disso, a cartilha do Urucum
            orienta que se tenha em mãos dois documentos de identificação e uma
            lista de contatos de emergência.
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
              <v-card-title>
                <v-col align="left" class="pa-0">
                  <p>Para não esquecer</p>
                  <v-divider style="background-color: #f8f50d"></v-divider>
                </v-col>
              </v-card-title>
              <v-card-text class="text-justify">
                <p class="carousel-text">
                  Visto que um policial é funcionário público, em exercício de
                  funções de interesse público, aplica-se o princípio da
                  transparência e afasta-se a argumentação de defesa da honra e
                  privacidade.
                </p>
                <p class="text-right" style="font-size: 0.8rem">
                  Art. 3º da Lei 4.898/65
                </p>
              </v-card-text>
            </v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card flat height="100%" color="#EBEBEB">
              <v-card-title>
                <v-col align="left" class="pa-0">
                  <p>Para não esquecer</p>
                  <v-divider style="background-color: #f8f50d"></v-divider>
                </v-col>
              </v-card-title>
              <v-card-text class="text-justify">
                <p class="carousel-text">
                  Filmar e fotografar é um direito garantido a todo cidadão
                  brasileiro ou residente no Brasil, em todo o território
                  nacional
                </p>
                <p class="text-right" style="font-size: 0.8rem">
                  Art. 5º, IV, VIII e IX e art. 220, §2º da CF
                </p>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <div class="pnews-content mt-10">
          <p>
            Mas é importante dizer: o protesto é um espaço social como qualquer
            outro, onde as dispositivos penais também podem ser aplicados no
            caso de descumprimento das leis como por exemplo: depredar, saquear
            ou roubar os locais das manifestações, tentar impedir, com o emprego
            de violência ou grave ameaça, o livre exercício de qualquer dos
            Poderes da União ou dos Estados e caluniar alguém falsamente. Esses
            são alguns crimes passíveis de pena e multas em protestos. Em
            estados específicos como São Paulo, Mato Grosso, Santa Catarina e
            Maranhão leis específicas foram criadas para a proibição do uso de
            máscaras que escondem a identidade do manifestante. Na constituição,
            fala-se que o direito do protesto é garantido, mas sendo vedado o
            anonimato.
          </p>
          <h2 class="content-subtitle my-10">
            A caminho do ato: como se preparar
          </h2>
          <p>
            Uma coisa as cartilhas têm em comum: há coisas que você não deve
            levar para um protesto. Isto porque alguns instrumentos podem ser
            considerados armas para realizar vandalismo e utilizados como
            pretexto para prisões arbitrárias.
          </p>
          <p>
            No manual
            <a
              href="https://artigo19.org/wp-content/uploads/2013/11/docmanifesta%c3%a7%c3%a3oartigo19.pdf"
              target="_blank"
              >“Proteção do Direito de Liberdade de Expressão durante
              Manifestações e Protestos”</a
            >, produzido pela ONG Artigo 19, recomenda-se vestir roupas
            confortáveis que não chamem muita atenção, levar dois documentos de
            identificação, uma identidade e carteira de motorista, por exemplo.
            Esses documentos devem estar guardados em lugares diferentes, para o
            caso de tomarem uma de suas identificações. Orienta-se levar,
            também, uma quantia mínima em dinheiro, uma lista com contatos de
            emergência, cartões de memória falsos ou estragados para serem
            entregues em casos de roubo, kit de primeiros socorros e água.
          </p>
          <p>
            Além disso, outras sugestões são: lenço para ser molhado (de
            preferência com vinagre) e usado para respirar caso haja gás
            lacrimogêneo e bombas de fumaça; e levar um limão, já que pode ser
            espremido para neutralizar produtos químicos irritantes.
          </p>
          <p>
            Caso participe de uma manifestação que pode se tornar violenta, a
            dica é proteger os olhos e a cabeça (um capacete de bicicleta ou de
            patinete funciona, já que não chamam muito a atenção); e levar
            alguma comida doce que dê energia rapidamente (refrigerante ou bala,
            por exemplo).
          </p>
          <p>
            Outros cuidados devem ser tomados no local do protesto, o
            manifestante precisa ficar atento às rotas de chegada e saída,
            localizar hospitais e lugares próximos que podem servir de ponto de
            refúgio.
          </p>
          <h2 class="content-subtitle my-10">Ninguém deve ficar só</h2>
          <p>
            Pensando em quem não teria condições de pagar um advogado em casos
            de abordagem policial, o
            <a
              href="https://pt.calameo.com/read/003562786d3fb9498e998"
              target="_blank"
              >Coletivo Urucum</a
            >
            recomenda que os manifestantes anotem o contato do advogado do
            projeto na lista de números de emergência. Em casos de prisões, se o
            manifestante for levado a delegacia, o Projeto na Rua dispõe de uma
            lista de profissionais para ajudá-lo no assessoramento do caso. Os
            números podem ser encontrados no
            <a
              href="https://pt.calameo.com/read/003562786d3fb9498e998"
              target="_blank"
              >fim da cartilha</a
            >.
          </p>
          <p>
            No caso de abordagens policiais, deve-se gravar tudo que possa
            comprovar a violação de direitos.
          </p>
          <p>
            A cartilha também alerta para a proteção de dados contidos no
            celular do manifestante, que só é obrigado a mostrar o conteúdo
            depois de uma solicitação do juiz, por isso, o alerta é para que o
            manifestante mantenha sempre o celular bloqueado para evitar que
            vídeos e fotos sejam apagados.
          </p>
          <h3
            class="mt-10 mb-5"
            style="font: 1.5rem Libre Baskerville, serif; font-weight: bold"
          >
            Para não esquecer
          </h3>
          <p class="font-special">
            § 1º Nenhuma lei conterá dispositivo que possa constituir embaraço à
            plena liberdade de informação jornalística em qualquer veículo de
            comunicação social, observado o disposto no art. 5º, IV, V, X, XIII
            e XIV.
          </p>
          <div
            style="
              width: 75px;
              height: 15px;
              background-color: #f8f50d;
              border-radius: 5px;
            "
            class="mb-10"
          ></div>
          <p>
            Andar em grupo é uma recomendação importante, uma ressalva é que
            esse grupo deve manter um padrão para identificação, como a cor da
            camisa ou um acessório específico. Se algo acontecer com você ou um
            manifestante do grupo que você está inserido, a dica é procurar um
            advogado ou advogada o mais rápido possível e disseminar as
            informações nas redes sociais para o máximo de pessoas.
          </p>
          <h2 class="content-subtitle my-10">
            O que o policial pode e não pode fazer?
          </h2>
          <p>
            Um policial não pode impedir um manifestante de filmar a sua
            abordagem, nem as viaturas e a sua identificação, visto que o mesmo
            é funcionário público, então o princípio da transparência é
            aplicado.
          </p>
          <p>
            Todo cidadão tem o direito de filmar o que quer em espaços públicos,
            principalmente momentos de interesse da sociedade que tem direitos à
            informação, com isso, as viaturas policiais, as identificações e as
            armas podem ser filmadas pelo manifestante.
          </p>
          <p>
            Um policial não pode mandar um manifestante apagar o vídeo de seu
            celular, essa prática pode ser considerada como censura e resulta em
            destruição de provas. Uma dica para isso é dizer que o vídeo está
            sendo transmitido ao vivo, isso pode ajudar a inibir uma conduta
            ilegal, orienta o
            <a
              href="https://artigo19.org/wp-content/uploads/2014/06/GUIA-WITNESS-R02-web.pdf"
              target="_blank"
              >Guia de como filmar a violência polical em protestos</a
            >, produzido pela Artigo 19.
          </p>
          <p>
            <a href="http://sdf" target="_blank"
              >>> Conheça a história de Dayvid Bacelar e Wandaick Costa, que
              sofreram tentativa de destruição de provas em uma greve</a
            >
          </p>
          <p>
            Seus artigos de uso pessoal como a câmera, o celular, cartão de
            memória, não podem ser confiscados pelo policial, esse ato é um
            crime contra a liberdade. Se isso acontecer, o manifestante pode
            pegar o nome e a identificação para fazer denúncias no Ministério
            Público do seu estado.
          </p>
          <p>
            As filmagens podem proteger contra a violência policial e ser uma
            importante testemunha para desmentir versões injustas e inocentar
            manifestantes de falsas acusações. O Manual da Artigo 19 ainda
            ensina as melhores formas de gravar, utilizar e o que deve ser
            filmado pelo manifestante.
          </p>
          <v-carousel
            cycle
            height="250"
            class="mt-10 mb-2"
            :show-arrows="false"
            hide-delimiter-background
            progress-color="#2A2A2A"
            light
          >
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  <v-col align="left" class="pa-0">
                    <p>Dica 1</p>
                    <v-divider style="background-color: #f8f50d"></v-divider>
                  </v-col>
                </v-card-title>
                <v-card-text class="text-justify carousel-text">
                  <p class="carousel-text">
                    Se de forma segura, for possível filmar o comandante da ação
                    e os policiais que estão dando ordens, pode ser uma
                    importante prova. Se atente ao fato de que comandantes
                    utilizam rádio-comunicadores e podem ser identificados pelas
                    patentes nas fardas, como estrelas e condecorações
                    militares.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  <v-col align="left" class="pa-0">
                    <p>Dica 2</p>
                    <v-divider style="background-color: #f8f50d"></v-divider>
                  </v-col>
                </v-card-title>
                <v-card-text class="text-justify carousel-text">
                  <p class="carousel-text">
                    Durante a filmagem de revistas abusivas e ilegais, filme a
                    abordagem policial do início ao fim, é bom atentar-se às
                    tentativas de incriminar manifestantes, plantando provas nas
                    bolsas dos envolvidos no protesto.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  <v-col align="left" class="pa-0">
                    <p>Dica 3</p>
                    <v-divider style="background-color: #f8f50d"></v-divider>
                  </v-col>
                </v-card-title>
                <v-card-text class="text-justify">
                  <p class="carousel-text">
                    Em casos de agressões realizadas por policiais, a filmagem
                    deve ser feita de forma que mostre o rosto e a identificação
                    nas fardas dos policiais. Em alguns casos, os policiais
                    fazem uma roda em volta do incidente para atrapalhar o
                    registro, é importante ter mais de um videografista para
                    fazer tomadas de cima. Se possível, as situações precisam
                    ser filmadas em vários ângulos.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  <v-col align="left" class="pa-0">
                    <p>Dica 4</p>
                    <v-divider style="background-color: #f8f50d"></v-divider>
                  </v-col>
                </v-card-title>
                <v-card-text class="text-justify">
                  <p class="carousel-text">
                    Nos casos de prisões de manifestantes conduzidos até a
                    viatura, o ideal é que a filmagem seja feita desde o momento
                    da abordagem até o veículo. Se for possível, é importante
                    filmar a identificação desses policiais e os números das
                    viaturas.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  <v-col align="left" class="pa-0">
                    <p>Dica 5</p>
                    <v-divider style="background-color: #f8f50d"></v-divider>
                  </v-col>
                </v-card-title>
                <v-card-text class="text-justify">
                  <p class="carousel-text">
                    Em segurança, se for necessário, grave depoimentos de
                    pessoas que testemunharam as ações ou narre objetivamente o
                    que está acontecendo, fale apenas o fato direto, evitando
                    dar opiniões.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card flat height="100%" color="#EBEBEB">
                <v-card-title>
                  <v-col align="left" class="pa-0">
                    <p>Dica 6</p>
                    <v-divider style="background-color: #f8f50d"></v-divider>
                  </v-col>
                </v-card-title>
                <v-card-text class="text-justify">
                  <p class="carousel-text">
                    Nunca desligue a câmera nem pare de gravar se estiver
                    filmando cenas importantes, esse tipo de vídeo pode ser
                    utilizado como prova jurídica, ele consegue registrar toda
                    ação sem os cortes, qualificando a função de registro real.
                  </p>
                </v-card-text>
              </v-card>
            </v-carousel-item>
          </v-carousel>
          <p class="text-right" style="font-size: 0.7rem">
            Legenda: Dicas gerais da cartilha produzida pela ONG Artigo 19, para
            o manifestante que deseja filmar e registrar protestos
          </p>
          <p>
            O
            <a
              href="https://artigo19.org/wp-content/uploads/2014/06/GUIA-WITNESS-R02-web.pdf"
              target="_blank"
              >guia completo</a
            >
            foi desenvolvido após consulta de advogados, ativistas e pesquisas
            próprias. Na cartilha eles detalham em que esses vídeos podem ser
            úteis e o que pode e não pode acontecer nessas filmagens. Os vídeos
            gravados nos protestos têm um propósito imenso: além de registrar o
            ato e divulgá-lo, podem servir como uma poderosa arma para denunciar
            a violência policial e acelerar processos de investigação em defesa
            do manifestante e responsabilizar os agentes estaduais sobre ações
            tomadas incorretamente.
          </p>
          <h2 class="content-subtitle my-10">A difícil tarefa de registrar</h2>
          <figure class="my-10">
            <img src="../assets/foto caio guatelli.jpg" width="100%" />
            <figcaption class="text-right" style="font-size: 0.8rem">
              Alex Silveira, logo após ser atingido por um tiro de bala de
              borracha. Foto: Reprodução/Caio Guatelli
            </figcaption>
          </figure>
          <p>
            Apesar de ser um direito, registrar um protesto é uma tarefa
            perigosa e desafiadora. Nos anos 2000, o jornalista Alex Silveira
            perdeu a visão do olho esquerdo ao ser atingido por uma bala de
            borracha enquanto cobria uma manifestação em maio de 2000. Em 2014,
            o Tribunal de Justiça de São Paulo condenou o fotógrafo por ter sido
            atingido por uma bala de borracha. A
            <a
              href="https://www.conjur.com.br/dl/fotografo-culpado-tiro-deixou-cego.pdf"
              target="_blank"
              >decisão</a
            >
            foi
            <a
              href="https://abraji.org.br/noticias/abraji-se-solidariza-com-fotografo-condenado-por-ser-vitima-de-bala-de-borracha"
              target="_blank"
              >repudiada</a
            >
            publicamente pela Associação Brasileira de Jornalismo Investigativo
            (Abraji). Apenas 20 anos depois, em 2020, Alex conseguiu na justiça
            o direito a indenização por causa do ocorrido.
          </p>
          <p class="text-center my-10" style="font-size: 1.5rem">***</p>
          <p>
            Um relatório produzido pela UNESCO em 2020, intitulado
            <a
              href="https://unesdoc.unesco.org/ark:/48223/pf0000374206_por"
              target="_blank"
              >Segurança de jornalistas em cobertura de protestos: preservação
              da liberdade de imprensa em tempos turbulentos</a
            >, relata o aumento do ataque a jornalistas que cobrem protestos,
            uma tendência que vem se alastrando em todo o mundo. De acordo com o
            relatório, o número de violações de liberdade de imprensa cometidas
            por forças policiais e de segurança durante protestos de rua é de
            125 casos de violência ou prisões de jornalistas em 65 países.
          </p>
          <p>
            O Secretário Geral da ONU, António Guterres, declarou estar
            “horrorizado com o número contínuo e crescente de ataques a
            jornalistas e trabalhadores da mídia em todo o mundo”. Ainda citou
            casos como o do jornalista mexicano Julio Valdiva que foi decapitado
            no norte do México, em 2020, de acordo com o tweet do jornal El
            mundo, o jornalista cobria um confronto entre policiais e supostos
            criminosos no município de Cosolapa, o corpo foi encontrado com
            sinais de tortura e decapitado. O México é um dos países mais
            perigosos para ser jornalista, de acordo com a Comissão de Direitos
            Humanos, desde 2000 o país conta com mais de cem profissionais
            assassinados.
          </p>
          <p>
            Para Guterres, a morte desses profissionais é mais um indicativo das
            péssimas e perigosas condições em que os jornalistas trabalham ao
            redor do mundo.
          </p>
          <p>
            No relatório da ONU, foi constatado que em 2015, jornalistas que
            cobriam 15 protestos no mundo todo foram impedidos de realizar seu
            trabalho por ações policiais ilegais e violentas, em 2020 esse
            número mais que dobrou para 32 de casos de profissionais que
            relataram trabalhar nessas condições. Nos últimos cinco anos, cerca
            de 10 jornalistas foram assassinados durante a cobertura de
            protestos, além disso, são mais de 500 ocorrências de casos isolados
            de violações de direitos nas manifestações.
          </p>
          <figure class="my-10">
            <img
              src="../assets/Foto_ Instagram foto jornalista daniel arroyo.jpg"
              width="100%"
              
            />
            <figcaption class="text-right" style="font-size: 0.8rem">
              Daniel ficou ferido na perna direita após ser atingido pela bala de borracha. Foto: Arquivo Pessoal/Daniel Arroyo
            </figcaption>
          </figure>
          <p>
            Em 2019, o fotojornalista Daniel Arroyo foi atingido no joelho por
            um disparo de tiro de borracha e precisou ser levado ao
            pronto-socorro. Quando questionou os policiais sobre essa ação, a
            resposta foi simplesmente “não podemos fazer nada”.
          </p>
          <p>
            Daniel cobria um protesto contra a tarifa de ônibus na cidade de São
            Paulo. Um ato marcado por intimidações e violência policial contra
            jornalistas. No local, bombas de efeito moral foram lançadas contra
            um grupo de jornalistas que cobriam o evento.
          </p>
          <p>
            O aumento dessa violência contra profissionais da imprensa nos
            últimos anos, tem preocupado o mundo todo, com isso, entidades e
            organizações pensando no bem estar e cuidado com esses profissionais
            formularam manuais e dicas de como um jornalista pode cobrir
            protestos de forma segura.
          </p>
          <p>
            Um dos manuais surgiu da própria Abraji, intitulado Manual de
            Segurança para a Cobertura de Protestos. A cartilha foi elaborada a
            partir da experiência de repórteres agredidos, presos e hostilizados
            em manifestações, em específico, os protestos que tomaram as ruas em
            junho de 2013. Nele são apresentadas as leis que asseguram o direito
            do jornalista e a preparação que deve ocorrer antes, durante e após
            a manifestação.
          </p>
          <p>
            A legislação é clara quanto às leis que asseguram ao profissional o
            direito de ir e vir e a liberdade de imprensa. A Resolução n° 6/2013
            da Secretaria de Direitos Humanos da Presidência da República no seu
            artigo 5° diz que: as atividades exercidas por repórteres,
            fotógrafos e demais profissionais de comunicação são essenciais para
            o efetivo respeito ao direito humano à liberdade de expressão, no
            contexto de manifestações e eventos públicos, bem como na cobertura
            da execução de mandados judiciais de manutenção e reintegração de
            posse.
          </p>
          <h3
            class="mt-10 mb-5"
            style="font: 1.5rem Libre Baskerville, serif; font-weight: bold"
          >
            Para não esquecer
          </h3>
          <p class="font-special">
            Os repórteres, fotógrafos e demais profissionais de comunicação
            devem gozar de especial proteção no exercício de sua profissão,
            sendo vedado qualquer óbice à sua atuação, em especial mediante uso
            da força.
          </p>
          <div
            style="
              width: 75px;
              height: 15px;
              background-color: #f8f50d;
              border-radius: 5px;
            "
            class="mb-10"
          ></div>
          <p>
            Além da legislação, as dicas para jornalistas que vão cobrir
            protestos são:
          </p>
          <h2 class="content-subtitle my-10">A analisar o risco</h2>
          <p>
            De acordo com o manual da Associação Brasileira de Jornalismo
            Investigativo (ABRAJI), o profissional deve se preparar com
            antecipação, conhecer o local, planejar a cobertura que pretende
            realizar, manter o contato com a sala de redação.
          </p>
          <p>
            Durante a manifestação as ações e o posicionamento do profissional
            precisam ser atentas a todo tipo de mudança e situação, o
            recomendado também é evitar tomar partido de qualquer grupo
            envolvido.
          </p>
          <p>
            O manual da
            <a
              href="https://ijnet.org/pt-br/story/dicas-para-se-manter-seguro-em-cobertura-de-protestos-violentos"
              target="_blank"
              >Rede internacional de Jornalistas (IJNET)</a
            >, destaca essa organização antecipada, reforçando as coordenadas
            para cada jornalista da equipe e planejar ao máximo como essa
            cobertura será feita, além disso, procurar rotas de fuga e locais
            onde o profissional pode se proteger, deve ser incluído na lista de
            procedimentos.
          </p>
          <h2 class="content-subtitle my-10">Manter a calma</h2>
          <p>
            Em uma das sessões do manual da Abraji, os alertas para casos de
            agressões e detenções passeiam entre ter paciência, gravar
            conversas, exigir a presença de um delegado e se for colocado em uma
            viatura, gritar seu nome e do veículo de comunicação que trabalha
            para que a informação da sua detenção circule. Complementando com o
            manual da IJNET, é necessário saber quem são os agentes hostis que
            podem agir com mais violência, identificar suas motivações com o
            máximo de detalhes possíveis é crucial.
          </p>
          <h2 class="content-subtitle my-10">Levar proteção</h2>
          <p>
            Quanto às roupas e equipamentos de primeiros socorros, os
            jornalistas devem usar roupas confortáveis e que cubram o corpo,
            além de, se possível, usar coletes e capacetes com a identificação
            da imprensa. Um kit de primeiros socorros também deve fazer parte do
            equipamento do profissional, além disso o manual faz um alerta sobre
            o que fazer em situações específicas como gás lacrimogêneo, balas de
            borracha e spray de pimenta. Nessas situações o indicado é não se
            aproximar desses locais, caso seja atingido, para amenizar os
            efeitos é necessário assoar o nariz, cuspir e virar a cabeça
            lateralmente lavando com água abundante os olhos, um de cada vez,
            deixando escorrer para fora.
          </p>
        </div>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProtestView",
};
</script>

<style >
.pnews-sheet {
  background-color: #f8f8f8;
}

.pnews-title {
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

.pnews-banner {
  width: 100%;
  height: 25rem;
  object-fit: cover;
  position: relative;
  z-index: 0;
}

.pnews-subtitle {
  text-align: center;
  color: #616161;
  font: 0.8rem "Open Sans", sans-serif;
}

.pnews-tags {
  margin-top: 5rem;
  color: #616161;
  font: 0.5rem "Open Sans", sans-serif;
}

.pnews-tags h3 {
  margin-bottom: 5rem;
}

.pnews-content {
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
  .pnews-sheet {
    padding: 15rem;
    background-color: #f8f8f8;
  }

  .pnews-banner {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  .pnews-title {
    padding: 1rem;
    color: #2a2a2a;
    font: 1rem "Libre Baskerville", serif;
    background: #f8f50d;
    font-weight: bold;
    position: relative;
    top: -20%;
    z-index: 1;
  }

  .pnews-subtitle {
    text-align: center;
    color: #616161;
    font: 0.8rem "Open Sans", sans-serif;
  }

  .pnews-tags {
    margin-top: 5rem;
    color: #616161;
    font: 1rem "Open Sans", sans-serif;
  }

  .pnews-tags h3 {
    margin-bottom: 5rem;
  }

  .pnews-content {
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