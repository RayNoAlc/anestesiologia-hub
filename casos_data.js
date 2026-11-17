/**
 * CASOS_DATA.JS - Casos Clínicos & Técnicas Anestésicas Práticas
 * Material oficial para simulação de prova prática de Anestesiologia (UNIOESTE)
 * Referências: Malamed (Manual de Anestesia Local), Apostilas e Fichas de Avaliação UNIOESTE.
 */

const CHECKLIST_ROTEIRO_14_PASSOS = [
  {
    passo: 1,
    titulo: "Assepsia e Antissepsia Prévia",
    descricao: "Bochecho prévio com antisséptico bucal (Clorexidina 0,12% por 1 minuto) para reduzir a carga microbiana da cavidade oral.",
    motivo: "Evita a inoculação de microrganismos cariogênicos e periodontopatogênicos para tecidos profundos durante a penetração da agulha."
  },
  {
    passo: 2,
    titulo: "Secagem Cuidadosa da Mucosa",
    descricao: "Secar a região do ponto de punção com gaze estéril esticando a mucosa.",
    motivo: "O anestésico tópico é hidrofóbico; a saliva dilui o agente tópico e anula sua penetração transmucosa."
  },
  {
    passo: 3,
    titulo: "Aplicação do Anestésico Tópico",
    descricao: "Aplicar pequena quantidade de Benzocaína a 20% (ou Lidocaína tópica) com swab/cotonete sobre o ponto de inserção por 1 a 2 minutos.",
    motivo: "Anestesia as terminações nervosas livres da mucosa (2 a 3 mm de profundidade), eliminando a dor da punção inicial."
  },
  {
    passo: 4,
    titulo: "Inspeção e Montagem do Instrumental",
    descricao: "Verificar a seringa carpule, adaptando a agulha descartável nova com lacre rompido diante do campo estéril.",
    motivo: "Garante biossegurança, ausência de rebarbas na agulha e funcionalidade do arpão para refluxo."
  },
  {
    passo: 5,
    titulo: "Desinfecção do Tubete Anestésico",
    descricao: "Friccionar gaze estéril embebida em Álcool a 70% no diafragma de borracha e no corpo do tubete de vidro antes de inseri-lo na carpule.",
    motivo: "Elimina contaminação externa acumulada no blíster ou na gaveta clínica."
  },
  {
    passo: 6,
    titulo: "Desprender o Êmbolo & Descartar a 1ª Gota",
    descricao: "Com o tubete instalado e arpão fixado, empurrar levemente o êmbolo até desprender a rolha de borracha da parede interna do vidro e expelir 1 única gota de anestésico.",
    motivo: "O silicone de fábrica cola a rolha no vidro. Se não for desprendido previamente, a força excessiva na boca do paciente provoca movimentos bruscos e impede o teste de refluxo/aspiração livre."
  },
  {
    passo: 7,
    titulo: "Verificação da Orientação do Bisel",
    descricao: "Orientar o bisel da agulha de acordo com o plano ósseo antes de aproximar a carpule da boca do paciente.",
    motivo: "Garante direcionamento preciso do fluxo anestésico e evita traumatismo periosteal."
  },
  {
    passo: 8,
    titulo: "Bisel Voltado para o Osso",
    descricao: "Posicionar o chanfro/abertura do bisel SEMPRE voltado para a cortical óssea durante a aproximação e penetração.",
    motivo: "Evita que a ponta aguda da agulha perfure ou rasgue o periósteo (o que gera intensa dor pós-operatória por periostite) e direciona o jato anestésico diretamente para os forames e porosidades ósseas."
  },
  {
    passo: 9,
    titulo: "Tracionamento Tecidual & Inserção Suave",
    descricao: "Manter a mucosa esticada e tensa com o dedo ou espelho clínico, inserindo a agulha com velocidade constante e suave até a profundidade preconizada.",
    motivo: "Mucosa tensa permite penetração atraumática com mínima deformação tecidual."
  },
  {
    passo: 10,
    titulo: "Aspiração Prévia em 2 Planos",
    descricao: "Tracionar o êmbolo da carpule por 1-2 mm, girar a carpule 45° no próprio eixo e aspirar uma segunda vez. Observar se há sangue no tubete.",
    motivo: "Evita injeção intravascular inadvertida (que causaria toxicidade sistêmica, convulsões ou arritmias). O giro de 45° descola o bisel caso esteja encostado na íntima de um vaso."
  },
  {
    passo: 11,
    titulo: "Injeção Lenta da Solução Anestésica",
    descricao: "Depositar a solução à velocidade de 1 tubete (1,8 mL) em no mínimo 60 segundos (ideal 1 a 2 minutos).",
    motivo: "Injeção lenta não distende abruptamente os tecidos (reduzindo a dor) e permite metabolização inicial sem elevação súbita do nível plasmático."
  },
  {
    passo: 12,
    titulo: "Recuo Suave da Agulha",
    descricao: "Remover a agulha lentamente seguindo o mesmo eixo de penetração, sem torções.",
    motivo: "Previne lacerações musculares e desconforto ao paciente."
  },
  {
    passo: 13,
    titulo: "Reencape pela Técnica da Cureta / Concha",
    descricao: "NUNCA segurar a tampa protetora com a outra mão. Pousar a tampa na bandeja e guiar a agulha passivamente para dentro da tampa com apenas uma mão.",
    motivo: "Evita 100% dos acidentes perfurocortantes com risco biológico (Hepatite B, C e HIV) por desvio de mira."
  },
  {
    passo: 14,
    titulo: "Descarte de Perfurocortantes & Checagem",
    descricao: "Desenroscar a agulha protegida utilizando pinça hemostática e descartar imediatamente no coletor de material perfurocortante rígido (Descarpack). Testar sintomas subjetivos e objetivos.",
    motivo: "Biossegurança total e confirmação da eficácia analgésica antes de iniciar o procedimento cirúrgico/operatório."
  }
];

