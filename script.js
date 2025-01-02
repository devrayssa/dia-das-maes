let perguntaAtual = 0;
let pontuacao = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const questions = [
  {
    questions: "O nome da Amora é como?",
    options: ["Amora", "Mora Mora", "Amora Moreira"],
    answer: "Amora Moreira",
  },
  {
    questions: "Em qual ano suas filhas nasceu?",
    options: ["1974 / 2004", "2000 / 2002", "1997 / 2005", "1998 / 2004"],
    answer: "1997 / 2005",
  },
  {
    questions: "O que amora mais faz?",
    options: ["Brinca", "Bagunça", "Late muito", "Dorme"],
    answer: "Bagunça",
  },
  {
    questions: "Qual frase você mais diz:",
    options: [
      "O que você aprontou amora",
      "Tudo eu nessa casa",
      "Amo demais minhas filhas",
      "Amo assistir serie",
    ],
    answer: "O que você aprontou amora",
  },
  {
    questions: "Qual sua irmã preferida",
    options: ["Danda", "Simone", "Nenhuma", "Todas"],
    answer: "Todas",
  },
  {
    questions: "Qual a data de aniversario da sua mamãe",
    options: ["10 de maio", "20 de Janeiro", "30 de janeiro", "2 de abril"],
    answer: "30 de janeiro",
  },
  {
    questions: "Qual foi a matéria favorita da mamãe na escola?",
    options: ["Portugues", "Matematica", "Geografia", "Arte"],
    answer: "Arte",
  },
  {
    questions: "Quem voce mais ama?",
    options: ["Acsa", "Amora", "Rayssa", "Todas"],
    answer: "Todas",
  },
  {
    questions: "O que vc mais esta fazendo ultimamente",
    options: ["Plantar", "Desenhar", "Gastar", "Costurar"],
    answer: "Plantar",
  },
  {
    questions: "Qual dia Acsa nasceu:",
    options: ["5 de janeiro", "9 de junho ", "7 de janeiro", "26 de julho"],
    answer: "7 de janeiro",
  },
  {
    questions: "Qual dia Rayssa nasceu:",
    options: ["5 de janeiro", "9 de junho ", "7 de janeiro", "26 de julho"],
    answer: "26 de julho",
  },
  {
    questions: "Qual nome do irmão mais velho:",
    options: ["Marcos", "Vava", "Luis", "Tico"],
    answer: "Luis",
  },
];
function exibirPergunta() {
  const current = questions[perguntaAtual];
  questionElement.textContent = current.questions;

  optionsElement.innerHTML = "";
  current.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      verificarResposta(option);
    });
    optionsElement.appendChild(button);
  });
}

function verificarResposta(responder) {
  const current = questions[perguntaAtual];
  if (responder === current.answer) {
    pontuacao++;
    optionsElement
      .querySelector(`button:contains(${responder})`)
      .classList.add(".correta");
  }

  if (perguntaAtual < questions.length - 1) {
    perguntaAtual++;
    exibirPergunta();
    optionsElement
      .querySelector(`button:contains(${responder})`)
      .classList.add(".incorreta");
  } else {
    endGame();
  }
}

function endGame() {
  questionElement.textContent = "Eu te amo";
  optionsElement.innerHTML = `Pontuação: ${pontuacao} / ${questions.length}`;
}

exibirPergunta();
