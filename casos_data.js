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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Bloqueio do Nervo ASP (Pós-Túber)</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Crista zigomático-alveolar, túber da maxila e ápice DV do 2º molar</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Maxila · Troncular</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Maxilla Tuber Contour -->
    <path d="M 60,85 Q 160,80 230,95 Q 290,110 325,140 Q 345,160 335,190 Q 320,205 275,205 L 60,205 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>
    
    <!-- Crista Zigomático-Alveolar (Buttress) -->
    <path d="M 135,85 C 145,110 150,135 145,155 C 137,155 130,125 125,85 Z" fill="#E6DDD0" stroke="#A89484" stroke-width="1.2" stroke-dasharray="3,2"/>
    
    <!-- ASP Foramina -->
    <circle cx="310" cy="155" r="2.5" fill="#5D4037"/>
    <circle cx="318" cy="163" r="2.2" fill="#5D4037"/>
    <circle cx="308" cy="168" r="2.2" fill="#5D4037"/>

    <!-- ASP Nerve Trunk & Branches -->
    <path d="M 325,100 Q 318,130 310,155" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 310,155 Q 285,175 235,185" fill="none" stroke="#D97706" stroke-width="1.8" stroke-dasharray="3,2"/>
    <path d="M 310,155 Q 265,175 180,185" fill="none" stroke="#D97706" stroke-width="1.8" stroke-dasharray="3,2"/>

    <!-- Mucobuccal Fold (Fundo de Sulco) - purely in vestibule -->
    <path d="M 70,150 Q 150,146 220,150 Q 280,158 320,172" fill="none" stroke="#F43F5E" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="20" y="152" font-size="7.5" font-weight="600" fill="#E11D48" font-family="sans-serif">Fundo de Sulco</text>

    <!-- Teeth Anatomy (Lateral profile: 1º M, 2º M, 3º M) -->
    <!-- 1º Molar (16/26) -->
    <g transform="translate(100, 155)">
      <path d="M 8,20 C 4,5 6,-7 11,-15 C 16,-7 18,5 15,20 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <path d="M 24,20 C 20,5 22,-9 27,-15 C 32,-9 34,5 30,20 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <path d="M 2,20 Q 18,18 35,20 L 34,48 Q 18,51 3,48 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="18" y="38" font-size="8.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º M</text>
    </g>

    <!-- 2º Molar (17/27) - Dente de Referência -->
    <g transform="translate(155, 155)">
      <path d="M 8,20 C 4,5 6,-7 11,-15 C 16,-7 18,5 15,20 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <!-- Distovestibular Root - Ponto Guia -->
      <path d="M 24,20 C 20,5 24,-9 29,-16 C 34,-9 35,5 31,20 Z" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.4"/>
      <path d="M 2,20 Q 18,18 35,20 L 34,48 Q 18,51 3,48 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="18" y="38" font-size="8.5" font-weight="800" fill="#DC2626" text-anchor="middle" font-family="sans-serif">2º M</text>
      <text x="29" y="-20" font-size="7.5" font-weight="800" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Ápice DV</text>
    </g>

    <!-- 3º Molar (18/28) -->
    <g transform="translate(210, 155)">
      <path d="M 8,20 C 5,5 7,-6 11,-13 C 15,-6 17,5 14,20 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <path d="M 22,20 C 19,5 21,-7 25,-13 C 29,-7 31,5 28,20 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <path d="M 2,20 Q 16,18 31,20 L 30,48 Q 16,51 3,48 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="16" y="38" font-size="8.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">3º M</text>
    </g>

    <!-- Puncture Point: Fundo de sulco no ápice DV do 2º Molar -->
    
    <g transform="translate(184, 149)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Trajectory Vector (approaching in buccal space, not cutting tooth) -->
    <g transform="translate(130, 185) rotate(-33)">
      <line x1="0" y1="0" x2="65" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="65,-2.5 70,0 65,2.5" fill="#DC2626"/>
    </g>
    <!-- Trajectory dashed penetration path -->
    <line x1="184" y1="149" x2="230" y2="115" stroke="#DC2626" stroke-width="1.4" stroke-dasharray="3,2"/>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="52" width="105" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="68.5" y="63" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Crista Zigomática</text>
    <text x="68.5" y="72" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Palpar c/ indicador</text>
    
    <path d="M 121,65 L 138,95" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="305" y="52" width="98" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="354.0" y="63" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Túber da Maxila</text>
    <text x="354.0" y="72" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Forames ASP</text>
    
    <path d="M 345,78 L 325,125" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="128" y="48" width="142" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="199.0" y="59" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="199.0" y="68" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Fundo de sulco no ápice DV do 2º M</text>
    
    <path d="M 199,74 L 186,140" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="275" y="198" width="130" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="340.0" y="209" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Angulação em 3 Planos (45°)</text>
    <text x="340.0" y="218" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">45° Cima · 45° Dentro · 45° Trás</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Bloqueio do Nervo Infraorbital (ASA + ASM)</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Margem infraorbital, linha pupilar central e forame infraorbital</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Maxila · Troncular</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Eye & Pupil Contour -->
    <path d="M 175,54 Q 210,40 245,54 Q 210,68 175,54 Z" fill="#FFFFFF" stroke="#9CA3AF" stroke-width="1.2"/>
    <circle cx="210" cy="54" r="5" fill="#2563EB"/>
    <circle cx="210" cy="54" r="2" fill="#1E293B"/>

    <!-- Inferior Orbital Rim (Margem Infraorbital) -->
    <path d="M 155,75 Q 210,68 265,75 Q 255,85 210,83 Q 165,85 155,75 Z" fill="#EADBC8" stroke="#9A8472" stroke-width="1.3"/>

    <!-- Vertical Pupillary Line -->
    <line x1="210" y1="42" x2="210" y2="215" stroke="#3B82F6" stroke-width="1" stroke-dasharray="3,3"/>

    <!-- Infraorbital Foramen (8 a 10 mm abaixo da margem) -->
    <ellipse cx="210" cy="110" rx="7.5" ry="5.5" fill="#451A03" stroke="#78350F" stroke-width="1"/>

    <!-- Infraorbital Nerve Branches -->
    <path d="M 210,110 Q 185,130 175,165" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M 210,110 Q 215,130 210,165" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M 210,110 Q 230,130 240,165" fill="none" stroke="#D97706" stroke-width="1.8" stroke-dasharray="3,2"/>

    <!-- Teeth Anatomy (Canino, 1º PM, 2º PM) -->
    <!-- Canino (13/23) -->
    <g transform="translate(160, 168)">
      <path d="M 12,18 C 10,6 9,-4 14,-15 C 19,-4 18,6 16,18 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <path d="M 3,18 Q 14,16 25,18 L 23,44 L 14,50 L 5,44 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.4"/>
      <text x="14" y="38" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">C</text>
    </g>

    <!-- 1º Pré-Molar (14/24) - DENTE GUIA -->
    <g transform="translate(196, 168)">
      <path d="M 11,18 C 9,6 8,-4 14,-15 C 20,-4 19,6 17,18 Z" fill="url(#toothGrad)" stroke="#DC2626" stroke-width="1.4"/>
      <path d="M 3,18 Q 14,16 25,18 L 23,44 Q 14,48 5,44 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="14" y="38" font-size="8" font-weight="800" fill="#DC2626" text-anchor="middle" font-family="sans-serif">1º PM</text>
    </g>

    <!-- 2º Pré-Molar (15/25) -->
    <g transform="translate(232, 168)">
      <path d="M 11,18 C 9,6 8,-4 14,-15 C 20,-4 19,6 17,18 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <path d="M 3,18 Q 14,16 25,18 L 23,44 Q 14,48 5,44 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.4"/>
      <text x="14" y="38" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º PM</text>
    </g>

    <!-- Mucobuccal Fold Line (above roots, not slicing teeth) -->
    <path d="M 150,150 Q 210,147 270,150" fill="none" stroke="#F43F5E" stroke-width="1.4" stroke-dasharray="4,2"/>

    <!-- Puncture Point: Fundo de sulco sobre o 1º PM -->
    
    <g transform="translate(210, 149)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Track: Inserção a partir do fundo de sulco até o forame -->
    <line x1="210" y1="185" x2="210" y2="118" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <polygon points="208,118 210,112 212,118" fill="#DC2626"/>

    <!-- Finger Compression Indicator -->
    <g transform="translate(225, 98)">
      <rect width="48" height="18" rx="9" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1"/>
      <text x="24" y="12" font-size="7.5" font-weight="700" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">Dedo Guia</text>
      <path d="M 0,9 L -6,9" stroke="#3B82F6" stroke-width="1.3" stroke-linecap="round"/>
    </g>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="55" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="73.5" y="66" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Margem Infraorbital</text>
    <text x="73.5" y="75" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Palpar chanfradura</text>
    
    <path d="M 131,68 L 155,75" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="16" y="142" width="120" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="76.0" y="153" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="76.0" y="162" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Fundo de sulco no 1º PM</text>
    
    <path d="M 136,155 L 201,150" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="48" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="59" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Linha Pupilar Central</text>
    <text x="347.5" y="68" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Alinhamento vertical</text>
    
    <path d="M 290,61 L 245,54" fill="none" stroke="#3B82F6" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="102" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="113" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Compressão Digital</text>
    <text x="347.5" y="122" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Comprimir 1 a 2 min</text>
    
    <path d="M 290,115 L 273,107" fill="none" stroke="#3B82F6" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="185" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="196" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Trajetória da Agulha</text>
    <text x="347.5" y="205" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Paralela ao 1º PM</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Bloqueio do Nervo Palatino Maior</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Medial ao 2º/3º molar, forame palatino maior e junção palatina</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Palato · Troncular</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Palatal Vault & Arch -->
    <path d="M 80,60 C 80,140 120,200 210,200 C 300,200 340,140 340,60 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>
    
    <!-- Midline Palatal Raphe -->
    <line x1="210" y1="60" x2="210" y2="195" stroke="#A89484" stroke-width="1.3" stroke-dasharray="4,3"/>
    <text x="206" y="75" font-size="7.5" font-weight="600" fill="#8D7A68" text-anchor="end" font-family="sans-serif">Rafe Mediana</text>

    <!-- Transverse Palatal Suture / Soft Palate Junction -->
    <path d="M 120,165 Q 210,175 300,165" fill="none" stroke="#C4B5A5" stroke-width="1.2" stroke-dasharray="3,2"/>
    <text x="210" y="188" font-size="7.5" font-weight="600" fill="#8D7A68" text-anchor="middle" font-family="sans-serif">Junção Palato Duro / Mole</text>

    <!-- Right Side Molars -->
    <g transform="translate(285, 75)">
      <rect x="0" y="0" width="22" height="18" rx="4" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.3"/>
      <text x="11" y="12" font-size="7.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º M</text>
      <rect x="0" y="24" width="22" height="18" rx="4" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.3"/>
      <text x="11" y="36" font-size="7.5" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">2º M</text>
      <rect x="0" y="48" width="22" height="18" rx="4" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.3"/>
      <text x="11" y="60" font-size="7.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">3º M</text>
    </g>

    <!-- Greater Palatine Foramen -->
    <ellipse cx="262" cy="125" rx="5" ry="4" fill="#451A03" stroke="#78350F" stroke-width="1"/>

    <!-- Greater Palatine Nerve & Artery running forward -->
    <path d="M 262,125 Q 255,90 248,60" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round"/>

    <!-- Puncture Point: Tecido mole ANTERIOR ao forame -->
    
    <g transform="translate(256, 115)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Track: Seringa vindo dos pré-molares OPOSTOS -->
    <g transform="translate(130, 160) rotate(-22)">
      <line x1="0" y1="0" x2="115" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="115,-2.5 120,0 115,2.5" fill="#DC2626"/>
    </g>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="140" width="110" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="71.0" y="151" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Vindo do Lado Oposto</text>
    <text x="71.0" y="160" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Apoio nos PMs opostos</text>
    
    <path d="M 126,153 L 140,158" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="16" y="75" width="125" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="78.5" y="86" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="78.5" y="95" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Anterior ao forame</text>
    
    <path d="M 141,88 L 246,115" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="150" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="161" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Forame Palatino Maior</text>
    <text x="347.5" y="170" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Medial ao 2º/3º molar</text>
    
    <path d="M 290,155 L 268,130" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="48" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="59" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Volume Restrito</text>
    <text x="347.5" y="68" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">¼ a ⅓ tubete (isquemia)</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Bloqueio do Nervo Nasopalatino</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Papila incisiva, base lateral e dentes 11 e 21</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Palato · Troncular</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Anterior Palate Outline -->
    <path d="M 110,48 C 140,42 280,42 310,48 C 300,160 270,195 210,195 C 150,195 120,160 110,48 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>
    
    <!-- Central Incisors (Dentes 11 e 21 - Palatal View) -->
    <g transform="translate(182, 48)">
      <path d="M 2,0 L 24,0 L 22,22 L 4,22 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.3" rx="2"/>
      <text x="13" y="14" font-size="7.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">11</text>
      <path d="M 28,0 L 50,0 L 48,22 L 30,22 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.3" rx="2"/>
      <text x="39" y="14" font-size="7.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">21</text>
    </g>

    <!-- Midline Line -->
    <line x1="210" y1="48" x2="210" y2="190" stroke="#A89484" stroke-width="1" stroke-dasharray="3,3"/>

    <!-- Incisive Papilla (Papila Incisiva) -->
    <path d="M 210,80 C 220,80 223,95 218,108 C 214,116 206,116 202,108 C 197,95 200,80 210,80 Z" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.3"/>
    <text x="210" y="98" font-size="7.5" font-weight="700" fill="#BE185D" text-anchor="middle" font-family="sans-serif">Papila</text>

    <!-- Center Prohibited Mark -->
    <circle cx="210" cy="100" r="3" fill="#DC2626"/>
    <line x1="208" y1="98" x2="212" y2="102" stroke="#FFFFFF" stroke-width="1"/>
    <line x1="212" y1="98" x2="208" y2="102" stroke="#FFFFFF" stroke-width="1"/>

    <!-- Rugas Palatinas -->
    <path d="M 160,95 Q 185,90 200,95" fill="none" stroke="#D1C3B2" stroke-width="1.2"/>
    <path d="M 220,95 Q 235,90 260,95" fill="none" stroke="#D1C3B2" stroke-width="1.2"/>

    <!-- Puncture Point: Base LATERAL da papila incisiva -->
    
    <g transform="translate(223, 105)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Track (45° angle) -->
    <g transform="translate(165, 150) rotate(-42)">
      <line x1="0" y1="0" x2="62" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="62,-2.5 67,0 62,2.5" fill="#DC2626"/>
    </g>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="75" width="115" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="73.5" y="86" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">NÃO Punçar no Centro</text>
    <text x="73.5" y="95" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Dor severa e insucesso</text>
    
    <path d="M 131,88 L 206,99" fill="none" stroke="#DC2626" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="75" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="86" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">PUNÇÃO CORRETA</text>
    <text x="347.5" y="95" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Base Lateral da Papila</text>
    
    <path d="M 290,88 L 232,104" fill="none" stroke="#16A34A" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="140" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="151" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Volume: ¼ Tubete</text>
    <text x="347.5" y="160" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">0,3 a 0,4 mL (lento)</text>
    
    
    <rect x="16" y="140" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="73.5" y="151" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Angulação da Agulha</text>
    <text x="73.5" y="160" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">45° em relação ao palato</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Infiltrativa Subperióstica Anterior</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Longo eixo do dente, fundo de sulco e ápice radicular</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Maxila · Infiltrativa</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Maxillary Bone -->
    <path d="M 120,60 L 290,60 L 290,150 C 260,150 250,170 240,195 L 170,195 C 160,170 150,150 120,150 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>

    <!-- Upper Incisor -->
    <g transform="translate(193, 75)">
      <path d="M 10,65 C 6,35 9,10 17,-5 C 25,10 28,35 24,65 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.3"/>
      <path d="M 3,65 Q 17,62 31,65 L 29,115 Q 17,118 5,115 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="17" y="100" font-size="8.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">Incisivo</text>
      <circle cx="17" cy="-5" r="3.5" fill="#DC2626"/>
      <text x="17" y="-12" font-size="7.5" font-weight="800" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Ápice</text>
    </g>

    <!-- Mucobuccal Fold Line -->
    <path d="M 110,135 Q 210,130 300,135" fill="none" stroke="#F43F5E" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="50" y="137" font-size="7.5" font-weight="600" fill="#E11D48" font-family="sans-serif">Fundo de Sulco</text>

    <!-- Diffusion Halo around Apex -->
    <ellipse cx="210" cy="70" rx="22" ry="16" fill="#FEF3C7" fill-opacity="0.5" stroke="#F59E0B" stroke-width="1" stroke-dasharray="2,2"/>

    <!-- Puncture Point: Fundo de sulco acima do ápice -->
    
    <g transform="translate(210, 134)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Vector -->
    <g transform="translate(210, 195) rotate(-90)">
      <line x1="0" y1="0" x2="55" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="55,-2.5 60,0 55,2.5" fill="#DC2626"/>
    </g>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="75" width="120" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="76.0" y="86" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="76.0" y="95" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Fundo de sulco no ápice</text>
    
    <path d="M 136,88 L 200,134" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="16" y="160" width="120" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="76.0" y="171" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Bisel Voltado ao Osso</text>
    <text x="76.0" y="180" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Contato suave sem raspar</text>
    
    
    <rect x="285" y="75" width="120" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="345.0" y="86" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Difusão Transcortical</text>
    <text x="345.0" y="95" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Cortical porosa maxilar</text>
    
    <path d="M 285,88 L 234,75" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="285" y="160" width="120" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="345.0" y="171" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Agulha Curta (20 mm)</text>
    <text x="345.0" y="180" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Inserção de ~2 a 3 mm</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Infiltrativa Subperióstica Posterior</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Fundo de sulco no ápice da raiz mesiovestibular do 1º molar</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Maxila · Infiltrativa</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Maxillary Posterior Bone -->
    <path d="M 100,60 L 320,60 L 320,150 C 290,150 280,175 270,195 L 150,195 C 140,175 130,150 100,150 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>
    
    <!-- 1º Molar Superior (16/26) -->
    <g transform="translate(180, 80)">
      <!-- Mesiobuccal Root (Raiz MV - Alvo do ASM!) -->
      <path d="M 8,55 C 4,30 6,10 11,-5 C 16,10 19,30 16,55 Z" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.4"/>
      <!-- Distobuccal Root (Raiz DV) -->
      <path d="M 28,55 C 24,30 26,10 31,-5 C 36,10 39,30 36,55 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
      <!-- Palatal Root -->
      <path d="M 18,45 C 16,25 18,5 22,-8 C 26,5 28,25 26,45 Z" fill="#EDE4D5" stroke="#A89484" stroke-width="1"/>
      <!-- Crown -->
      <path d="M 2,55 Q 22,52 42,55 L 40,105 Q 22,109 4,105 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="22" y="85" font-size="9" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º Molar</text>
      <!-- MV Root Apex Callout -->
      <circle cx="11" cy="-5" r="3.5" fill="#DC2626"/>
      <text x="11" y="-12" font-size="7.5" font-weight="800" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Raiz MV</text>
    </g>

    <!-- Mucobuccal Fold -->
    <path d="M 100,135 Q 210,130 310,135" fill="none" stroke="#F43F5E" stroke-width="1.5" stroke-dasharray="5,3"/>

    <!-- Puncture Point: Fundo de sulco na raiz MV -->
    
    <g transform="translate(191, 134)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Track -->
    <g transform="translate(191, 195) rotate(-90)">
      <line x1="0" y1="0" x2="55" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="55,-2.5 60,0 55,2.5" fill="#DC2626"/>
    </g>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="75" width="125" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="78.5" y="86" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="78.5" y="95" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Fundo de sulco no ápice MV</text>
    
    <path d="M 141,88 L 183,134" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="16" y="160" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="78.5" y="171" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Complemento do ASP</text>
    <text x="78.5" y="180" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Raiz MV do 1º M (~28% ASM)</text>
    
    
    <rect x="280" y="75" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="342.5" y="86" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Bisel para o Osso</text>
    <text x="342.5" y="95" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Volume: ½ a 1 tubete</text>
    
    
    <rect x="280" y="160" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="342.5" y="171" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Indicação Precisa</text>
    <text x="342.5" y="180" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Polpa da raiz mesiovestibular</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Bloqueio Pterigomandibular (NAI + Lingual)</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Incisura coronóide, prega pterigomandibular e 1 cm acima da oclusal</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Mandíbula · Troncular</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Mandibular Ramus -->
    <path d="M 90,55 C 105,80 115,105 110,135 C 105,160 95,185 85,210 L 290,210 C 310,170 315,120 310,55 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>
    
    <!-- Mandibular Occlusal Plane -->
    <line x1="60" y1="170" x2="310" y2="170" stroke="#A89484" stroke-width="1.3" stroke-dasharray="4,3"/>
    <text x="120" y="185" font-size="7.5" font-weight="700" fill="#7A6657" font-family="sans-serif">Plano Oclusal Inferior</text>

    <!-- Height Guideline: 1 cm acima do plano oclusal -->
    <line x1="90" y1="125" x2="295" y2="125" stroke="#3B82F6" stroke-width="1.1" stroke-dasharray="3,2"/>
    <text x="300" y="122" font-size="7.5" font-weight="700" fill="#2563EB" text-anchor="end" font-family="sans-serif">1 cm acima</text>

    <!-- Pterygomandibular Fold (Prega Pterigomandibular) -->
    <path d="M 285,65 Q 275,130 288,190" fill="none" stroke="#EC4899" stroke-width="1.8" stroke-dasharray="4,2"/>
    <text x="285" y="58" font-size="7.5" font-weight="700" fill="#BE185D" text-anchor="middle" font-family="sans-serif">Prega</text>

    <!-- Mandibular Foramen -->
    <path d="M 245,118 Q 248,125 245,132" fill="none" stroke="#5D4037" stroke-width="2.5"/>
    <circle cx="250" cy="125" r="4" fill="#451A03"/>

    <!-- Nerves (NAI & Lingual) -->
    <path d="M 252,65 Q 250,95 248,125" fill="none" stroke="#D97706" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 235,65 Q 225,120 215,180" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
    <text x="200" y="172" font-size="7.5" font-weight="700" fill="#D97706" font-family="sans-serif">N. Lingual</text>

    <!-- Operator Thumb in Coronoid Notch -->
    <g transform="translate(75, 115)">
      <path d="M 0,0 C 15,3 25,12 25,24 C 25,35 15,44 0,47 Z" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="12" y="27" font-size="7.5" font-weight="700" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">Polegar</text>
    </g>

    <!-- Puncture Point: Na depressão pterigomandibular -->
    
    <g transform="translate(225, 125)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Track: Seringa vindo dos pré-molares opostos até contato ósseo -->
    <g transform="translate(100, 195) rotate(-31)">
      <line x1="0" y1="0" x2="165" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="165,-2.5 170,0 165,2.5" fill="#DC2626"/>
    </g>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="52" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="73.5" y="63" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Incisura Coronóide</text>
    <text x="73.5" y="72" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Polegar na maior concavidade</text>
    
    <path d="M 105,78 L 105,115" fill="none" stroke="#3B82F6" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="135" y="48" width="135" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="202.5" y="59" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="202.5" y="68" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Depressão pterigomandibular</text>
    
    <path d="M 202,74 L 225,117" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="290" y="145" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="347.5" y="156" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Toque Ósseo (20-25 mm)</text>
    <text x="347.5" y="165" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Mandatório p/ evitar parótida</text>
    
    <path d="M 290,158 L 255,128" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="16" y="195" width="115" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="73.5" y="206" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Volume: 1 Tubete</text>
    <text x="73.5" y="215" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">¾ NAI + ¼ Lingual</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Bloqueio do Nervo Bucal</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Mucosa vestibular e distal ao último molar e plano oclusal</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Mandíbula · Troncular</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Posterior Mandibular Bone -->
    <path d="M 60,175 L 340,175 L 340,120 Q 320,80 290,65 L 180,65 Q 120,80 60,120 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>
    
    <!-- Retromolar Triangle & Pad -->
    <path d="M 255,145 Q 285,135 305,110 L 285,110 Q 260,130 245,145 Z" fill="#FCE7F3" stroke="#DB2777" stroke-width="1.2"/>
    <text x="285" y="100" font-size="7.5" font-weight="700" fill="#9D174D" text-anchor="middle" font-family="sans-serif">Trígono Retromolar</text>

    <!-- Lower Molars -->
    <g transform="translate(100, 130)">
      <rect x="0" y="0" width="35" height="25" rx="5" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.4"/>
      <text x="17" y="16" font-size="8.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º M</text>
      <rect x="42" y="0" width="35" height="25" rx="5" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.4"/>
      <text x="59" y="16" font-size="8.5" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º M</text>
      <rect x="84" y="0" width="35" height="25" rx="5" fill="url(#toothGrad)" stroke="#DC2626" stroke-width="1.5"/>
      <text x="101" y="16" font-size="8.5" font-weight="800" fill="#DC2626" text-anchor="middle" font-family="sans-serif">3º M</text>
    </g>

    <!-- Buccal Nerve Trunk -->
    <path d="M 310,75 Q 265,110 230,165" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
    <text x="315" y="75" font-size="7.5" font-weight="700" fill="#D97706" font-family="sans-serif">N. Bucal</text>

    <!-- Mucosa Vestibular e Distal -->
    <path d="M 90,160 Q 185,158 245,160" fill="none" stroke="#F43F5E" stroke-width="1.5" stroke-dasharray="4,2"/>

    <!-- Puncture Point: Mucosa vestibular e distal ao último molar -->
    
    <g transform="translate(228, 160)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Track (Parallel to occlusal plane) -->
    <g transform="translate(145, 160)">
      <line x1="0" y1="0" x2="75" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="75,-2.5 80,0 75,2.5" fill="#DC2626"/>
    </g>

    <!-- ANNOTATIONS -->
    
    <rect x="16" y="65" width="125" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="78.5" y="76" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="78.5" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Distal ao último molar</text>
    
    <path d="M 141,78 L 222,153" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="16" y="185" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="78.5" y="196" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Trajetória da Agulha</text>
    <text x="78.5" y="205" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Paralela à oclusal (mesmo lado)</text>
    
    
    <rect x="280" y="145" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="342.5" y="156" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Gengiva Vestibular</text>
    <text x="342.5" y="165" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Molares inferiores (extração)</text>
    
    
    <rect x="280" y="185" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="342.5" y="196" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Penetração Rasa (2-4 mm)</text>
    <text x="342.5" y="205" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Volume: ¼ tubete</text>
    
    
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
    svgAnatomico: `<svg viewBox="0 0 420 240" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F8F3EC"/>
    </linearGradient>
    <linearGradient id="boneLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF6F0"/>
      <stop offset="100%" stop-color="#EDE2D2"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4D5"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#DC2626" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Card -->
  <rect width="420" height="240" rx="12" fill="url(#bgLight)" stroke="#E8DFD3" stroke-width="1"/>

  
    <!-- Minimalist Clean Header -->
    <text x="16" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#3A2417" letter-spacing="0.2">Bloqueio do Nervo Mentual e Incisivo</text>
    <text x="16" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.2" font-weight="500" fill="#7A6657">Referenciais: Forame mentual entre PMs e compressão digital obrigatória</text>
    
    <!-- Subtle Tag Pill -->
    <rect x="328" y="10" width="76" height="18" rx="9" fill="#F0EAE1" stroke="#E2D8CC" stroke-width="0.8"/>
    <text x="366" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#6B5443" text-anchor="middle">Mandíbula · Troncular</text>
    
    <!-- Hairline Divider -->
    <line x1="16" y1="38" x2="404" y2="38" stroke="#EFE8DD" stroke-width="1"/>
    

  <!-- Scene Elements -->
  
    <!-- Mandibular Body Bone in Lateral View -->
    <path d="M 70,80 L 350,80 L 350,195 C 290,205 170,205 70,195 Z" fill="url(#boneLight)" stroke="#C4B5A5" stroke-width="1.4"/>
    
    <!-- Premolars (Mandibular: Crowns facing UP, Roots going DOWN) -->
    <!-- 1º Pré-molar (34/44) -->
    <g transform="translate(155, 78)">
      <!-- Crown (facing up) -->
      <path d="M 3,30 Q 15,26 27,30 L 25,0 Q 15,-4 5,0 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.4"/>
      <text x="15" y="18" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º PM</text>
      <!-- Single Root (descending) -->
      <path d="M 6,30 C 8,50 11,68 15,78 C 19,68 22,50 24,30 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
    </g>

    <!-- 2º Pré-molar (35/45) -->
    <g transform="translate(205, 78)">
      <!-- Crown (facing up) -->
      <path d="M 3,30 Q 15,26 27,30 L 25,0 Q 15,-4 5,0 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.4"/>
      <text x="15" y="18" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º PM</text>
      <!-- Single Root (descending) -->
      <path d="M 6,30 C 8,50 11,68 15,78 C 19,68 22,50 24,30 Z" fill="url(#toothGrad)" stroke="#7A6657" stroke-width="1.2"/>
    </g>

    <!-- Mental Foramen (Between and below the premolar apices) -->
    <ellipse cx="198" cy="164" rx="7.5" ry="6" fill="#451A03" stroke="#78350F" stroke-width="1"/>

    <!-- Mental Nerve (Emerging and going up-forward to lower lip and chin) -->
    <path d="M 198,164 Q 175,178 145,185" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round"/>
    <text x="140" y="194" font-size="7.5" font-weight="700" fill="#D97706" font-family="sans-serif">N. Mentual (Lábio/Mento)</text>

    <!-- Incisive Nerve (Continuing forward inside the mandibular canal) -->
    <path d="M 198,164 Q 165,160 115,158" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3,2"/>
    <text x="75" y="156" font-size="7.5" font-weight="800" fill="#B45309" font-family="sans-serif">N. Incisivo (Polpa)</text>

    <!-- Mucobuccal Fold (Fundo de sulco) -->
    <path d="M 90,128 Q 195,124 290,128" fill="none" stroke="#F43F5E" stroke-width="1.5" stroke-dasharray="4,2"/>
    <text x="45" y="128" font-size="7.5" font-weight="600" fill="#E11D48" font-family="sans-serif">Fundo de Sulco</text>

    <!-- Puncture Point: Fundo de sulco anterior/superior ao forame -->
    
    <g transform="translate(182, 126)" filter="url(#subtleGlow)">
      <circle cx="0" cy="0" r="7.5" fill="#FEE2E2" fill-opacity="0.85"/>
      <circle cx="0" cy="0" r="4.2" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="1.6" fill="#FFFFFF"/>
    </g>
    

    <!-- Needle Track: Agulha a 45° de anterior para posterior no fundo de sulco -->
    <g transform="translate(125, 95) rotate(28)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="-8" y="-2.5" width="8" height="5" rx="1.5" fill="#94A3B8"/>
      <polygon points="60,-2.5 65,0 60,2.5" fill="#DC2626"/>
    </g>

    <!-- Digital Compression Indicator (pressing the foramen for 1-2 min) -->
    <g transform="translate(216, 155)">
      <rect width="52" height="18" rx="9" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1"/>
      <text x="26" y="12" font-size="7.5" font-weight="700" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">Dedo 2 min</text>
      <path d="M 0,9 L -7,9" stroke="#3B82F6" stroke-width="1.3" stroke-linecap="round"/>
    </g>

    <!-- ANNOTATIONS (Clean margins, zero text collisions) -->
    
    <rect x="16" y="52" width="125" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="78.5" y="63" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">PONTO DE INSERÇÃO</text>
    <text x="78.5" y="72" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Fundo de sulco anterior</text>
    
    <path d="M 141,65 L 175,120" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="280" y="52" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="342.5" y="63" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Forame Mentual</text>
    <text x="342.5" y="72" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Entre ápices dos PMs</text>
    
    <path d="M 280,65 L 208,160" fill="none" stroke="#A89484" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="280" y="125" width="125" height="26" rx="5" fill="#FEF2F2" fill-opacity="0.95" stroke="#F87171" stroke-width="0.9"/>
    <text x="342.5" y="136" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#991B1B" text-anchor="middle">Pressão Digital (1-2 min)</text>
    <text x="342.5" y="145" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#B91C1C" text-anchor="middle">Obrigatória p/ N. Incisivo</text>
    
    <path d="M 280,138 L 268,160" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="2,2"/>

    
    <rect x="16" y="195" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="78.5" y="206" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Regra da Banca</text>
    <text x="78.5" y="215" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Mentual NÃO inerva dente!</text>
    
    
    <rect x="280" y="195" width="125" height="26" rx="5" fill="#FFFFFF" fill-opacity="0.95" stroke="#D6C7B8" stroke-width="0.9"/>
    <text x="342.5" y="206" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="8" font-weight="700" fill="#4A3427" text-anchor="middle">Incisivo = Polpa Dental</text>
    <text x="342.5" y="215" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="7.5" font-weight="500" fill="#7A6657" text-anchor="middle">Caninos e incisivos inferiores</text>
    
    
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