const TECNICAS_ANESTESICAS_DATA = [
  {
    id: "pos_tuber",
    nome: "Bloqueio do Nervo Alveolar Superior Posterior (ASP / Pós-Túber)",
    arcada: "Maxila",
    tipo: "Bloqueio Troncular Regional",
    resumo: "Bloqueio do ASP atrás da tuberosidade da maxila para molares superiores.",
    agulha: {
      tipo: "Longa (30 a 35 mm)",
      calibre: "27G",
      penetracao: "Inserir apenas a METADE da agulha (~16 mm)",
      justificativa: "A inserção além de 16 mm atinge a fossa infratemporal, alcançando o plexo venoso pterigóideo e a artéria maxilar, causando hematoma facial maciço imediato."
    },
    volume: {
      tubetes: "1 tubete (1,8 mL)",
      ml: "1,8 mL",
      velocidade: "Lenta (mínimo 60 segundos por tubete)"
    },
    embolo: "Desprender a rolha da seringa carpule previamente para assegurar refluxo livre e teste de aspiração sem resistência.",
    bisel: "Voltado para o osso (para cima e para dentro, voltado para a tuberosidade da maxila).",
    referenciais: [
      "Túber da maxila (tuberosidade posterior)",
      "Prega mucovestibular (fundo de sulco)",
      "Ápice distovestibular do segundo molar superior (ou último molar erupcionado)",
      "Processo zigomático da maxila e incisura zigomática"
    ],
    pontoInsercao: "Fundo de sulco vestibular na altura do ápice distovestibular do 2º molar superior (se ausente, do molar mais posterior).",
    angulacao: "A seringa deve formar 45° com o plano sagital mediano E 45° com o plano oclusal superior (para cima, para dentro e para trás).",
    aspiracao: "OBRIGATÓRIA em 2 planos. Incidência de aspiração positiva de até 3,1%.",
    nervosBloqueados: ["Nervo Alveolar Superior Posterior (ASP) e seus ramos terminais."],
    estruturasAnestesiadas: [
      "Polpa do 3º e 2º molares superiores",
      "Raízes distovestibular e palatina do 1º molar superior (a raiz mesiovestibular é inervada pelo ASM em ~28% dos pacientes)",
      "Periodonto vestibular e tábua óssea vestibular correspondente aos molares"
    ],
    indicacoes: [
      "Tratamentos restauradores ou endodônticos envolvendo 2 ou mais molares superiores",
      "Quando houver infecção aguda/abscesso no ápice dos molares impedindo a infiltrativa local",
      "Cirurgias de molares superiores (associando-se obrigatoriamente ao Palatino Maior)"
    ],
    contraindicacoes: [
      "PACIENTE HEMOFÍLICO ou com coagulopatia severa (risco gravíssimo de hematoma incontrolável no plexo pterigóideo; nesses casos, eleger infiltrativas subperiósticas graduais)."
    ],
    armadilhaProva: "Se for dente 16 ou 26, a raiz mésio-vestibular pode não anestesiar por ser inervada pelo ASM (~28%). Se doer durante a pulpectomia ou luxação mesial, complementar com subperióstica no ápice da raiz MV.",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boneGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#EDE6DD"/><stop offset="100%" stop-color="#D5C5B5"/></linearGradient>
        <filter id="glow"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#8F7159" flood-opacity="0.3"/></filter>
      </defs>
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Maxillary arch outline -->
      <path d="M 40,160 C 50,70 120,40 240,40 C 280,40 300,70 300,110 C 300,150 270,170 230,170 C 190,170 180,150 160,150" fill="none" stroke="#D5C5B5" stroke-width="6"/>
      <!-- Molar teeth representation -->
      <path d="M 180,155 L 200,155 L 200,175 L 180,175 Z" fill="#FFFFFF" stroke="#8F7159" stroke-width="2" rx="3"/>
      <text x="190" y="190" font-size="10" fill="#6E503B" text-anchor="middle" font-weight="700">1º M</text>
      <path d="M 210,152 L 230,152 L 230,172 L 210,172 Z" fill="#FFFFFF" stroke="#8F7159" stroke-width="2" rx="3"/>
      <text x="220" y="190" font-size="10" fill="#6E503B" text-anchor="middle" font-weight="700">2º M</text>
      <path d="M 240,146 L 258,146 L 258,166 L 240,166 Z" fill="#FFFFFF" stroke="#8F7159" stroke-width="2" rx="3"/>
      <text x="249" y="190" font-size="10" fill="#6E503B" text-anchor="middle" font-weight="700">3º M</text>
      <!-- Tuber region -->
      <path d="M 260,140 C 275,130 285,115 285,95 C 285,75 270,55 240,55" fill="none" stroke="#C5AA8E" stroke-width="4" stroke-dasharray="3,3"/>
      <text x="285" y="85" font-size="11" fill="#8F7159" font-weight="700">Túber Maxilar</text>
      <!-- ASP Nerve branch -->
      <path d="M 255,45 C 265,65 260,95 245,130" fill="none" stroke="#E67E22" stroke-width="3"/>
      <!-- Needle vector (45° angle) -->
      <line x1="160" y1="210" x2="235" y2="128" stroke="#3A2417" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Needle tip & target -->
      <circle cx="235" cy="128" r="6" fill="#D32F2F" filter="url(#glow)"/>
      <circle cx="235" cy="128" r="12" fill="#D32F2F" fill-opacity="0.25"/>
      <!-- Label -->
      <text x="75" y="30" font-size="11" fill="#3A2417" font-weight="700">Ponto de Punção: Ápice DV do 2º Molar</text>
      <text x="75" y="46" font-size="10" fill="#8F7159">Angulação: 45° Sagital & 45° Oclusal (Penetração: ~16 mm)</text>
    </svg>`
  },
  {
    id: "infraorbital",
    nome: "Bloqueio do Nervo Infraorbital (ASA + ASM)",
    arcada: "Maxila",
    tipo: "Bloqueio Troncular Regional",
    resumo: "Bloqueio no forame infraorbital cobrindo dentes anteriores e pré-molares superiores.",
    agulha: {
      tipo: "Longa (30 a 35 mm)",
      calibre: "27G",
      penetracao: "Inserir cerca de metade da agulha (~16 mm) até tocar a borda superior do forame suavemente",
      justificativa: "A agulha longa alcança o forame infraorbital a partir do fundo de sulco com estabilidade e margem de segurança contra fraturas."
    },
    volume: {
      tubetes: "Mínimo 1 tubete (1,8 mL)",
      ml: "1,8 mL",
      velocidade: "Lenta (60 a 90 segundos)"
    },
    embolo: "Desprender previamente o êmbolo e expelir 1 gota para teste de desobstrução.",
    bisel: "Voltado para o osso (para permitir que a solução penetre no canal infraorbital através do forame).",
    referenciais: [
      "Incisura/Margem infraorbital inferior da órbita",
      "Forame infraorbital (palpável 8 a 10 mm abaixo da margem infraorbital, alinhado à pupila em olhar reto e comissura labial)",
      "Freio labial lateral e fundo de sulco vestibular",
      "Longo eixo do primeiro pré-molar superior"
    ],
    pontoInsercao: "Fundo de sulco vestibular, anterior ou posteriormente ao freio labial lateral, na altura do 1º pré-molar superior.",
    angulacao: "Seringa paralela ao longo eixo do pré-molar em direção cranial para o forame previamente localizado pelo dedo indicador.",
    aspiracao: "OBRIGATÓRIA em 2 planos.",
    nervosBloqueados: [
      "Nervo Alveolar Superior Anterior (ASA)",
      "Nervo Alveolar Superior Médio (ASM)",
      "Ramos terminais da face: Nervo Palpebral Inferior, Nasal Lateral e Labial Superior ('brindes' que confirmam a técnica)"
    ],
    estruturasAnestesiadas: [
      "Polpa dos incisivos central e lateral, canino e pré-molares superiores do lado anestesiado",
      "Raiz mesiovestibular do 1º molar superior em ~28% dos indivíduos",
      "Periodonto vestibular e tábua óssea vestibular anterior até pré-molares",
      "Asa do nariz, pálpebra inferior e lábio superior homolateral"
    ],
    indicacoes: [
      "Dentística ou Endodontia de múltiplos dentes anteriores e pré-molares superiores (ex: 13, 14, 15)",
      "Infecção/edema agudo no fundo de sulco dos dentes anteriores (onde subperióstica é ineficaz pelo pH ácido)",
      "Cirurgia labial superior e mucosa vestibular anterior"
    ],
    contraindicacoes: [
      "Infecção/abcesso circunscrito na área exata do ponto de inserção da agulha no fundo de sulco."
    ],
    armadilhaProva: "Manter o dedo indicador firmemente sobre o forame infraorbital durante TODA a injeção e por mais 1 a 2 minutos após para forçar a solução anestésica a adentrar o canal infraorbital, alcançando o ASA e ASM.",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Orbit outline -->
      <path d="M 120,40 C 150,30 200,30 215,55 C 225,75 205,100 170,105 C 130,105 110,80 120,40 Z" fill="#EFE6DC" stroke="#8F7159" stroke-width="2"/>
      <!-- Pupillary vertical line -->
      <line x1="168" y1="20" x2="168" y2="200" stroke="#DFCCA9" stroke-width="1.5" stroke-dasharray="4,4"/>
      <!-- Infraorbital foramen -->
      <ellipse cx="168" cy="120" rx="9" ry="7" fill="#4A3425"/>
      <circle cx="168" cy="120" r="14" fill="#D32F2F" fill-opacity="0.3"/>
      <!-- Finger compression symbol -->
      <path d="M 195,115 C 220,115 220,135 185,130" fill="none" stroke="#6E503B" stroke-width="3"/>
      <text x="215" y="115" font-size="10" fill="#6E503B" font-weight="700">Dedo Pressionando</text>
      <!-- Teeth outline (Premolars) -->
      <path d="M 140,190 L 155,190 L 155,210 L 140,210 Z" fill="#FFFFFF" stroke="#8F7159" stroke-width="1.5" rx="2"/>
      <path d="M 162,190 L 178,190 L 178,210 L 162,210 Z" fill="#FFFFFF" stroke="#8F7159" stroke-width="1.5" rx="2"/>
      <text x="170" y="218" font-size="9" fill="#8F7159" text-anchor="middle">1º Pré-molar</text>
      <!-- Needle track -->
      <line x1="170" y1="185" x2="168" y2="128" stroke="#D32F2F" stroke-width="3" stroke-linecap="round"/>
      <polygon points="168,124 164,134 172,134" fill="#D32F2F"/>
      <text x="35" y="35" font-size="11" fill="#3A2417" font-weight="700">Forame Infraorbital (~10 mm abaixo da órbita)</text>
      <text x="35" y="50" font-size="10" fill="#8F7159">Linha Pupilar Central | Seringa Paralela ao 1º PM</text>
    </svg>`
  },
  {
    id: "palatino_maior",
    nome: "Bloqueio do Nervo Palatino Maior",
    arcada: "Maxila",
    tipo: "Bloqueio Troncular da Mucosa Palatina",
    resumo: "Anestesia da mucosa e tábua óssea palatina posterior de molares até pré-molares.",
    agulha: {
      tipo: "Curta (21 a 25 mm) ou Extra-curta",
      calibre: "27G ou 30G",
      penetracao: "Muito rasa (menos de 5 mm) até o bisel penetrar e tocar osso palatino suavemente",
      justificativa: "A mucosa palatina é delgada e inextensível; não há necessidade de penetração profunda."
    },
    volume: {
      tubetes: "MÁXIMO ½ tubete, IDEAL ⅓ a ¼ de tubete (0,45 a 0,6 mL)",
      ml: "0,45 a 0,6 mL",
      velocidade: "MUITO LENTA (mínimo 30 a 45 segundos para 0,45 mL)"
    },
    embolo: "Desprender êmbolo previamente para evitar jatos bruscos na mucosa palatina altamente inervada.",
    bisel: "Voltado para o osso palatino.",
    referenciais: [
      "Forame palatino maior (localizado nos tecidos moles entre o 2º e 3º molar superior, a ~1 cm da margem gengival livre em direção à rafe palatina)",
      "Rafe palatina mediana",
      "Junção do processo alveolar com a lâmina horizontal do osso palatino"
    ],
    pontoInsercao: "Tecidos moles palatinos ligeiramente anteriores ao forame palatino maior.",
    angulacao: "Seringa introduzida a partir dos pré-molares do lado OPOSTO (contralateral), quase perpendicular à curvatura do palato.",
    aspiracao: "Obrigatória (baixo risco, < 1%, mas necessária).",
    nervosBloqueados: ["Nervo Palatino Maior."],
    estruturasAnestesiadas: [
      "Mucosa e periósteo palatino de molares até o primeiro pré-molar superior",
      "Tábua óssea palatina posterior correspondente",
      "NÃO ANESTESIA NENHUM DENTE (nem polpa nem ligamento periodontal profundo)"
    ],
    indicacoes: [
      "Exodontias simples e cirúrgicas de molares e pré-molares superiores",
      "Aumento de coroa clínica e cirurgias periodontais na vertente palatina",
      "Instalação de grampo de isolamento absoluto que invada a gengiva palatina"
    ],
    contraindicacoes: [
      "Dentística ou Endodontia isolada onde a mucosa palatina NÃO será manipulada (NÃO fazer palatino maior nesses casos!)."
    ],
    armadilhaProva: "NUNCA injetar volume excessivo nem sob altíssima pressão. O excesso de vasoconstritor em tecido fibroso inextensível causa isquemia severa e necrose palatina com formação de escara dolorosa.",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Palate vault vault arch -->
      <path d="M 60,190 C 60,70 160,40 260,70 C 260,190 260,190 260,190" fill="#FAF1E8" stroke="#C5AA8E" stroke-width="2"/>
      <!-- Palatine median raphe -->
      <line x1="160" y1="50" x2="160" y2="200" stroke="#8F7159" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="160" y="40" font-size="10" fill="#8F7159" text-anchor="middle" font-weight="700">Rafe Mediana</text>
      <!-- Greater palatine foramen -->
      <circle cx="225" cy="130" r="7" fill="#4A3425"/>
      <circle cx="225" cy="130" r="14" fill="#D32F2F" fill-opacity="0.25"/>
      <!-- Molar teeth borders -->
      <path d="M 245,100 L 255,100 L 255,120 L 245,120 Z" fill="#FFF" stroke="#8F7159" stroke-width="1.5"/>
      <path d="M 245,125 L 255,125 L 255,145 L 245,145 Z" fill="#FFF" stroke="#8F7159" stroke-width="1.5"/>
      <text x="245" y="160" font-size="9" fill="#8F7159">2º e 3º M</text>
      <!-- Syringe approach from opposite premolars -->
      <line x1="85" y1="175" x2="220" y2="132" stroke="#3A2417" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="220" cy="132" r="5" fill="#D32F2F"/>
      <text x="40" y="210" font-size="10" fill="#6E503B">Apoio: Pré-molares opostos | Máx ½ tubete</text>
    </svg>`
  },
  {
    id: "nasopalatino",
    nome: "Bloqueio do Nervo Nasopalatino",
    arcada: "Maxila",
    tipo: "Bloqueio Troncular da Mucosa Palatina Anterior",
    resumo: "Anestesia da mucosa palatina de canino a canino (forame incisivo).",
    agulha: {
      tipo: "Curta (21 a 25 mm)",
      calibre: "27G ou 30G",
      penetracao: "Penetração rasa (3 a 5 mm)",
      justificativa: "O canal incisivo é muito próximo da superfície da mucosa palatina anterior."
    },
    volume: {
      tubetes: "MÁXIMO ⅓ a ¼ de tubete (0,3 a 0,45 mL)",
      ml: "0,3 a 0,45 mL",
      velocidade: "Extremamente lenta com isquemia visível imediata"
    },
    embolo: "Desprender êmbolo previamente. Recomenda-se pré-anestesia com swab sob forte pressão isquêmica ou punção interdental prévia.",
    bisel: "Voltado para o osso palatino.",
    referenciais: [
      "Papila incisiva (elevação oval na linha média logo atrás dos incisivos centrais superiores)",
      "Incisivos centrais superiores",
      "Rafe palatina mediana anterior"
    ],
    pontoInsercao: "Mucosa palatina imediatamente lateral à base da papila incisiva (NUNCA perfurar diretamente no centro da papila incisiva!).",
    angulacao: "Seringa mantida a 45° em relação ao palato anterior, orientada para trás e para cima.",
    aspiracao: "Obrigatória.",
    nervosBloqueados: ["Nervo Nasopalatino bilateralmente."],
    estruturasAnestesiadas: [
      "Mucosa e periósteo palatino anterior de canino a canino (vertente palatina dos 6 dentes anteriores)",
      "Tábua óssea palatina anterior correspondente",
      "NÃO ANESTESIA A POLPA DOS INCISIVOS NEM CANINOS"
    ],
    indicacoes: [
      "Exodontias dos dentes 13, 12, 11, 21, 22, 23",
      "Cirurgias periodontais na vertente palatina anterior",
      "Remoção de dentes supranumerários (mesiodens) ou cistos nasopalatinos"
    ],
    contraindicacoes: [
      "Dentística ou Endodontia isolada dos incisivos ou caninos onde não se toca na mucosa palatina."
    ],
    armadilhaProva: "A punção no centro da papila incisiva é extremamente dolorosa. A conduta correta cobrada pelo professor é: 1) Pré-anestesia infiltrando ¼ de tubete na papila interdental vestibular entre o 11 e 21, esperando a solução difundir para palato; 2) Inserir a agulha lateralmente à papila incisiva com mucosa previamente isquemiada por pressão de cotonete.",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Anterior palate & central incisors -->
      <path d="M 100,50 L 130,50 L 130,85 L 100,85 Z" fill="#FFF" stroke="#8F7159" stroke-width="2" rx="3"/>
      <text x="115" y="70" font-size="10" fill="#6E503B" font-weight="700" text-anchor="middle">11</text>
      <path d="M 135,50 L 165,50 L 165,85 L 135,85 Z" fill="#FFF" stroke="#8F7159" stroke-width="2" rx="3"/>
      <text x="150" y="70" font-size="10" fill="#6E503B" font-weight="700" text-anchor="middle">21</text>
      <!-- Incisive papilla -->
      <ellipse cx="132" cy="115" rx="10" ry="14" fill="#EFE6DC" stroke="#8F7159" stroke-width="1.5"/>
      <text x="175" y="118" font-size="10" fill="#8F7159" font-weight="700">Papila Incisiva</text>
      <!-- Lateral needle puncture (avoiding center) -->
      <circle cx="120" cy="118" r="5" fill="#D32F2F"/>
      <line x1="120" y1="190" x2="120" y2="124" stroke="#3A2417" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Label -->
      <text x="135" y="150" font-size="10" fill="#D32F2F" font-weight="700">Ponto Lateral (NÃO no centro!)</text>
      <text x="135" y="165" font-size="9" fill="#6E503B">Volume: máx ⅓ tubete | Canino a Canino</text>
    </svg>`
  },
  {
    id: "subperiostica_ant",
    nome: "Infiltrativa Terminal Subperióstica Anterior",
    arcada: "Maxila",
    tipo: "Infiltrativa Terminal",
    resumo: "Infiltração terminal no fundo de sulco para dentes anteriores superiores.",
    agulha: {
      tipo: "Curta (21 a 25 mm)",
      calibre: "27G ou 30G",
      penetracao: "Penetração superficial de ~3 a 5 mm até o ápice",
      justificativa: "A maxila anterior possui cortical óssea delgada e porosa, facilitando a rápida difusão tecidual até os ápices."
    },
    volume: {
      tubetes: "½ tubete (Dentística) a 1 tubete (Endodontia)",
      ml: "0,9 a 1,8 mL",
      velocidade: "Lenta (45 a 60 segundos)"
    },
    embolo: "Desprender êmbolo previamente e expelir 1 gota para teste.",
    bisel: "Voltado para o osso (para o periósteo maxilar).",
    referenciais: [
      "Fundo de sulco vestibular (prega mucovestibular)",
      "Longo eixo do dente a ser anestesiado",
      "Estimativa do ápice radicular (~2 alturas de coroa clínica acima da borda incisal)"
    ],
    pontoInsercao: "Prega mucovestibular acima do ápice radicular do elemento dental.",
    angulacao: "Paralela ao longo eixo do dente.",
    aspiracao: "Obrigatória em 2 planos.",
    nervosBloqueados: ["Ramos terminais livres do Nervo Alveolar Superior Anterior (ASA)."],
    estruturasAnestesiadas: [
      "Polpa do dente anestesiado",
      "Periodonto vestibular e tábua óssea vestibular circunscrita",
      "Mucosa vestibular correspondente"
    ],
    indicacoes: [
      "Procedimentos de dentística ou endodontia restritos a 1 ou 2 dentes anteriores",
      "Procedimentos cirúrgicos de 1 elemento (associando ao nasopalatino)"
    ],
    contraindicacoes: [
      "Infecção ou inflamação aguda no ápice do dente (pH ácido degrada o anestésico e há risco de disseminar a infecção; nesses casos, fazer Bloqueio Infraorbital)."
    ],
    armadilhaProva: "Na prova prática de dentística/endo do 11 ou 13: responder APENAS subperióstica anterior no nervo ASA. NÃO inventar de anestesiar nasopalatino, pois em procedimentos conservadores não se mexe no palato!",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Tooth root & crown -->
      <path d="M 140,150 C 140,100 150,70 160,50 C 170,70 180,100 180,150 L 140,150 Z" fill="#FFF" stroke="#8F7159" stroke-width="2"/>
      <path d="M 140,150 L 180,150 L 180,195 L 140,195 Z" fill="#FFF" stroke="#8F7159" stroke-width="2" rx="2"/>
      <text x="160" y="175" font-size="11" fill="#6E503B" font-weight="700" text-anchor="middle">Coroa</text>
      <text x="160" y="90" font-size="11" fill="#8F7159" font-weight="700" text-anchor="middle">Raiz</text>
      <!-- Apex marker -->
      <circle cx="160" cy="50" r="4" fill="#8F7159"/>
      <!-- Mucobuccal fold line -->
      <path d="M 80,65 C 130,65 190,65 240,65" fill="none" stroke="#C5AA8E" stroke-width="3" stroke-dasharray="4,3"/>
      <text x="245" y="68" font-size="9" fill="#8F7159">Fundo de Sulco</text>
      <!-- Needle insertion (parallel to long axis) -->
      <line x1="160" y1="120" x2="160" y2="48" stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="160" cy="48" r="6" fill="#D32F2F"/>
      <!-- Description -->
      <text x="35" y="30" font-size="11" fill="#3A2417" font-weight="700">Subperióstica Anterior: Paralela ao Longo Eixo</text>
      <text x="35" y="44" font-size="10" fill="#8F7159">Agulha Curta | Ápice ≈ 2 coroas acima | Volume: ½ a 1 tubete</text>
    </svg>`
  },
  {
    id: "subperiostica_post",
    nome: "Infiltrativa Terminal Subperióstica Posterior",
    arcada: "Maxila",
    tipo: "Infiltrativa Terminal",
    resumo: "Infiltração terminal para pré-molares e molares superiores individuais.",
    agulha: {
      tipo: "Longa (30 a 35 mm)",
      calibre: "27G",
      penetracao: "Penetração com inclinação de 45° em direção ao ápice radicular",
      justificativa: "A presença da crista infrazigomática e a maior espessura óssea na região posterior exigem agulha longa com inclinação para aproximar a solução do ápice."
    },
    volume: {
      tubetes: "½ tubete a 1 tubete (0,9 a 1,8 mL)",
      ml: "0,9 a 1,8 mL",
      velocidade: "Lenta"
    },
    embolo: "Desprender êmbolo previamente para teste de refluxo.",
    bisel: "Voltado para o osso.",
    referenciais: [
      "Fundo de sulco vestibular na região do elemento posterior",
      "Longo eixo do pré-molar ou molar",
      "Ápice radicular estimado"
    ],
    pontoInsercao: "Fundo de sulco vestibular com inclinação de 45° em relação ao longo eixo do dente em direção ao ápice.",
    angulacao: "45° em direção ao ápice do dente posterior.",
    aspiracao: "Obrigatória.",
    nervosBloqueados: ["Ramos terminais do ASM (pré-molares) ou ASP (molares)."],
    estruturasAnestesiadas: [
      "Polpa do elemento individual anestesiado",
      "Periodonto e cortical vestibular contígua"
    ],
    indicacoes: [
      "Tratamento isolado de 1 dente posterior sem infecção",
      "Alternativa ao pós-túber em pacientes hemofílicos"
    ],
    contraindicacoes: [
      "Infecção apical no dente; 2 ou mais dentes (indicação de Pós-túber)."
    ],
    armadilhaProva: "Diferença vital cobrada pelo professor: Subperióstica anterior é feita com agulha CURTA e PARALELA ao longo eixo; subperióstica posterior é feita com agulha LONGA e INCLINADA A 45° em direção ao ápice!",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Posterior tooth -->
      <path d="M 130,140 C 130,95 140,75 145,55 C 150,75 160,95 160,140 Z" fill="#FFF" stroke="#8F7159" stroke-width="1.5"/>
      <path d="M 160,140 C 160,95 170,75 175,55 C 180,75 190,95 190,140 Z" fill="#FFF" stroke="#8F7159" stroke-width="1.5"/>
      <path d="M 125,140 L 195,140 L 195,185 L 125,185 Z" fill="#FFF" stroke="#8F7159" stroke-width="2" rx="3"/>
      <!-- Angled needle vector (45°) -->
      <line x1="225" y1="125" x2="160" y2="52" stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="160" cy="52" r="6" fill="#D32F2F"/>
      <!-- 45° angle text -->
      <text x="35" y="30" font-size="11" fill="#3A2417" font-weight="700">Subperióstica Posterior: Agulha Longa a 45°</text>
      <text x="35" y="44" font-size="10" fill="#8F7159">Inclinação de 45° rumo ao ápice radicular | Volume: 1 tubete</text>
    </svg>`
  },
  {
    id: "pterigomandibular_direta",
    nome: "Bloqueio Pterigomandibular Direto (NAI + Lingual — Técnica Direta)",
    arcada: "Mandíbula",
    tipo: "Bloqueio Troncular Mandibular Direto",
    resumo: "Técnica direta de 1 tempo para bloqueio dos nervos Alveolar Inferior e Lingual.",
    agulha: {
      tipo: "Longa (30 a 35 mm)",
      calibre: "27G",
      penetracao: "Inserir de 20 a 25 mm até OBRIGATORIAMENTE TOCAR O OSSO (sulco mandibular). Deixar sempre no mínimo 5 a 6 mm de agulha visível fora da mucosa!",
      justificativa: "A agulha longa é obrigatória para alcançar o forame mandibular com segurança; agulha curta atinge a profundidade máxima no canhão, onde ocorrem 99% das fraturas e onde é impossível recuperar a agulha quebrada."
    },
    volume: {
      tubetes: "Mínimo 1 tubete a 1,5 tubetes (1,8 a 2,7 mL): ¾ do tubete para o NAI e ¼ ao recuar para o Lingual",
      ml: "1,8 a 2,7 mL",
      velocidade: "Lenta (mínimo 60 a 90 segundos)"
    },
    embolo: "Desprender êmbolo previamente para teste de aspiração livre.",
    bisel: "Voltado para o osso (para o ramo medial da mandíbula).",
    referenciais: [
      "Incisura coronóide (ponto de maior concavidade na borda anterior do ramo mandibular, palpada pelo polegar ou indicador)",
      "Rafe pterigomandibular (prega vertical de tecido fibroso formada pela junção do m. bucinador e constritor superior da faringe)",
      "Depressão pterigomandibular (fossa lateral à rafe)",
      "Plano oclusal dos molares inferiores (a punção é feita cerca de 6 a 10 mm acima do plano oclusal)",
      "Pré-molares do lado oposto (apoio da seringa na comissura contralateral)"
    ],
    pontoInsercao: "Na depressão pterigomandibular, na bissetriz entre a linha oblíqua e a rafe pterigomandibular, cerca de 1 cm acima do plano oclusal dos molares inferiores.",
    angulacao: "Corpo da seringa apoiado sobre os pré-molares do lado OPOSTO (contralateral).",
    aspiracao: "OBRIGATÓRIA em 2 planos (risco de 10% a 15% de aspiração positiva na artéria/veia alveolar inferior).",
    nervosBloqueados: [
      "Nervo Alveolar Inferior (NAI)",
      "Nervo Incisivo (ramo terminal do NAI)",
      "Nervo Mentual (ramo terminal do NAI)",
      "Nervo Lingual (bloqueado durante o recuo da agulha)"
    ],
    estruturasAnestesiadas: [
      "Dentes mandibulares da hemiarcada até a linha média (polpa do 3º molar até o incisivo central)",
      "Corpo e porção inferior do ramo mandibular",
      "Mucoperiósteo vestibular anterior (do forame mentual para a mesial, via n. mentual)",
      "Dois terços anteriores da língua e mucosa do assoalho bucal (via n. lingual)",
      "Periodonto e mucosa lingual de toda a hemiarcada inferior (via n. lingual)",
      "NÃO ANESTESIA A MUCOSA VESTIBULAR DOS MOLARES (que é inervada pelo Nervo Bucal!)"
    ],
    indicacoes: [
      "Procedimentos cirúrgicos, periodontais, endodônticos e restauradores na hemiarcada mandibular",
      "Quando há múltiplos dentes a tratar na mesma sessão inferior"
    ],
    contraindicacoes: [
      "Infecção ou trismo severo no espaço pterigomandibular.",
      "Pacientes não cooperativos com risco de mordedura labial/lingual severa (crianças pequenas)."
    ],
    armadilhaProva: "SE A AGULHA NÃO TOCAR OSSO: NÃO INJETAR! Se introduzir 25 mm sem contato ósseo, a agulha está posteriorizada na glândula parótida; injetar causará anestesia do VII par craniano (Paralisia Facial Transitória, incapacidade de fechar o olho homolateral). Conduta: recuar a agulha até quase a saída, redirecionar a carpule mais posteriormente sobre os molares contralaterais e reintroduzir até sentir o batente ósseo rígido.",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Mandibular ramus inner view -->
      <path d="M 60,30 L 100,30 C 130,70 140,120 180,180 L 120,200 C 90,160 80,100 60,30 Z" fill="#EFE6DC" stroke="#8F7159" stroke-width="2"/>
      <!-- Coronoid notch -->
      <path d="M 60,60 C 75,90 75,120 70,140" fill="none" stroke="#D32F2F" stroke-width="3"/>
      <text x="35" y="100" font-size="9" fill="#D32F2F" font-weight="700">Incisura</text>
      <!-- Mandibular foramen / Lingula -->
      <circle cx="105" cy="110" r="6" fill="#4A3425"/>
      <circle cx="105" cy="110" r="14" fill="#D32F2F" fill-opacity="0.25"/>
      <text x="115" y="105" font-size="10" fill="#4A3425" font-weight="700">Forame Mandibular</text>
      <!-- Occlusal line -->
      <line x1="40" y1="135" x2="280" y2="135" stroke="#8F7159" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="210" y="130" font-size="9" fill="#8F7159">Plano Oclusal</text>
      <line x1="40" y1="110" x2="280" y2="110" stroke="#E67E22" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="210" y="105" font-size="9" fill="#E67E22">1 cm acima do plano</text>
      <!-- Syringe from contralateral premolars -->
      <line x1="280" y1="190" x2="108" y2="112" stroke="#3A2417" stroke-width="3" stroke-linecap="round"/>
      <circle cx="108" cy="112" r="5" fill="#D32F2F"/>
      <text x="35" y="215" font-size="10" fill="#6E503B">Técnica Direta: Apoio nos Pré-molares Opostos | Tocar Osso!</text>
    </svg>`
  },
  {
    id: "nervo_bucal",
    nome: "Bloqueio do Nervo Bucal",
    arcada: "Mandíbula",
    tipo: "Bloqueio de Ramos Moles Mandibulares",
    resumo: "Anestesia da mucosa vestibular dos molares inferiores para cirurgias e isolamento.",
    agulha: {
      tipo: "Longa ou Curta (frequentemente realizada logo após a pterigomandibular com a mesma agulha longa)",
      calibre: "27G",
      penetracao: "Penetração superficial de apenas 2 a 4 mm até o bisel submergir na mucosa cobrindo o trígono",
      justificativa: "O nervo bucal cruza a borda anterior do ramo e corre submucoso superficial no trígono retromolar."
    },
    volume: {
      tubetes: "¼ a ½ tubete (0,45 a 0,9 mL)",
      ml: "0,45 a 0,9 mL",
      velocidade: "Lenta"
    },
    embolo: "Desprender êmbolo previamente.",
    bisel: "Voltado para o osso.",
    referenciais: [
      "Trígono retromolar (área triangular posterior ao último molar inferior)",
      "Borda anterior do ramo da mandíbula",
      "Mucosa jugal distal e vestibular ao dente molar mais distal"
    ],
    pontoInsercao: "Membrana mucosa distal e ligeiramente vestibular ao último molar inferior, sobre o trígono retromolar.",
    angulacao: "Seringa paralela ao plano oclusal inferior pelo lado vestibular.",
    aspiracao: "Obrigatória.",
    nervosBloqueados: ["Nervo Bucal (ramo da divisão anterior do V3)."],
    estruturasAnestesiadas: [
      "Mucosa vestibular, periósteo e gengiva vestibular dos dentes molares inferiores",
      "NÃO ANESTESIA NENHUM DENTE NEM POLPA"
    ],
    indicacoes: [
      "Exodontias de molares inferiores (38, 37, 36, 46, 47, 48)",
      "Cirurgias periodontais na vertente vestibular de molares inferiores",
      "Instalação de grampo de isolamento absoluto que invada a gengiva vestibular de molares"
    ],
    contraindicacoes: [
      "Procedimentos conservadores (restaurações oclusais ou endodontia) onde não se manipula a gengiva vestibular."
    ],
    armadilhaProva: "O bloqueio pterigomandibular tradicional anestesia o NAI e o Lingual, MAS NÃO ANESTESIA O NERVO BUCAL! Em qualquer exodontia de molar inferior, o aluno que esquecer de anestesiar o nervo bucal causará dor intensa no paciente durante o descolamento do retalho vestibular ou sindesmotomia.",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Lower molar tooth -->
      <path d="M 90,120 L 150,120 L 150,170 L 90,170 Z" fill="#FFF" stroke="#8F7159" stroke-width="2" rx="4"/>
      <text x="120" y="150" font-size="11" fill="#6E503B" font-weight="700" text-anchor="middle">38 / Último Molar</text>
      <!-- Retromolar triangle & fossa -->
      <polygon points="160,110 230,80 230,170 160,160" fill="#EFE6DC" stroke="#C5AA8E" stroke-width="1.5"/>
      <text x="195" y="130" font-size="9" fill="#8F7159" font-weight="700" text-anchor="middle">Trígono Retromolar</text>
      <!-- Puncture point in buccal mucosa -->
      <circle cx="165" cy="115" r="5" fill="#D32F2F"/>
      <!-- Syringe parallel along buccal corridor -->
      <line x1="70" y1="95" x2="160" y2="114" stroke="#3A2417" stroke-width="2.5" stroke-linecap="round"/>
      <text x="35" y="30" font-size="11" fill="#3A2417" font-weight="700">Nervo Bucal: Trígono Retromolar</text>
      <text x="35" y="44" font-size="10" fill="#8F7159">Distal e vestibular ao último molar | Volume: ¼ a ½ tubete</text>
    </svg>`
  },
  {
    id: "mentual_incisivo",
    nome: "Bloqueio do Nervo Mentual / Incisivo",
    arcada: "Mandíbula",
    tipo: "Bloqueio Troncular Regional Anterior",
    resumo: "Bloqueio no forame mentual para dentes anteriores e pré-molares inferiores.",
    agulha: {
      tipo: "Curta (21 a 25 mm)",
      calibre: "27G",
      penetracao: "Penetração de 5 a 6 mm no fundo de sulco em direção ao forame",
      justificativa: "A agulha curta atinge com facilidade a entrada do forame mentual sem risco de transfixação profunda."
    },
    volume: {
      tubetes: "1 tubete (1,8 mL)",
      ml: "1,8 mL",
      velocidade: "Lenta (mínimo 60 segundos)"
    },
    embolo: "Desprender êmbolo previamente para teste de refluxo.",
    bisel: "Voltado para o osso.",
    referenciais: [
      "Forame mentual (palpado entre os ápices do 1º e 2º pré-molares inferiores)",
      "Prega mucovestibular (fundo de sulco)",
      "Ápices dos pré-molares inferiores"
    ],
    pontoInsercao: "Prega mucovestibular na altura do forame mentual (geralmente entre o 1º e 2º pré-molar inferior).",
    angulacao: "Seringa orientada de trás para frente em um ângulo de ~45° com o corpo da mandíbula.",
    aspiracao: "Obrigatória (alta vascularização local).",
    nervosBloqueados: [
      "Nervo Mentual (anestesiado na saída do forame)",
      "Nervo Incisivo (anestesiado quando se pressiona a solução para dentro do canal mental/mandibular)"
    ],
    estruturasAnestesiadas: [
      "Polpa dos pré-molares, canino e incisivos inferiores homolaterais (via Nervo Incisivo, se mantida a compressão digital por 2 minutos)",
      "Mucosa labial inferior, pele do mento e lábio inferior (via Nervo Mentual)",
      "NÃO ANESTESIA A MUCOSA LINGUAL (que depende do Nervo Lingual)"
    ],
    indicacoes: [
      "Procedimentos restauradores ou endodônticos em pré-molares, caninos e incisivos inferiores sem necessidade de anestesiar a língua",
      "Biópsias ou suturas no lábio inferior"
    ],
    contraindicacoes: [
      "Infecção/abcesso no fundo de sulco dos pré-molares.",
      "Cirurgia envolvendo tecidos linguais (onde é necessário complementar ou fazer Pterigomandibular)."
    ],
    armadilhaProva: "Regra clássica do professor: O nervo mentual NÃO inerva dente! Quem inerva polpa dos dentes anteriores inferiores é o NERVO INCISIVO. Para que o incisivo seja anestesiado no forame mentual, é MANDATÓRIO pressionar o forame com o dedo por 1 a 2 minutos após a injeção para forçar a entrada do anestésico no canal mandibular.",
    svgAnatomico: `<svg viewBox="0 0 320 220" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="14" fill="#FAF7F2"/>
      <!-- Lower jaw bone segment -->
      <path d="M 40,160 C 90,160 170,160 280,140 L 280,185 C 170,205 90,205 40,185 Z" fill="#EFE6DC" stroke="#8F7159" stroke-width="2"/>
      <!-- Premolar teeth -->
      <path d="M 120,95 L 140,95 L 140,160 L 120,160 Z" fill="#FFF" stroke="#8F7159" stroke-width="1.5" rx="2"/>
      <path d="M 155,95 L 175,95 L 175,160 L 155,160 Z" fill="#FFF" stroke="#8F7159" stroke-width="1.5" rx="2"/>
      <text x="130" y="130" font-size="9" fill="#8F7159">1º PM</text>
      <text x="165" y="130" font-size="9" fill="#8F7159">2º PM</text>
      <!-- Mental foramen -->
      <circle cx="147" cy="175" r="7" fill="#4A3425"/>
      <circle cx="147" cy="175" r="14" fill="#D32F2F" fill-opacity="0.3"/>
      <!-- Needle vector -->
      <line x1="220" y1="130" x2="152" y2="173" stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round"/>
      <text x="35" y="30" font-size="11" fill="#3A2417" font-weight="700">Forame Mentual: Entre os Pré-molares</text>
      <text x="35" y="44" font-size="10" fill="#8F7159">Pressionar por 2 min para anestesiar o Nervo Incisivo (Polpa)</text>
    </svg>`
  }
];

