# 🦷 Anestesio Hub • UNIOESTE Odontologia

> **Hub de Estudos & Quiz Interativo Cumulativo (1ª à 4ª Prova)** desenvolvido para a disciplina de Anestesiologia do curso de Odontologia da UNIOESTE (Campus de Cascavel).

🌐 **Acesso Online (Vercel):** [https://anestesiologia-hub.vercel.app](https://anestesiologia-hub.vercel.app)

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20with-Vercel-black?style=flat-square&logo=vercel)](https://anestesiologia-hub.vercel.app)
[![HTML5 / CSS3 / JS](https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-blue?style=flat-square)](https://developer.mozilla.org)
[![Anti-TDAH](https://img.shields.io/badge/Design-Anti--TDAH%20Cognitive-emerald?style=flat-square)](#)

---

## 🎯 Funcionalidades Principais

*   📊 **Raio-X & Matriz de Incidência das Provas**: Ranking estatístico dos temas mais cobrados em provas anteriores (2017 a 2023) e mural das 6 maiores pegadinhas da banca examinadora.
*   📖 **Resumos Aprofundados (1ª à 4ª Prova)**: Conteúdo curricular integral sem cortes (da Biossegurança até Acidentes e Complicações), organizado em blocos sanfonados/colapsáveis com código de cores por área clínica e checklist de micro-progresso.
*   🎯 **Quiz Interativo Anti-TDAH**:
    *   *Pílula Rápida (5 questões)* e *Bateria Média (10 questões)* para manter o foco e evitar a fadiga mental.
    *   *Modo "Repetir as que Errei" (Smart Drill)* para fixação rápida das pegadinhas.
    *   *Filtro por Módulo* e *Simulado Geral da 4ª Prova*.
    *   Feedback imediato, efeitos sonoros sintetizados via Web Audio API e justificativa comentada alternativa por alternativa.
*   🧮 **Calculadora Clínica de Doses & Tubetes (Malamed 6ª Ed.)**: Cálculo automatizado de dose máxima (mg) e número máximo de tubetes para pacientes saudáveis (ASA I) e cardiopatas (ASA II/III), identificando dinamicamente o fator limitante (sal vs vasoconstritor).
*   🧠 **Ferramentas Anti-Distração**:
    *   Timer Pomodoro integrado (25 min de foco / 5 min de pausa).
    *   Modo Foco em tela limpa.
    *   Persistência automática do progresso e estatísticas via `localStorage`.

---

## 📂 Estrutura do Projeto

```text
├── index.html              # Aplicação Web Modular do Hub
├── style.css               # Design System Anti-TDAH com cores cognitivas
├── script.js               # Inteligência do Quiz, Pomodoro, Modo Foco e Calculadora
├── questoes.json           # Banco de dados com 28 questões reais de provas passadas
├── questoes_data.js        # Script de dados para execução local sem restrições de CORS
├── resumos_data.js         # Acervo teórico estruturado dos 4 módulos
├── GUIA_ESTUDO_COMPLETO.md # Apostila completa em Markdown para leitura e impressão
└── README.md               # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador web moderno (duplo clique). Nenhuma instalação ou servidor backend é necessário.
