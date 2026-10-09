export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  region: 'asia' | 'europe' | 'africa' | 'americas';
  regionLabel: string;
  duration: string;
  bestSeason: string;
  image: string;
  priceFrom: string;
  summary: string;
  highlights: string[];
  daysOverview: {
    dayRange: string;
    title: string;
    description: string;
  }[];
  included: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'kyoto-alpes',
    title: 'Kyoto, Takayama & Alpes Japoneses',
    subtitle: 'Imersão em tradições milenares, vilarejos preservados e alta gastronomia Kaiseki',
    region: 'asia',
    regionLabel: 'Ásia & Oriente',
    duration: '12 dias / 11 noites',
    bestSeason: 'Março a Maio & Outubro a Novembro',
    image: '/src/assets/images/destination_kyoto_1791503802760.jpg',
    priceFrom: 'US$ 5.400 / pessoa',
    summary: 'Uma jornada intimista pelas capitais culturais do Japão, combinando estadias em ryokans históricos com águas termais (onsen), cerimônias de chá privadas e passeios pelos bosques de bambu ao amanhecer.',
    highlights: [
      'Estadia em Ryokan tradicional com jantar kaiseki privativo em Takayama',
      'Acesso antecipado ao templo Fushimi Inari e jardins zen com mestre historiador',
      'Passeio gastronômico pelo mercado Nishiki com chef local',
      'Bilhetes de trem-bala Shinkansen em primeira classe com transporte de bagagem'
    ],
    daysOverview: [
      {
        dayRange: 'Dias 01 - 04',
        title: 'Tóquio Contemporâneo & Bairros Históricos',
        description: 'Chegada, recepção privativa no aeroporto e exploração de Asakusa, Ginza e gastronomia refinada.'
      },
      {
        dayRange: 'Dias 05 - 07',
        title: 'Alpes Japoneses & Vilarejos de Shirakawa-go',
        description: 'Imersão em Takayama, casas com telhados gassho-zukuri patrimônio UNESCO e banhos onsen termais.'
      },
      {
        dayRange: 'Dias 08 - 11',
        title: 'Kyoto Antiga & Templos Silenciosos',
        description: 'Jardins de pedra, cerimônia do chá exclusiva, caminhada por Gion e santuários milenares.'
      },
      {
        dayRange: 'Dia 12',
        title: 'Retorno com Assistência',
        description: 'Transfer privativo para o aeroporto internacional de Kansai (Osaka) e embarque de volta.'
      }
    ],
    included: [
      'Hospedagem em hotéis boutique 5 estrelas e ryokan autêntico',
      'Todos os transfers privativos em veículos executivos',
      'Guia bilíngue privativo credenciado em todas as excursões',
      'Café da manhã diário e jantares de experiência gastronômica selecionados',
      'Seguro viagem internacional com cobertura integral'
    ]
  },
  {
    id: 'dolomitas-italia',
    title: 'Dolomitas & Lagos Esmeralda',
    subtitle: 'Travessias alpinas privativas, refúgios de alta gastronomia e vales do norte italiano',
    region: 'europe',
    regionLabel: 'Europa Alpina',
    duration: '08 dias / 07 noites',
    bestSeason: 'Junho a Outubro',
    image: '/src/assets/images/destination_dolomites_1791503813147.jpg',
    priceFrom: '€ 4.250 / pessoa',
    summary: 'Descubra a grandiosidade dos picos de calcário mais famosos do mundo. Trilhas personalizadas pelo Lago di Braies e Tre Cime di Lavaredo com guias de montanha e harmonização de vinhos do Alto Ádige.',
    highlights: [
      'Passeios de barco em madeira ao nascer do sol no Lago di Braies antes da abertura pública',
      'Almoços em refúgios gastronômicos com estrelas Michelin nas altitudes de Cortina',
      'Guia de montanha alpino IFMGA exclusivo para caminhadas no ritmo do grupo',
      'Condução em veículo elétrico premium de Cortina d’Ampezzo a Val Gardena'
    ],
    daysOverview: [
      {
        dayRange: 'Dias 01 - 02',
        title: 'Veneza & Chegada aos Pés das Montanhas',
        description: 'Boas-vindas em Veneza com translado panorâmico até o hotel de charme em Cortina d’Ampezzo.'
      },
      {
        dayRange: 'Dias 03 - 05',
        title: 'Tre Cime, Lago di Braies & Vales Glaciais',
        description: 'Caminhadas contemplativas adaptadas, piqueniques alpinos artesanais e pôr do sol nas falésias rosadas (Enrosadira).'
      },
      {
        dayRange: 'Dias 06 - 07',
        title: 'Val Gardena & Tradições Ladinas',
        description: 'Degustação de vinhos brancos de montanha, spa alpino com vista para as geleiras e jantar de celebração.'
      },
      {
        dayRange: 'Dia 08',
        title: 'Despedida Alpina',
        description: 'Translado para o aeroporto de Verona ou Milão.'
      }
    ],
    included: [
      '7 noites em chalés e resorts de montanha Relais & Châteaux',
      'Passeios guiados com equipamento de montanha incluso',
      'Todos os passes de teleféricos e acessos a reservas naturais',
      'Degustação de queijos de altitude e vinhos regionais do Trentino',
      'Concierge local para reservas em restaurantes e spas'
    ]
  },
  {
    id: 'serengeti-tanzania',
    title: 'Grande Migração & Cratera de Ngorongoro',
    subtitle: 'Safári privativo de conservação, acampamentos móveis de luxo e sobrevoo de balão',
    region: 'africa',
    regionLabel: 'África Selvagem',
    duration: '10 dias / 09 noites',
    bestSeason: 'Julho a Outubro & Janeiro a Março',
    image: '/src/assets/images/destination_safari_serengeti_1791503822727.jpg',
    priceFrom: 'US$ 7.900 / pessoa',
    summary: 'Presencie o maior espetáculo da vida selvagem na Terra. Acompanhe a travessia de milhões de gnus e zebras nas savanas do Serengeti com jipes 4x4 privativos, rangers biólogos e acampamentos sustentáveis.',
    highlights: [
      'Veículo 4x4 aberto e ranger privativo dedicado durante toda a expedição',
      'Voo de balão ao amanhecer sobre o Serengeti seguido de brinde com champanhe na savana',
      'Visita guiada e descida à Cratera de Ngorongoro com observação de rinocerontes negros',
      'Doação de conservação e apoio direto às comunidades Maasai locais'
    ],
    daysOverview: [
      {
        dayRange: 'Dias 01 - 02',
        title: 'Arusha & Parque Nacional de Tarangire',
        description: 'Chegada no Aeroporto do Kilimanjaro e primeiro contato com as manadas de elefantes e baobás.'
      },
      {
        dayRange: 'Dias 03 - 04',
        title: 'Caldeira de Ngorongoro',
        description: 'Safári nas profundezas do maior vulcão inativo do mundo, um verdadeiro santuário ecológico.'
      },
      {
        dayRange: 'Dias 05 - 08',
        title: 'Serengeti Profundo & Rota da Migração',
        description: 'Safáris matinais e vespertinos no coração do Serengeti com hospedagem em tendas de luxo com energia solar.'
      },
      {
        dayRange: 'Dias 09 - 10',
        title: 'Voo Cênico & Retorno',
        description: 'Voo em aeronave executiva sobre as planícies de volta a Arusha para conexão internacional.'
      }
    ],
    included: [
      'Safáris 100% privativos com milhas ilimitadas e ranger ornitólogo/biólogo',
      'Todas as taxas governamentais dos Parques Nacionais da Tanzânia',
      'Pensão completa com todas as refeições e vinhos finos nos lodges',
      'Voo interno Serengeti - Arusha em aeronave executiva',
      'Assistência Flying Doctors para emergências médicas'
    ]
  },
  {
    id: 'acores-portugal',
    title: 'Açores & Santuário Vulcânico Atlântico',
    subtitle: 'Caldeiras verdejantes, piscinas termais oceânicas e observação de baleias nas ilhas portuguesas',
    region: 'europe',
    regionLabel: 'Europa Atlântica',
    duration: '07 dias / 06 noites',
    bestSeason: 'Maio a Outubro',
    image: '/src/assets/images/hero_travel_agency_1791503794135.jpg',
    priceFrom: '€ 2.850 / pessoa',
    summary: 'Um arquipélago vulcânico exuberante no coração do Oceano Atlântico. Conheça as lagoas gêmeas das Sete Cidades, as fumarolas fumegantes das Furnas e nade em águas termais aquecidas pela terra.',
    highlights: [
      'Expedição de barco privativo com biólogos marinhos para avistar cachalotes e golfinhos',
      'Acesso noturno exclusivo às termas da Poça da Dona Beija com iluminação cênica',
      'Almoço tradicional de Cozido das Furnas preparado no calor subterrâneo dos gêiseres',
      'Roteiro por mirantes secretos e trilhas costeiras da Ilha de São Miguel e Faial'
    ],
    daysOverview: [
      {
        dayRange: 'Dias 01 - 03',
        title: 'São Miguel: Ponta Delgada & Lagoa das Sete Cidades',
        description: 'Chegada, recepção e exploração da cratera vulcânica com mirantes de cortar a respiração.'
      },
      {
        dayRange: 'Dias 04 - 05',
        title: 'Vale das Furnas & Gastronomia Vulcânica',
        description: 'Parque Terra Nostra, jardins botânicos centenários e banhos termais medicinais.'
      },
      {
        dayRange: 'Dias 06 - 07',
        title: 'Safári Marinho & Costa Selvagem',
        description: 'Navegação oceânica, visita à única plantação de chá da Europa e retorno.'
      }
    ],
    included: [
      'Hospedagem em hotéis design e solares açorianos boutique',
      'Passeio em semirrígido privativo para observação de cetáceos',
      'Carro elétrico executivo com condutor ou formato self-drive assistido',
      'Degustação de vinhos vulcânicos e queijos artesanais de São Jorge',
      'Atendimento presencial por anfitrião local da Latitude'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: 'A equipe da Latitude transformou a nossa viagem ao Japão em uma experiência que nunca esqueceremos. Cada detalhe, do ryokan nas montanhas aos guias que falavam português com conhecimento profundo de arte, foi impecável.',
    author: 'Dra. Beatriz Menezes e Carlos Alberto',
    location: 'São Paulo, Brasil',
    trip: 'Expedição Kyoto e Alpes Japoneses',
    date: 'Novembro de 2025'
  },
  {
    quote: 'Fazer o safári com a Latitude foi a decisão mais acertada. Tínhamos receio com a logística complexa na Tanzânia com duas crianças, mas o suporte foi contínuo do início ao fim. Estar a poucos metros da Grande Migração foi mágico.',
    author: 'Ricardo Vianna',
    location: 'Lisboa, Portugal',
    trip: 'Safári Privativo Serengeti & Ngorongoro',
    date: 'Agosto de 2025'
  },
  {
    quote: 'As Dolomitas superaram qualquer expectativa. As rotas selecionadas nos permitiram caminhar pelos pontos mais belos sem multidões, com refúgios gastronômicos que foram um espetáculo à parte.',
    author: 'Mariana Duarte Alencar',
    location: 'Rio de Janeiro, Brasil',
    trip: 'Dolomitas & Lagos Alpinos',
    date: 'Setembro de 2025'
  }
];

