const flashcards = [
  {
    front: "O que é Phishing?",
    back: "Técnica de engenharia social que usa mensagens fraudulentas para enganar pessoas e roubar informações sensíveis como senhas e dados bancários.",
    icon: "🎣",
  },
  {
    front: "O que é DDoS?",
    back: "Ataque de Negação de Serviço Distribuído. Consiste em múltiplos sistemas atacando um alvo simultaneamente para sobrecarregar seus recursos e torná-lo inacessível.",
    icon: "🌊",
  },
  {
    front: "O que é Man-in-the-Middle?",
    back: "Ataque onde um invasor intercepta secretamente a comunicação entre duas partes, podendo visualizar e alterar as informações transmitidas.",
    icon: "🕵️",
  },
  {
    front: "O que é SQL Injection?",
    back: "Técnica de ataque que insere código SQL malicioso em campos de entrada para manipular ou acessar o banco de dados de uma aplicação.",
    icon: "💉",
  },
  {
    front: "O que é Ransomware?",
    back: "Tipo de malware que criptografa os arquivos do usuário e exige pagamento de resgate para descriptografá-los.",
    icon: "💰",
  },
  {
    front: "O que é Spyware?",
    back: "Software malicioso que coleta informações sobre as atividades do usuário sem seu conhecimento ou consentimento.",
    icon: "👁️",
  },
  {
    front: "O que é Keylogger?",
    back: "Programa que registra todas as teclas digitadas pelo usuário, usado para capturar senhas e outras informações sensíveis.",
    icon: "⌨️",
  },
  {
    front: "O que é Brute Force?",
    back: "Método de ataque que tenta descobrir senhas ou chaves testando sistematicamente todas as combinações possíveis.",
    icon: "🔨",
  },
  {
    front: "O que é Zero-day Exploit?",
    back: "Ataque que explora vulnerabilidades de software desconhecidas pelo fabricante e ainda sem correção disponível.",
    icon: "⚡",
  },
  {
    front: "O que é APT (Advanced Persistent Threat)?",
    back: "Ataque prolongado e direcionado onde invasores mantêm acesso não autorizado a uma rede por um longo período, evitando detecção.",
    icon: "🎯",
  },
  {
    front: "O que é Malvertising?",
    back: "Uso de publicidade online legítima para distribuir malware através de anúncios infectados.",
    icon: "📢",
  },
  {
    front: "O que é Vishing?",
    back: "Phishing realizado por telefone, onde fraudadores se passam por instituições legítimas para obter informações sensíveis.",
    icon: "📞",
  },
  {
    front: "O que é Buffer Overflow?",
    back: "Vulnerabilidade onde um programa escreve dados além dos limites de um buffer alocado na memória, podendo causar comportamento imprevisível.",
    icon: "💾",
  },
  {
    front: "O que é Rootkit?",
    back: "Software malicioso projetado para fornecer acesso privilegiado a um computador enquanto se oculta da detecção.",
    icon: "🌱",
  },
  {
    front: "O que é Session Hijacking?",
    back: "Ataque que rouba ou manipula cookies de sessão válidos para obter acesso não autorizado a informações ou serviços.",
    icon: "🍪",
  },
  {
    front: "O que é DNS Cache Poisoning?",
    back: "Ataque que corrompe o cache DNS para redirecionar usuários para sites maliciosos em vez dos legítimos.",
    icon: "☠️",
  },
  {
    front: "O que é Password Spraying?",
    back: "Ataque que tenta senhas comuns em várias contas diferentes para evitar detecção por bloqueio de conta.",
    icon: "🌧️",
  },
  {
    front: "O que é IoT Attack?",
    back: "Exploração de vulnerabilidades em dispositivos conectados à Internet das Coisas para criar botnets ou ganhar acesso à rede.",
    icon: "🤖",
  },
  {
    front: "O que é Formjacking?",
    back: "Injeção de código malicioso em formulários de sites de e-commerce para roubar informações de cartão de crédito.",
    icon: "📝",
  },
  {
    front: "O que é Typosquatting?",
    back: "Registro de domínios com erros de digitação comuns de sites populares para enganar usuários que digitam URLs incorretamente.",
    icon: "⌨️",
  },
];

let currentCard = 0;
let isFlipped = false;
let viewedCards = new Set();

// Embaralhar array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleCards() {
  shuffleArray(flashcards);
  currentCard = 0;
  viewedCards.clear();
  updateCard();
}

function updateCard() {
  const card = flashcards[currentCard];
  const front = document.querySelector(".front");
  const back = document.querySelector(".back");

  front.innerHTML = `
        <div>
            <div class="icon">${card.icon}</div>
            <p>${card.front}</p>
        </div>
    `;
  back.innerHTML = `<p>${card.back}</p>`;

  viewedCards.add(currentCard);
  updateProgress();
  isFlipped = false;
  document.querySelector(".card").classList.remove("flipped");
}

function flipCard() {
  isFlipped = !isFlipped;
  document.querySelector(".card").classList.toggle("flipped");
}

function nextCard() {
  currentCard = (currentCard + 1) % flashcards.length;
  updateCard();
}

function previousCard() {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

function updateProgress() {
  document.querySelector(".progress").textContent = `Cartão ${
    currentCard + 1
  } de ${flashcards.length}`;
  document.querySelector(".viewed").textContent = `Vistos: ${viewedCards.size}`;
  document.querySelector(".remaining").textContent = `Restantes: ${
    flashcards.length - viewedCards.size
  }`;
}

// Inicializar
shuffleCards();
