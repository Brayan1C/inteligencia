
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que ano foi realizada a primeira Copa do Mundo da FIFA?",
        alternativas: [
            {
                texto: "1930",
                afirmacao: "isso mesmo."
            },
            {
                texto: "1926",
                afirmacao: "errou."
            }
        ]
    },
    {
        enunciado: "Qual país ganhou mais Copas do Mundo da FIFA?",
        alternativas: [
            {
                texto: "Brasil",
                afirmacao: "boa boa."
            },
            {
                texto: "Argentina",
                afirmacao: "ta bobo."
            }
        ]
    },
    {
        enunciado: "Quem é o maior artilheiro de todos os tempos da Copa do Mundo?",
        alternativas: [
            {
                texto: "Miroslav Klose",
                afirmacao: "com 16 gols pela Alemanha."
            },
            {
                texto: "Ronaldinho",
                afirmacao: "e nada."
            }
        ]
    },
    {
        enunciado: "Qual país sediará a próxima Copa do Mundo da FIFA?",
        alternativas: [
            {
                texto: "Catar",
                afirmacao: "isso."
            },
            {
                texto: "Coreia",
                afirmacao: "nada."
            }
        ]
    },
    {
        enunciado: "Quantas equipes participam da fase final da Copa do Mundo da FIFA?",
        alternativas: [
            {
                texto: "5",
                afirmacao: "isso."
            },
            {
                texto: "4",
                afirmacao: "erro por pouco."
            }
        ]
    },
];

 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();