export const METHOD_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico & Desejos',
    description: 'Uma conversa aprofundada para entender o seu ritmo ideal, interesses gastronômicos, estilo de hospedagem e o objetivo de cada viajante.'
  },
  {
    step: '02',
    title: 'Curadoria & Roteiro Autoral',
    description: 'Desenhamos a logística sem desperdício de tempo, selecionamos acomodações com alma própria e contratamos guias especialistas locais.'
  },
  {
    step: '03',
    title: 'Concierge & Acompanhamento',
    description: 'Documentação completa em nosso aplicativo privativo e suporte 24 horas durante todo o período da viagem para qualquer imprevisto ou alteração.'
  }
];

export const FAQS = [
  {
    question: 'Como funciona o processo de consultoria e planejamento sob medida?',
    answer: 'Iniciamos com uma conversa de alinhamento (presencial ou online) para conhecer o seu perfil. Em até 5 dias úteis, apresentamos uma proposta inicial com logística, estimativas de investimento e opções de experiências. Após o seu feedback, refinamos cada detalhe até o roteiro ficar perfeito.'
  },
  {
    question: 'Os roteiros são em grupo ou totalmente privativos?',
    answer: 'Nossa especialidade primordial são viagens 100% privativas e personalizadas para casais, famílias ou pequenos grupos de amigos. Ocasionalmente promovemos expedições autorais guiadas pela nossa curadora para grupos exclusivos de no máximo 10 pessoas.'
  },
  {
    question: 'O que está incluso na assessoria durante a viagem?',
    answer: 'Você recebe acesso ao nosso aplicativo com vouchers, bilhetes, itinerário detalhado e mapas offline. Além disso, dispomos de um canal direto de WhatsApp e telefone com nosso concierge 24 horas por dia para reservas de restaurantes, ajustes de itinerário e assistência imediata.'
  },
  {
    question: 'Vocês cuidam de emissão de passagens aéreas e vistos?',
    answer: 'Sim. Gerenciamos a compra de passagens em classes econômica, premium economy e executiva, coordenação de franquia de bagagens e oferecemos orientação completa para solicitação de vistos consulares e exigências sanitárias do país de destino.'
  },
  {
    question: 'Com quanta antecedência devo começar a planejar a minha viagem?',
    answer: 'Recomendamos iniciar o planejamento de 3 a 6 meses antes da viagem para destinos como Europa e Ásia. Para destinos com capacidade restrita de lodges como a Tanzânia ou safáris na África, o ideal é planejar com 6 a 12 meses de antecedência para garantir as melhores acomodações.'
  }
];