const CASOS_CLINICOS_DATA = [
  {
    id: "caso_1",
    numero: 1,
    titulo: "Exodontia do dente 26 com abscesso periapical agudo",
    categoria: "Cirurgia / Urgência",
    arcada: "Maxila",
    dente: "26 (Primeiro Molar Superior Esquerdo)",
    cenario: "Paciente de 38 anos comparece com dor lancinante, tumefação flutuante no fundo de sulco vestibular do elemento 26 e mobilidade dental severa decorrente de abscesso periapical. Indicação de exodontia imediata.",
    pergunta: "Qual(is) técnica(s) você deve executar, qual agulha, quantidade de anestésico, orientação do bisel, cuidados com êmbolo e POR QUE a escolha dessa abordagem?",
    solucao: {
      tecnicasEleicao: [
        "1. Bloqueio do Nervo Alveolar Superior Posterior (ASP / Pós-Túber)",
        "2. Bloqueio do Nervo Palatino Maior",
        "3. Infiltração subperióstica no fundo de sulco do pré-molar ou Bloqueio Infraorbital para a raiz mésio-vestibular (ASM)"
      ],
      justificativaEscolha: "1) POR QUE BLOQUEIO E NÃO INFILTRATIVA LOCAL: O elemento apresenta abscesso com inflamação/infecção aguda. O pH tecidual no local está acídico (pH ≈ 5.0 a 5.5), o que impede a dissociação da molécula anestésica para sua forma lipofílica livre (base não ionizada RN), anulando a penetração na membrana nervosa. Além disso, infiltrar diretamente dentro do abscesso causaria dor extrema por pressão e risco iminente de disseminação bacteriana para a fáscia profunda. Portanto, o bloqueio troncular (pós-túber) à distância em tecido sadio é OBRIGATÓRIO. 2) POR QUE O PALATINO MAIOR: Trata-se de uma CIRURGIA/EXODONTIA (Regra de Ouro: exige plexo externo + plexo interno para descolamento da fibromucosa palatina). 3) PECULIARIDADE DO DENTE 26: A raiz mésio-vestibular do 1º molar superior é inervada pelo ASM em ~28% dos casos; se o paciente referir sensibilidade na luxação mesial, complementar com subperióstica à distância ou infraorbital.",
      agulha: "Pós-túber: Agulha LONGA (27G), inserida apenas pela METADE (~16 mm). Palatino Maior: Agulha CURTA (27G ou 30G), inserção rasa.",
      quantidade: "Pós-túber: 1 tubete (1,8 mL). Palatino Maior: MÁXIMO ⅓ de tubete (0,6 mL). Total: ~1,3 tubetes.",
      embolo: "Crucial desprender o êmbolo antes da punção e descartar a 1ª gota, assegurando refluxo livre no teste de aspiração (o plexo pterigóideo tem risco de punção venosa).",
      bisel: "Pós-túber: Bisel voltado para o osso (para cima e para dentro, em contato com o túber). Palatino Maior: Bisel voltado para o osso palatino.",
      referenciais: "Pós-túber: Túber da maxila, fundo de sulco, ápice DV do 2º molar, processo zigomático da maxila. Palatino maior: Forame palatino maior (~1 cm da margem gengival entre os 2 últimos molares).",
      pontoInsercao: "Pós-túber: Fundo de sulco acima do ápice DV do 2º molar com angulação de 45° sagital e 45° oclusal. Palatino: Anterior ao forame com apoio nos pré-molares contralaterais.",
      nervosAnestesiados: "Nervo Alveolar Superior Posterior (ASP) + Nervo Palatino Maior (+ ASM se complementado).",
      armadilhas: "NÃO infiltrar no pus! Cuidado com o plexo venoso pterigóideo na pós-túber (não aprofundar além de 16 mm)."
    }
  },
  {
    id: "caso_2",
    numero: 2,
    titulo: "Tratamento Endodôntico do dente 24 (1º Pré-molar Superior) sem infecção",
    categoria: "Endodontia",
    arcada: "Maxila",
    dente: "24 (Primeiro Pré-Molar Superior Esquerdo)",
    cenario: "Paciente de 27 anos com pulpite irreversível sintomática no dente 24 após restauração profunda de resina. Ausência de abscesso, tumefação ou fístula.",
    pergunta: "Qual técnica anestésica de eleição, qual agulha, quantidade, bisel, e por que NÃO se anestesia o palatino?",
    solucao: {
      tecnicasEleicao: [
        "Infiltrativa Subperióstica Posterior no dente 24 (ou Bloqueio Infraorbital se falhar)"
      ],
      justificativaEscolha: "1) POR QUE APENAS SUBPERIÓSTICA: Trata-se de um procedimento conservador em dente isolado (ENDODONTIA) sem infecção de fundo de sulco. A maxila apresenta cortical porosa, permitindo excelente difusão. 2) REGRA DE OURO DA PROVA: A polpa e o periodonto apical do 24 são inervados exclusivamente pelo Nervo Alveolar Superior Médio (ASM). O nervo palatino maior inerva apenas a mucosa e a tábua óssea palatina, que NÃO são tocadas no tratamento de canal. Anestesiar o palato seria erro e causaria desconforto desnecessário de deglutição ao paciente.",
      agulha: "Agulha LONGA (27G), introduzida no fundo de sulco com inclinação de 45° em direção ao ápice do dente.",
      quantidade: "1 tubete completo (1,8 mL) para garantir profundidade anestésica na polpa inflamada.",
      embolo: "Desprender o êmbolo previamente na carpule para evitar sobressaltos e realizar aspiração negativa.",
      bisel: "Bisel voltado para a cortical óssea vestibular do ápice radicular.",
      referenciais: "Prega mucovestibular (fundo de sulco), longo eixo do 24, estimativa do ápice (~2 alturas coronárias).",
      pontoInsercao: "Fundo de sulco vestibular na altura do ápice do 24 com seringa a 45°.",
      nervosAnestesiados: "Nervo Alveolar Superior Médio (ASM) e seus ramos periapicais.",
      armadilhas: "Se a polpa continuar sensível ao adentrar a câmara pulpar: recorrer ao Bloqueio Infraorbital para aprofundar a analgesia troncular do ASM e ASA antes da instrumentação."
    }
  },
  {
    id: "caso_3",
    numero: 3,
    titulo: "Exodontia do dente 38 (Terceiro Molar Inferior semi-incluso)",
    categoria: "Cirurgia",
    arcada: "Mandíbula",
    dente: "38 (Terceiro Molar Inferior Esquerdo)",
    cenario: "Paciente jovem com episódios repetidos de pericoronarite no 38 semi-incluso. Necessita de cirurgia com osteotomia e odontossecção.",
    pergunta: "Quais técnicas anestésicas obrigatórias (técnica direta de 1 tempo), agulha, volume, cuidados de segurança e o que acontece se esquecer o nervo bucal?",
    solucao: {
      tecnicasEleicao: [
        "1. Bloqueio Pterigomandibular Direto (Nervo Alveolar Inferior)",
        "2. Bloqueio do Nervo Lingual (no recuo da agulha)",
        "3. Bloqueio do Nervo Bucal (obrigatório)"
      ],
      justificativaEscolha: "1) POR QUE TÉCNICA DIRETA: A mandíbula possui cortical óssea espessa e compacta na região molar, impedindo que anestésicos infiltrativos alcancem a polpa; o bloqueio troncular do NAI é mandatório. A técnica direta de 1 tempo possui maior índice de sucesso e menor risco de trauma tecidual que a técnica indireta de 3 tempos. 2) POR QUE O NERVO BUCAL: O descolamento do retalho vestibular, a osteotomia e a sindesmotomia vestibular dependem estritamente da anestesia do nervo bucal. A técnica pterigomandibular tradicional anestesia o NAI e o Lingual, MAS NÃO ANESTESIA O BUCAL! Esquecer o bucal causará dor aguda insuportável no paciente logo na incisão da mucosa jugal.",
      agulha: "Agulha LONGA (30 a 35 mm, 27G). Inserir de 20 a 25 mm até sentir CONTATO ÓSSEO RÍGIDO. Deixar sempre 5 a 6 mm de agulha fora da mucosa.",
      quantidade: "1 tubete e meio a 2 tubetes: ¾ do tubete para o NAI, ¼ do tubete para o Lingual (ao recuar a metade da agulha) e ½ tubete para o Nervo Bucal no trígono retromolar.",
      embolo: "Desprender o êmbolo da carpule e descartar 1 gota antes de entrar no paciente.",
      bisel: "Bisel voltado para o ramo medial da mandíbula (voltado para o osso).",
      referenciais: "Incisura coronóide na borda anterior do ramo (palpada com o polegar), rafe pterigomandibular, depressão pterigomandibular, altura de 1 cm acima do plano oclusal inferior, apoio da seringa nos pré-molares contralaterais.",
      pontoInsercao: "Depressão pterigomandibular a 1 cm acima do plano oclusal. No bucal: mucosa jugal vestibular e distal ao 38 no trígono retromolar.",
      nervosAnestesiados: "Nervo Alveolar Inferior, Nervo Lingual, Nervo Mentual, Nervo Incisivo e Nervo Bucal.",
      armadilhas: "NÃO INJETAR SE NÃO TOCAR OSSO! Se a agulha penetrar 25 mm sem contato ósseo, ela está na glândula parótida: injetar provocará paralisia facial temporária do nervo facial (VII par)."
    }
  },
  {
    id: "caso_4",
    numero: 4,
    titulo: "Restauração de Cárie Classe III no dente 13 (Canino Superior)",
    categoria: "Dentística",
    arcada: "Maxila",
    dente: "13 (Canino Superior Direito)",
    cenario: "Paciente assintomático com lesão de cárie proximal no elemento 13. Procedimento de dentística restauradora com isolamento absoluto.",
    pergunta: "Qual técnica anestésica de eleição, qual agulha, quantidade de tubete e orientação do bisel?",
    solucao: {
      tecnicasEleicao: [
        "Infiltrativa Subperióstica Anterior no fundo de sulco do dente 13"
      ],
      justificativaEscolha: "1) Dente isolado em maxila anterior sem infecção: a técnica subperióstica terminal é de rápida execução, altíssimo índice de sucesso (>95%) e minimamente traumática. 2) Nervo ASA inerva polpa e periodonto do canino. 3) NÃO há necessidade de nasopalatino, a menos que o grampo de isolamento invada agressivamente a margem gengival palatina (neste caso, basta um botão anestésico palatino mínimo de 2 gotas).",
      agulha: "Agulha CURTA (21 a 25 mm, calibre 27G ou 30G), introduzida paralela ao longo eixo do canino.",
      quantidade: "½ tubete (0,9 mL) é suficiente para dentística restauradora em canino.",
      embolo: "Desprender previamente a borracha do tubete na seringa.",
      bisel: "Bisel voltado para a cortical óssea maxilar.",
      referenciais: "Fundo de sulco vestibular (prega mucovestibular), longo eixo da raiz do canino e eminência canina.",
      pontoInsercao: "Prega mucovestibular no ápice do dente 13 (~2 alturas de coroa acima da margem cervical).",
      nervosAnestesiados: "Ramos terminais livres do Nervo Alveolar Superior Anterior (ASA).",
      armadilhas: "Lembrar que o canino superior possui a raiz mais longa da arcada humana (até 30 mm); posicionar a punção suficientemente alta no fundo de sulco para que a solução banhe o ápice verdadeiro."
    }
  },
  {
    id: "caso_5",
    numero: 5,
    titulo: "Exodontia do dente 21 com fratura coronorradicular",
    categoria: "Cirurgia",
    arcada: "Maxila",
    dente: "21 (Incisivo Central Superior Esquerdo)",
    cenario: "Trauma oclusal com fratura subgengival não restaurável do dente 21. Ausência de abscesso agudo.",
    pergunta: "Quais técnicas anestésicas obrigatórias (plexos), agulha, volumes e técnica para reduzir a dor palatina?",
    solucao: {
      tecnicasEleicao: [
        "1. Infiltrativa Subperióstica Anterior no fundo de sulco do 21 (Plexo Externo)",
        "2. Bloqueio do Nervo Nasopalatino (Plexo Interno)"
      ],
      justificativaEscolha: "1) REGRA DE OURO DA EXODONTIA: Para extrair o dente 21, é mandatória a anestesia do PLEXO EXTERNO (Subperióstica anterior no ASA - inerva polpa, osso alveolar e mucosa vestibular) E DO PLEXO INTERNO (Nasopalatino - inerva periósteo, ligamento palatino e mucosa palatina). O fórceps e o sindesmótomo comprimem intensamente a tábua palatina. 2) PROTOCOLO DE CONFORTO NO NASOPALATINO: O palato anterior é a área mais dolorosa da boca. Protocolo: aplicar anestésico tópico por 2 min com swab sob forte pressão isquêmica; injetar ¼ de tubete na papila interdental vestibular entre o 11 e o 21 (a solução extravasa suavemente para o palato através das fibras transeptais); só então puncionar a mucosa palatina lateral à papila incisiva.",
      agulha: "Ambas com agulha CURTA (21 a 25 mm, calibre 27G ou 30G).",
      quantidade: "Subperióstica anterior: 1 tubete (1,8 mL). Nasopalatino: MÁXIMO ⅓ de tubete (0,6 mL). Total: ~1,3 tubetes.",
      embolo: "Desprender êmbolo antes da punção.",
      bisel: "Bisel voltado para o osso tanto no fundo de sulco quanto no palato.",
      referenciais: "Vestibular: longo eixo do 21 e fundo de sulco. Palato: papila incisiva (inserção lateral à sua base).",
      pontoInsercao: "Vestibular: ápice do 21 paralelo ao eixo. Palatino: lateral à papila incisiva com seringa a 45°.",
      nervosAnestesiados: "Nervo Alveolar Superior Anterior (ASA) + Nervo Nasopalatino.",
      armadilhas: "NUNCA perfurar diretamente no meio da papila incisiva (é um tecido denso e ricamente inervado, a punção central causa dor em choque excruciante)."
    }
  },
  {
    id: "caso_6",
    numero: 6,
    titulo: "Paciente Hemofílico necessitando de Endodontia no dente 27",
    categoria: "Endodontia / Paciente Especial",
    arcada: "Maxila",
    dente: "27 (Segundo Molar Superior Esquerdo)",
    cenario: "Paciente portador de Hemofilia A (deficiência de Fator VIII) com pulpite irreversível sintomática no segundo molar superior.",
    pergunta: "Por que a técnica Pós-Túber (ASP) está TERMINANTEMENTE CONTRAINDICADA neste caso, e qual técnica deve ser executada como alternativa?",
    solucao: {
      tecnicasEleicao: [
        "Infiltrações Subperiósticas Posteriores graduais com agulha curta e injeção ultralenta"
      ],
      justificativaEscolha: "1) CONTRAINDICAÇÃO ABSOLUTA DO PÓS-TÚBER EM HEMOFÍLICOS: A região do túber da maxila abriga o volumoso plexo venoso pterigóideo e a artéria maxilar interna. Se a agulha longa transfixar ou lacerar um vaso desse plexo em um hemofílico, formará um hematoma facial e pterigomandibular incontrolável, capaz de comprimir as vias aéreas superiores com risco de asfixia. 2) CONDUTA CORRETA NA PROVA: Executar infiltrativas subperiósticas terminais com agulha curta no fundo de sulco, de forma gradual, aspirando repetidamente e depositando o anestésico lentamente para evitar qualquer hematoma profundo.",
      agulha: "Agulha CURTA (21 a 25 mm, calibre 27G ou 30G), evitando agulha longa e evitando aprofundamento excessivo.",
      quantidade: "1 tubete fracionado lentamente (1,8 mL).",
      embolo: "Desprender o êmbolo e realizar aspiração repetida.",
      bisel: "Bisel voltado estritamente para o osso alveolar.",
      referenciais: "Fundo de sulco na altura dos ápices do dente 27.",
      pontoInsercao: "Fundo de sulco vestibular junto à cortical óssea do 27.",
      nervosAnestesiados: "Ramos terminais periapicais do Nervo Alveolar Superior Posterior.",
      armadilhas: "Pergunta favorita de banca: 'Pode fazer pós-túber em hemofílico?' Resposta: NÃO! O risco de hematoma maciço por perfuração do plexo pterigóideo é inadmissível."
    }
  },
  {
    id: "caso_7",
    numero: 7,
    titulo: "Exodontia múltipla dos dentes 11, 12, 21 e 22 (Bateria Anterior Superior)",
    categoria: "Cirurgia Múltipla",
    arcada: "Maxila",
    dente: "11, 12, 21 e 22 (Incisivos Centrais e Laterais Superiores)",
    cenario: "Paciente idoso com doença periodontal avançada e perda óssea generalizada nos 4 incisivos superiores, indicada exodontia em bloco para prótese total imediata.",
    pergunta: "Em vez de fazer 4 picadas infiltrativas na vestibular, qual bloqueio regional maxilar pode ser eleito, associado a qual técnica palatina?",
    solucao: {
      tecnicasEleicao: [
        "1. Bloqueio Infraorbital Bilateral (Direito e Esquerdo)",
        "2. Bloqueio do Nervo Nasopalatino (única punção palatina)"
      ],
      justificativaEscolha: "1) POR QUE O BLOQUEIO INFRAORBITAL BILATERAL: Fazer 4 punções subperiósticas isoladas requer maior volume anestésico, múltiplas picadas e menor duração. O bloqueio dos nervos infraorbitais direito e esquerdo anestesia com apenas 2 injeções vestibulares todos os dentes de pré-molares a incisivos de ambos os lados (ASA + ASM). 2) POR QUE O NASOPALATINO: Uma única injeção no forame nasopalatino anestesia toda a fibromucosa e cortical palatina de canino a canino, cobrindo com folga os 4 elementos a serem extraídos.",
      agulha: "Infraorbital: Agulha LONGA (27G, inserir metade, ~16 mm). Nasopalatino: Agulha CURTA (27G ou 30G).",
      quantidade: "1 tubete para o forame infraorbital direito, 1 tubete para o esquerdo e ⅓ de tubete para o nasopalatino. Total: ~2,3 tubetes.",
      embolo: "Desprender êmbolo previamente.",
      bisel: "Voltado para o osso em todas as punções.",
      referenciais: "Forames infraorbitais (palpados 8-10 mm abaixo da órbita na linha pupilar bilateralmente) e papila incisiva no palato.",
      pontoInsercao: "Fundo de sulco no 1º pré-molar superior direito e esquerdo; lateral à papila incisiva no palato.",
      nervosAnestesiados: "Nervos ASA e ASM bilaterais + Nervo Nasopalatino bilateralmente.",
      armadilhas: "Manter a compressão digital por 1 a 2 minutos sobre ambos os forames infraorbitais após a injeção para direcionar o líquido ao canal infraorbital."
    }
  },
  {
    id: "caso_8",
    numero: 8,
    titulo: "Exodontia dos dentes 16 e 17 no mesmo quadrante",
    categoria: "Cirurgia",
    arcada: "Maxila",
    dente: "16 e 17 (Primeiro e Segundo Molares Superiores Direitos)",
    cenario: "Exodontia indicada para ambos os molares por cáries extensas e destruição subcrestal.",
    pergunta: "Qual combinação de técnicas é mais racional e econômica em tubetes e picadas, e quais nervos serão bloqueados?",
    solucao: {
      tecnicasEleicao: [
        "1. Bloqueio do Nervo Alveolar Superior Posterior (Pós-túber / ASP)",
        "2. Bloqueio do Nervo Palatino Maior",
        "3. Complementação subperióstica na raiz mésio-vestibular do 16 se necessário"
      ],
      justificativaEscolha: "1) Como são 2 molares superiores a serem extraídos (área extensa), o bloqueio troncular Pós-túber é a técnica de eleição para o plexo externo, conferindo anestesia profunda de 2º e 3º molares e 2 raízes do 1º molar com apenas 1 tubete. 2) O Bloqueio do Palatino Maior cobre a mucosa palatina de ambos os molares com uma única punção e ⅓ de tubete. 3) Se a raiz mésio-vestibular do 16 doer durante a alavancagem, complementa-se com ½ tubete de subperióstica no fundo de sulco do 1º molar.",
      agulha: "Pós-túber: Agulha LONGA (inserir metade). Palatino: Agulha CURTA.",
      quantidade: "Pós-túber: 1 tubete (1,8 mL). Palatino: ⅓ tubete (0,6 mL). Complementação MV: ½ tubete se necessário.",
      embolo: "Desprender êmbolo previamente.",
      bisel: "Voltado para o osso.",
      referenciais: "Túber maxilar, ápice DV do 17, forame palatino maior.",
      pontoInsercao: "Fundo de sulco do último molar com seringa a 45°/45° e palatino medial ao forame.",
      nervosAnestesiados: "Nervo Alveolar Superior Posterior (ASP) + Nervo Palatino Maior (+ ASM se complementado).",
      armadilhas: "Não injetar rapidamente no palatino maior; respeitar o limite de ⅓ de tubete para não causar necrose isquêmica."
    }
  },
  {
    id: "caso_9",
    numero: 9,
    titulo: "Exodontia do dente 36 (Primeiro Molar Inferior) por destruição coronorradicular",
    categoria: "Cirurgia",
    arcada: "Mandíbula",
    dente: "36 (Primeiro Molar Inferior Esquerdo)",
    cenario: "Paciente de 42 anos indicado para exodontia do elemento 36 devido à cárie subgengival extensa e lesão de furca. Ausência de abscesso agudo.",
    pergunta: "Quais técnicas anestésicas obrigatórias (técnica direta de 1 tempo), agulha, volume, cuidados de segurança e por que o nervo bucal DEVE ser anestesiado?",
    solucao: {
      tecnicasEleicao: [
        "1. Bloqueio Pterigomandibular Direto (Nervo Alveolar Inferior)",
        "2. Bloqueio do Nervo Lingual (ao recuar a agulha)",
        "3. Bloqueio do Nervo Bucal (obrigatório para tecidos vestibulares)"
      ],
      justificativaEscolha: "1) POR QUE TÉCNICA DIRETA DO NAI: A mandíbula na região molar possui cortical óssea espessa e compacta (linha oblíqua e crista alveolar densa), impedindo que a anestesia infiltrativa atinja a polpa; o bloqueio troncular do NAI é indispensável. 2) POR QUE O NERVO BUCAL É MANDATÓRIO: O bloqueio pterigomandibular clássico anestesia o NAI e o Lingual, MAS NÃO ANESTESIA O BUCAL! Como se trata de uma exodontia, a sindesmotomia, a apreensão com o fórceps 17 e a luxação vestibular comprimem e descolam a mucosa vestibular dos molares, inervada estritamente pelo Nervo Bucal. Esquecer o nervo bucal fará o paciente sentir dor aguda no descolamento vestibular.",
      agulha: "Pterigomandibular: Agulha LONGA (30 a 35 mm, 27G), inserida de 20 a 25 mm até sentir CONTATO ÓSSEO RÍGIDO. Bucal: Mesma agulha longa (ou curta), inserção rasa (2 a 4 mm) no trígono retromolar.",
      quantidade: "1 tubete e meio a 2 tubetes: ¾ do tubete para o NAI, ¼ para o Lingual (ao recuar a metade da agulha) e ½ tubete para o Nervo Bucal no trígono retromolar.",
      embolo: "Desprender o êmbolo previamente na carpule para garantir teste de refluxo livre.",
      bisel: "Bisel voltado para a cortical óssea (ramo medial na pterigomandibular e trígono no bucal).",
      referenciais: "Pterigomandibular: Incisura coronóide, rafe pterigomandibular, depressão pterigomandibular, 1 cm acima do plano oclusal, pré-molares opostos. Bucal: Trígono retromolar, distal e vestibular ao último molar.",
      pontoInsercao: "Pterigomandibular: Depressão pterigomandibular a 1 cm acima do plano oclusal. Bucal: Mucosa jugal no trígono retromolar.",
      nervosAnestesiados: "Nervo Alveolar Inferior, Nervo Lingual, Nervo Incisivo, Nervo Mentual e Nervo Bucal.",
      armadilhas: "NÃO INJETAR NA PTERIGOMANDIBULAR SE NÃO SENTIR O BATENTE ÓSSEO! Se a agulha for inserida além de 25 mm sem contato ósseo, estará dentro da glândula parótida, provocando anestesia transitória do Nervo Facial (VII par) e paralisia facial temporária."
    }
  },
  {
    id: "caso_10",
    numero: 10,
    titulo: "Biópsia excisional de lesão superficial na mucosa jugal / lábio inferior",
    categoria: "Estomatologia / Cirurgia de Partes Moles",
    arcada: "Mandíbula / Mucosa",
    dente: "Mucosa Jugal / Lábio Inferior",
    cenario: "Paciente com nódulo hiperplásico pedunculado de 6 mm na mucosa jugal próximo à comissura labial esquerda.",
    pergunta: "Qual técnica anestésica de eleição para partes moles, qual agulha, quantidade e quais sintomas esperados?",
    solucao: {
      tecnicasEleicao: [
        "Infiltração Submucosa Circunscrita em halo ao redor da lesão"
      ],
      justificativaEscolha: "1) Por se tratar estritamente de cirurgia de partes moles superficiais da mucosa oral, a técnica Submucosa é a mais conservadora e eficaz. 2) Infiltra-se em halo ao redor da lesão para não distorcer o tecido patológico nem mascarar a arquitetura histológica na análise anatomopatológica. 3) O vasoconstritor promove hemostasia local para o campo cirúrgico.",
      agulha: "Agulha CURTA (21 a 25 mm, calibre 27G ou 30G), inserindo apenas o bisel na submucosa.",
      quantidade: "MÁXIMO ½ tubete (0,9 mL) em pequenos volumes fracionados.",
      embolo: "Desprender êmbolo previamente.",
      bisel: "Bisel voltado para os tecidos profundos.",
      referenciais: "A própria lesão e o fundo de sulco adjacente.",
      pontoInsercao: "Tecido submucoso normal a 3 mm da margem da lesão.",
      nervosAnestesiados: "Ramos terminais livres da mucosa e submucosa.",
      armadilhas: "NÃO injetar dentro do nódulo (biópsia)! A formação de uma pápula/bolha isquêmica é normal e esperada."
    }
  },
  {
    id: "caso_11",
    numero: 11,
    titulo: "Exodontia do dente 43 (Canino Inferior)",
    categoria: "Cirurgia",
    arcada: "Mandíbula",
    dente: "43 (Canino Inferior Direito)",
    cenario: "Necessidade de extração do canino inferior direito para reabilitação protética.",
    pergunta: "Quais nervos devem ser anestesiados na prova prática, e por que a resposta clássica do professor sobre os dentes 43, 42 e 41 exige precisão anatômica?",
    solucao: {
      tecnicasEleicao: [
        "1. Bloqueio Pterigomandibular Direto (ou Bloqueio no Forame Mentual com compressão para o Nervo Incisivo)",
        "2. Infiltração na mucosa lingual (Nervo Lingual) se feito bloqueio mentual"
      ],
      justificativaEscolha: "1) PEGADINHA CLÁSSICA DA BANCA: Nos dentes 43, 42 e 41 (canino e incisivos inferiores), a inervação pulpar e da tábua óssea é dada pelo NERVO INCISIVO (ramo anterior terminal do NAI). O Nervo Mentual inerva apenas a mucosa labial e mento! Dizer que 'o mentual inerva o dente' zera a questão. 2) Por ser exodontia (cirurgia), é obrigatório anestesiar a vertente lingual (Nervo Lingual). Se optar pelo bloqueio Pterigomandibular, o NAI e o Lingual já são bloqueados juntos.",
      agulha: "Pterigomandibular: agulha LONGA. Mentual + lingual: agulha CURTA.",
      quantidade: "1 tubete para Pterigomandibular (ou 1 tubete no forame mentual + ⅓ no sulco lingual).",
      embolo: "Desprender êmbolo previamente.",
      bisel: "Voltado para o osso.",
      referenciais: "Incisura coronóide e rafe (pterigomandibular) ou forame mentual entre pré-molares.",
      pontoInsercao: "1 cm acima do plano oclusal (pterigomandibular) ou fundo de sulco entre pré-molares (mentual).",
      nervosAnestesiados: "Nervo Incisivo + Nervo Mentual + Nervo Lingual.",
      armadilhas: "Atenção à inervação cruzada da linha média (anastomoses do lado oposto nos incisivos e caninos); se houver sensibilidade mesial, infiltrar algumas gotas no sulco do lado oposto."
    }
  },
  {
    id: "caso_12",
    numero: 12,
    titulo: "Exodontia do dente 25 (Segundo Pré-molar Superior) com fratura coronária",
    categoria: "Cirurgia",
    arcada: "Maxila",
    dente: "25 (Segundo Pré-Molar Superior Esquerdo)",
    cenario: "Exodontia do 25 com restos radiculares submucosos sem infecção ativa.",
    pergunta: "Qual combinação de técnicas para exodontia de pré-molar superior (plexo externo e interno) e qual o volume seguro no palato?",
    solucao: {
      tecnicasEleicao: [
        "1. Infiltrativa Subperióstica Posterior no dente 25 (ou Bloqueio Infraorbital)",
        "2. Bloqueio do Nervo Palatino Maior"
      ],
      justificativaEscolha: "1) PLEXO EXTERNO: O elemento 25 tem sua polpa e tábua vestibular inervadas pelo Nervo Alveolar Superior Médio (ASM); uma infiltração subperióstica posterior com agulha longa inclinada a 45° no ápice resolve a vertente vestibular. 2) PLEXO INTERNO: Como se trata de exodontia com uso de alavanca apical e fórceps 150, é obrigatório descolar o periósteo palatino, suprido pelo Nervo Palatino Maior. 3) VOLUME NO PALATO: Regra de ouro da segurança — depositar no máximo ⅓ de tubete (0,6 mL) sob injeção lenta para evitar isquemia tecidual e necrose.",
      agulha: "Vestibular: Agulha LONGA a 45°. Palatino: Agulha CURTA.",
      quantidade: "Vestibular: 1 tubete (1,8 mL). Palatino: ⅓ tubete (0,6 mL). Total: ~1,3 tubetes.",
      embolo: "Desprender êmbolo antes da punção.",
      bisel: "Voltado para o osso.",
      referenciais: "Fundo de sulco do 25 e forame palatino maior entre os últimos molares.",
      pontoInsercao: "Fundo de sulco no ápice do 25 (vestibular) e metade da distância da rafe ao bordo gengival (palatino).",
      nervosAnestesiados: "Nervo Alveolar Superior Médio (ASM) + Nervo Palatino Maior.",
      armadilhas: "Nunca ultrapassar ½ tubete no palato; observar a isquemia e interromper a injeção caso haja branqueamento tecidual excessivo."
    }
  }
];
