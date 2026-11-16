/**
 * ANESTESIO HUB - UNIOESTE ODONTOLOGIA
 * Arquivo Principal de Lógica, Quiz Interativo, Pomodoro, Modo Foco e Resumos
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. ESTADO GLOBAL DA APLICAÇÃO & PERSISTÊNCIA LOCALSTORAGE
  // =========================================================================
  const state = {
    // Banco de Dados
    questoes: (typeof QUESTOES_DATA !== 'undefined') ? QUESTOES_DATA : [],
    resumos: (typeof RESUMOS_DATA !== 'undefined') ? RESUMOS_DATA : [],
    
    // Progresso salvo no navegador
    completedSubtopics: JSON.parse(localStorage.getItem('anestesio_completed_subtopics') || '[]'),
    answeredQuestions: JSON.parse(localStorage.getItem('anestesio_answered_stats') || '{}'),
    
    // Quiz State
    quizMode: 'micro5', // micro5, micro10, repeat_wrong, by_mod, full
    quizFilterMod: 'all',
    quizQueue: [],
    currentQuizIndex: 0,
    currentQuizScore: 0,
    currentRoundWrong: [],
    isAnswerLocked: false,
    
    // Pomodoro Timer
    pomodoroMinutes: 25,
    pomodoroSeconds: 0,
    pomodoroIsRunning: false,
    pomodoroInterval: null,
    pomodoroIsBreak: false,
    
    // Modo Foco
    modoFoco: false
  };

  // Se questoes_data.js falhar por algum motivo, tentar fetch de questoes.json
  if (state.questoes.length === 0) {
    fetch('questoes.json')
      .then(r => r.json())
      .then(data => {
        state.questoes = data;
        initApp();
      })
      .catch(err => {
        console.warn('Carregamento via fetch local restrito pelo navegador, usando fallback.', err);
      });
  } else {
    initApp();
  }

  function initApp() {
    initAudio();
    initTabs();
    initPomodoro();
    initModoFoco();
    renderRaioXStats();
    renderResumos();
    initQuizControls();
    setupCalculator();
    updateGlobalProgress();
  }

  // =========================================================================
  // 2. SISTEMA DE ÁUDIO SINTÉTICO (WEB AUDIO API - ZERO ARQUIVOS EXTERNOS)
  // =========================================================================
  let audioCtx = null;
  function initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    } catch (e) {
      console.warn('Web Audio não suportado.');
    }
  }

  function playTone(freq, type = 'sine', duration = 0.15) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  function playSoundSuccess() {
    playTone(523.25, 'sine', 0.1); // C5
    setTimeout(() => playTone(659.25, 'sine', 0.15), 100); // E5
  }

  function playSoundWrong() {
    playTone(330, 'triangle', 0.15);
    setTimeout(() => playTone(280, 'triangle', 0.2), 120);
  }

  function playSoundChime() {
    playTone(587.33, 'sine', 0.15); // D5
    setTimeout(() => playTone(880.00, 'sine', 0.3), 150); // A5
  }

  // =========================================================================
  // 3. NAVEGAÇÃO POR ABAS
  // =========================================================================
  function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // =========================================================================
  // 4. TIMER POMODORO ANTI-TDAH
  // =========================================================================
  function initPomodoro() {
    const timerDisplay = document.getElementById('pomodoroDisplay');
    const toggleBtn = document.getElementById('pomoToggle');
    const resetBtn = document.getElementById('pomoReset');
    const label = document.getElementById('pomoLabel');

    function updateDisplay() {
      const min = String(state.pomodoroMinutes).padStart(2, '0');
      const sec = String(state.pomodoroSeconds).padStart(2, '0');
      if (timerDisplay) timerDisplay.textContent = `${min}:${sec}`;
    }

    function tick() {
      if (state.pomodoroSeconds === 0) {
        if (state.pomodoroMinutes === 0) {
          // Pomodoro finalizado!
          playSoundChime();
          clearInterval(state.pomodoroInterval);
          state.pomodoroIsRunning = false;
          if (toggleBtn) toggleBtn.innerHTML = '▶';
          
          if (!state.pomodoroIsBreak) {
            alert('🎉 Parabéns! Ciclo de foco de 25 min concluído! Descanse 5 minutos.');
            state.pomodoroIsBreak = true;
            state.pomodoroMinutes = 5;
            if (label) label.textContent = 'Pausa Curta';
          } else {
            alert('⏰ Pausa concluída! Pronto para mais um bloco de foco?');
            state.pomodoroIsBreak = false;
            state.pomodoroMinutes = 25;
            if (label) label.textContent = 'Foco';
          }
          state.pomodoroSeconds = 0;
          updateDisplay();
          return;
        }
        state.pomodoroMinutes--;
        state.pomodoroSeconds = 59;
      } else {
        state.pomodoroSeconds--;
      }
      updateDisplay();
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (state.pomodoroIsRunning) {
          clearInterval(state.pomodoroInterval);
          state.pomodoroIsRunning = false;
          toggleBtn.innerHTML = '▶';
        } else {
          state.pomodoroInterval = setInterval(tick, 1000);
          state.pomodoroIsRunning = true;
          toggleBtn.innerHTML = '⏸';
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        clearInterval(state.pomodoroInterval);
        state.pomodoroIsRunning = false;
        if (toggleBtn) toggleBtn.innerHTML = '▶';
        state.pomodoroIsBreak = false;
        state.pomodoroMinutes = 25;
        state.pomodoroSeconds = 0;
        if (label) label.textContent = 'Foco';
        updateDisplay();
      });
    }

    updateDisplay();
  }

  // =========================================================================
  // 5. MODO FOCO ANTI-DISTRAÇÃO
  // =========================================================================
  function initModoFoco() {
    const btnFoco = document.getElementById('btnModoFoco');
    const btnSairFoco = document.getElementById('btnSairFoco');

    function toggleFoco() {
      state.modoFoco = !state.modoFoco;
      document.body.classList.toggle('modo-foco-ativo', state.modoFoco);
      if (btnFoco) {
        btnFoco.innerHTML = state.modoFoco ? '✕ Sair do Foco' : '🎯 Modo Foco';
      }
    }

    if (btnFoco) btnFoco.addEventListener('click', toggleFoco);
    if (btnSairFoco) btnSairFoco.addEventListener('click', toggleFoco);
  }

  // =========================================================================
  // 6. ATUALIZAÇÃO DO PROGRESSO GLOBAL
  // =========================================================================
  function updateGlobalProgress() {
    // Total de subtópicos nos resumos
    let totalSubtopics = 0;
    state.resumos.forEach(r => totalSubtopics += (r.subtopicos ? r.subtopicos.length : 0));
    const completedCount = state.completedSubtopics.length;
    
    // Percentual
    const pct = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;
    
    const fill = document.getElementById('globalProgressFill');
    if (fill) fill.style.width = `${pct}%`;

    const label = document.getElementById('topProgressLabel');
    if (label) label.textContent = `${pct}% Dominado (${completedCount}/${totalSubtopics} tópicos)`;
    
    const badgeCount = document.getElementById('dashTopicsCount');
    if (badgeCount) badgeCount.textContent = `${completedCount}/${totalSubtopics}`;
    
    // Total de questões acertadas
    let totalCorrect = 0;
    Object.values(state.answeredQuestions).forEach(st => {
      if (st.correct) totalCorrect++;
    });
    const dashQuestionsCount = document.getElementById('dashQuestionsCount');
    if (dashQuestionsCount) dashQuestionsCount.textContent = `${totalCorrect}/${state.questoes.length}`;
  }

  // =========================================================================
  // 7. SEÇÃO 1: RENDERIZAÇÃO DO RAIO-X DAS PROVAS
  // =========================================================================
  function renderRaioXStats() {
    // Ranking calculado a partir da recorrência real das provas da Unioeste
    const ranking = [
      { tema: "Bloqueio Pterigomandibular (NAI, Lingual, Bucal, falhas e referências)", pct: 28, cor: "var(--mod3-color)", qCount: "8 questões" },
      { tema: "Farmacologia Comparada, Vasoconstritores & Pacientes Cardiopatas", pct: 24, cor: "var(--mod2-color)", qCount: "7 questões" },
      { tema: "Acidentes & Complicações (Parestesia, Trismo, Paralisia e Síncope)", pct: 20, cor: "var(--mod4-color)", qCount: "6 questões" },
      { tema: "Técnicas Maxilares Infiltrativas e Bloqueio ASP (Pós-túber) e Infraorbital", pct: 16, cor: "var(--mod3-color)", qCount: "4 questões" },
      { tema: "Biossegurança, Classificação de Spaulding e Autoclaves", pct: 12, cor: "var(--mod1-color)", qCount: "3 questões" }
    ];

    const container = document.getElementById('rankingContainer');
    if (!container) return;

    container.innerHTML = ranking.map((r, i) => `
      <div class="rank-item">
        <div class="rank-badge" style="color: ${r.cor}">${i + 1}º</div>
        <div class="rank-info">
          <div class="rank-title-row">
            <span class="rank-name">${r.tema}</span>
            <span class="rank-pct">${r.pct}% das provas (${r.qCount})</span>
          </div>
          <div class="rank-bar-bg">
            <div class="rank-bar-fill" style="width: ${r.pct * 3.2}%; background: ${r.cor}"></div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 8. SEÇÃO 2: RENDERIZAÇÃO DOS RESUMOS DIDÁTICOS MODULARES
  // =========================================================================
  function renderResumos() {
    const container = document.getElementById('resumosContainer');
    if (!container) return;

    container.innerHTML = state.resumos.map(mod => {
      const subtopicsHtml = mod.subtopicos.map(sub => {
        const isDone = state.completedSubtopics.includes(sub.sub_id);
        return `
          <div class="subtopic-item" id="item_${sub.sub_id}">
            <div class="subtopic-header" data-subid="${sub.sub_id}">
              <div class="subtopic-title-wrap">
                <button class="check-topic-btn ${isDone ? 'completed' : ''}" data-subid="${sub.sub_id}" title="Marcar como Dominado">
                  ✓
                </button>
                <span class="subtopic-title">${sub.titulo}</span>
              </div>
              <span class="subtopic-chevron">▼</span>
            </div>
            <div class="subtopic-body">
              ${sub.conteudo_html}
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="module-section-card" data-mod="${mod.modulo}">
          <div class="module-header-box ${mod.cor}">
            <div class="module-title-wrap">
              <h3>${mod.icone} ${mod.titulo}</h3>
              <div class="module-meta-badges">
                <span>⏱️ Leitura: ${mod.tempo_leitura}</span>
                <span>${mod.incidencia_prova}</span>
              </div>
            </div>
          </div>
          <div class="subtopics-list">
            ${subtopicsHtml}
          </div>
        </div>
      `;
    }).join('');

    // Eventos dos acordeões
    container.querySelectorAll('.subtopic-header').forEach(header => {
      header.addEventListener('click', (e) => {
        // Se clicou no botão de checklist, não fecha o acordeão
        if (e.target.closest('.check-topic-btn')) return;
        const item = header.closest('.subtopic-item');
        item.classList.toggle('open');
      });
    });

    // Eventos dos botões de checklist ("Marcar como dominado")
    container.querySelectorAll('.check-topic-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const subId = btn.getAttribute('data-subid');
        const idx = state.completedSubtopics.indexOf(subId);
        
        if (idx > -1) {
          state.completedSubtopics.splice(idx, 1);
          btn.classList.remove('completed');
        } else {
          state.completedSubtopics.push(subId);
          btn.classList.add('completed');
          playSoundSuccess();
        }
        
        localStorage.setItem('anestesio_completed_subtopics', JSON.stringify(state.completedSubtopics));
        updateGlobalProgress();
      });
    });

    // Filtros de módulo nos resumos
    const modFilterBtns = document.querySelectorAll('.mod-filter-btn');
    modFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const modNum = btn.getAttribute('data-mod');
        modFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cards = container.querySelectorAll('.module-section-card');
        cards.forEach(card => {
          if (modNum === 'all' || card.getAttribute('data-mod') === modNum) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // =========================================================================
  // 9. SEÇÃO 3: QUIZ INTERATIVO ANTI-TDAH
  // =========================================================================
  function initQuizControls() {
    const modeBtns = document.querySelectorAll('.quiz-mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.quizMode = btn.getAttribute('data-mode');
        
        // Exibir select de módulo se modo for "by_mod"
        const modSelectWrap = document.getElementById('quizModSelectWrap');
        if (modSelectWrap) {
          modSelectWrap.style.display = (state.quizMode === 'by_mod') ? 'block' : 'none';
        }
      });
    });

    const selectMod = document.getElementById('quizModuleSelect');
    if (selectMod) {
      selectMod.addEventListener('change', () => {
        state.quizFilterMod = selectMod.value;
      });
    }

    const startBtn = document.getElementById('btnStartQuiz');
    if (startBtn) {
      startBtn.addEventListener('click', startQuizSession);
    }

    const nextBtn = document.getElementById('btnNextQuestion');
    if (nextBtn) {
      nextBtn.addEventListener('click', advanceQuizQuestion);
    }

    const restartBtn = document.getElementById('btnRestartQuiz');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        document.getElementById('quizSummaryCard').classList.remove('visible');
        document.getElementById('quizControlsCard').style.display = 'block';
      });
    }

    const retryWrongBtn = document.getElementById('btnRetryWrong');
    if (retryWrongBtn) {
      retryWrongBtn.addEventListener('click', () => {
        if (state.currentRoundWrong.length === 0) {
          alert('Você acertou 100%! Nenhuma questão para repetir.');
          return;
        }
        state.quizQueue = [...state.currentRoundWrong];
        state.currentQuizIndex = 0;
        state.currentQuizScore = 0;
        state.currentRoundWrong = [];
        
        document.getElementById('quizSummaryCard').classList.remove('visible');
        document.getElementById('quizActiveArea').classList.add('visible');
        renderCurrentQuestion();
      });
    }
  }

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startQuizSession() {
    let pool = [...state.questoes];

    if (state.quizMode === 'repeat_wrong') {
      // Filtrar apenas questões que o usuário errou no histórico
      const wrongIds = Object.keys(state.answeredQuestions).filter(id => !state.answeredQuestions[id].correct);
      if (wrongIds.length === 0) {
        alert('Você não tem questões erradas registradas no momento! Selecione outro modo para treinar.');
        return;
      }
      pool = pool.filter(q => wrongIds.includes(q.id));
    } else if (state.quizMode === 'by_mod') {
      if (state.quizFilterMod !== 'all') {
        pool = pool.filter(q => String(q.modulo) === String(state.quizFilterMod));
      }
    }

    if (pool.length === 0) {
      alert('Nenhuma questão encontrada para este filtro.');
      return;
    }

    pool = shuffle(pool);

    if (state.quizMode === 'micro5') {
      pool = pool.slice(0, 5);
    } else if (state.quizMode === 'micro10') {
      pool = pool.slice(0, 10);
    }

    state.quizQueue = pool;
    state.currentQuizIndex = 0;
    state.currentQuizScore = 0;
    state.currentRoundWrong = [];
    state.isAnswerLocked = false;

    // Alternar visibilidade
    document.getElementById('quizControlsCard').style.display = 'none';
    document.getElementById('quizSummaryCard').classList.remove('visible');
    document.getElementById('quizActiveArea').classList.add('visible');

    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    state.isAnswerLocked = false;
    const q = state.quizQueue[state.currentQuizIndex];
    if (!q) {
      finishQuizRound();
      return;
    }

    // Progresso da bateria
    const total = state.quizQueue.length;
    const cur = state.currentQuizIndex + 1;
    const pct = Math.round((cur / total) * 100);

    const countLabel = document.getElementById('quizProgressCount');
    if (countLabel) countLabel.textContent = `Questão ${cur} de ${total}`;
    
    const fill = document.getElementById('quizProgressFill');
    if (fill) fill.style.width = `${pct}%`;

    // Metadados
    const badgesContainer = document.getElementById('qBadges');
    if (badgesContainer) {
      let badgesHtml = `<span class="q-badge mod${q.modulo}">Módulo ${q.modulo}</span>`;
      badgesHtml += `<span class="q-badge" style="background: rgba(255,255,255,0.1); color: #fff;">${q.prova_origem}</span>`;
      if (q.incidencia_alta) {
        badgesHtml += `<span class="q-badge hot">🔥 Alta Frequência</span>`;
      }
      badgesContainer.innerHTML = badgesHtml;
    }

    // ID
    const qIdEl = document.getElementById('qId');
    if (qIdEl) qIdEl.textContent = q.id;

    // Enunciado
    const enunciadoEl = document.getElementById('qEnunciado');
    if (enunciadoEl) enunciadoEl.textContent = q.enunciado;

    // Alternativas
    const altsContainer = document.getElementById('qAlternativas');
    if (altsContainer) {
      altsContainer.innerHTML = q.alternativas.map((alt, idx) => `
        <button class="alt-btn" data-index="${idx}">
          <span style="font-weight: 700; color: #38bdf8;">${String.fromCharCode(65 + idx)}</span>
          <span>${alt.replace(/^[a-eA-E]\)\s*/, '')}</span>
        </button>
      `).join('');

      altsContainer.querySelectorAll('.alt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (state.isAnswerLocked) return;
          const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
          handleSelectAnswer(selectedIdx, q);
        });
      });
    }

    // Ocultar feedback
    const feedbackBox = document.getElementById('feedbackBox');
    if (feedbackBox) feedbackBox.classList.remove('visible');
    
    const nextBtn = document.getElementById('btnNextQuestion');
    if (nextBtn) nextBtn.style.display = 'none';
  }

  function handleSelectAnswer(selectedIdx, question) {
    state.isAnswerLocked = true;
    const isCorrect = (selectedIdx === question.gabarito_oficial);

    const alts = document.querySelectorAll('.alt-btn');
    alts.forEach((btn, idx) => {
      btn.classList.add('locked');
      if (idx === question.gabarito_oficial) {
        btn.classList.add('reveal-correct');
      }
      if (idx === selectedIdx) {
        btn.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
      }
    });

    if (isCorrect) {
      state.currentQuizScore++;
      playSoundSuccess();
    } else {
      state.currentRoundWrong.push(question);
      playSoundWrong();
    }

    // Registrar no histórico persistente
    state.answeredQuestions[question.id] = {
      correct: isCorrect,
      timestamp: Date.now()
    };
    localStorage.setItem('anestesio_answered_stats', JSON.stringify(state.answeredQuestions));
    updateGlobalProgress();

    // Exibir justificativa detalhada
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackHeader = document.getElementById('feedbackHeader');
    const feedbackText = document.getElementById('feedbackText');
    const pegadinhaBox = document.getElementById('feedbackPegadinha');

    if (feedbackBox) {
      feedbackBox.classList.add('visible');
      if (feedbackHeader) {
        feedbackHeader.className = `feedback-header ${isCorrect ? 'correct' : 'wrong'}`;
        feedbackHeader.innerHTML = isCorrect ? '🎉 Resposta Correta!' : '❌ Resposta Incorreta!';
      }
      if (feedbackText) {
        feedbackText.textContent = question.justificativa;
      }
      if (pegadinhaBox) {
        if (question.pegadinha) {
          pegadinhaBox.style.display = 'block';
          pegadinhaBox.innerHTML = `<strong>⚠️ Atenção à Pegadinha:</strong> ${question.pegadinha}`;
        } else {
          pegadinhaBox.style.display = 'none';
        }
      }
    }

    const nextBtn = document.getElementById('btnNextQuestion');
    if (nextBtn) {
      nextBtn.style.display = 'inline-block';
      nextBtn.focus();
    }
  }

  function advanceQuizQuestion() {
    state.currentQuizIndex++;
    if (state.currentQuizIndex < state.quizQueue.length) {
      renderCurrentQuestion();
    } else {
      finishQuizRound();
    }
  }

  function finishQuizRound() {
    document.getElementById('quizActiveArea').classList.remove('visible');
    const summaryCard = document.getElementById('quizSummaryCard');
    summaryCard.classList.add('visible');

    const total = state.quizQueue.length;
    const score = state.currentQuizScore;
    const pct = Math.round((score / total) * 100);

    const scoreNum = document.getElementById('summaryScoreNum');
    if (scoreNum) scoreNum.textContent = score;
    
    const scoreTotal = document.getElementById('summaryScoreTotal');
    if (scoreTotal) scoreTotal.textContent = `de ${total} (${pct}%)`;

    const title = document.getElementById('summaryTitle');
    const desc = document.getElementById('summaryDesc');

    if (pct >= 80) {
      title.textContent = '🏆 Excelente Desempenho!';
      desc.textContent = 'Você demonstrou grande domínio dos conteúdos da prova. Continue mantendo a consistência!';
      playSoundChime();
    } else if (pct >= 60) {
      title.textContent = '👍 Bom Progresso!';
      desc.textContent = 'Você acertou a maior parte. Recomendamos revisar os distratores das questões que errou.';
    } else {
      title.textContent = '⚠️ Momento de Revisão!';
      desc.textContent = 'Não desanime! Use o botão "Repetir as que Errei" para fixar exatamente as pegadinhas.';
    }

    const retryBtn = document.getElementById('btnRetryWrong');
    if (retryBtn) {
      retryBtn.style.display = (state.currentRoundWrong.length > 0) ? 'inline-block' : 'none';
    }
  }

  // =========================================================================
  // 10. SEÇÃO 4: CALCULADORA CLÍNICA DE DOSES E TUBETES
  // =========================================================================
  function setupCalculator() {
    const pesoInput = document.getElementById('calcPeso');
    const salSelect = document.getElementById('calcSal');
    const condicaoSelect = document.getElementById('calcCondicao');

    function calculate() {
      const peso = parseFloat(pesoInput.value) || 0;
      const salKey = salSelect.value;
      const condicao = condicaoSelect.value; // 'saudavel' ou 'cardiopata'

      // Parâmetros dos sais anestésicos (Malamed 6ª ed.)
      const sais = {
        'lido2': { nome: 'Lidocaína 2% c/ epinefrina 1:100.000', doseMaxKg: 4.4, tetoAbsoluto: 300, mgTubete: 36, vaso: 'epi100' },
        'mepi2': { nome: 'Mepivacaína 2% c/ epinefrina 1:100.000', doseMaxKg: 4.4, tetoAbsoluto: 300, mgTubete: 36, vaso: 'epi100' },
        'mepi3': { nome: 'Mepivacaína 3% SEM vasoconstritor', doseMaxKg: 4.4, tetoAbsoluto: 300, mgTubete: 54, vaso: 'none' },
        'prilo3': { nome: 'Prilocaína 3% c/ Felipressina 0,03 UI/mL', doseMaxKg: 6.0, tetoAbsoluto: 400, mgTubete: 54, vaso: 'feli' },
        'arti4': { nome: 'Articaína 4% c/ epinefrina 1:100.000', doseMaxKg: 7.0, tetoAbsoluto: 500, mgTubete: 72, vaso: 'epi100' },
        'bupi05': { nome: 'Bupivacaína 0,5% c/ epinefrina 1:200.000', doseMaxKg: 1.3, tetoAbsoluto: 90, mgTubete: 9, vaso: 'epi200' }
      };

      const sal = sais[salKey];
      if (!sal || peso <= 0) {
        document.getElementById('resDoseMaxMg').textContent = '0 mg';
        document.getElementById('resMgPorTubete').textContent = '0 mg';
        document.getElementById('resMaxTubetesSal').textContent = '0';
        document.getElementById('resMaxTubetesVaso').textContent = '0';
        document.getElementById('resFatorLimitante').textContent = '-';
        return;
      }

      // 1. Dose pelo Sal
      const doseCalculada = peso * sal.doseMaxKg;
      const doseFinalSal = Math.min(doseCalculada, sal.tetoAbsoluto);
      const tubetesPeloSal = Math.floor(doseFinalSal / sal.mgTubete);

      // 2. Limite pelo Vasoconstritor
      let tubetesPeloVaso = 99; // infinito se sem vaso
      let vasoDesc = 'Sem restrição adrenérgica';

      if (sal.vaso === 'epi100') {
        const tetoEpi = (condicao === 'cardiopata') ? 0.04 : 0.2;
        tubetesPeloVaso = Math.floor(tetoEpi / 0.018); // 0.018 mg por tubete
        vasoDesc = (condicao === 'cardiopata') ? '0,04 mg (Cardiopata - Máx 2 tubetes)' : '0,2 mg (Saudável - Máx 11 tubetes)';
      } else if (sal.vaso === 'epi200') {
        const tetoEpi = (condicao === 'cardiopata') ? 0.04 : 0.2;
        tubetesPeloVaso = Math.floor(tetoEpi / 0.009); // 0.009 mg por tubete
        vasoDesc = (condicao === 'cardiopata') ? '0,04 mg (Cardiopata - Máx 4 tubetes)' : '0,2 mg (Saudável - Máx 22 tubetes)';
      } else if (sal.vaso === 'feli') {
        tubetesPeloVaso = (condicao === 'cardiopata') ? 5 : tubetesPeloSal;
        vasoDesc = 'Felipressina (Não adrenérgica - segura em cardiopatas)';
      }

      // Fator limitante
      const maxTubetesFinal = Math.min(tubetesPeloSal, tubetesPeloVaso);
      let limitante = '';
      if (tubetesPeloVaso < tubetesPeloSal) {
        limitante = `⚠️ VASOCONSTRITOR (${maxTubetesFinal} tubetes pelo limite de adrenalina)`;
      } else {
        limitante = `💉 SAL ANESTÉSICO (${maxTubetesFinal} tubetes pelo peso do paciente)`;
      }

      document.getElementById('resDoseMaxMg').textContent = `${doseFinalSal.toFixed(1)} mg (teto: ${sal.tetoAbsoluto} mg)`;
      document.getElementById('resMgPorTubete').textContent = `${sal.mgTubete} mg/tubete`;
      document.getElementById('resMaxTubetesSal').textContent = `${tubetesPeloSal} tubetes (${(doseFinalSal / sal.mgTubete).toFixed(2)})`;
      document.getElementById('resMaxTubetesVaso').textContent = `${tubetesPeloVaso} tubetes (${vasoDesc})`;
      document.getElementById('resFatorLimitante').textContent = limitante;
    }

    if (pesoInput) pesoInput.addEventListener('input', calculate);
    if (salSelect) salSelect.addEventListener('change', calculate);
    if (condicaoSelect) condicaoSelect.addEventListener('change', calculate);

    calculate();
  }
});
