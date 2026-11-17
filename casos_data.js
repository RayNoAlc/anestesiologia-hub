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
      "Raízes distovestibular e palatina do 1º molar superior (⚠️ a raiz mesiovestibular é inervada pelo ASM em ~28% dos pacientes)",
      "Periodonto vestibular e tábua óssea vestibular correspondente aos molares"
    ],
    indicacoes: [
      "Tratamentos restauradores ou endodônticos envolvendo 2 ou mais molares superiores",
      "Quando houver infecção aguda/abscesso no ápice dos molares impedindo a infiltrativa local",
      "Cirurgias de molares superiores (associando-se obrigatoriamente ao Palatino Maior)"
    ],
    contraindicacoes: [
      "⚠️ PACIENTE HEMOFÍLICO ou com coagulopatia severa (risco gravíssimo de hematoma incontrolável no plexo pterigóideo; nesses casos, eleger infiltrativas subperiósticas graduais)."
    ],
    armadilhaProva: "Se for dente 16 ou 26, a raiz mésio-vestibular pode não anestesiar por ser inervada pelo ASM (~28%). Se doer durante a pulpectomia ou luxação mesial, complementar com subperióstica no ápice da raiz MV.",
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">BLOQUEIO DO NERVO ALVEOLAR SUPERIOR POSTERIOR (ASP / PÓS-TÚBER)</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA LATERAL DA MAXILA & TÚBER</text>

  <!-- Illustration Main Scene -->
  
    <!-- Bone: Posterior Maxilla & Tuber -->
    <path d="M 50,65 Q 160,65 240,80 Q 320,100 370,140 Q 400,170 380,215 Q 360,240 310,240 L 50,240 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Zygomatic Process / Buttress (Crista Zigomático-Alveolar) -->
    <path d="M 170,70 C 180,105 190,140 185,175 C 175,175 165,130 160,70 Z" fill="#E2D4C3" stroke="#8D7A68" stroke-width="1.5" stroke-dasharray="3,2"/>
    
    <!-- ASP Foramina (Pequenos orifícios na face infratemporal do túber) -->
    <circle cx="365" cy="165" r="3.5" fill="#5D4037"/>
    <circle cx="375" cy="175" r="3" fill="#5D4037"/>
    <circle cx="360" cy="180" r="3" fill="#5D4037"/>
    
    <!-- ASP Nerve Trunk (Nervo Alveolar Superior Posterior) -->
    <path d="M 395,95 Q 380,135 367,165" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 367,165 Q 345,195 285,215" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3,2"/>
    <path d="M 367,165 Q 325,190 220,215" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3,2"/>
    
    <!-- Mucogingival Line & Prega Mucovestibular (Fundo de Sulco) -->
    <path d="M 50,195 Q 160,190 250,195 Q 330,205 380,225" fill="none" stroke="#E11D48" stroke-width="3" stroke-dasharray="6,4"/>
    <text x="75" y="190" font-size="10" font-weight="700" fill="#E11D48" font-family="sans-serif">Prega Mucovestibular (Fundo de Sulco)</text>
    
    <!-- Teeth Roots and Crowns (1º Molar, 2º Molar, 3º Molar) -->
    <!-- 1º Molar (16/26) -->
    <g transform="translate(130, 160)">
      <!-- Roots -->
      <path d="M 10,35 C 5,10 8,-5 14,-15 C 20,-5 22,10 18,35 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.5"/>
      <path d="M 30,35 C 26,10 28,-8 34,-16 C 40,-8 42,10 38,35 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.5"/>
      <!-- Crown -->
      <path d="M 2,35 Q 24,33 46,35 L 44,72 Q 24,76 4,72 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <path d="M 24,35 L 24,74" stroke="#8D7A68" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="24" y="60" font-size="11" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º M</text>
      <text x="24" y="90" font-size="9" font-weight="600" fill="#6B5E51" text-anchor="middle" font-family="sans-serif">Dente 16/26</text>
    </g>

    <!-- 2º Molar (17/27) - Dente de Referência -->
    <g transform="translate(200, 160)">
      <!-- Roots (Mesial & Distal) -->
      <path d="M 10,35 C 5,10 8,-3 14,-14 C 20,-3 22,10 18,35 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.5"/>
      <!-- Distovestibular Root - KEY LANDMARK -->
      <path d="M 30,35 C 26,10 30,-5 36,-14 C 42,-5 44,10 38,35 Z" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
      <!-- Crown -->
      <path d="M 2,35 Q 24,33 46,35 L 44,72 Q 24,76 4,72 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <path d="M 24,35 L 24,74" stroke="#8D7A68" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="24" y="60" font-size="11" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º M</text>
      <text x="24" y="90" font-size="9" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Ápice DV ★</text>
    </g>

    <!-- 3º Molar (18/28) / Túber -->
    <g transform="translate(268, 168)">
      <!-- Roots -->
      <path d="M 10,27 C 6,10 14,0 20,-8 C 26,0 30,10 26,27 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.5"/>
      <!-- Crown -->
      <path d="M 2,27 Q 20,25 38,27 L 36,62 Q 20,65 4,62 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <text x="20" y="50" font-size="10" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">3º M</text>
    </g>

    <!-- Clinical Landmark Badges (Blue) -->
    <!-- Landmark: Túber da Maxila -->
    <g transform="translate(330, 90)" filter="url(#shadowBlue)">
      <rect width="135" height="24" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
      <text x="67" y="16" font-size="10" font-weight="700" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👁️ Túber da Maxila</text>
      <path d="M 67,24 L 67,35 L 55,50" fill="none" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="2,2"/>
    </g>
    
    <!-- Landmark: Crista Zigomático-Alveolar -->
    <g transform="translate(70, 85)" filter="url(#shadowBlue)">
      <rect width="145" height="24" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
      <text x="72" y="16" font-size="9.5" font-weight="700" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👁️ Crista Zigomática (Palpar)</text>
      <path d="M 145,12 L 175,85" fill="none" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="2,2"/>
    </g>

    <!-- Puncture Point (Red Bullseye) -->
    <!-- Positioned at the mucobuccal fold above the distobuccal root of the 2nd molar -->
    <g transform="translate(236, 175)">
      <circle cx="0" cy="0" r="14" fill="#FEE2E2" fill-opacity="0.7"/>
      <circle cx="0" cy="0" r="9" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="4.5" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-160, -65)" filter="url(#shadowRed)">
        <rect width="185" height="42" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="92" y="18" font-size="11" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="92" y="32" font-size="9.5" font-weight="600" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Fundo de sulco no ápice DV do 2º M</text>
        <path d="M 160,42 L 160,55 L 160,65" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Syringe & Needle Trajectory -->
    <!-- Approach: 45° angle upwards, inwards and backwards -->
    <g transform="translate(140, 260) rotate(-38)">
      <!-- Carpule Body -->
      <rect x="-8" y="-12" width="70" height="20" rx="3" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5"/>
      <rect x="10" y="-8" width="40" height="12" fill="#ECEFF1" stroke="#78909C" stroke-width="1"/>
      <rect x="25" y="-7" width="18" height="10" fill="#EF4444" fill-opacity="0.3"/> <!-- Cartridge solution -->
      <!-- Needle Hub & Needle Shaft -->
      <polygon points="62,-6 72,-3 72,3 62,6" fill="#37474F"/>
      <!-- Needle shaft (inserção de 16 mm ~ metade) -->
      <line x1="72" y1="0" x2="160" y2="0" stroke="#263238" stroke-width="2.5"/>
      <!-- Stop Mark at 16mm -->
      <line x1="120" y1="-5" x2="120" y2="5" stroke="#DC2626" stroke-width="2"/>
      <text x="120" y="-8" font-size="8" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">16 mm</text>
      <!-- Bevel (Bisel voltado para o osso) -->
      <polygon points="160,-2 160,2 165,0" fill="#DC2626"/>
    </g>

    <!-- Trajectory & Bevel Angle Callout Badge -->
    <g transform="translate(325, 225)" filter="url(#shadowSm)">
      <rect width="185" height="48" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="92" y="17" font-size="10" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">📐 ANGULAÇÃO CLÍNICA (45°/45°)</text>
      <text x="92" y="30" font-size="9" font-weight="600" fill="#6B5E51" text-anchor="middle" font-family="sans-serif">45° p/ Cima • 45° p/ Dentro • 45° p/ Trás</text>
      <text x="92" y="42" font-size="9" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Bisel voltado para o osso (túber)</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Fundo de sulco no ápice DV do 2º molar</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Túber da maxila + Crista zigomática</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Agulha: Curta (ou metade da longa: 16 mm)</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">⚠️ Alerta: Cuidado c/ plexo pterigóideo</text>
        </g>
        
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">BLOQUEIO DO NERVO INFRAORBITAL (ASA + ASM)</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA ANTERIOR DA FACE & FORAME</text>

  <!-- Illustration Main Scene -->
  
    <!-- Bone: Anterior Maxilla & Orbital Rim -->
    <!-- Orbit Cavity -->
    <ellipse cx="230" cy="85" rx="55" ry="32" fill="#3E2723" fill-opacity="0.1" stroke="#8D7A68" stroke-width="2.5"/>
    <path d="M 165,85 Q 230,55 295,85 Q 290,120 230,120 Q 170,120 165,85 Z" fill="#D7CCC8" fill-opacity="0.3" stroke="#8D7A68" stroke-width="2"/>
    
    <!-- Pupil & Eye Contour (Guia da Linha Pupilar) -->
    <ellipse cx="230" cy="85" rx="16" ry="16" fill="#FFFFFF" stroke="#64748B" stroke-width="1.5"/>
    <circle cx="230" cy="85" r="8" fill="#3B82F6"/>
    <circle cx="230" cy="85" r="4" fill="#0F172A"/>
    <circle cx="228" cy="83" r="1.5" fill="#FFFFFF"/>
    
    <!-- Inferior Orbital Rim Highlight -->
    <path d="M 175,115 Q 230,125 285,115" fill="none" stroke="#5D4037" stroke-width="3"/>
    
    <!-- Maxillary Bone Profile -->
    <path d="M 140,115 Q 160,180 140,250 L 320,250 Q 300,180 320,115 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Canine Fossa (Fossa Canina - depressão óssea) -->
    <path d="M 185,160 Q 230,175 275,160 Q 230,145 185,160 Z" fill="#D7CCC8" fill-opacity="0.5"/>
    
    <!-- FORAME INFRAORBITAL (8 a 10 mm abaixo da órbita) -->
    <g transform="translate(230, 150)">
      <ellipse cx="0" cy="0" rx="9" ry="7" fill="#4E342E" stroke="#8D7A68" stroke-width="2"/>
      <ellipse cx="0" cy="0" rx="6" ry="4.5" fill="#2E1C14"/>
    </g>

    <!-- Vertical Pupillary Line (Tracejada de Referência Clínica) -->
    <line x1="230" y1="50" x2="230" y2="280" stroke="#3B82F6" stroke-width="1.8" stroke-dasharray="5,4"/>
    <text x="236" y="65" font-size="9" font-weight="700" fill="#1D4ED8" font-family="sans-serif">Linha Pupilar Central</text>
    
    <!-- ASA & ASM Nerve Pathways inside bone (Glowing Yellow) -->
    <path d="M 230,150 Q 215,190 195,220" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
    <path d="M 230,150 Q 245,190 265,220" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="3,2"/>
    
    <!-- Mucogingival Line / Prega Mucovestibular (Fundo de Sulco) -->
    <path d="M 140,210 Q 230,205 320,210" fill="none" stroke="#E11D48" stroke-width="2.5" stroke-dasharray="5,3"/>

    <!-- Anterior & Premolar Teeth -->
    <!-- Canino (13/23) -->
    <g transform="translate(170, 190)">
      <path d="M 10,25 C 8,5 12,-15 15,-25 C 18,-15 22,5 20,25 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.2"/>
      <path d="M 2,25 Q 15,23 28,25 L 26,60 Q 15,68 4,60 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="15" y="48" font-size="9" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">Canino</text>
    </g>

    <!-- 1º Pré-Molar (14/24) - DENTE CHAVE DO TRAJETO -->
    <g transform="translate(216, 190)">
      <path d="M 8,25 C 6,5 10,-10 14,-22 C 18,-10 22,5 20,25 Z" fill="url(#toothGrad)" stroke="#DC2626" stroke-width="1.5"/>
      <path d="M 2,25 Q 14,23 26,25 L 24,60 Q 14,64 4,60 Z" fill="url(#toothGrad)" stroke="#DC2626" stroke-width="2"/>
      <text x="14" y="48" font-size="9" font-weight="800" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">1º PM</text>
      <text x="14" y="72" font-size="8" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Eixo Guia ★</text>
    </g>

    <!-- 2º Pré-Molar (15/25) -->
    <g transform="translate(260, 190)">
      <path d="M 8,25 C 6,5 10,-10 14,-20 C 18,-10 22,5 20,25 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.2"/>
      <path d="M 2,25 Q 14,23 26,25 L 24,60 Q 14,64 4,60 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="14" y="48" font-size="9" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º PM</text>
    </g>

    <!-- Operator's Finger Palpating/Compressing Foramen (Dedo Palpador) -->
    <g transform="translate(230, 140)">
      <!-- Gloved Finger Graphic -->
      <path d="M 50,-5 C 30,-8 10,-5 0,-2 C -10,1 -12,12 -2,14 C 10,16 35,12 50,10 Z" fill="#93C5FD" stroke="#2563EB" stroke-width="2"/>
      <!-- Pressure Waves -->
      <circle cx="-2" cy="7" r="9" fill="none" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="2,2"/>
      <circle cx="-2" cy="7" r="14" fill="none" stroke="#2563EB" stroke-width="1" stroke-dasharray="3,3"/>
      <!-- Label -->
      <g transform="translate(55, -12)" filter="url(#shadowBlue)">
        <rect width="180" height="34" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="90" y="14" font-size="9.5" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👆 DEDO COMPRIMINDO</text>
        <text x="90" y="27" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">Forame (~8-10 mm abaixo da órbita)</text>
      </g>
    </g>

    <!-- Puncture Point (Red Bullseye) -->
    <!-- In the mucobuccal fold directly above the 1st Premolar -->
    <g transform="translate(230, 208)">
      <circle cx="0" cy="0" r="13" fill="#FEE2E2" fill-opacity="0.8"/>
      <circle cx="0" cy="0" r="8" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="4" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-195, -10)" filter="url(#shadowRed)">
        <rect width="180" height="42" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="90" y="16" font-size="10.5" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="90" y="30" font-size="9" font-weight="600" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Fundo de sulco na altura do 1º PM</text>
        <path d="M 180,21 L 195,0" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Needle Trajectory Vector (Parallel to Long Axis of 1st PM to Foramen) -->
    <g transform="translate(230, 265)">
      <!-- Seringa subindo paralela ao 1º PM -->
      <line x1="0" y1="15" x2="0" y2="-112" stroke="#DC2626" stroke-width="3" stroke-linecap="round"/>
      <polygon points="-4,-112 0,-122 4,-112" fill="#DC2626"/>
      <!-- Syringe Barrel representation -->
      <rect x="-6" y="15" width="12" height="40" rx="2" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5"/>
    </g>

    <!-- Clinical Protocol Callout -->
    <g transform="translate(340, 215)" filter="url(#shadowSm)">
      <rect width="180" height="52" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="90" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">📐 TRAJETÓRIA & CONDUTA</text>
      <text x="90" y="29" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Seringa paralela ao longo eixo do 1º PM</text>
      <text x="90" y="42" font-size="8.5" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Comprimir forame p/ 1-2 min (difusão ASA+ASM)</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Fundo de sulco no 1º pré-molar</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Margem infraorbital + Linha pupilar</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Agulha: Longa (~16 mm até suave contato ósseo)</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">👆 Manobra: Compressão digital pós-injeção</text>
        </g>
        
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
      "⚠️ NÃO ANESTESIA NENHUM DENTE (nem polpa nem ligamento periodontal profundo)"
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">BLOQUEIO DO NERVO PALATINO MAIOR</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA OCLUSAL INFERIOR DO PALATO DURO</text>

  <!-- Illustration Main Scene -->
  
    <!-- Inferior Occlusal View of Hard Palate -->
    <!-- Palatal Vault Bone & Mucosa Contour -->
    <path d="M 60,70 C 60,60 140,55 270,55 C 400,55 480,60 480,70 C 480,180 440,245 270,245 C 100,245 60,180 60,70 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Soft Palate Junction (Tracejado inferior) -->
    <path d="M 120,225 Q 270,240 420,225" fill="none" stroke="#8D7A68" stroke-width="2" stroke-dasharray="4,3"/>
    <text x="270" y="240" font-size="9" font-weight="700" fill="#8D7A68" text-anchor="middle" font-family="sans-serif">Junção Palato Duro / Palato Mole</text>

    <!-- Median Palatine Raphe (Rafe Palatina Mediana) -->
    <line x1="270" y1="65" x2="270" y2="230" stroke="#8D7A68" stroke-width="2.5"/>
    <text x="260" y="100" font-size="9.5" font-weight="700" fill="#6B5E51" text-anchor="end" font-family="sans-serif">Rafe Palatina Mediana</text>
    
    <!-- Incisive Papilla anteriorly -->
    <ellipse cx="270" cy="75" rx="8" ry="12" fill="#E2D4C3" stroke="#8D7A68" stroke-width="1.5"/>

    <!-- Dental Arch: Upper Molars (Right Quadrant focus) -->
    <!-- Dente 26 (1º Molar) -->
    <g transform="translate(375, 120)">
      <rect width="32" height="26" rx="6" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <path d="M 8,5 Q 16,13 24,5 M 16,5 L 16,21" stroke="#8D7A68" stroke-width="1"/>
      <text x="16" y="20" font-size="10" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º M</text>
    </g>

    <!-- Dente 27 (2º Molar) - REFERÊNCIA PRIMÁRIA -->
    <g transform="translate(378, 155)">
      <rect width="30" height="26" rx="6" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <path d="M 8,5 Q 15,12 22,5 M 15,5 L 15,21" stroke="#8D7A68" stroke-width="1"/>
      <text x="15" y="20" font-size="10" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º M</text>
      <text x="45" y="18" font-size="9" font-weight="700" fill="#1D4ED8" font-family="sans-serif">Dente 27</text>
    </g>

    <!-- Dente 28 (3º Molar) -->
    <g transform="translate(375, 190)">
      <rect width="28" height="24" rx="6" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="14" y="17" font-size="9" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">3º M</text>
    </g>

    <!-- Contralateral Teeth (Esquerdo visual - Dentes 14/15 de apoio da seringa) -->
    <g transform="translate(135, 130)">
      <rect width="24" height="20" rx="4" fill="url(#toothGrad)" stroke="#3B82F6" stroke-width="2"/>
      <text x="12" y="14" font-size="8.5" font-weight="700" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">Pré-M</text>
      <text x="-5" y="32" font-size="8.5" font-weight="700" fill="#1D4ED8" font-family="sans-serif">Apoio Seringa</text>
    </g>

    <!-- FORAME PALATINO MAIOR (Depressão Óssea) -->
    <g transform="translate(340, 185)">
      <ellipse cx="0" cy="0" rx="7" ry="5.5" fill="#4E342E" stroke="#8D7A68" stroke-width="1.5"/>
      <ellipse cx="0" cy="0" rx="4" ry="3" fill="#2E1C14"/>
      <!-- Landmark Callout (Blue) -->
      <g transform="translate(15, -20)" filter="url(#shadowBlue)">
        <rect width="145" height="30" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="72" y="13" font-size="9.5" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👁️ Forame Palatino Maior</text>
        <text x="72" y="24" font-size="8" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">Medial ao 2º/3º Molar (~1 cm da margem)</text>
      </g>
    </g>

    <!-- Nervo Palatino Maior (Feixe Amarelo correndo anteriormente) -->
    <path d="M 340,185 Q 335,145 320,105" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
    <text x="315" y="98" font-size="9" font-weight="700" fill="#D97706" font-family="sans-serif">N. Palatino Maior</text>

    <!-- Cotton Swab Pressure Indicator (Isquemia Mecânica Prévia) -->
    <g transform="translate(330, 140)">
      <rect x="0" y="0" width="8" height="40" rx="3" fill="#E0E0E0" stroke="#9E9E9E"/>
      <ellipse cx="4" cy="40" rx="7" ry="6" fill="#FFFFFF" stroke="#BDBDBD" stroke-width="1.5"/>
      <text x="-4" y="-5" font-size="8.5" font-weight="700" fill="#6B5E51" font-family="sans-serif">Pressão c/ Cotonete</text>
    </g>

    <!-- PUNCTURE POINT (RED BULLSEYE) -->
    <!-- Anterior to the foramen (never inside foramen) -->
    <g transform="translate(335, 168)">
      <circle cx="0" cy="0" r="12" fill="#FEE2E2" fill-opacity="0.8"/>
      <circle cx="0" cy="0" r="7.5" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="3.5" fill="#DC2626"/>
      <!-- Puncture Callout Badge -->
      <g transform="translate(-175, -55)" filter="url(#shadowRed)">
        <rect width="180" height="42" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="90" y="16" font-size="10" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="90" y="30" font-size="8.5" font-weight="600" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Imediatamente ANTERIOR ao forame</text>
        <path d="M 170,42 L 175,55" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Syringe Vector coming from Contralateral Premolars -->
    <g transform="translate(155, 140)">
      <!-- Line from contralateral to puncture point -->
      <line x1="0" y1="0" x2="180" y2="28" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="5,3"/>
      <!-- Needle tip arrow -->
      <polygon points="175,25 180,28 174,32" fill="#DC2626"/>
      <!-- Syringe carpule on opposite side -->
      <rect x="-40" y="-8" width="45" height="16" rx="2" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5" transform="rotate(9)"/>
    </g>

    <!-- Volume & Technique Warning Badge -->
    <g transform="translate(70, 185)" filter="url(#shadowSm)">
      <rect width="180" height="48" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="90" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">📐 CONDUTA & VOLUME RESTRITO</text>
      <text x="90" y="29" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Acesso pelos pré-molares opostos (~90°)</text>
      <text x="90" y="42" font-size="8.5" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Volume: ¼ a ⅓ tubete (0,45 - 0,6 mL)</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Tecido mole ANTERIOR ao forame</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Palato medial ao 2º/3º molar</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Trajetória: Vindo dos pré-molares opostos</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">⚠️ Volume: ¼ a ⅓ tubete (isquemia imediata)</text>
        </g>
        
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
      "⚠️ NÃO ANESTESIA A POLPA DOS INCISIVOS NEM CANINOS"
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">BLOQUEIO DO NERVO NASOPALATINO</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA PALATINA RETROINCISIVA</text>

  <!-- Illustration Main Scene -->
  
    <!-- Palatal View of Anterior Maxilla (Retroincisal Region) -->
    <!-- Hard Palate Contour -->
    <path d="M 80,60 Q 270,55 460,60 Q 450,230 270,240 Q 90,230 80,60 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Median Suture Line -->
    <line x1="270" y1="90" x2="270" y2="235" stroke="#8D7A68" stroke-width="2" stroke-dasharray="3,3"/>

    <!-- Central Incisors (Palatal Surfaces with Cingulum & Marginal Ridges) -->
    <!-- Dente 11 -->
    <g transform="translate(195, 60)">
      <path d="M 5,2 L 65,2 C 68,15 65,35 55,42 C 40,48 30,48 15,42 C 5,35 2,15 5,2 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <path d="M 25,32 Q 35,38 45,32" stroke="#8D7A68" stroke-width="1.5" fill="none"/> <!-- Cingulum -->
      <text x="35" y="24" font-size="12" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">11</text>
    </g>

    <!-- Dente 21 -->
    <g transform="translate(275, 60)">
      <path d="M 5,2 L 65,2 C 68,15 65,35 55,42 C 40,48 30,48 15,42 C 5,35 2,15 5,2 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <path d="M 25,32 Q 35,38 45,32" stroke="#8D7A68" stroke-width="1.5" fill="none"/> <!-- Cingulum -->
      <text x="35" y="24" font-size="12" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">21</text>
    </g>

    <!-- Laterals (12 & 22) -->
    <g transform="translate(135, 75)">
      <rect width="45" height="32" rx="6" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="22" y="20" font-size="10" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">12</text>
    </g>
    <g transform="translate(355, 75)">
      <rect width="45" height="32" rx="6" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.5"/>
      <text x="22" y="20" font-size="10" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">22</text>
    </g>

    <!-- PAPILA INCISIVA (Proeminência Oval Central) -->
    <g transform="translate(270, 135)">
      <ellipse cx="0" cy="0" rx="18" ry="24" fill="#FCE7F3" stroke="#DB2777" stroke-width="2.5"/>
      <ellipse cx="0" cy="0" rx="10" ry="15" fill="#F472B6" fill-opacity="0.3"/>
      
      <!-- ❌ PROIBIDO PUNÇAR NO CENTRO (Armadilha clássica de prova) -->
      <line x1="-8" y1="-8" x2="8" y2="8" stroke="#DC2626" stroke-width="3.5"/>
      <line x1="8" y1="-8" x2="-8" y2="8" stroke="#DC2626" stroke-width="3.5"/>
      
      <!-- Warning Badge for Center Puncture -->
      <g transform="translate(35, -45)" filter="url(#shadowSm)">
        <rect width="170" height="32" rx="6" fill="#FEF2F2" stroke="#DC2626" stroke-width="1.5"/>
        <text x="85" y="14" font-size="9" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">❌ NÃO PUNÇAR NO CENTRO</text>
        <text x="85" y="25" font-size="8" font-weight="600" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Altíssima sensibilidade / Dor intensa</text>
        <path d="M 0,16 L -16,35" fill="none" stroke="#DC2626" stroke-width="1.5"/>
      </g>
    </g>

    <!-- Landmark Badge: Papila Incisiva -->
    <g transform="translate(60, 120)" filter="url(#shadowBlue)">
      <rect width="145" height="32" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
      <text x="72" y="14" font-size="9.5" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👁️ Papila Incisiva</text>
      <text x="72" y="25" font-size="8" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">Linha média retroincisiva</text>
      <path d="M 145,16 L 245,135" fill="none" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,2"/>
    </g>

    <!-- Nasopalatine Nerve Pathway emerging laterally -->
    <path d="M 270,135 Q 240,165 190,185" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 270,135 Q 300,165 350,185" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- PONTO DE PUNÇÃO CORRETO (BASE/SULCO LATERAL DA PAPILA) -->
    <g transform="translate(250, 142)">
      <circle cx="0" cy="0" r="12" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
      <circle cx="0" cy="0" r="6" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-175, 40)" filter="url(#shadowRed)">
        <rect width="185" height="44" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="92" y="16" font-size="10" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE PUNÇÃO CORRETO</text>
        <text x="92" y="29" font-size="8.5" font-weight="700" fill="#16A34A" text-anchor="middle" font-family="sans-serif">✓ Base Lateral da Papila Incisiva</text>
        <text x="92" y="39" font-size="7.5" font-weight="600" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Ângulo 45° | Penetração de 3 a 5 mm</text>
        <path d="M 92,0 L 165,-40" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Syringe Vector entering at 45° -->
    <g transform="translate(195, 230) rotate(-45)">
      <rect x="0" y="-7" width="55" height="14" rx="2" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5"/>
      <line x1="55" y1="0" x2="105" y2="0" stroke="#DC2626" stroke-width="2.5"/>
      <polygon points="105,-2 105,2 110,0" fill="#DC2626"/>
    </g>

    <!-- Cotton Swab Pressure Indicator -->
    <g transform="translate(320, 160)">
      <rect x="0" y="0" width="6" height="35" rx="3" fill="#E0E0E0" stroke="#9E9E9E"/>
      <ellipse cx="3" cy="0" rx="8" ry="6" fill="#FFFFFF" stroke="#BDBDBD" stroke-width="1.5"/>
      <text x="14" y="6" font-size="8" font-weight="700" fill="#6B5E51" font-family="sans-serif">Pressão Prévia (Isquemia)</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Base LATERAL da papila incisiva</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Papila incisiva + Dentes 11 e 21</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Angulação: 45° em relação ao palato duro</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">⚠️ Volume: 0,3 a 0,4 mL (¼ tubete muito lento)</text>
        </g>
        
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">INFILTRATIVA TERMINAL SUBPERIÓSTICA ANTERIOR (ASA)</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">CORTE ANATÔMICO EM PERFIL SAGITAL</text>

  <!-- Illustration Main Scene -->
  
    <!-- Sagittal Anatomical Cross-Section: Maxillary Anterior Alveolus & Incisor -->
    <!-- Alveolar Bone (Cortical & Trabecular) -->
    <path d="M 120,60 L 260,60 L 255,225 Q 230,240 215,225 L 210,135 Q 160,110 130,140 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Trabecular bone pattern / Porosities -->
    <circle cx="180" cy="100" r="3" fill="#B5A492" fill-opacity="0.4"/>
    <circle cx="210" cy="95" r="2.5" fill="#B5A492" fill-opacity="0.4"/>
    <circle cx="195" cy="120" r="3.5" fill="#B5A492" fill-opacity="0.4"/>
    <circle cx="225" cy="130" r="2" fill="#B5A492" fill-opacity="0.4"/>
    
    <!-- Thin Labial Cortical Plate (Tábua Óssea Vestibular Fina) -->
    <path d="M 130,140 Q 170,165 210,225" fill="none" stroke="#8D7A68" stroke-width="3"/>
    
    <!-- Tooth: Central Incisor in Cross-Section (Crown, Root, Pulp Chamber) -->
    <g transform="translate(195, 120)">
      <!-- Root -->
      <path d="M 10,105 C 10,70 12,30 20,5 C 28,30 30,70 30,105 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <!-- Crown -->
      <path d="M 5,105 L 35,105 L 30,155 L 8,155 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <!-- Pulp Canal (Vermelho/Rosa) -->
      <path d="M 19,10 C 19,40 18,90 18,125 L 22,125 C 22,90 21,40 21,10 Z" fill="#EF4444"/>
      <!-- Root Apex Label -->
      <text x="-5" y="10" font-size="9" font-weight="800" fill="#4A3427" font-family="sans-serif">Ápice Radicular ★</text>
    </g>

    <!-- Soft Tissue: Reflected Upper Lip & Mucobuccal Fold (Fundo de Sulco) -->
    <path d="M 80,95 Q 110,155 125,175 Q 140,210 185,225" fill="none" stroke="#FB7185" stroke-width="8" stroke-linecap="round"/>
    <path d="M 80,95 Q 110,155 125,175 Q 140,210 185,225" fill="none" stroke="#E11D48" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="65" y="160" font-size="9.5" font-weight="700" fill="#E11D48" font-family="sans-serif">Lábio Afastado</text>

    <!-- Terminal ASA Nerve Filament to Root Apex -->
    <path d="M 235,60 Q 225,95 215,123" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Anesthetic Solution Diffusion Pool around Apex -->
    <ellipse cx="214" cy="125" rx="18" ry="14" fill="#3B82F6" fill-opacity="0.25" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="238" y="125" font-size="8.5" font-weight="700" fill="#1D4ED8" font-family="sans-serif">Difusão Óssea</text>

    <!-- PUNCTURE POINT (RED BULLSEYE) -->
    <!-- In the mucobuccal fold slightly apical to root apex -->
    <g transform="translate(170, 145)">
      <circle cx="0" cy="0" r="12" fill="#FEE2E2" fill-opacity="0.8"/>
      <circle cx="0" cy="0" r="7" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="3.5" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-140, -65)" filter="url(#shadowRed)">
        <rect width="180" height="42" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="90" y="16" font-size="10.5" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="90" y="30" font-size="8.5" font-weight="600" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Fundo de sulco acima do ápice dentário</text>
        <path d="M 120,42 L 140,65" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Needle & Syringe Trajectory (Parallel to Long Axis) -->
    <g transform="translate(130, 245) rotate(-35)">
      <rect x="0" y="-6" width="60" height="12" rx="2" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="115" y2="0" stroke="#263238" stroke-width="2.5"/>
      <!-- Bevel pointing strictly to bone -->
      <polygon points="115,-2 115,2 120,0" fill="#DC2626"/>
      <!-- Callout on Bevel -->
      <text x="80" y="-10" font-size="8.5" font-weight="700" fill="#DC2626" font-family="sans-serif">Bisel voltado ao osso</text>
    </g>

    <!-- Landmarks Callout Badges -->
    <g transform="translate(320, 85)" filter="url(#shadowBlue)">
      <rect width="190" height="75" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
      <text x="95" y="16" font-size="10" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👁️ REFERENCIAIS & DIFUSÃO</text>
      <text x="95" y="32" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">1. Fundo de sulco vestibular</text>
      <text x="95" y="47" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">2. Projeção do ápice do dente-alvo</text>
      <text x="95" y="62" font-size="8.5" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">3. Cortical vestibular permeável</text>
    </g>

    <g transform="translate(320, 180)" filter="url(#shadowSm)">
      <rect width="190" height="50" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="95" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">📐 TÉCNICA SUPRAPERIÓSTICA</text>
      <text x="95" y="29" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Agulha curta paralela ao longo eixo</text>
      <text x="95" y="42" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Penetração: 2 a 4 mm no tecido frouxo</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Fundo de sulco no ápice do dente</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Eixo dentário + Prega mucovestibular</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Agulha: Curta paralela ao longo eixo</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">📐 Bisel: Voltado rigorosamente para o osso</text>
        </g>
        
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">INFILTRATIVA TERMINAL SUBPERIÓSTICA POSTERIOR (ASM / ASP)</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA OBLÍQUA DA MAXILA POSTERIOR</text>

  <!-- Illustration Main Scene -->
  
    <!-- Sagittal / Oblique Profile of Posterior Maxilla (Premolars/Molars) -->
    <!-- Maxillary Bone & Maxillary Sinus Floor -->
    <path d="M 80,60 L 320,60 L 315,220 Q 280,240 240,225 L 230,150 Q 180,120 120,150 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Floor of Maxillary Sinus (Assoalho do Seio Maxilar) -->
    <path d="M 130,85 Q 220,110 310,85" fill="none" stroke="#78909C" stroke-width="2" stroke-dasharray="4,3"/>
    <text x="220" y="80" font-size="8.5" font-weight="700" fill="#546E7A" text-anchor="middle" font-family="sans-serif">Assoalho do Seio Maxilar</text>

    <!-- Zygomatic Crest Outline (Crista Zigomático-Alveolar) -->
    <path d="M 230,60 Q 240,110 230,160" fill="none" stroke="#8D7A68" stroke-width="2.5" stroke-dasharray="3,2"/>
    
    <!-- Teeth: Upper Premolars / Molars with Bifurcated Roots -->
    <!-- Pré-Molar com 2 raízes (Vestibular e Palatina) -->
    <g transform="translate(190, 120)">
      <!-- Roots -->
      <path d="M 8,95 C 6,65 10,25 15,5 C 20,25 24,65 22,95 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <path d="M 22,95 C 22,65 26,30 30,10 C 34,30 36,65 34,95 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.2" stroke-dasharray="2,2"/>
      <!-- Crown -->
      <path d="M 2,95 L 38,95 L 34,148 L 6,148 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <text x="20" y="125" font-size="10" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">Pré-M</text>
      <text x="0" y="10" font-size="9" font-weight="800" fill="#DC2626" font-family="sans-serif">Ápice Alvo ★</text>
    </g>

    <!-- Molar adjacent -->
    <g transform="translate(250, 130)">
      <path d="M 8,85 C 6,55 12,20 18,5 C 24,20 28,55 26,85 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.5"/>
      <path d="M 2,85 L 42,85 L 38,138 L 6,138 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="22" y="115" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">Molar</text>
    </g>

    <!-- Mucobuccal Fold / Retracted Cheek -->
    <path d="M 70,110 Q 110,165 135,185 Q 165,215 210,225" fill="none" stroke="#FB7185" stroke-width="7" stroke-linecap="round"/>
    <path d="M 70,110 Q 110,165 135,185 Q 165,215 210,225" fill="none" stroke="#E11D48" stroke-width="2" stroke-dasharray="5,3"/>

    <!-- Solution Diffusion Pool at Apex -->
    <ellipse cx="205" cy="125" rx="16" ry="12" fill="#3B82F6" fill-opacity="0.25" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,2"/>

    <!-- PUNCTURE POINT (RED BULLSEYE) -->
    <!-- In the mucobuccal fold above the premolar apex -->
    <g transform="translate(165, 150)">
      <circle cx="0" cy="0" r="12" fill="#FEE2E2" fill-opacity="0.8"/>
      <circle cx="0" cy="0" r="7" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="3.5" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-135, -65)" filter="url(#shadowRed)">
        <rect width="180" height="42" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="90" y="16" font-size="10" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="90" y="30" font-size="8.5" font-weight="600" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Fundo de sulco no ápice do pré-molar</text>
        <path d="M 120,42 L 135,65" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Needle & Syringe Trajectory (Angulated ~25° to match cortical curvature) -->
    <g transform="translate(115, 235) rotate(-30)">
      <rect x="0" y="-6" width="60" height="12" rx="2" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="115" y2="0" stroke="#263238" stroke-width="2.5"/>
      <polygon points="115,-2 115,2 120,0" fill="#DC2626"/>
      <text x="80" y="-10" font-size="8.5" font-weight="700" fill="#DC2626" font-family="sans-serif">Bisel voltado ao osso</text>
    </g>

    <!-- Badges -->
    <g transform="translate(330, 95)" filter="url(#shadowBlue)">
      <rect width="180" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
      <text x="90" y="16" font-size="10" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👁️ REFERENCIAIS ANATÔMICOS</text>
      <text x="90" y="32" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">1. Prega mucovestibular posterior</text>
      <text x="90" y="46" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">2. Ápice do pré-molar / raiz MV molar</text>
      <text x="90" y="58" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">3. Crista zigomático-alveolar</text>
    </g>

    <g transform="translate(330, 180)" filter="url(#shadowSm)">
      <rect width="180" height="48" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="90" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">📐 APLICAÇÃO CLÍNICA</text>
      <text x="90" y="29" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Dente isolado ou complemento de MV do 1º M</text>
      <text x="90" y="42" font-size="8.5" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Volume: ½ a 1 tubete (0,9 - 1,8 mL)</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Fundo de sulco no ápice do dente</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Eixo radicular + Crista zigomática</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Agulha: Curta com bisel voltado ao osso</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">💡 Dica: Essencial para raiz MV do dente 16/26</text>
        </g>
        
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
      "⚠️ NÃO ANESTESIA A MUCOSA VESTIBULAR DOS MOLARES (que é inervada pelo Nervo Bucal!)"
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">BLOQUEIO PTERIGOMANDIBULAR DIRETO (NAI + LINGUAL)</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA INTRAORAL COM BOCA ABERTA</text>

  <!-- Illustration Main Scene -->
  
    <!-- Intraoral View with Wide Open Mouth: Mandibular Ramus & Pterygomandibular Space -->
    <!-- Medial Surface of Ramus & Retromolar Triangle Bone -->
    <path d="M 330,55 Q 380,55 430,90 L 415,245 Q 350,250 280,245 Q 300,160 330,55 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Lingula & Mandibular Foramen (Espinha de Spix & Forame Mandibular) -->
    <g transform="translate(370, 155)">
      <!-- Lingula (Spix spine projection) -->
      <path d="M -8,5 L 0,-10 L 8,5 Z" fill="#D7CCC8" stroke="#8D7A68" stroke-width="1.5"/>
      <!-- Foramen entry -->
      <ellipse cx="2" cy="6" rx="6" ry="8" fill="#3E2723"/>
      <!-- Sulcus of NAI -->
      <path d="M 2,14 L 5,45" stroke="#3E2723" stroke-width="2.5" stroke-dasharray="2,2"/>
    </g>
    <text x="382" y="145" font-size="8.5" font-weight="700" fill="#5D4037" font-family="sans-serif">Língula (Spix)</text>

    <!-- NAI & Lingual Nerves (Golden glowing tracks) -->
    <!-- NAI entering foramen -->
    <path d="M 360,70 Q 368,115 372,155" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round"/>
    <text x="365" y="80" font-size="9" font-weight="800" fill="#D97706" font-family="sans-serif">NAI</text>
    <!-- Lingual Nerve running anterior and medial -->
    <path d="M 345,70 Q 335,120 315,185" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4,2"/>
    <text x="305" y="105" font-size="8.5" font-weight="700" fill="#D97706" font-family="sans-serif">N. Lingual</text>

    <!-- ANTERIOR BORDER OF RAMUS & CORONOID NOTCH (Incisura Coronóide) -->
    <!-- The deepest concavity of the anterior border -->
    <path d="M 320,55 Q 305,100 300,135 Q 295,170 315,225" fill="none" stroke="#8D7A68" stroke-width="3"/>

    <!-- OPERATOR'S GLOVED THUMB (POLEGAR DO OPERADOR) IN CORONOID NOTCH -->
    <g transform="translate(295, 135)">
      <!-- Thumb contour palpating the notch -->
      <path d="M -45,-15 C -25,-18 -5,-12 0,0 C -5,12 -25,18 -45,15 Z" fill="#93C5FD" stroke="#2563EB" stroke-width="2"/>
      <ellipse cx="-5" cy="0" rx="8" ry="10" fill="#BFDBFE" stroke="#2563EB" stroke-width="1.5"/>
      <line x1="-12" y1="-8" x2="2" y2="8" stroke="#1D4ED8" stroke-width="1.5"/>
      <!-- Label Thumb -->
      <g transform="translate(-165, -35)" filter="url(#shadowBlue)">
        <rect width="165" height="32" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="82" y="13" font-size="9.5" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👍 POLEGAR NA INCISURA</text>
        <text x="82" y="25" font-size="8" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">Palpa a maior concavidade do ramo</text>
        <path d="M 165,16 L 200,35" fill="none" stroke="#3B82F6" stroke-width="1.5"/>
      </g>
    </g>

    <!-- PTERYGOMANDIBULAR RAPHE (Rafe Pterigomandibular) -->
    <path d="M 235,65 Q 242,145 245,215" fill="none" stroke="#D97706" stroke-width="3" stroke-dasharray="5,3"/>
    <text x="215" y="85" font-size="9" font-weight="700" fill="#B45309" text-anchor="end" font-family="sans-serif">Rafe Pterigomandibular</text>

    <!-- Pterygomandibular Depression / Fissure (Depressão Pterigomandibular - Espaço de Inserção) -->
    <path d="M 245,100 L 295,100 L 305,170 L 250,170 Z" fill="#FEF3C7" fill-opacity="0.25"/>

    <!-- Mandibular Teeth (Plano Oclusal dos Molares Inferiores) -->
    <g transform="translate(180, 195)">
      <!-- 2º Molar -->
      <rect x="0" y="0" width="30" height="24" rx="4" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="15" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º M</text>
      <!-- 3º Molar -->
      <rect x="35" y="0" width="28" height="24" rx="4" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="49" y="16" font-size="9" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">3º M</text>
    </g>

    <!-- Horizontal Occlusal Plane Guide Line -->
    <line x1="100" y1="195" x2="420" y2="195" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="110" y="190" font-size="8.5" font-weight="600" fill="#64748B" font-family="sans-serif">Plano Oclusal Inferior</text>

    <!-- HORIZONTAL PUNCTURE LINE: 1 cm (10 mm) ACIMA DO PLANO OCLUSAL -->
    <line x1="100" y1="145" x2="420" y2="145" stroke="#DC2626" stroke-width="2" stroke-dasharray="6,4"/>
    <!-- Cota de Altura: 1 cm -->
    <line x1="165" y1="145" x2="165" y2="195" stroke="#DC2626" stroke-width="1.5"/>
    <text x="155" y="173" font-size="9" font-weight="800" fill="#DC2626" text-anchor="end" font-family="sans-serif">1 cm (10 mm)</text>

    <!-- PUNCTURE POINT (RED BULLSEYE) -->
    <!-- In the depression, 1 cm above occlusal plane, at the junction of thumb midpoint & 3/4 raphe distance -->
    <g transform="translate(275, 145)">
      <circle cx="0" cy="0" r="14" fill="#FEE2E2" fill-opacity="0.8"/>
      <circle cx="0" cy="0" r="8" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="4" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-190, 35)" filter="url(#shadowRed)">
        <rect width="190" height="46" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="95" y="16" font-size="10" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="95" y="29" font-size="8.5" font-weight="700" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Depressão Pterigomandibular</text>
        <text x="95" y="40" font-size="8" font-weight="600" fill="#7F1D1D" text-anchor="middle" font-family="sans-serif">1 cm acima do plano oclusal</text>
        <path d="M 95,0 L 95,-35" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Syringe Vector Approaching from Contralateral Premolars -->
    <g transform="translate(60, 205)">
      <!-- Line representing approach from opposite side -->
      <line x1="20" y1="10" x2="215" y2="-60" stroke="#DC2626" stroke-width="3"/>
      <!-- Needle continuing to bone touch at lingula -->
      <line x1="215" y1="-60" x2="310" y2="-50" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="3,2"/>
      <!-- Carpule body on contralateral side -->
      <rect x="-30" y="5" width="55" height="15" rx="3" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5" transform="rotate(-18)"/>
      <text x="-25" y="42" font-size="8.5" font-weight="800" fill="#1D4ED8" font-family="sans-serif">Apoio: Pré-molares opostos</text>
    </g>

    <!-- Bone Contact / Toque Ósseo Callout -->
    <g transform="translate(355, 200)" filter="url(#shadowSm)">
      <rect width="165" height="50" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="82" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">🦴 TOQUE ÓSSEO OBRIGATÓRIO</text>
      <text x="82" y="29" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Inserir 20-25 mm até a língula</text>
      <text x="82" y="42" font-size="8" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Recuar 1 mm > Aspirar > Injetar</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Depressão 1 cm acima do plano</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👍 Referência: Polegar na incisura coronóide</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Trajeto: Pré-molares opostos até contato ósseo</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">⚡ Ramos: NAI (¾ tubete) + Lingual (¼ tubete)</text>
        </g>
        
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
      "⚠️ NÃO ANESTESIA NENHUM DENTE NEM POLPA"
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">BLOQUEIO DO NERVO BUCAL</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA DO TRÍGONO RETROMOLAR & FACE VESTIBULAR</text>

  <!-- Illustration Main Scene -->
  
    <!-- Intraoral View of Lower Retromolar Fossa & Lower 3rd Molar -->
    <!-- Mandibular Bone: External Oblique Ridge & Retromolar Triangle -->
    <path d="M 120,60 Q 280,60 360,90 Q 420,130 400,240 L 120,240 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- External Oblique Line (Crista Oblíqua Externa) -->
    <path d="M 280,60 Q 330,120 370,220" fill="none" stroke="#8D7A68" stroke-width="3"/>
    <text x="375" y="190" font-size="9" font-weight="700" fill="#6B5E51" font-family="sans-serif">Crista Oblíqua Externa</text>

    <!-- Retromolar Triangle / Fossa (Trígono Retromolar) -->
    <path d="M 260,110 L 310,110 L 290,170 Z" fill="#D7CCC8" fill-opacity="0.6" stroke="#8D7A68" stroke-width="1.5"/>
    <text x="250" y="145" font-size="8.5" font-weight="700" fill="#5D4037" text-anchor="end" font-family="sans-serif">Trígono Retromolar</text>

    <!-- Lower Molars in Occlusal-Lateral View -->
    <!-- 2º Molar (37/47) -->
    <g transform="translate(150, 140)">
      <rect width="36" height="32" rx="6" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <path d="M 5,16 L 31,16 M 18,5 L 18,27" stroke="#8D7A68" stroke-width="1"/>
      <text x="18" y="24" font-size="11" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º M</text>
    </g>

    <!-- 3º Molar (38/48) - DENTE DE REFERÊNCIA -->
    <g transform="translate(200, 140)">
      <rect width="36" height="32" rx="6" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="2"/>
      <path d="M 5,16 L 31,16 M 18,5 L 18,27" stroke="#8D7A68" stroke-width="1"/>
      <text x="18" y="24" font-size="11" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">3º M</text>
      <text x="18" y="48" font-size="9" font-weight="700" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">Último Molar ★</text>
    </g>

    <!-- Buccal Nerve Pathway crossing anterior border of ramus at occlusal plane -->
    <path d="M 330,70 Q 300,110 270,140 Q 240,165 190,175" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
    <text x="335" y="80" font-size="9.5" font-weight="800" fill="#D97706" font-family="sans-serif">Nervo Bucal</text>

    <!-- Buccal Mucosa / Goteira Vestibular (Linha tracejada de referência) -->
    <path d="M 140,185 Q 230,185 290,195" fill="none" stroke="#E11D48" stroke-width="2.5" stroke-dasharray="5,3"/>
    <text x="135" y="210" font-size="9" font-weight="700" fill="#E11D48" font-family="sans-serif">Mucosa Vestibular</text>

    <!-- PUNCTURE POINT (RED BULLSEYE) -->
    <!-- In buccal mucosa, distal & buccal to the last erupted molar, at occlusal level -->
    <g transform="translate(245, 175)">
      <circle cx="0" cy="0" r="13" fill="#FEE2E2" fill-opacity="0.8"/>
      <circle cx="0" cy="0" r="7.5" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="3.5" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-160, -75)" filter="url(#shadowRed)">
        <rect width="185" height="46" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="92" y="16" font-size="10" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="92" y="29" font-size="8.5" font-weight="700" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Mucosa distal e vestibular ao 3º M</text>
        <text x="92" y="40" font-size="8" font-weight="600" fill="#7F1D1D" text-anchor="middle" font-family="sans-serif">No nível do plano oclusal</text>
        <path d="M 150,46 L 160,75" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Syringe Trajectory (Parallel to Occlusal Plane on SAME SIDE) -->
    <g transform="translate(130, 175)">
      <!-- Line along buccal vestibule parallel to occlusal plane -->
      <line x1="-50" y1="0" x2="115" y2="0" stroke="#DC2626" stroke-width="2.5"/>
      <!-- Carpule Body -->
      <rect x="-80" y="-7" width="50" height="14" rx="2" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5"/>
      <text x="-75" y="24" font-size="8" font-weight="700" fill="#5D4037" font-family="sans-serif">Mesmo lado da arcada</text>
      <!-- Bevel pointing to bone -->
      <polygon points="115,-2 115,2 120,0" fill="#DC2626"/>
    </g>

    <!-- Clinical Landmark Badges -->
    <g transform="translate(325, 95)" filter="url(#shadowBlue)">
      <rect width="180" height="60" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
      <text x="90" y="16" font-size="9.5" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👁️ REFERENCIAIS ANATÔMICOS</text>
      <text x="90" y="32" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">1. Face distal do último molar (38/48)</text>
      <text x="90" y="45" font-size="8.5" font-weight="600" fill="#1E40AF" text-anchor="middle" font-family="sans-serif">2. Borda anterior do ramo mandibular</text>
      <text x="90" y="56" font-size="8" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">3. Plano oclusal inferior</text>
    </g>

    <g transform="translate(325, 175)" filter="url(#shadowSm)">
      <rect width="180" height="48" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="90" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">📐 PENETRAÇÃO & VOLUME</text>
      <text x="90" y="29" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Penetração rasa: 2 a 4 mm até o osso</text>
      <text x="90" y="42" font-size="8.5" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Volume: ¼ tubete (~0,3 mL)</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Mucosa distal/vestibular ao último molar</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Plano oclusal + Trígono retromolar</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Trajeto: Paralelo à oclusal no mesmo lado</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#F3E8FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#6B21A8" text-anchor="middle">💡 Papel: Gengiva vestibular de molares inferiores</text>
        </g>
        
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
      "⚠️ NÃO ANESTESIA A MUCOSA LINGUAL (que depende do Nervo Lingual)"
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
    svgAnatomico: `<svg viewBox="0 0 540 332" class="tecnica-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F4EFEA"/>
    </linearGradient>
    <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="50%" stop-color="#EFE6DA"/>
      <stop offset="100%" stop-color="#DECFC0"/>
    </linearGradient>
    <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F9F6F0"/>
      <stop offset="100%" stop-color="#E8DFD3"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CFD8DC"/>
      <stop offset="40%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#90A4AE"/>
      <stop offset="100%" stop-color="#607D8B"/>
    </linearGradient>
    <filter id="shadowSm" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#4A3427" flood-opacity="0.15"/>
    </filter>
    <filter id="shadowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#DC2626" flood-opacity="0.4"/>
    </filter>
    <filter id="shadowBlue" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#2563EB" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="540" height="332" rx="14" fill="url(#bgGrad)" stroke="#E5DFD5" stroke-width="1.5"/>

  <!-- Header Banner (Two-line Layout: Title + Subtitle to eliminate text overlap) -->
  <rect x="0" y="0" width="540" height="46" rx="14" fill="#3D2B1F"/>
  <rect x="0" y="22" width="540" height="24" fill="#3D2B1F"/>
  <text x="20" y="20" font-size="11.2" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="800" fill="#FDE68A" letter-spacing="0.4">BLOQUEIO DO NERVO MENTUAL / INCISIVO</text>
  <text x="20" y="36" font-size="9" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="600" fill="#EADBC8" letter-spacing="0.3">VISTA LATERAL DO CORPO MANDIBULAR</text>

  <!-- Illustration Main Scene -->
  
    <!-- Lateral Profile of Anterior Mandibular Body & Premolars -->
    <!-- Mandibular Bone Contour -->
    <path d="M 80,180 Q 80,110 140,110 L 390,110 Q 420,110 420,180 Q 420,240 360,245 L 120,245 Q 80,240 80,180 Z" fill="url(#boneGrad)" stroke="#B5A492" stroke-width="2"/>
    
    <!-- Base of Mandible (Base da Mandíbula - cortical inferior espessa) -->
    <path d="M 100,245 L 380,245" stroke="#5D4037" stroke-width="3"/>
    
    <!-- FORAME MENTUAL (Entre os ápices dos pré-molares inferiores) -->
    <g transform="translate(265, 185)">
      <ellipse cx="0" cy="0" rx="9" ry="7" fill="#4E342E" stroke="#8D7A68" stroke-width="2"/>
      <ellipse cx="0" cy="0" rx="5.5" ry="4.5" fill="#2E1C14"/>
    </g>

    <!-- Mental Nerve Branches emerging anteriorly / Incisive nerve continuing inside -->
    <path d="M 265,185 Q 220,195 170,205" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
    <text x="175" y="220" font-size="9" font-weight="700" fill="#D97706" font-family="sans-serif">N. Mentual</text>

    <!-- Teeth: Canine, 1º PM, 2º PM with Roots embedded in bone -->
    <!-- Canino Inferior -->
    <g transform="translate(145, 110)">
      <path d="M 8,0 C 6,30 10,65 14,80 C 18,65 22,30 20,0 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.2"/>
      <path d="M 2,0 L 26,0 L 22,-35 L 6,-35 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="14" y="-15" font-size="9" font-weight="700" fill="#4A3427" text-anchor="middle" font-family="sans-serif">Canino</text>
    </g>

    <!-- 1º Pré-Molar Inferior (34/44) -->
    <g transform="translate(205, 110)">
      <path d="M 8,0 C 6,25 10,60 14,75 C 18,60 22,25 20,0 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.5"/>
      <path d="M 2,0 L 26,0 L 24,-32 L 4,-32 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="14" y="-15" font-size="9" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">1º PM</text>
    </g>

    <!-- 2º Pré-Molar Inferior (35/45) -->
    <g transform="translate(285, 110)">
      <path d="M 8,0 C 6,25 10,60 14,75 C 18,60 22,25 20,0 Z" fill="url(#toothGrad)" stroke="#8D7A68" stroke-width="1.5"/>
      <path d="M 2,0 L 26,0 L 24,-32 L 4,-32 Z" fill="url(#toothGrad)" stroke="#5D4037" stroke-width="1.8"/>
      <text x="14" y="-15" font-size="9" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">2º PM</text>
    </g>

    <!-- Prega Mucovestibular (Fundo de Sulco Mandibular) -->
    <path d="M 120,135 Q 260,135 380,140" fill="none" stroke="#E11D48" stroke-width="2.5" stroke-dasharray="5,3"/>
    <text x="110" y="148" font-size="9" font-weight="700" fill="#E11D48" font-family="sans-serif">Fundo de Sulco</text>

    <!-- Operator's Finger Compressing Foramen (Dedo Palpador) -->
    <g transform="translate(265, 185)">
      <!-- Pressure rings around foramen -->
      <circle cx="0" cy="0" r="14" fill="none" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="3,2"/>
      <circle cx="0" cy="0" r="20" fill="none" stroke="#2563EB" stroke-width="1" stroke-dasharray="4,3"/>
      <!-- Gloved Finger graphic -->
      <path d="M 35,-10 C 20,-12 5,-8 0,0 C -5,8 15,14 35,10 Z" fill="#93C5FD" stroke="#2563EB" stroke-width="1.8"/>
      <!-- Compression Label -->
      <g transform="translate(45, -20)" filter="url(#shadowBlue)">
        <rect width="180" height="38" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="90" y="15" font-size="9.5" font-weight="800" fill="#1D4ED8" text-anchor="middle" font-family="sans-serif">👆 COMPRESSÃO DIGITAL</text>
        <text x="90" y="28" font-size="8.5" font-weight="700" fill="#DC2626" text-anchor="middle" font-family="sans-serif">Manter pressão por 2 minutos!</text>
      </g>
    </g>

    <!-- PUNCTURE POINT (RED BULLSEYE) -->
    <!-- In the mucobuccal fold anterior to the mental foramen -->
    <g transform="translate(235, 140)">
      <circle cx="0" cy="0" r="13" fill="#FEE2E2" fill-opacity="0.8"/>
      <circle cx="0" cy="0" r="7.5" fill="#FECACA" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="3.5" fill="#DC2626"/>
      <!-- Callout Badge -->
      <g transform="translate(-175, -55)" filter="url(#shadowRed)">
        <rect width="185" height="44" rx="8" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        <text x="92" y="16" font-size="10" font-weight="800" fill="#991B1B" text-anchor="middle" font-family="sans-serif">📍 PONTO DE INSERÇÃO</text>
        <text x="92" y="29" font-size="8.5" font-weight="700" fill="#B91C1C" text-anchor="middle" font-family="sans-serif">Fundo de sulco anterior ao forame</text>
        <text x="92" y="39" font-size="7.5" font-weight="600" fill="#7F1D1D" text-anchor="middle" font-family="sans-serif">Na altura entre 1º e 2º PM</text>
        <path d="M 175,22 L 185,5" fill="none" stroke="#DC2626" stroke-width="2"/>
      </g>
    </g>

    <!-- Syringe Trajectory (45° angle from anterior toward foramen) -->
    <g transform="translate(170, 90) rotate(42)">
      <rect x="-55" y="-6" width="55" height="12" rx="2" fill="url(#metalGrad)" stroke="#455A64" stroke-width="1.5"/>
      <line x1="0" y1="0" x2="65" y2="0" stroke="#DC2626" stroke-width="2.5"/>
      <polygon points="65,-2 65,2 70,0" fill="#DC2626"/>
      <text x="-15" y="-10" font-size="8.5" font-weight="700" fill="#DC2626" font-family="sans-serif">Bisel voltado ao osso</text>
    </g>

    <!-- Vital Exam Key Note -->
    <g transform="translate(320, 205)" filter="url(#shadowSm)">
      <rect width="190" height="50" rx="8" fill="#FFFFFF" stroke="#8D7A68" stroke-width="1.5"/>
      <text x="95" y="16" font-size="9.5" font-weight="800" fill="#4A3427" text-anchor="middle" font-family="sans-serif">🔑 CHAVE DA PROVA PRÁTICA</text>
      <text x="95" y="29" font-size="8.5" font-weight="600" fill="#5D4037" text-anchor="middle" font-family="sans-serif">Sem pressão = Bloqueio apenas mentual</text>
      <text x="95" y="42" font-size="8.5" font-weight="700" fill="#15803D" text-anchor="middle" font-family="sans-serif">Com 2 min pressão = Bloqueio INCISIVO (polpa!)</text>
    </g>
    

  <!-- Footer Banner: Clinical Landmarks Quick-Reference (2x2 Grid) -->
  <rect x="0" y="278" width="540" height="54" rx="14" fill="#FFFFFF" fill-opacity="0.88" stroke="#EAE3D9" stroke-width="1"/>
  <rect x="0" y="278" width="540" height="12" fill="#FFFFFF" fill-opacity="0.88"/>
  
        <g transform="translate(14, 284)">
          <rect width="250" height="19" rx="9.5" fill="#FEE2E2"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#991B1B" text-anchor="middle">🔴 Inserção: Fundo de sulco anterior ao forame</text>
        </g>
        
        <g transform="translate(276, 284)">
          <rect width="250" height="19" rx="9.5" fill="#EFF6FF"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#1D4ED8" text-anchor="middle">👁️ Referência: Forame entre ápices dos PMs</text>
        </g>
        
        <g transform="translate(14, 306)">
          <rect width="250" height="19" rx="9.5" fill="#FEF3C7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#92400E" text-anchor="middle">💉 Angulação: 45° de anterior para posterior</text>
        </g>
        
        <g transform="translate(276, 306)">
          <rect width="250" height="19" rx="9.5" fill="#DCFCE7"/>
          <text x="125.0" y="13" font-size="8.8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-weight="700" fill="#15803D" text-anchor="middle">👆 Manobra: Pressão digital 2 min (bloqueio incisivo)</text>
        </g>
        
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
