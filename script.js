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
    modoFoco: false,

    // Fixação por Módulo nos Resumos Teóricos
    fixacaoCurrentIndex: { 1: 0, 2: 0, 3: 0, 4: 0 }
  };

  // Mapeamento dos passos cíclicos de background para cada aba/módulo
  const TAB_BACKDROP_STEPS = {
    'raioXSection': 0,
    'resumosSection': 1,
    'quizSection': 2,
    'casosSection': 3
  };

  function updateBackdropStep(targetId) {
    const backdrop = document.getElementById('ambientBackdrop') || document.querySelector('.ambient-backdrop');
    if (!backdrop) return;
    const step = TAB_BACKDROP_STEPS[targetId] !== undefined ? TAB_BACKDROP_STEPS[targetId] : 1;
    backdrop.classList.remove('step-0', 'step-1', 'step-2', 'step-3');
    backdrop.classList.add(`step-${step}`);
  }

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
    initCasosClinicos();
    initCustomSelects();
    updateGlobalProgress();
    refreshIcons();
  }

  function refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
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
    playTone(523.25, 'sine', 0.1);
    setTimeout(() => playTone(659.25, 'sine', 0.15), 100);
  }

  function playSoundWrong() {
    playTone(330, 'triangle', 0.15);
    setTimeout(() => playTone(280, 'triangle', 0.2), 120);
  }

  function playSoundChime() {
    playTone(587.33, 'sine', 0.15);
    setTimeout(() => playTone(880.00, 'sine', 0.3), 150);
  }

  function playSfx(type = 'click') {
    try {
      if (type === 'correct') {
        playSoundSuccess();
      } else if (type === 'wrong') {
        playSoundWrong();
      } else {
        playTone(620, 'sine', 0.04);
      }
    } catch (e) {}
  }

  // =========================================================================
  // 3. NAVEGAÇÃO POR ABAS & ANIMAÇÃO CÍCLICA DOS ARCOS DE FUNDO
  // =========================================================================
  function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Inicializa no passo da aba ativa
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
      updateBackdropStep(activeTab.getAttribute('data-target'));
    }

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
        
        // Dispara a animação cíclica suave dos arcos marrons
        updateBackdropStep(targetId);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        refreshIcons();
      });
    });
  }

  // =========================================================================
  // 4. TIMER DE ESTUDOS
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
          playSoundChime();
          clearInterval(state.pomodoroInterval);
          state.pomodoroIsRunning = false;
          updatePlayIcon();
          
          if (!state.pomodoroIsBreak) {
            alert('Ciclo de foco de 25 min concluído! Intervalo de 5 minutos.');
            state.pomodoroIsBreak = true;
            state.pomodoroMinutes = 5;
            if (label) label.textContent = 'Intervalo';
          } else {
            alert('Intervalo concluído! Retornando ao bloco de foco.');
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

    function updatePlayIcon() {
      if (!toggleBtn) return;
      toggleBtn.innerHTML = state.pomodoroIsRunning 
        ? '<i data-lucide="pause"></i>' 
        : '<i data-lucide="play"></i>';
      refreshIcons();
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (state.pomodoroIsRunning) {
          clearInterval(state.pomodoroInterval);
          state.pomodoroIsRunning = false;
          updatePlayIcon();
        } else {
          state.pomodoroInterval = setInterval(tick, 1000);
          state.pomodoroIsRunning = true;
          updatePlayIcon();
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        clearInterval(state.pomodoroInterval);
        state.pomodoroIsRunning = false;
        updatePlayIcon();
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
  // 5. MODO FOCO
  // =========================================================================
  function initModoFoco() {
    const btnFoco = document.getElementById('btnModoFoco');
    const btnSairFoco = document.getElementById('btnSairFoco');

    function toggleFoco() {
      state.modoFoco = !state.modoFoco;
      document.body.classList.toggle('modo-foco-ativo', state.modoFoco);
      if (btnFoco) {
        btnFoco.innerHTML = state.modoFoco 
          ? '<i data-lucide="minimize-2"></i><span>Sair do Foco</span>' 
          : '<i data-lucide="maximize-2"></i><span>Modo Foco</span>';
        refreshIcons();
      }
    }

    if (btnFoco) btnFoco.addEventListener('click', toggleFoco);
    if (btnSairFoco) btnSairFoco.addEventListener('click', toggleFoco);
  }

  // =========================================================================
  // 6. ATUALIZAÇÃO DO PROGRESSO GLOBAL
  // =========================================================================
  function updateGlobalProgress() {
    let totalSubtopics = 0;
    state.resumos.forEach(r => totalSubtopics += (r.subtopicos ? r.subtopicos.length : 0));
    const completedCount = state.completedSubtopics.length;
    
    const pct = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;
    
    const fill = document.getElementById('globalProgressFill');
    if (fill) fill.style.width = `${pct}%`;

    const badgeCount = document.getElementById('dashTopicsCount');
    if (badgeCount) badgeCount.textContent = `${completedCount}/${totalSubtopics}`;
    
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
    const ranking = [
      { tema: "Bloqueio Pterigomandibular (NAI, Lingual, Bucal, falhas e referências)", pct: 28, cor: "var(--mod3-color)", qCount: "8 questões" },
      { tema: "Farmacologia Comparada, Vasoconstritores & Pacientes Cardiopatas", pct: 24, cor: "var(--mod2-color)", qCount: "7 questões" },
      { tema: "Acidentes & Complicações (Parestesia, Trismo, Paralisia e Síncope)", pct: 20, cor: "var(--mod4-color)", qCount: "6 questões" },
      { tema: "Técnicas Maxilares Infiltrativas e Bloqueio ASP e Infraorbital", pct: 16, cor: "var(--mod3-color)", qCount: "4 questões" },
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
            <span class="rank-pct">${r.pct}% (${r.qCount})</span>
          </div>
          <div class="rank-bar-bg">
            <div class="rank-bar-fill" style="width: ${r.pct * 3.2}%; background: ${r.cor}"></div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 8. SEÇÃO 2: RENDERIZAÇÃO DOS RESUMOS TEÓRICOS MODULARES
  // =========================================================================
  function renderResumos() {
    const container = document.getElementById('resumosContainer');
    if (!container) return;

    container.innerHTML = state.resumos.map(mod => {
      const subtopicsHtml = mod.subtopicos.map(sub => {
        const isDone = state.completedSubtopics.includes(sub.sub_id);
        const isOpen = sub.sub_id === 'mod1_1';
        return `
          <div class="subtopic-item ${isOpen ? 'open' : ''}" id="item_${sub.sub_id}">
            <div class="subtopic-header" data-subid="${sub.sub_id}">
              <div class="subtopic-title-wrap">
                <button class="check-topic-btn ${isDone ? 'completed' : ''}" data-subid="${sub.sub_id}" title="Marcar como concluído">
                  <i data-lucide="check"></i>
                </button>
                <span class="subtopic-title">${sub.titulo}</span>
              </div>
              <i data-lucide="chevron-down" class="subtopic-chevron"></i>
            </div>
            <div class="subtopic-body">
              ${sub.conteudo_html}
            </div>
          </div>
        `;
      }).join('');

      const fixacaoHtml = renderFixacaoWrapperHtml(mod);
      return `
        <div class="module-section-card" data-mod="${mod.modulo}">
          <div class="module-header-box ${mod.cor}">
            <div class="module-header-left">
              <div class="module-title-row">
                <i data-lucide="${mod.icone || 'shield'}" class="module-main-icon"></i>
                <h3 class="module-title-text">${mod.titulo}</h3>
              </div>
              <div class="module-meta-badges">
                <span class="badge-pill"><i data-lucide="clock"></i> Tempo estimado: ${mod.tempo_leitura}</span>
                <span class="badge-pill"><i data-lucide="star"></i> ${mod.incidencia_prova.trim()}</span>
              </div>
            </div>
            <i data-lucide="chevron-up" class="module-toggle-chevron"></i>
          </div>
          <div class="subtopics-list">
            ${subtopicsHtml}
            ${fixacaoHtml}
          </div>
        </div>
      `;
    }).join('');

    // Eventos dos acordeões
    container.querySelectorAll('.subtopic-header').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('.check-topic-btn')) return;
        const item = header.closest('.subtopic-item');
        item.classList.toggle('open');
      });
    });

    // Eventos dos botões de checklist
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

    // Filtros de módulo
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

    // Inicializar sessões de fixação para cada módulo
    state.resumos.forEach(mod => {
      initFixacaoSection(mod.modulo);
    });

    refreshIcons();
  }

  // =========================================================================
  // FIXAÇÃO TEÓRICA: PERGUNTAS AO FINAL DE CADA MÓDULO (ESTILO QUIZ INTERATIVO)
  // =========================================================================
  function renderFixacaoWrapperHtml(mod) {
    const modQuestions = state.questoes.filter(q => q.modulo === mod.modulo);
    if (!modQuestions || modQuestions.length === 0) return '';

    return `
      <div class="module-fixacao-section" id="fixacao_section_${mod.modulo}">
        <div class="module-fixacao-header">
          <div class="fixacao-header-info">
            <div class="fixacao-badge-tag">
              <i data-lucide="help-circle"></i>
              <span>Perguntas de Fixação</span>
            </div>
            <h4 class="fixacao-section-title">Fixação de Conteúdo · Módulo ${mod.modulo}</h4>
            <p class="fixacao-section-desc">Consolide este módulo com ${modQuestions.length} questões reais de prova da UNIOESTE comentadas no mesmo formato do simulador.</p>
          </div>
          <div class="fixacao-header-stats">
            <span class="fixacao-prog-text" id="fixProgText_${mod.modulo}">0/${modQuestions.length} resolvidas</span>
          </div>
        </div>

        <!-- Question Tabs Bar -->
        <div class="fixacao-tabs-bar" id="fixTabs_${mod.modulo}">
          ${modQuestions.map((q, idx) => `
            <button class="fix-tab-btn ${idx === 0 ? 'active' : ''}" data-mod="${mod.modulo}" data-idx="${idx}" id="fixTab_${mod.modulo}_${idx}" title="${q.tema}">
              <span class="fix-tab-label">Q${idx + 1}</span>
              <span class="fix-tab-icon" id="fixTabIcon_${mod.modulo}_${idx}"></span>
            </button>
          `).join('')}
        </div>

        <!-- Active Question Display Area -->
        <div class="fixacao-question-display" id="fixDisplay_${mod.modulo}">
        </div>
      </div>
    `;
  }

  function initFixacaoSection(modulo) {
    const modQuestions = state.questoes.filter(q => q.modulo === modulo);
    if (!modQuestions || modQuestions.length === 0) return;

    if (state.fixacaoCurrentIndex[modulo] === undefined) {
      state.fixacaoCurrentIndex[modulo] = 0;
    }

    const tabsContainer = document.getElementById(`fixTabs_${modulo}`);
    if (tabsContainer) {
      tabsContainer.querySelectorAll('.fix-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          state.fixacaoCurrentIndex[modulo] = idx;
          updateFixacaoTabs(modulo);
          renderFixacaoQuestion(modulo, idx);
          playSfx('click');
        });
      });
    }

    updateFixacaoTabs(modulo);
    renderFixacaoQuestion(modulo, state.fixacaoCurrentIndex[modulo]);
  }

  function updateFixacaoTabs(modulo) {
    const modQuestions = state.questoes.filter(q => q.modulo === modulo);
    const currentIdx = state.fixacaoCurrentIndex[modulo] || 0;
    let answeredCount = 0;

    modQuestions.forEach((q, idx) => {
      const btn = document.getElementById(`fixTab_${modulo}_${idx}`);
      const iconSpan = document.getElementById(`fixTabIcon_${modulo}_${idx}`);
      if (!btn) return;

      btn.classList.toggle('active', idx === currentIdx);
      btn.classList.remove('tab-correct', 'tab-wrong');

      const ans = state.answeredQuestions[q.id];
      if (ans) {
        answeredCount++;
        if (ans.correct) {
          btn.classList.add('tab-correct');
          if (iconSpan) iconSpan.innerHTML = '<i data-lucide="check"></i>';
        } else {
          btn.classList.add('tab-wrong');
          if (iconSpan) iconSpan.innerHTML = '<i data-lucide="x"></i>';
        }
      } else {
        if (iconSpan) iconSpan.innerHTML = '';
      }
    });

    const progText = document.getElementById(`fixProgText_${modulo}`);
    if (progText) {
      progText.textContent = `${answeredCount}/${modQuestions.length} resolvidas`;
    }
    refreshIcons();
  }

  function renderFixacaoQuestion(modulo, qIndex) {
    const modQuestions = state.questoes.filter(q => q.modulo === modulo);
    const q = modQuestions[qIndex];
    if (!q) return;

    const display = document.getElementById(`fixDisplay_${modulo}`);
    if (!display) return;

    const ans = state.answeredQuestions[q.id];
    const isAnswered = !!ans;
    const isCorrect = isAnswered ? ans.correct : false;
    const chosenIdx = isAnswered ? ans.chosenIndex : null;

    display.innerHTML = `
      <div class="fixacao-card animate-fade-in">
        <div class="fixacao-q-meta">
          <div class="fixacao-meta-badges">
            <span class="q-badge">Questão ${qIndex + 1} de ${modQuestions.length}</span>
            <span class="q-badge">${q.prova_origem}</span>
            ${q.incidencia_alta ? '<span class="q-badge hot"><i data-lucide="zap"></i> Alta Frequência</span>' : ''}
          </div>
          <div class="fixacao-q-id">${q.id}</div>
        </div>

        <div class="fix-tema">
          <i data-lucide="bookmark"></i>
          <span><strong>Tema Cobrado:</strong> ${q.tema}</span>
        </div>

        <div class="fix-enunciado">${q.enunciado}</div>

        <!-- Alternativas -->
        <div class="fix-alternativas" id="fixAlts_${modulo}_${qIndex}">
          ${q.alternativas.map((alt, aIdx) => {
            let btnClasses = 'alt-btn';
            if (isAnswered) {
              btnClasses += ' locked';
              if (aIdx === q.gabarito_oficial) {
                btnClasses += ' reveal-correct';
              }
              if (chosenIdx === aIdx) {
                btnClasses += isCorrect ? ' selected-correct' : ' selected-wrong';
              }
            }
            return `
              <button class="${btnClasses}" data-altidx="${aIdx}">
                <span class="alt-letter">${String.fromCharCode(65 + aIdx)}</span>
                <span class="alt-text">${alt.replace(/^[a-eA-E]\)\s*/, '')}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Caixa de Feedback -->
        <div class="feedback-box ${isAnswered ? 'visible' : ''}">
          <div class="feedback-header ${isCorrect ? 'correct' : 'wrong'}">
            <i data-lucide="${isCorrect ? 'check-circle-2' : 'x-circle'}"></i>
            <span>${isCorrect ? 'Alternativa Correta! Gabarito Oficial confirmadíssimo.' : 'Alternativa Incorreta'}</span>
          </div>
          <div class="feedback-text">${q.justificativa}</div>
          ${q.pegadinha ? `
            <div class="feedback-pegadinha" style="display: block;">
              <strong>Atenção à Pegadinha da Banca:</strong> ${q.pegadinha}
            </div>
          ` : ''}
        </div>

        <!-- Barra de Ações e Navegação -->
        <div class="fix-actions-row">
          <button class="fix-nav-btn prev-btn" data-target="${qIndex - 1}" ${qIndex === 0 ? 'disabled' : ''}>
            <i data-lucide="arrow-left"></i> Anterior
          </button>
          
          <div class="fix-actions-center">
            ${isAnswered ? `
              <button class="fix-retry-btn" data-mod="${modulo}" data-qidx="${qIndex}">
                <i data-lucide="rotate-ccw"></i> Refazer Questão
              </button>
            ` : ''}
          </div>

          <button class="fix-nav-btn next-btn" data-target="${qIndex + 1}" ${qIndex === modQuestions.length - 1 ? 'disabled' : ''}>
            Próxima <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    // Click handler for alternatives
    if (!isAnswered) {
      const altsContainer = document.getElementById(`fixAlts_${modulo}_${qIndex}`);
      if (altsContainer) {
        altsContainer.querySelectorAll('.alt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const aIdx = parseInt(btn.getAttribute('data-altidx'), 10);
            handleFixacaoAnswer(modulo, qIndex, aIdx, q);
          });
        });
      }
    }

    // Click handler for retry
    const retryBtn = display.querySelector('.fix-retry-btn');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        delete state.answeredQuestions[q.id];
        localStorage.setItem('anestesio_answered_stats', JSON.stringify(state.answeredQuestions));
        updateGlobalProgress();
        updateFixacaoTabs(modulo);
        renderFixacaoQuestion(modulo, qIndex);
        playSfx('click');
      });
    }

    // Click handler for navigation buttons
    display.querySelectorAll('.fix-nav-btn').forEach(b => {
      b.addEventListener('click', () => {
        const target = parseInt(b.getAttribute('data-target'), 10);
        if (target >= 0 && target < modQuestions.length) {
          state.fixacaoCurrentIndex[modulo] = target;
          updateFixacaoTabs(modulo);
          renderFixacaoQuestion(modulo, target);
          playSfx('click');
        }
      });
    });

    refreshIcons();
  }

  function handleFixacaoAnswer(modulo, qIndex, chosenIdx, question) {
    const isCorrect = (chosenIdx === question.gabarito_oficial);

    if (isCorrect) {
      playSoundSuccess();
    } else {
      playSoundWrong();
    }

    state.answeredQuestions[question.id] = {
      correct: isCorrect,
      chosenIndex: chosenIdx,
      timestamp: Date.now()
    };
    localStorage.setItem('anestesio_answered_stats', JSON.stringify(state.answeredQuestions));
    updateGlobalProgress();

    updateFixacaoTabs(modulo);
    renderFixacaoQuestion(modulo, qIndex);
  }

  // =========================================================================
  // 9. SEÇÃO 3: QUIZ INTERATIVO
  // =========================================================================
  function initQuizControls() {
    const modeBtns = document.querySelectorAll('.quiz-mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.quizMode = btn.getAttribute('data-mode');
        
        const modSelectWrap = document.getElementById('quizModSelectWrap');
        if (modSelectWrap) {
          modSelectWrap.style.display = (state.quizMode === 'by_mod') ? 'flex' : 'none';
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
          alert('Nenhuma questão incorreta nesta rodada.');
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
      const wrongIds = Object.keys(state.answeredQuestions).filter(id => !state.answeredQuestions[id].correct);
      if (wrongIds.length === 0) {
        alert('Você não tem questões com erro registradas no momento.');
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

    const total = state.quizQueue.length;
    const cur = state.currentQuizIndex + 1;
    const pct = Math.round((cur / total) * 100);

    const countLabel = document.getElementById('quizProgressCount');
    if (countLabel) countLabel.textContent = `Questão ${cur} de ${total}`;
    
    const fill = document.getElementById('quizProgressFill');
    if (fill) fill.style.width = `${pct}%`;

    const badgesContainer = document.getElementById('qBadges');
    if (badgesContainer) {
      let badgesHtml = `<span class="q-badge">Módulo ${q.modulo}</span>`;
      badgesHtml += `<span class="q-badge">${q.prova_origem}</span>`;
      if (q.incidencia_alta) {
        badgesHtml += `<span class="q-badge hot">Alta Frequência</span>`;
      }
      badgesContainer.innerHTML = badgesHtml;
    }

    const qIdEl = document.getElementById('qId');
    if (qIdEl) qIdEl.textContent = q.id;

    const enunciadoEl = document.getElementById('qEnunciado');
    if (enunciadoEl) enunciadoEl.textContent = q.enunciado;

    const altsContainer = document.getElementById('qAlternativas');
    if (altsContainer) {
      altsContainer.innerHTML = q.alternativas.map((alt, idx) => `
        <button class="alt-btn" data-index="${idx}">
          <span class="alt-letter">${String.fromCharCode(65 + idx)}</span>
          <span class="alt-text">${alt.replace(/^[a-eA-E]\)\s*/, '')}</span>
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

    const feedbackBox = document.getElementById('feedbackBox');
    if (feedbackBox) feedbackBox.classList.remove('visible');
    
    const nextBtn = document.getElementById('btnNextQuestion');
    if (nextBtn) nextBtn.style.display = 'none';

    refreshIcons();
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

    state.answeredQuestions[question.id] = {
      correct: isCorrect,
      timestamp: Date.now()
    };
    localStorage.setItem('anestesio_answered_stats', JSON.stringify(state.answeredQuestions));
    updateGlobalProgress();

    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackHeader = document.getElementById('feedbackHeader');
    const feedbackText = document.getElementById('feedbackText');
    const pegadinhaBox = document.getElementById('feedbackPegadinha');

    if (feedbackBox) {
      feedbackBox.classList.add('visible');
      if (feedbackHeader) {
        feedbackHeader.className = `feedback-header ${isCorrect ? 'correct' : 'wrong'}`;
        feedbackHeader.innerHTML = isCorrect 
          ? '<i data-lucide="check-circle-2"></i><span>Alternativa Correta</span>' 
          : '<i data-lucide="x-circle"></i><span>Alternativa Incorreta</span>';
      }
      if (feedbackText) {
        feedbackText.textContent = question.justificativa;
      }
      if (pegadinhaBox) {
        if (question.pegadinha) {
          pegadinhaBox.style.display = 'block';
          pegadinhaBox.innerHTML = `<strong>Atenção:</strong> ${question.pegadinha}`;
        } else {
          pegadinhaBox.style.display = 'none';
        }
      }
    }

    const nextBtn = document.getElementById('btnNextQuestion');
    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.focus();
    }

    refreshIcons();
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
      title.textContent = 'Alto Desempenho';
      desc.textContent = `Você acertou ${score} de ${total} questões. Domínio consistente dos temas avaliados.`;
      playSoundChime();
    } else if (pct >= 60) {
      title.textContent = 'Bom Rendimento';
      desc.textContent = `Você acertou ${score} de ${total} questões. Recomendada a revisão dos distratores nas questões assinaladas incorretamente.`;
    } else {
      title.textContent = 'Revisão Recomendada';
      desc.textContent = `Você acertou ${score} de ${total} questões. Utilize a opção "Revisar Incorretas" para fixar os conceitos abordados.`;
    }

    const retryBtn = document.getElementById('btnRetryWrong');
    if (retryBtn) {
      retryBtn.style.display = (state.currentRoundWrong.length > 0) ? 'inline-flex' : 'none';
    }

    refreshIcons();
  }

  // =========================================================================
  // 10. SISTEMA DE ESCOLHA PERSONALIZADO COM SOFT GLASSMORPHISM (CUSTOM SELECT)
  // Substitui os menus crus nativos do navegador por vidro fosco editorial
  // =========================================================================
  function initCustomSelects() {
    const selects = document.querySelectorAll('select.calc-select, select.quiz-select, select.caso-select, #selectCaso');
    selects.forEach(select => {
      if (select.dataset.customized === 'true') return;
      select.dataset.customized = 'true';

      // Oculta o select nativo mas mantém ativo para formulários e eventos
      select.style.position = 'absolute';
      select.style.opacity = '0';
      select.style.pointerEvents = 'none';
      select.style.width = '1px';
      select.style.height = '1px';
      select.style.overflow = 'hidden';

      const wrapper = document.createElement('div');
      wrapper.className = 'custom-select-container';
      select.parentNode.insertBefore(wrapper, select);
      wrapper.appendChild(select);

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'custom-select-trigger';
      trigger.setAttribute('aria-haspopup', 'listbox');
      trigger.setAttribute('aria-expanded', 'false');

      const selectedOption = select.options[select.selectedIndex] || select.options[0];
      const labelSpan = document.createElement('span');
      labelSpan.className = 'custom-select-label';
      labelSpan.textContent = selectedOption ? selectedOption.textContent : '';

      trigger.appendChild(labelSpan);
      
      const chevronIcon = document.createElement('i');
      chevronIcon.setAttribute('data-lucide', 'chevron-down');
      chevronIcon.className = 'custom-select-chevron';
      trigger.appendChild(chevronIcon);

      wrapper.appendChild(trigger);

      const dropdown = document.createElement('div');
      dropdown.className = 'custom-select-dropdown';
      dropdown.setAttribute('role', 'listbox');

      Array.from(select.options).forEach((opt, idx) => {
        const item = document.createElement('div');
        item.className = 'custom-select-option' + (idx === select.selectedIndex ? ' selected' : '');
        item.setAttribute('role', 'option');
        item.dataset.value = opt.value;
        item.innerHTML = `
          <span class="option-text">${opt.textContent}</span>
          <i data-lucide="check" class="option-check"></i>
        `;

        item.addEventListener('click', (e) => {
          e.stopPropagation();
          select.value = opt.value;
          labelSpan.textContent = opt.textContent;

          dropdown.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('selected'));
          item.classList.add('selected');

          wrapper.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');

          select.dispatchEvent(new Event('change', { bubbles: true }));
        });

        dropdown.appendChild(item);
      });

      wrapper.appendChild(dropdown);

      // Sincroniza o label e classe selected quando o select muda externamente/programaticamente
      select.addEventListener('change', () => {
        const curOpt = select.options[select.selectedIndex];
        if (curOpt) {
          labelSpan.textContent = curOpt.textContent;
          dropdown.querySelectorAll('.custom-select-option').forEach(o => {
            o.classList.toggle('selected', o.dataset.value === select.value);
          });
        }
      });

      // Alternar abertura do menu
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = wrapper.classList.contains('open');

        document.querySelectorAll('.custom-select-container.open').forEach(c => {
          if (c !== wrapper) {
            c.classList.remove('open');
            c.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          wrapper.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          wrapper.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Fechar ao clicar fora ou pressionar ESC
    document.addEventListener('click', () => {
      document.querySelectorAll('.custom-select-container.open').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.custom-select-container.open').forEach(c => {
          c.classList.remove('open');
          c.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  // =========================================================================
  // 11. SEÇÃO 4: CASOS CLÍNICOS & TÉCNICAS ANESTÉSICAS PRÁTICAS
  // =========================================================================
  function initCasosClinicos() {
    const casos = (typeof CASOS_CLINICOS_DATA !== 'undefined') ? CASOS_CLINICOS_DATA : [];
    const tecnicas = (typeof TECNICAS_ANESTESICAS_DATA !== 'undefined') ? TECNICAS_ANESTESICAS_DATA : [];
    const checklist = (typeof CHECKLIST_ROTEIRO_14_PASSOS !== 'undefined') ? CHECKLIST_ROTEIRO_14_PASSOS : [];

    // 1. Alternância de Sub-views (Simulador / Técnicas / Checklist)
    const subnavBtns = document.querySelectorAll('.casos-subnav-pill .subnav-btn');
    const subviews = document.querySelectorAll('.casos-subview');

    subnavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetViewId = btn.getAttribute('data-subview');
        subnavBtns.forEach(b => b.classList.toggle('active', b === btn));
        subviews.forEach(v => v.classList.toggle('active', v.id === targetViewId));
        playSfx('click');
        refreshIcons();
      });
    });

    // 2. Populando o Select de Casos Clínicos
    const selectCaso = document.getElementById('selectCaso');
    const displayContainer = document.getElementById('casoClinicoDisplay');

    if (selectCaso && casos.length > 0) {
      selectCaso.innerHTML = casos.map((c) => `
        <option value="${c.id}">Caso ${c.numero}: ${c.dente} (${c.categoria})</option>
      `).join('');

      selectCaso.addEventListener('change', (e) => {
        const found = casos.find(c => c.id === e.target.value) || casos[0];
        renderCasoClinico(found);
      });
    }

    // Botão Sortear Caso de Prova
    const btnSortear = document.getElementById('btnSortearCaso');
    if (btnSortear && casos.length > 0) {
      btnSortear.addEventListener('click', () => {
        btnSortear.classList.add('sorting-pulse');
        setTimeout(() => btnSortear.classList.remove('sorting-pulse'), 500);
        playSfx('click');
        
        const randomIndex = Math.floor(Math.random() * casos.length);
        const sorteado = casos[randomIndex];
        if (selectCaso) {
          selectCaso.value = sorteado.id;
          selectCaso.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          renderCasoClinico(sorteado);
        }
      });
    }

    // Renderizar Detalhes do Caso Clínico
    function renderCasoClinico(caso) {
      if (!displayContainer || !caso) return;

      const sol = caso.solucao;
      displayContainer.innerHTML = `
        <div class="caso-card animate-fade-in">
          <div class="caso-header">
            <div class="caso-badges-row">
              <span class="caso-badge-num">Caso #${caso.numero}</span>
              <span class="caso-badge-categoria">${caso.categoria}</span>
              <span class="caso-badge-arcada">${caso.arcada}</span>
            </div>
            <h3 class="caso-title">${caso.titulo}</h3>
            <div class="caso-dente-tag">
              <i data-lucide="crosshair"></i>
              <span><strong>Elemento Dentário:</strong> ${caso.dente}</span>
            </div>
          </div>

          <!-- Enunciado Clínico -->
          <div class="caso-cenario-box">
            <div class="cenario-icon"><i data-lucide="clipboard"></i></div>
            <div class="cenario-content">
              <div class="cenario-label">Histórico & Queixa Principal do Paciente:</div>
              <p class="cenario-text">${caso.cenario}</p>
            </div>
          </div>

          <div class="caso-pergunta-banner">
            <i data-lucide="help-circle"></i>
            <span><strong>Pergunta da Prova Prática:</strong> ${caso.pergunta}</span>
          </div>

          <!-- Gabarito e Checklist Oral para a Banca -->
          <div class="gabarito-wrapper">
            <div class="gabarito-header">
              <i data-lucide="award"></i>
              <span>Checklist da Resposta Verbal Exigida pelo Professor</span>
            </div>

            <!-- Técnicas de Eleição -->
            <div class="gabarito-block">
              <div class="gabarito-label"><i data-lucide="check-circle-2"></i> Técnicas Anestésicas de Eleição:</div>
              <div class="tecnicas-eleicao-list">
                ${sol.tecnicasEleicao.map(t => `<div class="tecnica-eleita-item"><i data-lucide="chevron-right"></i><span>${t}</span></div>`).join('')}
              </div>
            </div>

            <!-- Por que a escolha dessa(s) técnica(s) - Exigência Crucial da Prova -->
            <div class="gabarito-block justificativa-highlight">
              <div class="gabarito-label"><i data-lucide="lightbulb"></i> Por que a escolha dessa(s) técnica(s) para este caso clínico?</div>
              <div class="justificativa-text">${sol.justificativaEscolha}</div>
            </div>

            <!-- Grid de Parâmetros Técnicos Exigidos -->
            <div class="parametros-praticos-grid">
              <div class="param-card">
                <div class="param-title"><i data-lucide="disc"></i> Qual Agulha Usar:</div>
                <div class="param-body">${sol.agulha}</div>
              </div>

              <div class="param-card">
                <div class="param-title"><i data-lucide="droplet"></i> Quantidade de Anestésico:</div>
                <div class="param-body"><strong>${sol.quantidade}</strong></div>
              </div>

              <div class="param-card">
                <div class="param-title"><i data-lucide="maximize"></i> Orientação do Bisel:</div>
                <div class="param-body">${sol.bisel}</div>
              </div>

              <div class="param-card">
                <div class="param-title"><i data-lucide="shield-alert"></i> Desprender o Êmbolo:</div>
                <div class="param-body">${sol.embolo}</div>
              </div>

              <div class="param-card" style="grid-column: 1 / -1;">
                <div class="param-title"><i data-lucide="map-pin"></i> Referenciais Anatômicos & Ponto de Inserção:</div>
                <div class="param-body">
                  <p><strong>Referenciais:</strong> ${sol.referenciais}</p>
                  <p style="margin-top: 4px;"><strong>Ponto de Inserção:</strong> ${sol.pontoInsercao}</p>
                </div>
              </div>

              <div class="param-card" style="grid-column: 1 / -1;">
                <div class="param-title"><i data-lucide="zap"></i> Quais Nervos Anestesia:</div>
                <div class="param-body">${sol.nervosAnestesiados}</div>
              </div>
            </div>

            <!-- Alerta / Armadilha da Banca -->
            <div class="armadilha-alerta-box">
              <i data-lucide="alert-triangle"></i>
              <div>
                <strong>Atenção na Prova Prática (Pegadinha do Professor):</strong> ${sol.armadilhas}
              </div>
            </div>
          </div>
        </div>
      `;
      refreshIcons();
    }

    if (casos.length > 0) {
      renderCasoClinico(casos[0]);
    }

    // 3. Renderização das Técnicas Passo a Passo com Vetores SVG
    const tecnicasGrid = document.getElementById('tecnicasGrid');
    const filterBtns = document.querySelectorAll('.tecnica-filter-btn');

    function renderTecnicas(filtro = 'Todas') {
      if (!tecnicasGrid) return;

      const filtered = tecnicas.filter(t => filtro === 'Todas' || t.arcada === filtro);
      tecnicasGrid.innerHTML = filtered.map(t => `
        <div class="tecnica-card" id="tecnica_${t.id}">
          <div class="tecnica-card-top">
            <div class="tecnica-badges">
              <span class="tecnica-tag-arcada">${t.arcada}</span>
              <span class="tecnica-tag-tipo">${t.tipo}</span>
            </div>
            <h4 class="tecnica-name">${t.nome}</h4>
            <p class="tecnica-summary">${t.resumo}</p>
          </div>

          <!-- Ilustração Vetorial SVG Anatômica -->
          <div class="tecnica-svg-wrapper">
            ${t.svgAnatomico}
          </div>

          <!-- Especificações Clínicas Essenciais -->
          <div class="tecnica-quick-specs">
            <div class="spec-row">
              <span class="spec-label"><i data-lucide="disc"></i> Agulha:</span>
              <span class="spec-val"><strong>${t.agulha.tipo} (${t.agulha.calibre})</strong> — ${t.agulha.penetracao}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label"><i data-lucide="droplet"></i> Volume:</span>
              <span class="spec-val"><strong>${t.volume.tubetes}</strong> (${t.volume.velocidade})</span>
            </div>
            <div class="spec-row">
              <span class="spec-label"><i data-lucide="maximize"></i> Bisel:</span>
              <span class="spec-val"><strong>${t.bisel}</strong></span>
            </div>
            <div class="spec-row">
              <span class="spec-label"><i data-lucide="map-pin"></i> Inserção:</span>
              <span class="spec-val">${t.pontoInsercao}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label"><i data-lucide="compass"></i> Angulação:</span>
              <span class="spec-val">${t.angulacao}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label"><i data-lucide="shield-check"></i> Aspiração:</span>
              <span class="spec-val">${t.aspiracao}</span>
            </div>
          </div>

          <!-- Acordeão Detalhado da Técnica -->
          <details class="tecnica-details">
            <summary class="tecnica-details-summary">
              <span>Ver Referenciais Anatômicos, Nervos & Detalhes da Prova</span>
              <i data-lucide="chevron-down" class="details-chevron"></i>
            </summary>
            <div class="tecnica-details-content">
              <div class="detail-section">
                <h5><i data-lucide="eye"></i> Referenciais Anatômicos de Palpação & Visão:</h5>
                <ul>
                  ${t.referenciais.map(r => `<li>${r}</li>`).join('')}
                </ul>
              </div>

              <div class="detail-section">
                <h5><i data-lucide="activity"></i> Nervos Bloqueados & Áreas Anestesiadas:</h5>
                <ul>
                  ${t.estruturasAnestesiadas.map(e => {
                    if (e.toUpperCase().includes('NÃO ANESTESIA') || e.toUpperCase().startsWith('PACIENTE HEMOFÍLICO')) {
                      return `<li class="detail-li-alert"><i data-lucide="alert-triangle" class="icon-inline-alert"></i> <span>${e}</span></li>`;
                    }
                    return `<li>${e}</li>`;
                  }).join('')}
                </ul>
              </div>

              <div class="detail-section">
                <h5><i data-lucide="shield-check"></i> Desprender o Êmbolo & Biossegurança:</h5>
                <p>${t.embolo}</p>
              </div>

              <div class="detail-section alert-section">
                <h5><i data-lucide="alert-triangle" class="icon-inline-alert"></i> Pegadinha Crítica do Professor:</h5>
                <p>${t.armadilhaProva}</p>
              </div>
            </div>
          </details>
        </div>
      `).join('');
      refreshIcons();
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        playSfx('click');
        renderTecnicas(btn.getAttribute('data-arcada'));
      });
    });

    renderTecnicas('Todas');

    // 4. Renderização do Checklist dos 14 Passos
    const checklistContainer = document.getElementById('checklistContainer');
    if (checklistContainer) {
      checklistContainer.innerHTML = checklist.map(item => `
        <div class="checklist-step-card" data-step="${item.passo}">
          <div class="step-num-badge">${item.passo}</div>
          <div class="step-card-content">
            <div class="step-card-header">
              <h4 class="step-card-title">${item.titulo}</h4>
              <label class="step-checkbox-label">
                <input type="checkbox" class="step-checkbox" data-passo="${item.passo}">
                <span class="step-checkmark"></span>
                <span class="step-status-text">Treinado</span>
              </label>
            </div>
            <p class="step-card-desc">${item.descricao}</p>
            <div class="step-motivo-box">
              <i data-lucide="help-circle"></i>
              <div>
                <strong>Por que o professor cobra este passo?</strong> ${item.motivo}
              </div>
            </div>
          </div>
        </div>
      `).join('');

      checklistContainer.querySelectorAll('.step-checkbox').forEach(chk => {
        chk.addEventListener('change', (e) => {
          const card = e.target.closest('.checklist-step-card');
          if (card) {
            card.classList.toggle('step-done', e.target.checked);
            playSfx(e.target.checked ? 'correct' : 'click');
          }
        });
      });
      refreshIcons();
    }
  }
});
