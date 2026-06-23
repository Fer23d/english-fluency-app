const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const STORAGE_KEY = "english-fluency-os-progress-v1";
const DAILY_GOAL = 70;

const course = [
  {
    id: "a0-survival",
    level: "A0",
    phase: "Fundamentos",
    title: "Sobrevivencia absoluta",
    duration: "35 min",
    focus: ["to be", "saudacoes", "frases essenciais"],
    theory:
      "Comece com frases de alta frequencia. Em ingles, a ordem basica e sujeito + verbo + complemento: I am Diego. She likes music. We live in Brazil.",
    bullets: [
      "Use I am, you are, he is, she is, we are, they are para identidade e estado.",
      "Perguntas com to be invertem a ordem: Are you ready? Is she here?",
      "Negativas recebem not: I am not, you are not, she is not.",
    ],
    pattern: "Subject + be + complement",
    trap: "Nao traduza palavra por palavra. Em ingles voce diz I am 25, nao I have 25.",
    examples: [
      ["I am from Brazil.", "Eu sou do Brasil."],
      ["Are you ready?", "Voce esta pronto?"],
      ["She is not available now.", "Ela nao esta disponivel agora."],
    ],
    words: ["hello", "name", "ready", "from", "learn", "today"],
    exercises: [
      {
        type: "choice",
        prompt: "Como dizer 'Eu sou do Brasil'?",
        answer: "I am from Brazil.",
        options: ["I am from Brazil.", "I have from Brazil.", "I is Brazil.", "I from am Brazil."],
        explain: "Nacionalidade e origem usam be + from.",
      },
      {
        type: "fill",
        prompt: "Complete: She ___ my teacher.",
        answer: "is",
        hint: "Use o verbo to be para she.",
      },
      {
        type: "order",
        prompt: "Organize a pergunta.",
        answer: "Are you ready today?",
        tokens: ["ready", "Are", "today", "you"],
      },
      {
        type: "listen",
        prompt: "Ouça e escreva a frase.",
        answer: "I want to learn English.",
      },
    ],
  },
  {
    id: "a1-daily-life",
    level: "A1",
    phase: "Base diaria",
    title: "Rotina, gostos e necessidades",
    duration: "45 min",
    focus: ["simple present", "do/does", "frequencia"],
    theory:
      "O simple present fala de rotina, fatos e preferencias. A pergunta usa do/does e a terceira pessoa ganha s no verbo afirmativo.",
    bullets: [
      "I work, you work, we work, they work.",
      "He works, she works, it works.",
      "Perguntas: Do you work? Does she work?",
    ],
    pattern: "Subject + verb + complement",
    trap: "Na pergunta com does, o verbo principal volta ao normal: Does she like, nao Does she likes.",
    examples: [
      ["I usually study at night.", "Eu geralmente estudo a noite."],
      ["Does he speak English?", "Ele fala ingles?"],
      ["She works from home.", "Ela trabalha de casa."],
    ],
    words: ["usually", "always", "sometimes", "need", "prefer", "work"],
    exercises: [
      {
        type: "choice",
        prompt: "Qual pergunta esta correta?",
        answer: "Does she like coffee?",
        options: ["Does she like coffee?", "Does she likes coffee?", "Do she like coffee?", "She does like coffee?"],
        explain: "Does ja carrega a marca da terceira pessoa.",
      },
      {
        type: "fill",
        prompt: "Complete: He usually ___ at 7.",
        answer: "wakes up",
        hint: "Phrasal verb para acordar.",
      },
      {
        type: "translate",
        prompt: "Traduza: Eu preciso praticar todos os dias.",
        answer: "I need to practice every day.",
      },
      {
        type: "order",
        prompt: "Organize a frase.",
        answer: "She works from home on Fridays.",
        tokens: ["from", "She", "on", "works", "home", "Fridays"],
      },
    ],
  },
  {
    id: "a2-stories",
    level: "A2",
    phase: "Historias",
    title: "Passado e experiencias",
    duration: "55 min",
    focus: ["simple past", "past continuous", "time markers"],
    theory:
      "O passado em ingles separa eventos finalizados de acoes em progresso. Simple past entrega o que aconteceu. Past continuous mostra o pano de fundo.",
    bullets: [
      "Simple past regular termina em ed: worked, played, studied.",
      "Irregulares precisam de memoria ativa: went, saw, bought, felt.",
      "Past continuous: was/were + verb-ing.",
    ],
    pattern: "I was studying when she called.",
    trap: "Nao use did com verbo no passado: Did you go?, nao Did you went?",
    examples: [
      ["I visited my friend yesterday.", "Eu visitei meu amigo ontem."],
      ["They were watching a movie.", "Eles estavam assistindo a um filme."],
      ["What did you do last weekend?", "O que voce fez no fim de semana passado?"],
    ],
    words: ["yesterday", "ago", "during", "while", "happen", "remember"],
    exercises: [
      {
        type: "choice",
        prompt: "Qual frase esta correta?",
        answer: "Did you go to the meeting?",
        options: ["Did you go to the meeting?", "Did you went to the meeting?", "You did went?", "Went you to meeting?"],
        explain: "Depois de did, use o verbo base.",
      },
      {
        type: "fill",
        prompt: "Complete: I ___ cooking when he arrived.",
        answer: "was",
        hint: "Past continuous para I.",
      },
      {
        type: "translate",
        prompt: "Traduza: Eu comprei um livro ontem.",
        answer: "I bought a book yesterday.",
      },
      {
        type: "listen",
        prompt: "Ouça e escreva.",
        answer: "What happened during the meeting?",
      },
    ],
  },
  {
    id: "b1-conversation",
    level: "B1",
    phase: "Conversacao",
    title: "Falar com fluidez e conectar ideias",
    duration: "60 min",
    focus: ["present perfect", "connectors", "opinions"],
    theory:
      "No B1 voce precisa sustentar conversa. Use conectores para ligar opinioes e present perfect para experiencia com impacto no presente.",
    bullets: [
      "Present perfect: have/has + past participle.",
      "Use because, although, however, actually e by the way para organizar pensamento.",
      "Prefira chunks: I see what you mean, as far as I know, it depends.",
    ],
    pattern: "I have never tried that before.",
    trap: "Actually significa na verdade, nao atualmente. Atualmente costuma ser currently.",
    examples: [
      ["I have worked on similar projects.", "Eu ja trabalhei em projetos parecidos."],
      ["Although it is difficult, I can handle it.", "Embora seja dificil, eu consigo lidar com isso."],
      ["As far as I know, the plan is ready.", "Pelo que eu sei, o plano esta pronto."],
    ],
    words: ["although", "however", "actually", "currently", "handle", "experience"],
    exercises: [
      {
        type: "choice",
        prompt: "Qual frase usa present perfect corretamente?",
        answer: "I have seen that movie before.",
        options: ["I have seen that movie before.", "I have saw that movie before.", "I sawed it before.", "I have see that movie."],
        explain: "Have + past participle: seen.",
      },
      {
        type: "fill",
        prompt: "Complete: ___ it was expensive, we bought it.",
        answer: "Although",
        hint: "Conector de contraste.",
      },
      {
        type: "translate",
        prompt: "Traduza: Pelo que eu sei, ele ja terminou.",
        answer: "As far as I know, he has already finished.",
      },
      {
        type: "order",
        prompt: "Organize a frase.",
        answer: "I see what you mean, but I disagree.",
        tokens: ["mean", "but", "I", "you", "disagree", "what", "see", "I"],
      },
    ],
  },
  {
    id: "b1-work",
    level: "B1",
    phase: "Trabalho",
    title: "Ingles profissional essencial",
    duration: "60 min",
    focus: ["requests", "meetings", "email"],
    theory:
      "Ingles profissional depende de clareza e tom. Pedidos educados usam could, would, mind e I was wondering.",
    bullets: [
      "Could you send me the file? e educado e direto.",
      "Would you mind checking this? pede ajuda com delicadeza.",
      "Use Let me know para encerrar mensagens com abertura.",
    ],
    pattern: "Could you + verb + complement?",
    trap: "Evite I want que voce faca em contextos profissionais. Prefira Could you ou Would you be able to.",
    examples: [
      ["Could you send me the report?", "Voce poderia me enviar o relatorio?"],
      ["I was wondering if we could reschedule.", "Eu queria saber se poderiamos remarcar."],
      ["Let me know if you need anything else.", "Me avise se precisar de algo mais."],
    ],
    words: ["schedule", "deadline", "report", "issue", "request", "available"],
    exercises: [
      {
        type: "choice",
        prompt: "Qual pedido soa mais profissional?",
        answer: "Could you review this document?",
        options: ["Could you review this document?", "Review this now.", "I want you review.", "You review this?"],
        explain: "Could you suaviza o pedido sem perder clareza.",
      },
      {
        type: "fill",
        prompt: "Complete: Let me ___ if you have questions.",
        answer: "know",
        hint: "Expressao fixa.",
      },
      {
        type: "translate",
        prompt: "Traduza: Podemos remarcar a reuniao?",
        answer: "Can we reschedule the meeting?",
      },
      {
        type: "listen",
        prompt: "Ouça e escreva.",
        answer: "Could you send me the report by Friday?",
      },
    ],
  },
  {
    id: "b2-nuance",
    level: "B2",
    phase: "Precisao",
    title: "Nuance, condicional e hipotese",
    duration: "70 min",
    focus: ["conditionals", "modal verbs", "hedging"],
    theory:
      "No B2 voce para de apenas sobreviver e passa a ser preciso. Condicionais ajudam a falar de causa, hipotese e arrependimento.",
    bullets: [
      "First conditional: If + present, will + verb.",
      "Second conditional: If + past, would + verb.",
      "Third conditional: If + past perfect, would have + participle.",
    ],
    pattern: "If I had known, I would have helped.",
    trap: "Nao use will depois de if em condicionais comuns: If it rains, I will stay home.",
    examples: [
      ["If I had more time, I would learn faster.", "Se eu tivesse mais tempo, aprenderia mais rapido."],
      ["It might be worth trying another approach.", "Talvez valha a pena tentar outra abordagem."],
      ["I would have called you earlier.", "Eu teria te ligado mais cedo."],
    ],
    words: ["might", "worth", "approach", "unless", "otherwise", "regret"],
    exercises: [
      {
        type: "choice",
        prompt: "Escolha a frase correta.",
        answer: "If I had known, I would have helped.",
        options: ["If I had known, I would have helped.", "If I would know, I helped.", "If I knew, I will helped.", "If I had knew, I would help."],
        explain: "Third conditional: had + participle, would have + participle.",
      },
      {
        type: "fill",
        prompt: "Complete: It might be ___ trying again.",
        answer: "worth",
        hint: "Expressao: be worth + ing.",
      },
      {
        type: "translate",
        prompt: "Traduza: Se eu tivesse mais dinheiro, viajaria mais.",
        answer: "If I had more money, I would travel more.",
      },
      {
        type: "order",
        prompt: "Organize a frase.",
        answer: "Unless we leave now, we will be late.",
        tokens: ["late", "Unless", "now", "we", "leave", "we", "will", "be"],
      },
    ],
  },
  {
    id: "b2-phrasal",
    level: "B2",
    phase: "Naturalidade",
    title: "Phrasal verbs e linguagem real",
    duration: "75 min",
    focus: ["phrasal verbs", "collocations", "chunks"],
    theory:
      "Phrasal verbs sao combinacoes de verbo + particula. Eles aparecem em conversa, series, reunioes e textos informais.",
    bullets: [
      "Take off pode significar decolar ou tirar roupa/acessorio.",
      "Figure out significa descobrir ou entender.",
      "Carry out significa executar uma tarefa, pesquisa ou plano.",
    ],
    pattern: "Verb + particle + object",
    trap: "O significado nem sempre vem das palavras isoladas. Aprenda por frase completa.",
    examples: [
      ["I need to figure out the problem.", "Eu preciso descobrir o problema."],
      ["The plane took off at noon.", "O aviao decolou ao meio-dia."],
      ["We carried out a quick test.", "Nos executamos um teste rapido."],
    ],
    words: ["figure out", "carry out", "take off", "look up", "put off", "bring up"],
    exercises: [
      {
        type: "choice",
        prompt: "O que significa figure out?",
        answer: "descobrir ou entender",
        options: ["descobrir ou entender", "desistir", "colocar para fora", "chegar atrasado"],
        explain: "Figure out e resolver, entender ou descobrir.",
      },
      {
        type: "fill",
        prompt: "Complete: We had to put ___ the meeting.",
        answer: "off",
        hint: "Put off significa adiar.",
      },
      {
        type: "translate",
        prompt: "Traduza: Eu preciso procurar essa palavra.",
        answer: "I need to look up this word.",
      },
      {
        type: "listen",
        prompt: "Ouça e escreva.",
        answer: "Can you bring up that topic later?",
      },
    ],
  },
  {
    id: "c1-argument",
    level: "C1",
    phase: "Argumentacao",
    title: "Debater, persuadir e escrever melhor",
    duration: "85 min",
    focus: ["advanced connectors", "essay", "register"],
    theory:
      "No C1, voce precisa construir argumentos com coesao. Use concessao, contraste, causa, consequencia e qualificadores.",
    bullets: [
      "Nevertheless e nonetheless indicam contraste forte.",
      "Whereas compara ideias opostas dentro da mesma frase.",
      "Arguably apresenta uma opiniao defensavel sem soar absoluto.",
    ],
    pattern: "Although X is true, Y remains more convincing.",
    trap: "Nao use conectores sofisticados sem necessidade. Clareza sempre vence exibicao.",
    examples: [
      ["Arguably, this is the most efficient solution.", "Pode-se argumentar que esta e a solucao mais eficiente."],
      ["Whereas the first plan is cheaper, the second is safer.", "Enquanto o primeiro plano e mais barato, o segundo e mais seguro."],
      ["Nevertheless, the evidence is compelling.", "Ainda assim, a evidencia e convincente."],
    ],
    words: ["arguably", "whereas", "nevertheless", "compelling", "evidence", "assumption"],
    exercises: [
      {
        type: "choice",
        prompt: "Qual conector expressa contraste forte?",
        answer: "nevertheless",
        options: ["nevertheless", "therefore", "moreover", "namely"],
        explain: "Nevertheless significa mesmo assim, entretanto.",
      },
      {
        type: "fill",
        prompt: "Complete: The evidence is highly ___.",
        answer: "compelling",
        hint: "Adjetivo para algo convincente.",
      },
      {
        type: "translate",
        prompt: "Traduza: Pode-se argumentar que essa abordagem e mais justa.",
        answer: "Arguably, this approach is fairer.",
      },
      {
        type: "order",
        prompt: "Organize a frase.",
        answer: "Whereas speed matters, accuracy matters even more.",
        tokens: ["matters", "accuracy", "Whereas", "speed", "even", "matters", "more"],
      },
    ],
  },
  {
    id: "c1-listening",
    level: "C1",
    phase: "Escuta real",
    title: "Sotaques, reducoes e fala rapida",
    duration: "80 min",
    focus: ["connected speech", "reductions", "shadowing"],
    theory:
      "A fala real conecta sons. What do you vira whaddaya, going to vira gonna, want to vira wanna em registros informais.",
    bullets: [
      "Treine com shadowing: ouvir, pausar, repetir com ritmo parecido.",
      "Reducoes aparecem em fala informal, mas nao sao ideais em escrita formal.",
      "Foque em ritmo, silabas fortes e entonacao, nao em perfeicao isolada.",
    ],
    pattern: "What do you want to do? -> Whaddaya wanna do?",
    trap: "Entender reducoes nao significa usar todas o tempo inteiro. Contexto manda.",
    examples: [
      ["What are you going to do?", "O que voce vai fazer?"],
      ["I kind of agree with you.", "Eu meio que concordo com voce."],
      ["Did you get what I mean?", "Voce entendeu o que eu quero dizer?"],
    ],
    words: ["gonna", "wanna", "kinda", "sorta", "gotta", "lemme"],
    exercises: [
      {
        type: "choice",
        prompt: "Em fala informal, gonna costuma significar:",
        answer: "going to",
        options: ["going to", "gone", "go now", "got a"],
        explain: "Gonna e reducao informal de going to.",
      },
      {
        type: "fill",
        prompt: "Complete: I ___ agree with you.",
        answer: "kind of",
        hint: "Expressao para suavizar concordancia.",
      },
      {
        type: "listen",
        prompt: "Ouça e escreva.",
        answer: "What are you going to do next?",
      },
      {
        type: "translate",
        prompt: "Traduza: Eu tenho que terminar isso hoje.",
        answer: "I have got to finish this today.",
      },
    ],
  },
  {
    id: "c2-precision",
    level: "C2",
    phase: "Maestria",
    title: "Precisao lexical e estilo C2",
    duration: "95 min",
    focus: ["lexical precision", "register", "subtle meaning"],
    theory:
      "No C2, a diferenca esta em escolher a palavra exata. Big, significant, substantial, considerable e major nao sao sempre iguais.",
    bullets: [
      "Substantial indica quantidade ou importancia grande.",
      "Subtle indica algo delicado, pouco obvio ou refinado.",
      "Robust indica solido, resistente ou metodologicamente forte.",
    ],
    pattern: "A nuanced argument requires precise vocabulary.",
    trap: "Sinonimos mudam registro, intensidade e contexto. Confira collocations.",
    examples: [
      ["The study provides robust evidence.", "O estudo fornece evidencia robusta."],
      ["There is a subtle difference between the terms.", "Ha uma diferenca sutil entre os termos."],
      ["The proposal has substantial merit.", "A proposta tem merito consideravel."],
    ],
    words: ["substantial", "subtle", "robust", "nuanced", "elaborate", "undermine"],
    exercises: [
      {
        type: "choice",
        prompt: "Qual palavra significa sutil, pouco obvio?",
        answer: "subtle",
        options: ["subtle", "substantial", "robust", "blunt"],
        explain: "Subtle e discreto, refinado ou dificil de perceber.",
      },
      {
        type: "fill",
        prompt: "Complete: The results ___ the original claim.",
        answer: "undermine",
        hint: "Verbo para enfraquecer uma ideia.",
      },
      {
        type: "translate",
        prompt: "Traduza: O argumento dela e muito nuancado.",
        answer: "Her argument is very nuanced.",
      },
      {
        type: "order",
        prompt: "Organize a frase.",
        answer: "The study offers robust and compelling evidence.",
        tokens: ["robust", "study", "evidence", "offers", "The", "and", "compelling"],
      },
    ],
  },
  {
    id: "c2-idioms",
    level: "C2+",
    phase: "Ultra avancado",
    title: "Idioms, humor e leitura entrelinhas",
    duration: "100 min",
    focus: ["idioms", "pragmatics", "subtext"],
    theory:
      "Fluencia ultra avancada inclui entender implicito, humor, ironia, understatement e idioms sem traduzir literalmente.",
    bullets: [
      "Break the ice significa iniciar interacao e reduzir tensao.",
      "Cut corners significa fazer algo de forma relaxada para economizar tempo ou dinheiro.",
      "Read between the lines significa perceber o que nao foi dito diretamente.",
    ],
    pattern: "The literal meaning is not the real meaning.",
    trap: "Idioms podem soar estranhos se usados fora de contexto. Aprenda situacao, tom e registro.",
    examples: [
      ["Let's break the ice with a quick question.", "Vamos quebrar o gelo com uma pergunta rapida."],
      ["They cut corners and the quality dropped.", "Eles economizaram de forma ruim e a qualidade caiu."],
      ["You need to read between the lines.", "Voce precisa ler nas entrelinhas."],
    ],
    words: ["break the ice", "cut corners", "read between the lines", "the ball is in your court", "hit the nail on the head", "silver lining"],
    exercises: [
      {
        type: "choice",
        prompt: "O que significa read between the lines?",
        answer: "entender o que esta implicito",
        options: ["entender o que esta implicito", "ler mais rapido", "ignorar detalhes", "corrigir um texto"],
        explain: "E perceber subtexto, intencao ou significado indireto.",
      },
      {
        type: "fill",
        prompt: "Complete: The ball is in your ___.",
        answer: "court",
        hint: "Agora a decisao e sua.",
      },
      {
        type: "translate",
        prompt: "Traduza: Ele acertou em cheio.",
        answer: "He hit the nail on the head.",
      },
      {
        type: "listen",
        prompt: "Ouça e escreva.",
        answer: "Let's break the ice before the meeting starts.",
      },
    ],
  },
  {
    id: "c2-master-plan",
    level: "C2+",
    phase: "Autonomia",
    title: "Plano de fluencia total",
    duration: "120 min",
    focus: ["input", "output", "feedback loop"],
    theory:
      "Fluencia vem de um ciclo: input compreensivel, producao ativa, feedback, revisao e repeticao. Voce precisa ler, ouvir, escrever e falar toda semana.",
    bullets: [
      "Leia textos um pouco acima do seu nivel e salve chunks.",
      "Fale em voz alta com shadowing e respostas espontaneas.",
      "Escreva, revise e reescreva usando conectores e vocabulario novo.",
    ],
    pattern: "Input -> Active recall -> Output -> Feedback -> Review",
    trap: "Consumir conteudo sem produzir gera entendimento passivo, nao fluencia completa.",
    examples: [
      ["I can express myself clearly and spontaneously.", "Eu consigo me expressar com clareza e espontaneidade."],
      ["I need targeted feedback to improve faster.", "Eu preciso de feedback direcionado para melhorar mais rapido."],
      ["Consistency beats intensity.", "Consistencia vence intensidade."],
    ],
    words: ["targeted", "spontaneously", "consistency", "immersion", "feedback", "output"],
    exercises: [
      {
        type: "choice",
        prompt: "Qual ciclo acelera mais a fluencia?",
        answer: "Input, output, feedback and review.",
        options: ["Input, output, feedback and review.", "Only watching videos.", "Only memorizing grammar.", "Avoiding mistakes."],
        explain: "Fluencia precisa de consumo, producao, correcao e revisao.",
      },
      {
        type: "fill",
        prompt: "Complete: Consistency ___ intensity.",
        answer: "beats",
        hint: "Verbo para vencer.",
      },
      {
        type: "translate",
        prompt: "Traduza: Eu consigo me expressar espontaneamente.",
        answer: "I can express myself spontaneously.",
      },
      {
        type: "order",
        prompt: "Organize a frase.",
        answer: "Targeted feedback helps you improve faster.",
        tokens: ["you", "feedback", "improve", "Targeted", "faster", "helps"],
      },
    ],
  },
];

const levelProfiles = {
  A0: {
    phase: "Nivel zero",
    anchor: "frases de sobrevivencia",
    grammar: "to be, artigos, plurais e ordem basica",
    sample: "I am learning English today.",
    translation: "Eu estou aprendendo ingles hoje.",
    words: ["hello", "name", "from", "ready", "today", "learn", "please", "thanks"],
  },
  A1: {
    phase: "Iniciante ativo",
    anchor: "rotina, familia, comida, tempo e lugares",
    grammar: "simple present, do/does, there is/are e preposicoes",
    sample: "She usually studies after work.",
    translation: "Ela geralmente estuda depois do trabalho.",
    words: ["usually", "always", "sometimes", "work", "live", "need", "want", "question"],
  },
  A2: {
    phase: "Independencia basica",
    anchor: "passado, planos, compras, viagens e historias curtas",
    grammar: "simple past, past continuous, comparatives e future forms",
    sample: "I bought a useful book yesterday.",
    translation: "Eu comprei um livro util ontem.",
    words: ["yesterday", "during", "while", "remember", "improve", "available", "meeting", "solution"],
  },
  B1: {
    phase: "Conversacao real",
    anchor: "opinioes, experiencias, trabalho e conversas longas",
    grammar: "present perfect, modals, connectors e relative clauses",
    sample: "I have already finished the report.",
    translation: "Eu ja terminei o relatorio.",
    words: ["although", "however", "actually", "currently", "handle", "experience", "deadline", "request"],
  },
  B2: {
    phase: "Fluencia independente",
    anchor: "nuance, condicional, phrasal verbs e argumentacao",
    grammar: "conditionals, passive voice, reported speech e hedging",
    sample: "If I had more time, I would travel more.",
    translation: "Se eu tivesse mais tempo, viajaria mais.",
    words: ["might", "worth", "approach", "unless", "otherwise", "reliable", "accurate", "strategy"],
  },
  C1: {
    phase: "Avancado profissional",
    anchor: "debate, escrita sofisticada, escuta real e registro",
    grammar: "inversion, emphasis, nominalisation e advanced clauses",
    sample: "Nevertheless, the evidence is compelling.",
    translation: "Ainda assim, a evidencia e convincente.",
    words: ["arguably", "whereas", "nevertheless", "compelling", "evidence", "assumption", "enhance", "foster"],
  },
  C2: {
    phase: "Maestria",
    anchor: "precisao lexical, estilo, pragmatica e leitura densa",
    grammar: "subtle register shifts, discourse markers e rhetorical control",
    sample: "The study provides robust and nuanced evidence.",
    translation: "O estudo fornece evidencia robusta e nuancada.",
    words: ["substantial", "subtle", "robust", "nuanced", "elaborate", "undermine", "claim", "outcome"],
  },
  "C2+": {
    phase: "Fluencia ultra avancada",
    anchor: "idioms, humor, subtexto, sotaques e autonomia total",
    grammar: "idiomatic range, implied meaning e native-like discourse",
    sample: "You need to read between the lines.",
    translation: "Voce precisa ler nas entrelinhas.",
    words: ["break the ice", "read between the lines", "silver lining", "targeted", "spontaneously", "immersion", "output", "feedback"],
  },
};

const learningDomains = [
  {
    key: "grammar-core",
    title: "Gramatica nuclear",
    focus: ["grammar", "sentence patterns", "accuracy"],
    action: "build sentences with control",
    words: ["sentence", "grammar", "meaning", "specific"],
    topics: {
      A0: "sujeito, verbo e complemento",
      A1: "presente e perguntas",
      A2: "passado e futuro pratico",
      B1: "tempos verbais em conversa",
      B2: "hipotese e voz passiva",
      C1: "enfase e inversao",
      C2: "controle retorico",
      "C2+": "controle nativo de estilo",
    },
  },
  {
    key: "vocabulary-core",
    title: "Vocabulario essencial",
    focus: ["vocabulary", "collocations", "memory"],
    action: "use new vocabulary in context",
    words: ["word", "example", "useful", "essential"],
    topics: {
      A0: "as primeiras 300 palavras",
      A1: "as 1000 palavras mais comuns",
      A2: "palavras para viagens e rotina",
      B1: "vocabulario para opinioes",
      B2: "collocations de alta frequencia",
      C1: "lexico academico e profissional",
      C2: "sinonimos precisos",
      "C2+": "range lexical quase nativo",
    },
  },
  {
    key: "listening",
    title: "Escuta guiada",
    focus: ["listening", "audio", "recognition"],
    action: "understand natural speech",
    words: ["listen", "pronunciation", "rhythm", "intonation"],
    topics: {
      A0: "sons, letras e palavras isoladas",
      A1: "frases curtas e instrucoes",
      A2: "historias lentas",
      B1: "dialogos reais",
      B2: "fala rapida com reducoes",
      C1: "sotaques e connected speech",
      C2: "palestras e debates",
      "C2+": "humor, ironia e subtexto",
    },
  },
  {
    key: "speaking",
    title: "Fala e resposta rapida",
    focus: ["speaking", "fluency", "chunks"],
    action: "answer quickly and clearly",
    words: ["speak", "confidence", "natural", "fluent"],
    topics: {
      A0: "respostas de uma frase",
      A1: "rotina e preferencias",
      A2: "historias curtas",
      B1: "opinioes com justificativa",
      B2: "respostas improvisadas",
      C1: "debate e polidez",
      C2: "precisao espontanea",
      "C2+": "presenca oral completa",
    },
  },
  {
    key: "writing",
    title: "Escrita progressiva",
    focus: ["writing", "structure", "clarity"],
    action: "write with structure",
    words: ["write", "clear", "specific", "accurate"],
    topics: {
      A0: "frases simples",
      A1: "paragrafos curtos",
      A2: "mensagens e relatos",
      B1: "emails e opinioes",
      B2: "argumentos organizados",
      C1: "ensaios e relatorios",
      C2: "estilo e precisao",
      "C2+": "voz propria em ingles",
    },
  },
  {
    key: "reading",
    title: "Leitura inteligente",
    focus: ["reading", "context", "inference"],
    action: "read for meaning and nuance",
    words: ["read", "understand", "claim", "evidence"],
    topics: {
      A0: "placas e comandos",
      A1: "textos curtos",
      A2: "historias simples",
      B1: "artigos leves",
      B2: "opiniao e contexto",
      C1: "ensaios densos",
      C2: "literatura e analise",
      "C2+": "entrelinhas e estilo",
    },
  },
  {
    key: "business",
    title: "Ingles profissional",
    focus: ["business", "meetings", "email"],
    action: "communicate at work",
    words: ["schedule", "deadline", "report", "issue", "request", "client"],
    topics: {
      A0: "profissoes e apresentacao",
      A1: "horarios e tarefas",
      A2: "reunioes simples",
      B1: "emails claros",
      B2: "negociacao e problemas",
      C1: "lideranca e estrategia",
      C2: "tom executivo",
      "C2+": "influencia e diplomacia",
    },
  },
  {
    key: "phrasal",
    title: "Phrasal verbs",
    focus: ["phrasal verbs", "natural English", "chunks"],
    action: "use phrasal verbs naturally",
    words: ["look up", "figure out", "carry out", "put off", "bring up", "follow up"],
    topics: {
      A0: "verbos de movimento",
      A1: "rotina com get, go e come",
      A2: "look, take e turn",
      B1: "work, set e find",
      B2: "phrasal verbs separaveis",
      C1: "phrasal verbs formais",
      C2: "combinacoes idiomaticas",
      "C2+": "phrasal verbs em subtexto",
    },
  },
  {
    key: "idioms",
    title: "Idioms e expressoes",
    focus: ["idioms", "phrases", "subtext"],
    action: "understand idiomatic meaning",
    words: ["by the way", "fair enough", "break the ice", "silver lining"],
    topics: {
      A0: "expressoes fixas basicas",
      A1: "frases prontas",
      A2: "expressoes comuns",
      B1: "idioms simples",
      B2: "conversa informal",
      C1: "idioms profissionais",
      C2: "humor e ironia",
      "C2+": "leituras culturais",
    },
  },
  {
    key: "pronunciation",
    title: "Pronuncia e ritmo",
    focus: ["pronunciation", "stress", "shadowing"],
    action: "copy rhythm and stress",
    words: ["shadowing", "stress", "rhythm", "intonation"],
    topics: {
      A0: "alfabeto e sons",
      A1: "word stress",
      A2: "frases com ritmo",
      B1: "contracoes",
      B2: "connected speech",
      C1: "reducao natural",
      C2: "entonacao persuasiva",
      "C2+": "sotaques e presenca",
    },
  },
  {
    key: "test-lab",
    title: "Desafio de fluencia",
    focus: ["review", "speed", "mixed practice"],
    action: "combine skills under pressure",
    words: ["practice", "review", "progress", "consistency"],
    topics: {
      A0: "mini teste de sobrevivencia",
      A1: "teste de rotina",
      A2: "teste de historias",
      B1: "teste de conversa",
      B2: "teste de independencia",
      C1: "teste avancado",
      C2: "teste de precisao",
      "C2+": "simulacao de fluencia total",
    },
  },
  {
    key: "culture",
    title: "Cultura e pragmatica",
    focus: ["culture", "politeness", "context"],
    action: "choose the right tone",
    words: ["could", "would", "should", "aware", "concerned"],
    topics: {
      A0: "cumprimentos e educacao",
      A1: "pedidos simples",
      A2: "small talk",
      B1: "discordar com respeito",
      B2: "tom indireto",
      C1: "diplomacia profissional",
      C2: "subtexto social",
      "C2+": "pragmatica quase nativa",
    },
  },
];

course.push(
  ...Object.entries(levelProfiles).flatMap(([level, profile]) =>
    learningDomains.map((domain, domainIndex) => createCurriculumLesson(level, profile, domain, domainIndex)),
  ),
);

course.forEach((lesson) => {
  lesson.exercises = buildExerciseDeck(lesson);
});

const theoryTopics = [
  {
    title: "Verbo to be sem misterio",
    level: "A0",
    tags: ["to be", "base", "perguntas"],
    summary: "Use to be para identidade, estado, profissao, origem, idade e localizacao.",
    points: [
      "Afirmativa: I am, you are, he is, she is, it is, we are, they are.",
      "Negativa: coloque not depois do verbo.",
      "Pergunta: coloque am, is ou are antes do sujeito.",
    ],
    example: "Are they at home? No, they are not.",
  },
  {
    title: "Simple present para rotina",
    level: "A1",
    tags: ["simple present", "rotina", "do"],
    summary: "Fale sobre habitos, fatos, preferencias e horarios.",
    points: [
      "He, she e it recebem s no verbo afirmativo.",
      "Use do ou does para perguntar e negar.",
      "Adverbios comuns: always, usually, often, sometimes, rarely, never.",
    ],
    example: "She usually studies after work.",
  },
  {
    title: "Past simple e past continuous",
    level: "A2",
    tags: ["past", "historias", "irregular"],
    summary: "Conte eventos e descreva o contexto em que eles aconteceram.",
    points: [
      "Simple past responde o que aconteceu.",
      "Past continuous descreve uma acao em andamento no passado.",
      "Use when para evento pontual e while para acao em progresso.",
    ],
    example: "I was walking home when it started raining.",
  },
  {
    title: "Present perfect de verdade",
    level: "B1",
    tags: ["present perfect", "experiencia", "already"],
    summary: "Conecte passado e presente quando o resultado importa agora.",
    points: [
      "Have ou has + past participle.",
      "Use ever, never, already, yet, just, since e for.",
      "Para tempo finalizado especifico, use simple past.",
    ],
    example: "I have already sent the email.",
  },
  {
    title: "Condicionais",
    level: "B2",
    tags: ["if", "would", "conditionals"],
    summary: "Fale de possibilidades reais, hipoteses e arrependimentos.",
    points: [
      "First: If it rains, I will stay home.",
      "Second: If I had time, I would travel.",
      "Third: If I had known, I would have helped.",
    ],
    example: "If we had left earlier, we would have arrived on time.",
  },
  {
    title: "Phrasal verbs",
    level: "B2",
    tags: ["phrasal verbs", "chunks", "naturalidade"],
    summary: "Aprenda por frase e contexto, nao por traducao literal.",
    points: [
      "Look up: procurar informacao.",
      "Put off: adiar.",
      "Come across: encontrar por acaso.",
    ],
    example: "I came across an interesting article.",
  },
  {
    title: "Conectores avancados",
    level: "C1",
    tags: ["connectors", "essay", "argument"],
    summary: "Organize argumentos com contraste, causa, adicao e consequencia.",
    points: [
      "Contraste: however, nevertheless, whereas.",
      "Adicao: moreover, furthermore, in addition.",
      "Consequencia: therefore, thus, as a result.",
    ],
    example: "The plan is ambitious. Nevertheless, it is realistic.",
  },
  {
    title: "Registro e polidez",
    level: "C1",
    tags: ["register", "politeness", "business"],
    summary: "A mesma ideia muda conforme o contexto: casual, profissional ou academico.",
    points: [
      "Casual: Can you check this?",
      "Profissional: Could you take a look at this?",
      "Formal: I would appreciate it if you could review this.",
    ],
    example: "I was wondering whether we could discuss the proposal.",
  },
  {
    title: "Precisao lexical C2",
    level: "C2",
    tags: ["vocabulary", "nuance", "c2"],
    summary: "Escolha palavras por intensidade, collocation e registro.",
    points: [
      "Significant e forte para importancia ou tamanho.",
      "Substantial costuma combinar com evidence, amount, increase, support.",
      "Nuanced combina com argument, view, understanding, analysis.",
    ],
    example: "The report offers a nuanced analysis of the issue.",
  },
  {
    title: "Idioms e subtexto",
    level: "C2+",
    tags: ["idioms", "subtext", "pragmatics"],
    summary: "Entenda significado indireto, humor e expressoes fixas.",
    points: [
      "Break the ice: iniciar interacao e reduzir tensao.",
      "Silver lining: lado positivo de uma situacao ruim.",
      "On the same page: alinhados ou com o mesmo entendimento.",
    ],
    example: "The delay was frustrating, but the silver lining is that we improved the product.",
  },
];

theoryTopics.push(...course.map(createCourseTheoryTopic));

const rawLexicon = `
hello|ola; oi|interjection|A0|basics,daily|Hello, how are you?|Ola, como voce esta?|say hello
goodbye|tchau; adeus|interjection|A0|basics,daily|Goodbye, see you tomorrow.|Tchau, vejo voce amanha.|say goodbye
please|por favor|adverb|A0|politeness,daily|Please repeat that.|Por favor, repita isso.|please repeat
thanks|obrigado; valeu|interjection|A0|politeness,daily|Thanks for your help.|Obrigado pela sua ajuda.|thanks for
name|nome|noun|A0|basics,identity|My name is Diego.|Meu nome e Diego.|first name
from|de; vindo de|preposition|A0|basics,place|I am from Brazil.|Eu sou do Brasil.|from Brazil
ready|pronto|adjective|A0|basics,state|Are you ready?|Voce esta pronto?|ready for
today|hoje|adverb|A0|time,daily|I study today.|Eu estudo hoje.|today morning
tomorrow|amanha|adverb|A0|time,daily|See you tomorrow.|Vejo voce amanha.|tomorrow morning
yesterday|ontem|adverb|A2|time,past|I called yesterday.|Eu liguei ontem.|yesterday afternoon
learn|aprender|verb|A0|verbs,education|I want to learn English.|Eu quero aprender ingles.|learn English
study|estudar|verb|A0|verbs,education|I study every night.|Eu estudo todas as noites.|study hard
practice|praticar|verb|A1|verbs,education|Practice makes progress.|A pratica gera progresso.|practice daily
need|precisar|verb|A1|verbs,daily|I need more time.|Eu preciso de mais tempo.|need to
want|querer|verb|A0|verbs,daily|I want coffee.|Eu quero cafe.|want to
have|ter|verb|A0|verbs,core|I have a question.|Eu tenho uma pergunta.|have time
make|fazer; criar|verb|A1|verbs,core|Let's make a plan.|Vamos fazer um plano.|make a decision
do|fazer|verb|A1|verbs,core|What do you do?|O que voce faz?|do homework
go|ir|verb|A0|verbs,movement|I go to work by bus.|Eu vou ao trabalho de onibus.|go home
come|vir|verb|A0|verbs,movement|Come here, please.|Venha aqui, por favor.|come back
work|trabalhar; trabalho|verb,noun|A1|verbs,business|She works from home.|Ela trabalha de casa.|work from home
live|morar; viver|verb|A1|verbs,daily|I live in Sao Paulo.|Eu moro em Sao Paulo.|live in
speak|falar|verb|A1|verbs,communication|Do you speak English?|Voce fala ingles?|speak clearly
listen|ouvir; escutar|verb|A1|verbs,communication|Listen carefully.|Escute com atencao.|listen to
read|ler|verb|A1|verbs,education|Read the sentence aloud.|Leia a frase em voz alta.|read aloud
write|escrever|verb|A1|verbs,education|Write your answer here.|Escreva sua resposta aqui.|write down
think|pensar; achar|verb|A1|verbs,mind|I think it is useful.|Eu acho que e util.|think about
know|saber; conhecer|verb|A1|verbs,mind|I know the answer.|Eu sei a resposta.|know how
understand|entender|verb|A1|verbs,mind|I understand the rule.|Eu entendo a regra.|understand clearly
remember|lembrar|verb|A2|verbs,mind|I remember that word.|Eu lembro dessa palavra.|remember to
forget|esquecer|verb|A2|verbs,mind|Don't forget to review.|Nao esqueca de revisar.|forget about
question|pergunta|noun|A0|communication,basics|I have a question.|Eu tenho uma pergunta.|ask a question
answer|resposta; responder|noun,verb|A0|communication,basics|What is the answer?|Qual e a resposta?|answer correctly
sentence|frase|noun|A1|grammar,education|Build a sentence.|Monte uma frase.|complete sentence
word|palavra|noun|A0|grammar,education|Search for a word.|Pesquise uma palavra.|new word
meaning|significado|noun|A1|grammar,education|What is the meaning?|Qual e o significado?|literal meaning
example|exemplo|noun|A1|grammar,education|Give me an example.|Me de um exemplo.|clear example
grammar|gramatica|noun|A1|grammar,education|Grammar helps you speak clearly.|Gramatica ajuda voce a falar claramente.|grammar rule
vocabulary|vocabulario|noun|A1|education|Build your vocabulary.|Construa seu vocabulario.|active vocabulary
pronunciation|pronuncia|noun|A2|speaking|Pronunciation improves with shadowing.|A pronuncia melhora com shadowing.|clear pronunciation
fluency|fluencia|noun|B1|speaking|Fluency requires practice.|Fluencia exige pratica.|natural fluency
confidence|confianca|noun|B1|mindset,speaking|Confidence grows with repetition.|A confianca cresce com repeticao.|build confidence
mistake|erro|noun|A1|learning|Mistakes are feedback.|Erros sao feedback.|make a mistake
improve|melhorar|verb|A2|verbs,learning|You can improve faster.|Voce pode melhorar mais rapido.|improve quickly
progress|progresso|noun|A1|learning|Track your progress.|Acompanhe seu progresso.|make progress
usually|geralmente|adverb|A1|frequency|I usually study at night.|Eu geralmente estudo a noite.|usually do
always|sempre|adverb|A1|frequency|I always review new words.|Eu sempre reviso palavras novas.|always remember
often|frequentemente|adverb|A1|frequency|We often talk in English.|Nos frequentemente conversamos em ingles.|often use
sometimes|as vezes|adverb|A1|frequency|Sometimes I forget words.|As vezes eu esqueco palavras.|sometimes feel
rarely|raramente|adverb|A2|frequency|He rarely arrives late.|Ele raramente chega atrasado.|rarely happen
never|nunca|adverb|A1|frequency|Never stop practicing.|Nunca pare de praticar.|never give up
because|porque|conjunction|A1|connectors|I study because I want fluency.|Eu estudo porque quero fluencia.|because of
although|embora; apesar de|conjunction|B1|connectors,academic|Although it is hard, I can do it.|Embora seja dificil, eu consigo fazer.|although true
however|contudo; entretanto|adverb|B1|connectors,academic|It is useful. However, it takes time.|E util. Contudo, leva tempo.|however important
therefore|portanto|adverb|B2|connectors,academic|The data changed; therefore, the plan changed.|Os dados mudaram; portanto, o plano mudou.|therefore necessary
moreover|alem disso|adverb|C1|connectors,academic|Moreover, the results were consistent.|Alem disso, os resultados foram consistentes.|moreover useful
nevertheless|mesmo assim; entretanto|adverb|C1|connectors,academic|Nevertheless, we continued.|Mesmo assim, continuamos.|nevertheless true
whereas|enquanto; ao passo que|conjunction|C1|connectors,academic|This option is cheap, whereas that one is safer.|Esta opcao e barata, enquanto aquela e mais segura.|whereas others
unless|a menos que|conjunction|B2|conditionals|Unless you practice, you will forget.|A menos que voce pratique, voce vai esquecer.|unless needed
otherwise|caso contrario|adverb|B2|connectors|Leave now; otherwise, we will be late.|Saia agora; caso contrario, vamos atrasar.|otherwise possible
despite|apesar de|preposition|B2|connectors,academic|Despite the difficulty, she succeeded.|Apesar da dificuldade, ela teve sucesso.|despite this
meanwhile|enquanto isso|adverb|B2|connectors|Meanwhile, I prepared the slides.|Enquanto isso, preparei os slides.|meanwhile back
actually|na verdade|adverb|B1|false friends|Actually, I agree with you.|Na verdade, eu concordo com voce.|actually means
currently|atualmente|adverb|B1|time,business|I am currently working on it.|Eu estou atualmente trabalhando nisso.|currently available
eventually|finalmente; em algum momento|adverb|B2|false friends,time|Eventually, we solved the issue.|Finalmente, resolvemos o problema.|eventually happen
pretend|fingir|verb|B1|false friends|He pretended to be calm.|Ele fingiu estar calmo.|pretend to
intend|pretender; ter intencao|verb|B1|false friends|I intend to study abroad.|Eu pretendo estudar fora.|intend to
support|apoiar; suporte|verb,noun|A2|business|We support your decision.|Nos apoiamos sua decisao.|technical support
attend|comparecer; frequentar|verb|B1|false friends,business|I will attend the meeting.|Eu vou comparecer a reuniao.|attend a meeting
assist|auxiliar|verb|B2|false friends,business|The tool assists learners.|A ferramenta auxilia estudantes.|assist with
realize|perceber|verb|B1|false friends,mind|I realized my mistake.|Eu percebi meu erro.|realize that
schedule|agenda; agendar|noun,verb|B1|business,time|Can we schedule a call?|Podemos agendar uma chamada?|schedule a meeting
deadline|prazo final|noun|B1|business|The deadline is Friday.|O prazo final e sexta-feira.|meet a deadline
meeting|reuniao|noun|A2|business|The meeting starts at nine.|A reuniao comeca as nove.|join a meeting
report|relatorio; reportar|noun,verb|B1|business|Send me the report.|Envie-me o relatorio.|monthly report
issue|problema; questao|noun|B1|business|We need to fix this issue.|Precisamos corrigir este problema.|technical issue
request|pedido; solicitar|noun,verb|B1|business|I have a request.|Eu tenho um pedido.|request access
available|disponivel|adjective|A2|business,daily|Are you available today?|Voce esta disponivel hoje?|available for
review|revisar; revisao|verb,noun|A2|business,learning|Review the document carefully.|Revise o documento com cuidado.|performance review
approve|aprovar|verb|B1|business|The manager approved the plan.|O gerente aprovou o plano.|approve a request
deliver|entregar|verb|B1|business|We deliver results.|Nos entregamos resultados.|deliver on time
immediate|imediato|adjective|B2|business,academic|We need immediate action.|Precisamos de acao imediata.|immediate response
efficient|eficiente|adjective|B1|business|This method is efficient.|Este metodo e eficiente.|efficient process
reliable|confiavel|adjective|B2|business|The system is reliable.|O sistema e confiavel.|reliable source
approach|abordagem|noun|B2|business,academic|Try a different approach.|Tente uma abordagem diferente.|practical approach
solution|solucao|noun|A2|business|We found a solution.|Encontramos uma solucao.|effective solution
outcome|resultado|noun|B2|business,academic|The outcome was positive.|O resultado foi positivo.|desired outcome
impact|impacto|noun,verb|B2|business,academic|The change had a big impact.|A mudanca teve grande impacto.|positive impact
benefit|beneficio; beneficiar|noun,verb|B1|business|The main benefit is speed.|O principal beneficio e velocidade.|mutual benefit
challenge|desafio|noun|B1|business,learning|This is a challenge.|Isso e um desafio.|major challenge
opportunity|oportunidade|noun|B1|business|This is a great opportunity.|Esta e uma grande oportunidade.|career opportunity
goal|meta; objetivo|noun|A1|learning,business|Set a clear goal.|Defina uma meta clara.|daily goal
target|alvo; meta|noun,verb|B2|business|We reached the target.|Alcancamos a meta.|target audience
achieve|alcancar; conquistar|verb|B1|business,learning|You can achieve fluency.|Voce pode alcancar fluencia.|achieve a goal
strategy|estrategia|noun|B2|business|We need a better strategy.|Precisamos de uma estrategia melhor.|clear strategy
priority|prioridade|noun|B1|business|Learning is a priority.|Aprender e uma prioridade.|top priority
budget|orcamento|noun|B1|business|The budget is limited.|O orcamento e limitado.|budget plan
customer|cliente|noun|A2|business|The customer needs help.|O cliente precisa de ajuda.|customer service
client|cliente|noun|B1|business|The client approved the design.|O cliente aprovou o design.|client meeting
market|mercado|noun|B1|business|The market is changing.|O mercado esta mudando.|market share
brand|marca|noun|B1|business|The brand feels modern.|A marca parece moderna.|brand identity
research|pesquisa; pesquisar|noun,verb|B1|academic,business|We need more research.|Precisamos de mais pesquisa.|research project
evidence|evidencia|noun|C1|academic|The evidence is compelling.|A evidencia e convincente.|strong evidence
assumption|suposicao|noun|C1|academic|That assumption may be wrong.|Essa suposicao pode estar errada.|basic assumption
claim|afirmacao; alegacao|noun,verb|C1|academic|The claim needs evidence.|A afirmacao precisa de evidencia.|support a claim
argument|argumento|noun|B2|academic|Her argument is strong.|O argumento dela e forte.|strong argument
nuanced|nuancado; cheio de sutilezas|adjective|C2|academic|This is a nuanced argument.|Este e um argumento nuancado.|nuanced view
subtle|sutil|adjective|C2|academic,style|There is a subtle difference.|Ha uma diferenca sutil.|subtle difference
substantial|substancial; consideravel|adjective|C2|academic,business|We made substantial progress.|Fizemos progresso consideravel.|substantial evidence
robust|robusto; solido|adjective|C2|academic,business|The data is robust.|Os dados sao robustos.|robust method
compelling|convincente; cativante|adjective|C1|academic|The story is compelling.|A historia e cativante.|compelling evidence
elaborate|elaborar; complexo|verb,adjective|C2|academic|Could you elaborate on that?|Voce poderia elaborar isso?|elaborate on
undermine|enfraquecer; minar|verb|C2|academic|The mistake undermined trust.|O erro enfraqueceu a confianca.|undermine confidence
enhance|melhorar; intensificar|verb|C1|academic,business|Practice enhances fluency.|A pratica melhora a fluencia.|enhance performance
foster|promover; estimular|verb|C1|academic|Good feedback fosters growth.|Bom feedback estimula crescimento.|foster learning
address|abordar; tratar; endereco|verb,noun|B2|academic,business|We must address the issue.|Precisamos tratar do problema.|address a problem
emphasize|enfatizar|verb|B2|academic|She emphasized the key point.|Ela enfatizou o ponto principal.|emphasize importance
suggest|sugerir|verb|A2|communication|I suggest a new approach.|Eu sugiro uma nova abordagem.|suggest that
recommend|recomendar|verb|B1|communication,business|I recommend daily practice.|Eu recomendo pratica diaria.|highly recommend
avoid|evitar|verb|A2|verbs|Avoid translating everything.|Evite traduzir tudo.|avoid mistakes
allow|permitir|verb|B1|verbs|This allows faster review.|Isso permite revisao mais rapida.|allow someone to
enable|possibilitar; habilitar|verb|B2|academic,business|The app enables practice.|O app possibilita pratica.|enable users
require|exigir; requerer|verb|B2|academic,business|Fluency requires consistency.|Fluencia requer consistencia.|require effort
depend on|depender de|phrasal verb|B1|phrasal|It depends on the context.|Depende do contexto.|depend on
deal with|lidar com|phrasal verb|B1|phrasal|I can deal with pressure.|Eu consigo lidar com pressao.|deal with a problem
look up|procurar; consultar|phrasal verb|A2|phrasal|Look up the word in the dictionary.|Procure a palavra no dicionario.|look up a word
look for|procurar|phrasal verb|A1|phrasal|I am looking for my keys.|Estou procurando minhas chaves.|look for
look after|cuidar de|phrasal verb|B1|phrasal|She looks after her sister.|Ela cuida da irma.|look after children
find out|descobrir|phrasal verb|A2|phrasal|Let's find out the answer.|Vamos descobrir a resposta.|find out why
figure out|descobrir; entender|phrasal verb|B2|phrasal|I need to figure this out.|Preciso entender isso.|figure out a problem
carry out|executar; realizar|phrasal verb|B2|phrasal,business|We carried out a test.|Realizamos um teste.|carry out research
bring up|mencionar; criar um topico|phrasal verb|B2|phrasal|Don't bring up that topic now.|Nao mencione esse topico agora.|bring up an issue
put off|adiar|phrasal verb|B2|phrasal|We put off the meeting.|Adiamos a reuniao.|put off until
take off|decolar; tirar|phrasal verb|A2|phrasal|The plane took off late.|O aviao decolou tarde.|take off shoes
turn on|ligar|phrasal verb|A1|phrasal|Turn on the lights.|Ligue as luzes.|turn on
turn off|desligar|phrasal verb|A1|phrasal|Turn off your phone.|Desligue seu telefone.|turn off
give up|desistir|phrasal verb|A2|phrasal|Never give up.|Nunca desista.|give up on
keep up|acompanhar; manter ritmo|phrasal verb|B2|phrasal|Keep up the good work.|Continue o bom trabalho.|keep up with
catch up|colocar em dia|phrasal verb|B1|phrasal|I need to catch up.|Preciso colocar em dia.|catch up with
come across|encontrar por acaso|phrasal verb|B2|phrasal|I came across a great article.|Encontrei por acaso um otimo artigo.|come across
run into|encontrar por acaso; ter problema|phrasal verb|B2|phrasal|We ran into a problem.|Encontramos um problema.|run into issues
set up|configurar; montar|phrasal verb|B1|phrasal,business|Set up the account.|Configure a conta.|set up a meeting
break down|quebrar; explicar em partes|phrasal verb|B2|phrasal|Break down the topic.|Explique o tema em partes.|break down
point out|apontar; destacar|phrasal verb|B2|phrasal|She pointed out a mistake.|Ela apontou um erro.|point out
go over|revisar; repassar|phrasal verb|B1|phrasal|Let's go over the plan.|Vamos repassar o plano.|go over details
work out|resolver; dar certo; exercitar|phrasal verb|B1|phrasal|Everything worked out.|Tudo deu certo.|work out
take over|assumir controle|phrasal verb|B2|phrasal,business|She took over the project.|Ela assumiu o projeto.|take over
follow up|dar continuidade; acompanhar|phrasal verb|B2|phrasal,business|I will follow up tomorrow.|Vou acompanhar amanha.|follow up on
break the ice|quebrar o gelo|idiom|C2+|idioms|Let's break the ice first.|Vamos quebrar o gelo primeiro.|break the ice
cut corners|fazer de qualquer jeito para economizar|idiom|C2+|idioms|They cut corners and quality fell.|Eles economizaram mal e a qualidade caiu.|cut corners
read between the lines|ler nas entrelinhas|idiom|C2+|idioms|Read between the lines.|Leia nas entrelinhas.|read between
hit the nail on the head|acertar em cheio|idiom|C2+|idioms|You hit the nail on the head.|Voce acertou em cheio.|hit the nail
the ball is in your court|a decisao agora e sua|idiom|C2+|idioms|The ball is in your court.|A decisao agora e sua.|ball in your court
silver lining|lado positivo em situacao ruim|idiom|C2+|idioms|There is a silver lining.|Ha um lado positivo.|silver lining
on the same page|alinhados; com o mesmo entendimento|idiom|C1|idioms,business|We are on the same page.|Estamos alinhados.|same page
under the weather|indisposto; meio doente|idiom|B2|idioms|I feel under the weather.|Estou me sentindo indisposto.|under the weather
once in a blue moon|muito raramente|idiom|C1|idioms|He visits once in a blue moon.|Ele visita muito raramente.|blue moon
piece of cake|muito facil|idiom|B1|idioms|The test was a piece of cake.|A prova foi muito facil.|piece of cake
cost an arm and a leg|custar muito caro|idiom|C1|idioms|That car costs an arm and a leg.|Aquele carro custa muito caro.|arm and leg
beat around the bush|enrolar; evitar ser direto|idiom|C1|idioms|Stop beating around the bush.|Pare de enrolar.|beat around
get the hang of|pegar o jeito|idiom|B2|idioms|You will get the hang of it.|Voce vai pegar o jeito.|hang of it
by the way|a proposito|phrase|B1|conversation|By the way, I liked your idea.|A proposito, gostei da sua ideia.|by the way
as far as I know|pelo que eu sei|phrase|B1|conversation|As far as I know, he left.|Pelo que eu sei, ele saiu.|as far as
I see what you mean|entendo o que voce quer dizer|phrase|B1|conversation|I see what you mean, but I disagree.|Entendo o que voce quer dizer, mas discordo.|see what you mean
it depends|depende|phrase|A2|conversation|It depends on the situation.|Depende da situacao.|it depends on
fair enough|justo; faz sentido|phrase|B2|conversation|Fair enough, let's try it.|Justo, vamos tentar.|fair enough
sort of|meio que; tipo|phrase|B1|conversation|I sort of agree.|Eu meio que concordo.|sort of
kind of|meio que|phrase|B1|conversation|It is kind of difficult.|E meio dificil.|kind of
gonna|going to informal|reduction|C1|speech|I'm gonna call you later.|Vou te ligar mais tarde.|gonna do
wanna|want to informal|reduction|C1|speech|Do you wanna practice?|Voce quer praticar?|wanna go
gotta|have got to informal|reduction|C1|speech|I gotta go.|Tenho que ir.|gotta go
lemme|let me informal|reduction|C1|speech|Lemme see.|Deixa eu ver.|lemme know
could|poderia|modal verb|A2|modals,politeness|Could you help me?|Voce poderia me ajudar?|could you
would|iria; poderia|modal verb|A2|modals|I would like some water.|Eu gostaria de agua.|would like
should|deveria|modal verb|A2|modals|You should review this.|Voce deveria revisar isso.|should do
might|talvez; pode ser que|modal verb|B2|modals|It might work.|Pode ser que funcione.|might be
must|deve; precisa|modal verb|B1|modals|You must be careful.|Voce deve ter cuidado.|must be
available|disponivel|adjective|A2|daily,business|The room is available.|A sala esta disponivel.|available now
busy|ocupado|adjective|A1|daily|I am busy right now.|Estou ocupado agora.|busy with
clear|claro|adjective|A1|communication|Make it clear.|Deixe claro.|clear explanation
specific|especifico|adjective|B1|communication|Be specific.|Seja especifico.|specific example
accurate|preciso; exato|adjective|B2|academic|The answer is accurate.|A resposta e precisa.|accurate information
natural|natural|adjective|A2|speaking|That sounds natural.|Isso soa natural.|natural English
fluent|fluente|adjective|B1|speaking|She is fluent in English.|Ela e fluente em ingles.|fluent speaker
advanced|avancado|adjective|B1|learning|This is advanced vocabulary.|Este e vocabulario avancado.|advanced level
essential|essencial|adjective|A2|learning|Review is essential.|Revisao e essencial.|essential skill
useful|util|adjective|A1|daily|This word is useful.|Esta palavra e util.|useful phrase
worth|valer a pena|adjective|B2|collocations|It is worth trying.|Vale a pena tentar.|worth doing
likely|provavel|adjective|B2|academic|It is likely to happen.|E provavel que aconteca.|likely to
unlikely|improvavel|adjective|B2|academic|That is unlikely.|Isso e improvavel.|unlikely to
aware|ciente|adjective|B2|academic,business|Be aware of the risk.|Esteja ciente do risco.|aware of
concerned|preocupado|adjective|B2|business|I am concerned about the delay.|Estou preocupado com o atraso.|concerned about
consistent|consistente|adjective|B2|academic|Be consistent.|Seja consistente.|consistent practice
spontaneously|espontaneamente|adverb|C2+|speaking|Speak spontaneously.|Fale espontaneamente.|respond spontaneously
targeted|direcionado|adjective|C2+|learning,business|Targeted feedback helps.|Feedback direcionado ajuda.|targeted practice
immersion|imersao|noun|B2|learning|Immersion improves listening.|Imersao melhora a escuta.|language immersion
output|producao ativa|noun|C2+|learning|Output builds fluency.|Producao ativa constroi fluencia.|active output
input|entrada; conteudo consumido|noun|B2|learning|You need rich input.|Voce precisa de input rico.|comprehensible input
feedback|feedback; retorno|noun|B1|learning|Feedback helps you improve.|Feedback ajuda voce a melhorar.|targeted feedback
consistency|consistencia|noun|B2|learning|Consistency beats intensity.|Consistencia vence intensidade.|daily consistency
shadowing|tecnica de repetir junto com audio|noun|C1|speech|Shadowing trains rhythm.|Shadowing treina ritmo.|shadowing practice
intonation|entonacao|noun|B2|speech|Intonation changes meaning.|Entonacao muda significado.|rising intonation
rhythm|ritmo|noun|B2|speech|English has a stress rhythm.|Ingles tem ritmo de acento.|speech rhythm
stress|acento tonico; estresse|noun,verb|B2|speech|Stress the important words.|Enfatize as palavras importantes.|word stress
`;

const supplementalWordGroups = [
  {
    type: "noun",
    level: "A1",
    tags: ["daily", "home"],
    template: "The {word} is part of everyday life.",
    ptTemplate: "A palavra {word} aparece na vida diaria.",
    words: [
      ["house", "casa", "my house"],
      ["room", "quarto; sala", "living room"],
      ["door", "porta", "open the door"],
      ["window", "janela", "close the window"],
      ["table", "mesa", "at the table"],
      ["chair", "cadeira", "sit on a chair"],
      ["bed", "cama", "make the bed"],
      ["kitchen", "cozinha", "in the kitchen"],
      ["bathroom", "banheiro", "use the bathroom"],
      ["floor", "chao; andar", "on the floor"],
      ["wall", "parede", "on the wall"],
      ["key", "chave", "house key"],
      ["bag", "bolsa; sacola", "school bag"],
      ["phone", "telefone", "phone call"],
      ["computer", "computador", "use a computer"],
    ],
  },
  {
    type: "noun",
    level: "A1",
    tags: ["people", "daily"],
    template: "A {word} can change the situation.",
    ptTemplate: "Um/uma {word} pode mudar a situacao.",
    words: [
      ["friend", "amigo", "close friend"],
      ["family", "familia", "family member"],
      ["person", "pessoa", "kind person"],
      ["child", "crianca; filho", "young child"],
      ["parent", "pai ou mae", "parent meeting"],
      ["teacher", "professor", "English teacher"],
      ["student", "estudante", "good student"],
      ["neighbor", "vizinho", "friendly neighbor"],
      ["partner", "parceiro", "business partner"],
      ["team", "equipe", "strong team"],
      ["guest", "convidado", "special guest"],
      ["driver", "motorista", "bus driver"],
      ["worker", "trabalhador", "office worker"],
      ["manager", "gerente", "project manager"],
      ["leader", "lider", "team leader"],
    ],
  },
  {
    type: "verb",
    level: "A1",
    tags: ["verbs", "daily"],
    template: "I need to {word} this today.",
    ptTemplate: "Eu preciso {meaning} isso hoje.",
    words: [
      ["ask", "perguntar; pedir", "ask a question"],
      ["answer", "responder", "answer clearly"],
      ["call", "ligar; chamar", "call a friend"],
      ["open", "abrir", "open the door"],
      ["close", "fechar", "close the app"],
      ["start", "comecar", "start now"],
      ["finish", "terminar", "finish work"],
      ["help", "ajudar", "help someone"],
      ["try", "tentar", "try again"],
      ["use", "usar", "use a tool"],
      ["move", "mover; mudar", "move forward"],
      ["wait", "esperar", "wait for"],
      ["watch", "assistir; observar", "watch a video"],
      ["play", "jogar; tocar", "play music"],
      ["buy", "comprar", "buy food"],
      ["sell", "vender", "sell online"],
      ["pay", "pagar", "pay attention"],
      ["bring", "trazer", "bring it here"],
      ["take", "pegar; levar", "take a break"],
      ["send", "enviar", "send a message"],
    ],
  },
  {
    type: "verb",
    level: "A2",
    tags: ["verbs", "communication"],
    template: "Can you {word} the main idea?",
    ptTemplate: "Voce consegue {meaning} a ideia principal?",
    words: [
      ["explain", "explicar", "explain clearly"],
      ["describe", "descrever", "describe the problem"],
      ["compare", "comparar", "compare options"],
      ["choose", "escolher", "choose wisely"],
      ["decide", "decidir", "decide quickly"],
      ["invite", "convidar", "invite a friend"],
      ["repeat", "repetir", "repeat after me"],
      ["spell", "soletrar", "spell your name"],
      ["share", "compartilhar", "share an idea"],
      ["check", "verificar", "check the answer"],
      ["change", "mudar", "change your mind"],
      ["fix", "consertar", "fix the issue"],
      ["prepare", "preparar", "prepare a plan"],
      ["plan", "planejar", "plan ahead"],
      ["run", "correr; administrar; funcionar", "run a business"],
      ["travel", "viajar", "travel abroad"],
      ["arrive", "chegar", "arrive on time"],
      ["leave", "sair; deixar", "leave early"],
      ["join", "entrar; participar", "join a meeting"],
      ["lose", "perder", "lose time"],
      ["win", "vencer", "win a game"],
    ],
  },
  {
    type: "verb",
    level: "B1",
    tags: ["verbs", "thinking"],
    template: "I can {word} this from a new angle.",
    ptTemplate: "Eu consigo {meaning} isso por um novo angulo.",
    words: [
      ["consider", "considerar", "consider an option"],
      ["expect", "esperar; ter expectativa", "expect results"],
      ["believe", "acreditar", "believe in"],
      ["notice", "perceber; notar", "notice a detail"],
      ["assume", "supor", "assume that"],
      ["recognize", "reconhecer", "recognize a pattern"],
      ["manage", "gerenciar; conseguir", "manage time"],
      ["imagine", "imaginar", "imagine a future"],
      ["develop", "desenvolver", "develop a skill"],
      ["improve", "melhorar", "improve fluency"],
      ["increase", "aumentar", "increase speed"],
      ["reduce", "reduzir", "reduce mistakes"],
      ["create", "criar", "create a habit"],
      ["build", "construir", "build confidence"],
      ["protect", "proteger", "protect data"],
      ["offer", "oferecer", "offer help"],
      ["accept", "aceitar", "accept feedback"],
      ["refuse", "recusar", "refuse an offer"],
      ["prefer", "preferir", "prefer coffee"],
      ["continue", "continuar", "continue practicing"],
    ],
  },
  {
    type: "verb",
    level: "B2",
    tags: ["verbs", "academic", "business"],
    template: "The data may {word} the conclusion.",
    ptTemplate: "Os dados podem {meaning} a conclusao.",
    words: [
      ["support", "apoiar; sustentar", "support a claim"],
      ["challenge", "desafiar; contestar", "challenge an idea"],
      ["confirm", "confirmar", "confirm a hypothesis"],
      ["predict", "prever", "predict an outcome"],
      ["involve", "envolver", "involve several factors"],
      ["affect", "afetar", "affect performance"],
      ["influence", "influenciar", "influence decisions"],
      ["prevent", "prevenir; impedir", "prevent errors"],
      ["require", "exigir; requerer", "require effort"],
      ["provide", "fornecer", "provide evidence"],
      ["maintain", "manter", "maintain quality"],
      ["achieve", "alcancar", "achieve a goal"],
      ["apply", "aplicar; candidatar-se", "apply a rule"],
      ["adapt", "adaptar", "adapt quickly"],
      ["expand", "expandir", "expand vocabulary"],
      ["measure", "medir", "measure progress"],
      ["estimate", "estimar", "estimate costs"],
      ["evaluate", "avaliar", "evaluate evidence"],
      ["identify", "identificar", "identify patterns"],
      ["clarify", "esclarecer", "clarify meaning"],
    ],
  },
  {
    type: "adjective",
    level: "A2",
    tags: ["adjectives", "description"],
    template: "This is a {word} example.",
    ptTemplate: "Este e um exemplo {meaning}.",
    words: [
      ["easy", "facil", "easy task"],
      ["hard", "dificil", "hard question"],
      ["simple", "simples", "simple idea"],
      ["quick", "rapido", "quick answer"],
      ["slow", "lento", "slow process"],
      ["strong", "forte", "strong argument"],
      ["weak", "fraco", "weak point"],
      ["safe", "seguro", "safe place"],
      ["dangerous", "perigoso", "dangerous situation"],
      ["clean", "limpo", "clean room"],
      ["dirty", "sujo", "dirty clothes"],
      ["cheap", "barato", "cheap option"],
      ["expensive", "caro", "expensive product"],
      ["busy", "ocupado", "busy day"],
      ["free", "livre; gratuito", "free time"],
      ["full", "cheio", "full sentence"],
      ["empty", "vazio", "empty room"],
      ["young", "jovem", "young person"],
      ["old", "velho; antigo", "old habit"],
      ["modern", "moderno", "modern design"],
    ],
  },
  {
    type: "adjective",
    level: "B2",
    tags: ["adjectives", "advanced"],
    template: "The result is {word} in this context.",
    ptTemplate: "O resultado e {meaning} neste contexto.",
    words: [
      ["significant", "significativo", "significant change"],
      ["relevant", "relevante", "relevant detail"],
      ["limited", "limitado", "limited time"],
      ["complex", "complexo", "complex issue"],
      ["practical", "pratico", "practical solution"],
      ["effective", "eficaz", "effective method"],
      ["efficient", "eficiente", "efficient process"],
      ["flexible", "flexivel", "flexible schedule"],
      ["suitable", "adequado", "suitable option"],
      ["valuable", "valioso", "valuable feedback"],
      ["harmful", "prejudicial", "harmful effect"],
      ["beneficial", "benefico", "beneficial habit"],
      ["current", "atual", "current situation"],
      ["previous", "anterior", "previous version"],
      ["overall", "geral", "overall result"],
      ["minor", "menor; pequeno", "minor issue"],
      ["major", "maior; importante", "major problem"],
      ["likely", "provavel", "likely outcome"],
      ["unlikely", "improvavel", "unlikely event"],
      ["aware", "ciente", "aware of"],
    ],
  },
  {
    type: "noun",
    level: "B1",
    tags: ["abstract", "conversation"],
    template: "This {word} matters in real communication.",
    ptTemplate: "Esse/essa {word} importa na comunicacao real.",
    words: [
      ["idea", "ideia", "new idea"],
      ["reason", "motivo; razao", "main reason"],
      ["problem", "problema", "solve a problem"],
      ["chance", "chance", "good chance"],
      ["choice", "escolha", "make a choice"],
      ["decision", "decisao", "make a decision"],
      ["habit", "habito", "daily habit"],
      ["skill", "habilidade", "language skill"],
      ["level", "nivel", "advanced level"],
      ["result", "resultado", "good result"],
      ["purpose", "proposito", "clear purpose"],
      ["effort", "esforco", "make an effort"],
      ["mindset", "mentalidade", "growth mindset"],
      ["detail", "detalhe", "small detail"],
      ["context", "contexto", "in context"],
      ["pattern", "padrao", "grammar pattern"],
      ["memory", "memoria", "strong memory"],
      ["attention", "atencao", "pay attention"],
      ["focus", "foco", "keep focus"],
      ["quality", "qualidade", "high quality"],
    ],
  },
  {
    type: "noun",
    level: "B2",
    tags: ["business", "academic"],
    template: "The {word} affects the final decision.",
    ptTemplate: "O/A {word} afeta a decisao final.",
    words: [
      ["analysis", "analise", "data analysis"],
      ["factor", "fator", "key factor"],
      ["method", "metodo", "research method"],
      ["process", "processo", "learning process"],
      ["resource", "recurso", "useful resource"],
      ["requirement", "requisito", "basic requirement"],
      ["benefit", "beneficio", "main benefit"],
      ["risk", "risco", "high risk"],
      ["trend", "tendencia", "market trend"],
      ["growth", "crescimento", "steady growth"],
      ["performance", "desempenho", "improve performance"],
      ["income", "renda", "monthly income"],
      ["cost", "custo", "reduce costs"],
      ["value", "valor", "create value"],
      ["supply", "fornecimento; oferta", "supply chain"],
      ["demand", "demanda", "market demand"],
      ["policy", "politica; regra", "company policy"],
      ["proposal", "proposta", "business proposal"],
      ["contract", "contrato", "sign a contract"],
      ["negotiation", "negociacao", "price negotiation"],
    ],
  },
  {
    type: "adverb",
    level: "B1",
    tags: ["adverbs", "style"],
    template: "She explained it {word}.",
    ptTemplate: "Ela explicou isso {meaning}.",
    words: [
      ["clearly", "claramente", "speak clearly"],
      ["carefully", "cuidadosamente", "read carefully"],
      ["quickly", "rapidamente", "answer quickly"],
      ["slowly", "lentamente", "speak slowly"],
      ["probably", "provavelmente", "probably true"],
      ["possibly", "possivelmente", "possibly useful"],
      ["certainly", "certamente", "certainly possible"],
      ["mainly", "principalmente", "mainly because"],
      ["especially", "especialmente", "especially important"],
      ["recently", "recentemente", "recently changed"],
      ["finally", "finalmente", "finally finished"],
      ["suddenly", "de repente", "suddenly happened"],
      ["gradually", "gradualmente", "gradually improve"],
      ["directly", "diretamente", "directly related"],
      ["properly", "adequadamente", "work properly"],
    ],
  },
  {
    type: "preposition",
    level: "A1",
    tags: ["prepositions", "grammar"],
    template: "Use {word} to connect ideas, time or place.",
    ptTemplate: "Use {word} para conectar ideias, tempo ou lugar.",
    words: [
      ["in", "em; dentro de", "in Brazil"],
      ["on", "em; sobre", "on Monday"],
      ["at", "em; as", "at home"],
      ["for", "para; por", "for you"],
      ["with", "com", "with me"],
      ["without", "sem", "without help"],
      ["before", "antes de", "before work"],
      ["after", "depois de", "after class"],
      ["between", "entre dois", "between us"],
      ["among", "entre varios", "among friends"],
      ["through", "atraves de", "through practice"],
      ["over", "sobre; acima de", "over time"],
      ["under", "embaixo; sob", "under pressure"],
      ["against", "contra", "against the rule"],
      ["toward", "em direcao a", "toward fluency"],
    ],
  },
  {
    type: "phrase",
    level: "B2",
    tags: ["chunks", "conversation"],
    template: "{word} is a useful chunk for natural English.",
    ptTemplate: "{word} e um bloco util para ingles natural.",
    words: [
      ["as a matter of fact", "na verdade; de fato", "as a matter of fact"],
      ["on the other hand", "por outro lado", "on the other hand"],
      ["in the long run", "a longo prazo", "in the long run"],
      ["at the end of the day", "no fim das contas", "at the end of the day"],
      ["to some extent", "ate certo ponto", "to some extent"],
      ["for the most part", "em grande parte", "for the most part"],
      ["in terms of", "em termos de", "in terms of quality"],
      ["as soon as possible", "o mais rapido possivel", "as soon as possible"],
      ["from my point of view", "do meu ponto de vista", "from my point of view"],
      ["that being said", "dito isso", "that being said"],
      ["to be honest", "para ser sincero", "to be honest"],
      ["in other words", "em outras palavras", "in other words"],
      ["as long as", "contanto que", "as long as"],
      ["so far", "ate agora", "so far"],
      ["sooner or later", "mais cedo ou mais tarde", "sooner or later"],
    ],
  },
];

const megaWordPacks = [
  {
    type: "noun",
    level: "A2",
    tags: ["daily", "objects"],
    items: `
      bottle|garrafa|water bottle; plate|prato|dinner plate; cup|copo; xicara|coffee cup; fork|garfo|use a fork; spoon|colher|wooden spoon; knife|faca|sharp knife; glass|copo; vidro|glass of water; box|caixa|cardboard box; paper|papel|piece of paper; pen|caneta|blue pen; pencil|lapis|pencil case; notebook|caderno|small notebook; wallet|carteira|leather wallet; ticket|ingresso; passagem|train ticket; map|mapa|city map; screen|tela|phone screen; charger|carregador|phone charger; cable|cabo|charging cable; battery|bateria|low battery; button|botao|press a button; pocket|bolso|jacket pocket; mirror|espelho|bathroom mirror; towel|toalha|clean towel; soap|sabao; sabonete|bar of soap; brush|escova; pincel|hair brush; blanket|cobertor|warm blanket; pillow|travesseiro|soft pillow; shelf|prateleira|bookshelf; drawer|gaveta|desk drawer; lamp|lampada; luminaria|desk lamp; roof|telhado|house roof; stairs|escadas|go upstairs; elevator|elevador|take the elevator; street|rua|busy street; corner|esquina; canto|street corner; bridge|ponte|cross the bridge; station|estacao|train station; airport|aeroporto|international airport; store|loja|grocery store; restaurant|restaurante|Italian restaurant; menu|cardapio|restaurant menu; bill|conta; boleto|pay the bill; receipt|recibo|keep the receipt; price|preco|high price; discount|desconto|special discount; gift|presente|birthday gift; package|pacote|delivery package; address|endereco|home address; neighborhood|bairro|quiet neighborhood; building|predio|office building
    `,
  },
  {
    type: "verb",
    level: "A2",
    tags: ["verbs", "daily"],
    items: `
      clean|limpar|clean the room; cook|cozinhar|cook dinner; wash|lavar|wash clothes; dry|secar|dry your hands; carry|carregar|carry a bag; hold|segurar|hold my hand; wear|vestir; usar roupa|wear a jacket; dress|vestir-se|dress quickly; brush|escovar|brush your teeth; drive|dirigir|drive a car; ride|andar de; cavalgar|ride a bike; walk|andar; caminhar|walk home; climb|subir; escalar|climb stairs; cross|atravessar|cross the street; enter|entrar|enter the room; exit|sair|exit the building; return|retornar|return home; borrow|pegar emprestado|borrow a book; lend|emprestar|lend money; save|salvar; economizar|save money; spend|gastar|spend time; count|contar|count numbers; weigh|pesar|weigh the bag; measure|medir|measure distance; touch|tocar|touch the screen; push|empurrar|push the door; pull|puxar|pull the handle; throw|jogar; arremessar|throw a ball; catch|pegar|catch the bus; drop|derrubar; deixar cair|drop the keys; pick|escolher; pegar|pick a card; cover|cobrir|cover the table; uncover|descobrir; destampar|uncover the truth; fill|encher; preencher|fill the form; empty|esvaziar|empty the box; heat|aquecer|heat the food; cool|esfriar|cool down; boil|ferver|boil water; fry|fritar|fry an egg; bake|assar|bake bread; taste|provar|taste the soup; smell|cheirar|smell flowers; sound|soar|sound natural; seem|parecer|seem tired; become|tornar-se|become fluent; grow|crescer|grow slowly; fall|cair|fall down; rise|subir; aumentar|prices rise; stay|ficar|stay home; rest|descansar|rest well
    `,
  },
  {
    type: "adjective",
    level: "A2",
    tags: ["adjectives", "description"],
    items: `
      bright|claro; brilhante|bright light; dark|escuro|dark room; loud|alto; barulhento|loud music; quiet|quieto; silencioso|quiet place; soft|macio; suave|soft voice; rough|aspero; bruto|rough surface; smooth|liso; suave|smooth transition; heavy|pesado|heavy bag; light|leve; claro|light jacket; narrow|estreito|narrow street; wide|largo|wide road; deep|profundo|deep water; shallow|raso|shallow river; fresh|fresco; novo|fresh food; stale|velho; sem frescor|stale bread; warm|morno; quente|warm weather; cold|frio|cold drink; hot|quente|hot coffee; cool|frio agradavel; legal|cool idea; wet|molhado|wet clothes; dry|seco|dry towel; comfortable|confortavel|comfortable chair; uncomfortable|desconfortavel|uncomfortable seat; polite|educado|polite request; rude|grosseiro|rude answer; honest|honesto|honest person; careful|cuidadoso|careful driver; careless|descuidado|careless mistake; patient|paciente|patient teacher; impatient|impaciente|impatient customer; proud|orgulhoso|proud of; nervous|nervoso|nervous about; calm|calmo|stay calm; curious|curioso|curious learner; serious|serio|serious problem; funny|engracado|funny story; boring|chato|boring class; exciting|empolgante|exciting news; surprising|surpreendente|surprising result; normal|normal|normal day; strange|estranho|strange sound; common|comum|common mistake; rare|raro|rare word; possible|possivel|possible answer; impossible|impossivel|impossible task; necessary|necessario|necessary step; unnecessary|desnecessario|unnecessary detail
    `,
  },
  {
    type: "noun",
    level: "B1",
    tags: ["business", "work"],
    items: `
      agenda|agenda; pauta|meeting agenda; appointment|compromisso|doctor appointment; candidate|candidato|job candidate; colleague|colega|work colleague; department|departamento|sales department; employee|funcionario|new employee; employer|empregador|future employer; salary|salario|monthly salary; wage|salario por hora|minimum wage; shift|turno|night shift; task|tarefa|daily task; project|projeto|complex project; milestone|marco|project milestone; objective|objetivo|clear objective; target|alvo; meta|sales target; revenue|receita|annual revenue; profit|lucro|net profit; loss|perda; prejuizo|financial loss; invoice|fatura|send an invoice; expense|despesa|business expense; investment|investimento|long-term investment; shareholder|acionista|major shareholder; stakeholder|parte interessada|key stakeholder; supplier|fornecedor|reliable supplier; warehouse|armazem|warehouse stock; inventory|estoque|inventory control; shipment|remessa|international shipment; delivery|entrega|fast delivery; complaint|reclamacao|customer complaint; refund|reembolso|request a refund; warranty|garantia|product warranty; partnership|parceria|strategic partnership; competitor|concorrente|main competitor; campaign|campanha|marketing campaign; advertisement|anuncio|online advertisement; audience|publico|target audience; survey|pesquisa|customer survey; feedback|retorno|positive feedback; workflow|fluxo de trabalho|efficient workflow; productivity|produtividade|team productivity; leadership|lideranca|strong leadership; responsibility|responsabilidade|take responsibility; permission|permissao|request permission; access|acesso|system access; account|conta|user account; password|senha|secure password; privacy|privacidade|privacy policy; security|seguranca|security system; backup|copia de seguranca|data backup; database|banco de dados|customer database
    `,
  },
  {
    type: "verb",
    level: "B2",
    tags: ["business", "academic", "verbs"],
    items: `
      negotiate|negociar|negotiate a contract; persuade|persuadir|persuade the audience; convince|convencer|convince someone; propose|propor|propose a solution; implement|implementar|implement a system; execute|executar|execute a plan; coordinate|coordenar|coordinate a team; collaborate|colaborar|collaborate with; delegate|delegar|delegate tasks; supervise|supervisionar|supervise employees; monitor|monitorar|monitor progress; optimize|otimizar|optimize performance; automate|automatizar|automate a process; integrate|integrar|integrate tools; launch|lancar|launch a product; promote|promover|promote a service; advertise|anunciar|advertise online; invest|investir|invest money; allocate|alocar|allocate resources; calculate|calcular|calculate costs; analyze|analisar|analyze data; assess|avaliar|assess risk; audit|auditar|audit accounts; comply|cumprir; estar em conformidade|comply with rules; enforce|aplicar; fazer cumprir|enforce a policy; resolve|resolver|resolve an issue; escalate|escalar; encaminhar|escalate a problem; notify|notificar|notify users; update|atualizar|update software; upgrade|melhorar; atualizar|upgrade a system; maintain|manter|maintain quality; design|projetar|design a product; draft|rascunhar|draft a message; revise|revisar|revise a document; summarize|resumir|summarize a report; outline|esbocar|outline a plan; define|definir|define a goal; specify|especificar|specify requirements; justify|justificar|justify a choice; demonstrate|demonstrar|demonstrate value; reveal|revelar|reveal a pattern; highlight|destacar|highlight a point; imply|implicar; sugerir|imply a meaning; indicate|indicar|indicate a trend; suggest|sugerir|suggest an option; recommend|recomendar|recommend a tool; acknowledge|reconhecer|acknowledge a mistake; apologize|pedir desculpas|apologize sincerely; appreciate|apreciar; agradecer|appreciate your help
    `,
  },
  {
    type: "noun",
    level: "C1",
    tags: ["academic", "abstract"],
    items: `
      concept|conceito|abstract concept; framework|estrutura; modelo|theoretical framework; principle|principio|basic principle; perspective|perspectiva|different perspective; insight|percepcao; insight|valuable insight; implication|implicacao|practical implication; limitation|limitacao|study limitation; variable|variavel|dependent variable; hypothesis|hipotese|test a hypothesis; phenomenon|fenomeno|social phenomenon; criterion|criterio|evaluation criterion; consequence|consequencia|serious consequence; contradiction|contradicao|logical contradiction; bias|vies|confirmation bias; interpretation|interpretacao|alternative interpretation; assumption|suposicao|hidden assumption; correlation|correlacao|strong correlation; causation|causalidade|causation claim; accuracy|precisao|high accuracy; validity|validade|external validity; reliability|confiabilidade|test reliability; methodology|metodologia|research methodology; literature|literatura|academic literature; source|fonte|reliable source; reference|referencia|reference list; quotation|citacao|direct quotation; paragraph|paragrafo|opening paragraph; thesis|tese|central thesis; conclusion|conclusao|draw a conclusion; counterargument|contra-argumento|strong counterargument; nuance|nuance|important nuance; ambiguity|ambiguidade|linguistic ambiguity; clarity|clareza|improve clarity; coherence|coerencia|text coherence; cohesion|coesao|cohesion devices; emphasis|enfase|add emphasis; distinction|distincao|important distinction; category|categoria|broad category; hierarchy|hierarquia|social hierarchy; scope|escopo|limited scope; dimension|dimensao|cultural dimension; outcome|resultado|learning outcome; intervention|intervencao|policy intervention; exposure|exposicao|language exposure; acquisition|aquisicao|language acquisition; proficiency|proficiencia|English proficiency; competence|competencia|communicative competence; fluency|fluencia|oral fluency; literacy|letramento|digital literacy
    `,
  },
  {
    type: "adjective",
    level: "C1",
    tags: ["academic", "advanced"],
    items: `
      apparent|aparente|apparent problem; adequate|adequado|adequate response; arbitrary|arbitrario|arbitrary decision; coherent|coerente|coherent argument; concise|conciso|concise explanation; deliberate|deliberado|deliberate choice; distinct|distinto|distinct difference; explicit|explicito|explicit instruction; implicit|implicito|implicit meaning; feasible|viavel|feasible plan; inevitable|inevitavel|inevitable result; inconsistent|inconsistente|inconsistent data; marginal|marginal|marginal improvement; mutual|mutuo|mutual benefit; objective|objetivo|objective analysis; preliminary|preliminar|preliminary result; prominent|proeminente|prominent figure; rational|racional|rational decision; relevant|relevante|relevant evidence; rigorous|rigoroso|rigorous method; subjective|subjetivo|subjective opinion; sustainable|sustentavel|sustainable growth; transparent|transparente|transparent process; underlying|subjacente|underlying cause; valid|valido|valid argument; widespread|generalizado|widespread belief; controversial|controverso|controversial topic; comprehensive|abrangente|comprehensive course; conventional|convencional|conventional wisdom; crucial|crucial|crucial factor; desirable|desejavel|desirable outcome; detrimental|prejudicial|detrimental effect; evident|evidente|evident pattern; favorable|favoravel|favorable conditions; fundamental|fundamental|fundamental skill; hypothetical|hipotetico|hypothetical situation; logical|logico|logical explanation; misleading|enganoso|misleading claim; persuasive|persuasivo|persuasive speech; plausible|plausivel|plausible reason; precise|preciso|precise vocabulary; redundant|redundante|redundant detail; resilient|resiliente|resilient team; strategic|estrategico|strategic plan; sufficient|suficiente|sufficient evidence; temporary|temporario|temporary solution; ultimate|final; definitivo|ultimate goal; viable|viavel|viable alternative
    `,
  },
  {
    type: "noun",
    level: "B1",
    tags: ["emotions", "people"],
    items: `
      happiness|felicidade|lasting happiness; sadness|tristeza|deep sadness; anger|raiva|control anger; fear|medo|fear of failure; anxiety|ansiedade|social anxiety; worry|preocupacao|constant worry; joy|alegria|pure joy; surprise|surpresa|big surprise; shame|vergonha|feel shame; guilt|culpa|sense of guilt; pride|orgulho|take pride; hope|esperanca|lose hope; relief|alivio|feel relief; trust|confianca|build trust; doubt|duvida|serious doubt; courage|coragem|show courage; patience|paciencia|practice patience; kindness|gentileza|act of kindness; respect|respeito|show respect; empathy|empatia|develop empathy; attitude|atitude|positive attitude; behavior|comportamento|change behavior; personality|personalidade|strong personality; character|carater; personagem|main character; mood|humor|good mood; motivation|motivacao|strong motivation; discipline|disciplina|self discipline; commitment|compromisso|long-term commitment; intention|intencao|good intention; expectation|expectativa|clear expectation; preference|preferencia|personal preference; belief|crenca|strong belief; opinion|opiniao|honest opinion; advice|conselho|useful advice; warning|aviso|clear warning; promise|promessa|keep a promise; secret|segredo|keep a secret; memory|memoria|childhood memory; dream|sonho|big dream; nightmare|pesadelo|terrible nightmare
    `,
  },
  {
    type: "noun",
    level: "A2",
    tags: ["nature", "world"],
    items: `
      sun|sol|bright sun; moon|lua|full moon; star|estrela|shooting star; sky|ceu|blue sky; cloud|nuvem|dark cloud; rain|chuva|heavy rain; snow|neve|fresh snow; wind|vento|strong wind; storm|tempestade|winter storm; thunder|trovao|loud thunder; lightning|raio|flash of lightning; river|rio|long river; lake|lago|deep lake; ocean|oceano|Atlantic ocean; beach|praia|sandy beach; island|ilha|small island; mountain|montanha|high mountain; hill|colina|green hill; forest|floresta|rain forest; tree|arvore|old tree; flower|flor|red flower; grass|grama|green grass; field|campo|open field; desert|deserto|hot desert; valley|vale|deep valley; cave|caverna|dark cave; rock|rocha; pedra|large rock; sand|areia|white sand; soil|solo|rich soil; plant|planta|small plant; leaf|folha|green leaf; root|raiz|deep root; seed|semente|plant a seed; weather|clima|bad weather; climate|clima|climate change; temperature|temperatura|high temperature; season|estacao|rainy season; spring|primavera|early spring; summer|verao|hot summer; autumn|outono|autumn leaves; winter|inverno|cold winter
    `,
  },
  {
    type: "noun",
    level: "B2",
    tags: ["technology", "digital"],
    items: `
      software|software|software update; hardware|hardware|hardware problem; device|dispositivo|mobile device; network|rede|wireless network; server|servidor|web server; browser|navegador|web browser; file|arquivo|text file; folder|pasta|project folder; image|imagem|background image; video|video|short video; audio|audio|audio file; microphone|microfone|use a microphone; camera|camera|digital camera; keyboard|teclado|computer keyboard; mouse|mouse|wireless mouse; website|site|learning website; application|aplicativo|mobile application; feature|recurso; funcionalidade|new feature; interface|interface|user interface; layout|layout|page layout; animation|animacao|smooth animation; database|banco de dados|large database; algorithm|algoritmo|search algorithm; model|modelo|language model; prompt|prompt; comando|writing prompt; input|entrada|user input; output|saida|model output; command|comando|terminal command; function|funcao|JavaScript function; variable|variavel|local variable; error|erro|runtime error; bug|bug; erro|fix a bug; update|atualizacao|system update; version|versao|new version; backup|backup|cloud backup; storage|armazenamento|local storage; privacy|privacidade|privacy settings; encryption|criptografia|data encryption; permission|permissao|camera permission; notification|notificacao|push notification; download|download|file download; upload|upload|image upload; link|link|external link; password|senha|strong password; username|nome de usuario|username field; account|conta|online account; subscription|assinatura|monthly subscription
    `,
  },
  {
    type: "noun",
    level: "B1",
    tags: ["health", "body"],
    items: `
      body|corpo|human body; head|cabeca|head ache; face|rosto|wash your face; eye|olho|left eye; ear|orelha; ouvido|ear infection; nose|nariz|runny nose; mouth|boca|open your mouth; tooth|dente|brush your teeth; tongue|lingua|mother tongue; throat|garganta|sore throat; neck|pescoco|neck pain; shoulder|ombro|shoulder injury; arm|braco|left arm; hand|mao|raise your hand; finger|dedo|index finger; chest|peito|chest pain; stomach|estomago|stomach ache; back|costas|back pain; leg|perna|broken leg; knee|joelho|knee problem; foot|pe|right foot; skin|pele|dry skin; blood|sangue|blood test; pain|dor|sharp pain; illness|doenca|serious illness; disease|doenca|heart disease; symptom|sintoma|common symptom; medicine|remedio|take medicine; treatment|tratamento|medical treatment; appointment|consulta|medical appointment; doctor|medico|family doctor; nurse|enfermeiro|hospital nurse; patient|paciente|patient care; hospital|hospital|public hospital; clinic|clinica|health clinic; exercise|exercicio|daily exercise; diet|dieta|healthy diet; sleep|sono|deep sleep; energy|energia|low energy; stress|estresse|reduce stress; recovery|recuperacao|fast recovery
    `,
  },
  {
    type: "noun",
    level: "A2",
    tags: ["travel", "city"],
    items: `
      trip|viagem|business trip; journey|jornada; viagem|long journey; luggage|bagagem|heavy luggage; suitcase|mala|small suitcase; passport|passaporte|valid passport; visa|visto|tourist visa; hotel|hotel|cheap hotel; hostel|albergue|youth hostel; reservation|reserva|hotel reservation; room|quarto|hotel room; reception|recepcao|hotel reception; tourist|turista|foreign tourist; guide|guia|tour guide; museum|museu|art museum; gallery|galeria|photo gallery; monument|monumento|historic monument; square|praca|main square; avenue|avenida|wide avenue; subway|metro|subway station; bus|onibus|bus stop; taxi|taxi|take a taxi; train|trem|train ticket; platform|plataforma|train platform; flight|voo|delayed flight; gate|portao|boarding gate; seat|assento|window seat; border|fronteira|border control; customs|alfandega|customs officer; currency|moeda|foreign currency; exchange|cambio; troca|currency exchange; route|rota|best route; destination|destino|final destination; arrival|chegada|arrival time; departure|partida|departure gate; delay|atraso|flight delay; traffic|trafego|heavy traffic; sidewalk|calcada|walk on the sidewalk; crossing|travessia|pedestrian crossing; entrance|entrada|main entrance; exit|saida|emergency exit
    `,
  },
  {
    type: "phrase",
    level: "C1",
    tags: ["phrasal", "idioms"],
    items: `
      account for|explicar; representar|account for the difference; add up|fazer sentido; somar|the numbers add up; back up|apoiar; fazer backup|back up your claim; call off|cancelar|call off the meeting; come up with|inventar; propor|come up with an idea; cut down on|reduzir|cut down on sugar; end up|acabar fazendo|end up staying; get along with|dar-se bem com|get along with colleagues; get over|superar|get over a problem; give in|ceder|give in to pressure; go through|passar por; examinar|go through the files; hold on|esperar; segurar|hold on a second; keep on|continuar|keep on practicing; leave out|omitir|leave out details; look into|investigar|look into the issue; make up|inventar; compensar|make up a story; pass out|desmaiar; distribuir|pass out from heat; pull off|conseguir realizar|pull off a difficult task; put up with|tolerar|put up with noise; run out of|ficar sem|run out of time; show up|aparecer|show up late; sort out|resolver; organizar|sort out the problem; take after|puxar a alguem|take after your father; turn down|recusar; diminuir|turn down an offer; turn up|aparecer; aumentar|turn up the volume; work on|trabalhar em|work on pronunciation; wrap up|encerrar|wrap up the meeting; zoom in|aproximar imagem|zoom in on details; zoom out|afastar imagem|zoom out for context
    `,
  },
];

const baseLexiconEntries = dedupeLexicon([
  ...rawLexicon
    .trim()
    .split("\n")
    .map(parseLexiconLine),
  ...buildSupplementalLexicon(),
  ...buildMegaLexicon(),
]);

const lexicon = dedupeLexicon([
  ...baseLexiconEntries,
  ...baseLexiconEntries.flatMap(createDerivedEntries),
]).map((entry, index) => ({
  ...entry,
  id: `${entry.word}-${index}`.replace(/\s+/g, "-"),
  forms: entry.tags?.includes("forms") ? [] : buildWordForms(entry.word, entry.type),
}));

const writingPrompts = [
  {
    level: "A2",
    title: "Your routine",
    prompt: "Describe your daily routine and explain what you do to learn English.",
    goals: ["Use simple present", "Use frequency words", "Write 70 to 110 words"],
  },
  {
    level: "B1",
    title: "A difficult decision",
    prompt: "Write about a difficult decision you made and what you learned from it.",
    goals: ["Use past simple", "Use at least two connectors", "Write 100 to 150 words"],
  },
  {
    level: "B2",
    title: "A better way to learn",
    prompt: "Explain whether technology makes language learning more effective.",
    goals: ["Use conditionals", "Give examples", "Write 130 to 180 words"],
  },
  {
    level: "C1",
    title: "Remote work",
    prompt: "Argue for or against remote work as a long-term model for companies.",
    goals: ["Use contrast connectors", "Qualify your claims", "Write 180 to 240 words"],
  },
  {
    level: "C2",
    title: "Precision and nuance",
    prompt: "Discuss why nuance matters when people communicate across cultures.",
    goals: ["Use precise vocabulary", "Use formal register", "Write 220 to 300 words"],
  },
];

const speechPhrases = [
  "I want to learn English every day.",
  "Could you send me the report by Friday?",
  "Although it is difficult, I can handle it.",
  "If I had known, I would have helped.",
  "The evidence is compelling, nevertheless we need more data.",
  "I need to figure out a better strategy.",
  "Let's break the ice before the meeting starts.",
  "A nuanced argument requires precise vocabulary.",
];

function createCurriculumLesson(level, profile, domain, domainIndex) {
  const topic = domain.topics[level] || profile.anchor;
  const words = uniqueValues([...profile.words, ...domain.words]).slice(0, 10);
  const sampleTwo = buildModelSentence(words[0], domain.action);
  return {
    id: `mega-${slug(level)}-${domain.key}`,
    level,
    phase: profile.phase,
    title: `${domain.title}: ${topic}`,
    duration: `${45 + domainIndex * 5} min`,
    focus: uniqueValues([...domain.focus, profile.grammar.split(", ")[0], topic]).slice(0, 5),
    theory:
      `${domain.title} no nivel ${level} treina ${topic}. A meta e usar ${profile.anchor} com ${profile.grammar}. ` +
      `Estude por blocos: entenda o padrao, leia exemplos, responda em voz alta, escreva uma frase propria e revise depois.`,
    bullets: [
      `Objetivo: ${domain.action}.`,
      `Base gramatical: ${profile.grammar}.`,
      `Use chunks completos, nao palavras soltas: ${words.slice(0, 4).join(", ")}.`,
      "Feche a licao criando uma frase sua e falando em voz alta.",
    ],
    pattern: profile.sample,
    trap: `Nao tente decorar ${topic} de forma isolada. Use exemplos, collocations e revisao ativa.`,
    examples: [
      [profile.sample, profile.translation],
      [sampleTwo, "Modelo de uso em contexto real."],
      [`This lesson helps me ${domain.action}.`, "Esta licao me ajuda a praticar a habilidade principal."],
    ],
    words,
    exercises: [],
  };
}

function buildModelSentence(word, action) {
  if (!word) return "I practice English every day.";
  if (word.includes(" ")) return `I can use "${word}" naturally when I speak.`;
  if (/^(a|e|i|o|u)/i.test(word)) return `An ${word} can be useful in the right context.`;
  return `I use ${word} when I ${action}.`;
}

function buildExerciseDeck(lesson) {
  const seeds = [...(lesson.exercises || [])];
  const examples = lesson.examples && lesson.examples.length ? lesson.examples : [[lesson.pattern, "Modelo de traducao."]];
  const words = lesson.words && lesson.words.length ? lesson.words : ["practice", "learn", "review"];
  const generated = [];

  examples.forEach(([sentence, pt], index) => {
    const answer = String(sentence).trim();
    const focusWord = words[index % words.length] || "English";
    generated.push({
      type: "choice",
      prompt: `Qual frase esta correta para ${lesson.focus[0]}?`,
      answer,
      options: makeSentenceOptions(answer),
      explain: `Padrao da licao: ${lesson.pattern}`,
    });
    generated.push({
      type: "translate",
      prompt: `Traduza a ideia: ${pt}`,
      answer,
    });
    generated.push({
      type: "listen",
      prompt: "Ouça e escreva a frase.",
      answer,
    });
    generated.push({
      type: "order",
      prompt: "Organize a frase.",
      answer,
      tokens: answer.replace(/[.!?]/g, "").split(/\s+/).filter(Boolean),
    });
    generated.push(makeFillExercise(answer, focusWord, lesson));
  });

  words.forEach((word, index) => {
    const answer = buildVocabularySentence(word, lesson);
    generated.push({
      type: "choice",
      prompt: `Escolha a frase que usa "${word}" em contexto.`,
      answer,
      options: makeSentenceOptions(answer),
      explain: "Aprenda vocabulario dentro de frase completa.",
    });
    generated.push({
      type: "fill",
      prompt: `Complete: ${answer.replace(word, "___")}`,
      answer: word,
      hint: `Palavra da licao: ${word}`,
    });
    if (index % 2 === 0) {
      generated.push({
        type: "listen",
        prompt: "Ouça e escreva.",
        answer,
      });
    }
  });

  const deck = [...seeds, ...generated].filter((exercise) => exercise && exercise.answer);
  let cursor = 0;
  while (deck.length < 15) {
    const word = words[cursor % words.length] || "practice";
    deck.push({
      type: "translate",
      prompt: `Crie em ingles uma frase curta com a ideia de "${word}".`,
      answer: buildVocabularySentence(word, lesson),
    });
    cursor += 1;
  }
  return deck.slice(0, Math.max(15, deck.length));
}

function makeFillExercise(sentence, focusWord, lesson) {
  const wordsInSentence = sentence.replace(/[.!?]/g, "").split(/\s+/).filter(Boolean);
  const target =
    wordsInSentence.find((item) => normalize(item) === normalize(focusWord)) ||
    wordsInSentence.find((item) => item.length > 3) ||
    wordsInSentence[0] ||
    focusWord;
  return {
    type: "fill",
    prompt: `Complete: ${sentence.replace(target, "___")}`,
    answer: target,
    hint: `Use o padrao: ${lesson.pattern}`,
  };
}

function makeSentenceOptions(answer) {
  const clean = answer.replace(/[.!?]$/, "");
  const words = clean.split(/\s+/).filter(Boolean);
  const swapped = words.length > 3 ? [words[1], words[0], ...words.slice(2)].join(" ") + "." : `${clean} now.`;
  const missing = words.length > 4 ? words.filter((_, index) => index !== 1).join(" ") + "." : `Do ${clean}.`;
  const wrongVerb = clean.replace(/\b(am|is|are|was|were|have|has|had|do|does|did)\b/i, "be") + ".";
  return uniqueValues([answer, swapped, missing, wrongVerb]).slice(0, 4);
}

function buildVocabularySentence(word, lesson) {
  if (word.includes(" ")) return `I can use "${word}" in a natural conversation.`;
  if ((lesson.focus || []).join(" ").includes("business")) return `We need to discuss ${word} in the meeting.`;
  if ((lesson.focus || []).join(" ").includes("academic")) return `The ${word} is important for the argument.`;
  return `I use ${word} to improve my English.`;
}

function createCourseTheoryTopic(lesson) {
  return {
    title: `${lesson.level} - ${lesson.title}`,
    level: lesson.level,
    tags: uniqueValues([lesson.phase, ...lesson.focus, ...lesson.words]).slice(0, 10),
    summary: lesson.theory,
    points: [
      `Padrao: ${lesson.pattern}`,
      ...lesson.bullets,
      `Armadilha: ${lesson.trap}`,
      `Treino minimo: ${lesson.exercises.length} atividades nesta unidade.`,
    ],
    example: lesson.examples[0]?.[0] || lesson.pattern,
  };
}

function parseLexiconLine(line) {
  const [word, meaning, type, level, tags, example, ptExample, collocations] = line.split("|");
  return {
    word,
    meaning,
    type,
    level,
    tags: (tags || "general").split(","),
    example,
    ptExample,
    collocations,
  };
}

function buildSupplementalLexicon() {
  return supplementalWordGroups.flatMap((group) =>
    group.words.map(([word, meaning, collocations]) => ({
      word,
      meaning,
      type: group.type,
      level: group.level,
      tags: group.tags,
      example: fillTemplate(group.template, { word, meaning, collocations }),
      ptExample: fillTemplate(group.ptTemplate, { word, meaning, collocations }),
      collocations,
    })),
  );
}

function buildMegaLexicon() {
  return megaWordPacks.flatMap((pack) =>
    pack.items
      .trim()
      .split(/\s*;\s*(?=[a-z][a-z -]+\|[^;|]+\|)/i)
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const [word, meaning, collocations] = item.split("|").map((part) => part.trim());
        return {
          word,
          meaning,
          type: pack.type,
          level: pack.level,
          tags: pack.tags,
          example: buildMegaExample(word, pack.type, pack.tags),
          ptExample: `Use "${word}" quando quiser expressar: ${meaning}.`,
          collocations: collocations || word,
        };
      }),
  );
}

function buildMegaExample(word, type, tags) {
  if (word.includes(" ")) return `I can use "${word}" in a real conversation.`;
  if (type.includes("verb")) return `I need to ${word} this in English.`;
  if (type.includes("adjective")) return `This is a ${word} example.`;
  if (tags.includes("business")) return `The ${word} is important at work.`;
  if (tags.includes("academic")) return `The ${word} is important in this argument.`;
  return `The word "${word}" is useful in daily English.`;
}

function createDerivedEntries(entry) {
  if (entry.word.includes(" ") || entry.tags?.includes("forms")) return [];
  return buildWordForms(entry.word, entry.type).map((form) => ({
    word: form,
    meaning: `forma relacionada a "${entry.word}": ${entry.meaning}`,
    type: entry.type,
    level: entry.level,
    tags: uniqueValues([...(entry.tags || []), "forms"]),
    example: `The form "${form}" comes from "${entry.word}".`,
    ptExample: `Forma derivada ou flexionada de "${entry.word}".`,
    collocations: entry.collocations,
  }));
}

function fillTemplate(template, values) {
  return template
    .replaceAll("{word}", values.word)
    .replaceAll("{meaning}", values.meaning)
    .replaceAll("{collocations}", values.collocations);
}

function dedupeLexicon(entries) {
  const seen = new Map();
  entries.forEach((entry) => {
    const key = normalize(entry.word);
    if (!seen.has(key)) seen.set(key, entry);
  });
  return [...seen.values()].sort((a, b) => a.word.localeCompare(b.word));
}

function buildWordForms(word, type) {
  if (!word || word.includes(" ")) return [];
  const forms = new Set();
  const lower = word.toLowerCase();
  const irregularVerbs = {
    be: ["am", "is", "are", "was", "were", "been", "being"],
    go: ["goes", "went", "gone", "going"],
    come: ["comes", "came", "coming"],
    do: ["does", "did", "done", "doing"],
    have: ["has", "had", "having"],
    make: ["makes", "made", "making"],
    take: ["takes", "took", "taken", "taking"],
    buy: ["buys", "bought", "buying"],
    sell: ["sells", "sold", "selling"],
    pay: ["pays", "paid", "paying"],
    bring: ["brings", "brought", "bringing"],
    leave: ["leaves", "left", "leaving"],
    lose: ["loses", "lost", "losing"],
    win: ["wins", "won", "winning"],
    run: ["runs", "ran", "running"],
    write: ["writes", "wrote", "written", "writing"],
    read: ["reads", "reading"],
    speak: ["speaks", "spoke", "spoken", "speaking"],
    understand: ["understands", "understood", "understanding"],
    know: ["knows", "knew", "known", "knowing"],
    think: ["thinks", "thought", "thinking"],
    choose: ["chooses", "chose", "chosen", "choosing"],
    send: ["sends", "sent", "sending"],
    build: ["builds", "built", "building"],
  };
  if (type.includes("verb")) {
    (irregularVerbs[lower] || []).forEach((form) => forms.add(form));
    forms.add(`${lower}s`);
    forms.add(lower.endsWith("e") ? `${lower}d` : `${lower}ed`);
    forms.add(lower.endsWith("e") ? `${lower.slice(0, -1)}ing` : `${lower}ing`);
    if (lower.endsWith("y")) {
      forms.add(`${lower.slice(0, -1)}ies`);
      forms.add(`${lower.slice(0, -1)}ied`);
    }
  }
  if (type.includes("adjective")) {
    forms.add(`${lower}er`);
    forms.add(`${lower}est`);
    forms.add(`${lower}ly`);
    forms.add(`${lower}ness`);
    forms.add(`un${lower}`);
  }
  if (type.includes("noun")) {
    forms.add(`${lower}s`);
    if (lower.endsWith("y")) forms.add(`${lower.slice(0, -1)}ies`);
  }
  return [...forms].filter((form) => form !== lower);
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

function slug(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const state = loadState();
let currentView = "dashboard";
let currentLessonId = state.currentLessonId || course[0].id;
let selectedDictionaryFilter = "all";
let currentExercise = null;
let currentWritingPrompt = writingPrompts[0];
let currentSpeechPhrase = speechPhrases[0];
let reviewIndex = 0;
let aiMessages = [];
let aiMode = "auto";
let aiLastAnalysis = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return {
        xp: 0,
        dailyXp: 0,
        lastStudyDate: todayKey(),
        completedLessons: [],
        masteredWords: [],
        reviewQueue: [],
        currentLessonId: "a0-survival",
        mistakes: [],
        ...saved,
      };
    }
  } catch (error) {
    console.warn("Could not load progress", error);
  }
  return {
    xp: 0,
    dailyXp: 0,
    lastStudyDate: todayKey(),
    completedLessons: [],
    masteredWords: [],
    reviewQueue: [],
    currentLessonId: "a0-survival",
    mistakes: [],
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function ensureDailyDate() {
  const today = todayKey();
  if (state.lastStudyDate !== today) {
    state.dailyXp = 0;
    state.lastStudyDate = today;
    saveState();
  }
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:'"()[\]{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function addXp(amount) {
  ensureDailyDate();
  state.xp += amount;
  state.dailyXp = Math.min(DAILY_GOAL, state.dailyXp + amount);
  saveState();
  renderStats();
}

function getRank() {
  const xp = state.xp;
  if (xp >= 950) return "C2+";
  if (xp >= 750) return "C2";
  if (xp >= 560) return "C1";
  if (xp >= 390) return "B2";
  if (xp >= 240) return "B1";
  if (xp >= 120) return "A2";
  if (xp >= 45) return "A1";
  return "A0";
}

function getLesson(id = currentLessonId) {
  return course.find((lesson) => lesson.id === id) || course[0];
}

function getDailyLesson() {
  const next = course.find((lesson) => !state.completedLessons.includes(lesson.id));
  return next || course[state.xp % course.length];
}

function setView(view) {
  currentView = view;
  $$(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  $$(".view").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === view);
  });
  const titles = {
    dashboard: "Painel de Fluencia",
    course: "Trilha do Curso",
    theory: "Central de Teoria",
    practice: "Treino Interativo",
    dictionary: "Dicionario Inteligente",
    review: "Revisao Espacada",
    writing: "Laboratorio de Escrita",
    pronunciation: "Pronuncia e Escuta",
    ai: "IA Tutor Local",
  };
  $("#view-title").textContent = titles[view] || "English Fluency OS";
  if (view === "practice") renderExercise();
  if (view === "review") renderReview();
  if (view === "dictionary") renderDictionary();
  if (view === "ai") renderAI();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderStats() {
  ensureDailyDate();
  $("#total-xp").textContent = state.xp;
  $("#total-lessons").textContent = course.length;
  $("#dictionary-size").textContent = lexicon.length + lexicon.reduce((total, entry) => total + (entry.forms?.length || 0), 0);
  $("#min-exercises").textContent = `${Math.min(...course.map((lesson) => lesson.exercises.length))}+`;
  $("#completed-lessons").textContent = state.completedLessons.length;
  $("#mastered-count").textContent = state.masteredWords.length;
  $("#current-rank").textContent = getRank();
  $("#daily-goal-label").textContent = `${state.dailyXp} / ${DAILY_GOAL} XP`;
  $("#daily-goal-bar").style.width = `${Math.min(100, (state.dailyXp / DAILY_GOAL) * 100)}%`;
}

function renderDashboard() {
  const lesson = getDailyLesson();
  $("#daily-title").textContent = lesson.title;
  $("#daily-mission").innerHTML = [
    {
      title: "1. Teoria",
      text: `Leia: ${lesson.pattern}. Foque em ${lesson.focus.slice(0, 2).join(" + ")}.`,
    },
    {
      title: "2. Atividade",
      text: "Complete pelo menos 3 exercicios. Erros entram na revisao.",
    },
    {
      title: "3. Voz",
      text: "Ouça e repita uma frase. Ritmo vem antes da perfeicao.",
    },
  ]
    .map(
      (item) => `
        <article class="mission-card">
          <strong>${item.title}</strong>
          <span>${item.text}</span>
        </article>
      `,
    )
    .join("");

  const skillGroups = [
    ["Grammar", ["to be", "simple present", "past", "conditionals"]],
    ["Vocabulary", ["vocabulary", "phrasal verbs", "idioms", "lexical precision"]],
    ["Speaking", ["pronunciation", "conversation", "shadowing", "fluency"]],
    ["Writing", ["essay", "email", "argument", "register"]],
  ];
  $("#skill-grid").innerHTML = skillGroups
    .map(([skill, keys]) => {
      const done = course.filter(
        (lesson) =>
          state.completedLessons.includes(lesson.id) &&
          keys.some((key) => [...lesson.focus, lesson.title, lesson.phase].join(" ").toLowerCase().includes(key)),
      ).length;
      const progress = Math.min(100, Math.round((done / Math.max(1, course.length / 3)) * 100));
      return `
        <article class="skill-card">
          <strong>${skill}</strong>
          <span>${keys.join(", ")}</span>
          <div class="skill-meter" aria-hidden="true"><span style="width:${progress}%"></span></div>
        </article>
      `;
    })
    .join("");
}

function renderCourse() {
  const filter = $("#level-filter");
  if (filter.options.length <= 1) {
    [...new Set(course.map((lesson) => lesson.level))].forEach((level) => {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = level;
      filter.append(option);
    });
  }

  const selectedLevel = filter.value;
  const query = normalize($("#course-search")?.value || "");
  const visibleLessons = (selectedLevel === "all" ? course : course.filter((lesson) => lesson.level === selectedLevel)).filter(
    (lesson) =>
      !query ||
      normalize([lesson.title, lesson.level, lesson.phase, lesson.focus.join(" "), lesson.words.join(" "), lesson.theory].join(" ")).includes(query),
  );
  $("#module-list").innerHTML = visibleLessons
    .map((lesson, index) => {
      const realIndex = course.findIndex((item) => item.id === lesson.id) + 1;
      const isComplete = state.completedLessons.includes(lesson.id);
      return `
        <button class="module-card ${lesson.id === currentLessonId ? "is-active" : ""} ${isComplete ? "is-complete" : ""}" data-lesson="${lesson.id}" type="button">
          <span class="module-number">${String(realIndex).padStart(2, "0")}</span>
          <span>
            <strong class="module-title">${lesson.title}</strong>
            <span class="module-meta">${lesson.phase} • ${lesson.duration} • ${lesson.exercises.length} atividades • ${lesson.focus.join(", ")}</span>
          </span>
          <span class="lesson-badge">${lesson.level}</span>
        </button>
      `;
    })
    .join("") || `<article class="mission-card"><strong>Nada encontrado</strong><span>Tente outro termo ou limpe os filtros da trilha.</span></article>`;
  renderLessonDetail();
}

function renderLessonDetail() {
  const lesson = getLesson();
  $("#lesson-detail").innerHTML = `
    <article class="lesson-detail">
      <p class="eyebrow">${lesson.level} • ${lesson.phase}</p>
      <h2>${lesson.title}</h2>
      <p><strong>${lesson.exercises.length} atividades nesta unidade.</strong> Treine com escolha, lacuna, traducao, ordem de frase, audio e escrita guiada.</p>
      <p>${lesson.theory}</p>
      <h3>Padrao central</h3>
      <p><strong>${lesson.pattern}</strong></p>
      <h3>O que estudar</h3>
      <ul>${lesson.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      <h3>Armadilha comum</h3>
      <p>${lesson.trap}</p>
      <h3>Exemplos</h3>
      <div class="example-grid">
        ${lesson.examples
          .map(([en, pt]) => `<span class="example-pill"><strong>${en}</strong><br>${pt}</span>`)
          .join("")}
      </div>
      <h3>Vocabulario desta licao</h3>
      <div class="example-grid">
        ${lesson.words.map((word) => `<button class="chip" data-word-jump="${word}" type="button">${word}</button>`).join("")}
      </div>
      <div class="lesson-actions">
        <button class="primary-button" data-start-lesson="${lesson.id}" type="button">Treinar esta licao</button>
        <button class="secondary-button" data-complete-lesson="${lesson.id}" type="button">Marcar como concluida</button>
      </div>
    </article>
  `;
}

function renderTheory() {
  const query = normalize($("#theory-search").value);
  const visibleTopics = theoryTopics.filter((topic) => {
    const haystack = normalize([topic.title, topic.level, topic.summary, topic.tags.join(" "), topic.points.join(" "), topic.example].join(" "));
    return !query || haystack.includes(query);
  });
  const wordMatches = query
    ? lexicon
        .filter((entry) =>
          normalize([entry.word, entry.meaning, entry.type, entry.tags.join(" "), (entry.forms || []).join(" "), entry.collocations].join(" ")).includes(query),
        )
        .slice(0, 6)
    : [];

  $("#theory-grid").innerHTML = [
    ...wordMatches.map(
      (entry) => `
        <article class="theory-card theory-word-card">
          <span>Dicionario • ${entry.level} • ${entry.type}</span>
          <h3>${entry.word}</h3>
          <p><strong>${entry.meaning}</strong></p>
          <p>${entry.example}<br>${entry.ptExample}</p>
          <p>Collocation: ${entry.collocations}</p>
          ${entry.forms?.length ? `<p>Formas: ${entry.forms.slice(0, 10).join(", ")}</p>` : ""}
        </article>
      `,
    ),
    ...visibleTopics.map(
      (topic) => `
        <article class="theory-card">
          <span>${topic.level} • ${topic.tags.join(", ")}</span>
          <h3>${topic.title}</h3>
          <p>${topic.summary}</p>
          <ul>${topic.points.map((point) => `<li>${point}</li>`).join("")}</ul>
          <p><strong>Exemplo:</strong> ${topic.example}</p>
        </article>
      `,
    ),
  ].join("");
}

function renderPracticeOptions() {
  const select = $("#practice-lesson");
  select.innerHTML = course
    .map((lesson) => `<option value="${lesson.id}">${lesson.level} • ${lesson.title} (${lesson.exercises.length})</option>`)
    .join("");
  select.value = currentLessonId;
}

function pickExercise(lesson) {
  const index = Math.floor(Math.random() * lesson.exercises.length);
  return { ...lesson.exercises[index], lessonId: lesson.id };
}

function renderExercise() {
  const lesson = getLesson($("#practice-lesson").value || currentLessonId);
  currentLessonId = lesson.id;
  state.currentLessonId = lesson.id;
  saveState();
  currentExercise = pickExercise(lesson);
  const stage = $("#exercise-stage");

  if (currentExercise.type === "choice") {
    stage.innerHTML = `
      <article class="exercise-card">
        <p class="eyebrow">${lesson.level} • escolha a resposta • deck ${lesson.exercises.length}</p>
        <h3>${currentExercise.prompt}</h3>
        <div class="option-grid">
          ${shuffle(currentExercise.options)
            .map((option) => `<button class="option-button" data-choice="${escapeHtml(option)}" type="button">${option}</button>`)
            .join("")}
        </div>
        <div class="feedback" id="exercise-feedback">Escolha uma alternativa.</div>
      </article>
    `;
    return;
  }

  if (currentExercise.type === "order") {
    stage.innerHTML = `
      <article class="exercise-card">
        <p class="eyebrow">${lesson.level} • organize a frase • deck ${lesson.exercises.length}</p>
        <h3>${currentExercise.prompt}</h3>
        <div class="answer-row" id="answer-row" aria-label="Resposta montada"></div>
        <div class="token-bank" id="token-bank">
          ${shuffle(currentExercise.tokens)
            .map((token) => `<button class="token-button" data-token="${escapeHtml(token)}" type="button">${token}</button>`)
            .join("")}
        </div>
        <div class="inline-controls">
          <button class="primary-button" id="check-order" type="button">Verificar</button>
          <button class="ghost-button" id="reset-order" type="button">Recomecar</button>
        </div>
        <div class="feedback" id="exercise-feedback">Toque nas palavras para montar a frase.</div>
      </article>
    `;
    return;
  }

  const isListening = currentExercise.type === "listen";
  const label = currentExercise.type === "fill" ? "complete a lacuna" : isListening ? "escuta" : "traducao";
  stage.innerHTML = `
    <article class="exercise-card">
      <p class="eyebrow">${lesson.level} • ${label} • deck ${lesson.exercises.length}</p>
      <h3>${isListening ? "Escreva o que voce ouviu." : currentExercise.prompt}</h3>
      ${isListening ? `<button class="secondary-button" id="play-listening" type="button">Ouvir frase</button>` : ""}
      ${currentExercise.hint ? `<p>Dica: ${currentExercise.hint}</p>` : ""}
      <input id="typed-answer" type="text" autocomplete="off" placeholder="Digite sua resposta em ingles" />
      <div class="inline-controls">
        <button class="primary-button" id="check-typed" type="button">Verificar</button>
        <button class="secondary-button" id="show-answer" type="button">Mostrar resposta</button>
      </div>
      <div class="feedback" id="exercise-feedback">Responda e confira.</div>
    </article>
  `;
}

function evaluateAnswer(userAnswer, expectedAnswer) {
  const user = normalize(userAnswer);
  const expected = normalize(expectedAnswer);
  if (!user) return { ok: false, score: 0 };
  if (user === expected) return { ok: true, score: 1 };
  const userWords = new Set(user.split(" "));
  const expectedWords = expected.split(" ");
  const matches = expectedWords.filter((word) => userWords.has(word)).length;
  const score = matches / Math.max(1, expectedWords.length);
  return { ok: score >= 0.82, score };
}

function completeExercise(ok) {
  const feedback = $("#exercise-feedback");
  const lesson = getLesson(currentExercise.lessonId);
  if (ok) {
    feedback.className = "feedback success";
    feedback.textContent = `Perfeito. +10 XP. ${currentExercise.explain || "A resposta esta correta."}`;
    addXp(10);
  } else {
    feedback.className = "feedback error";
    feedback.textContent = `Quase. Resposta esperada: ${currentExercise.answer}`;
    state.mistakes.unshift({
      prompt: currentExercise.prompt,
      answer: currentExercise.answer,
      lesson: lesson.title,
      date: todayKey(),
    });
    addToReview(currentExercise.answer);
    saveState();
  }
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function completeLesson(id) {
  if (!state.completedLessons.includes(id)) {
    state.completedLessons.push(id);
    addXp(35);
  }
  state.currentLessonId = id;
  saveState();
  renderAll();
}

function addToReview(text) {
  const normalized = normalize(text);
  const existing = state.reviewQueue.some((item) => normalize(item.word) === normalized);
  if (!existing) {
    const entry = lexicon.find((item) => normalize(item.word) === normalized) || {
      word: text,
      meaning: "Revise esta frase ou palavra.",
      level: getLesson().level,
      type: "custom",
      example: text,
      ptExample: "Item salvo a partir do treino.",
      tags: ["custom"],
      collocations: text,
    };
    state.reviewQueue.unshift({ ...entry, addedAt: Date.now(), difficulty: 1 });
    saveState();
  }
}

function markMastered(word) {
  if (!state.masteredWords.includes(word)) {
    state.masteredWords.push(word);
  }
  state.reviewQueue = state.reviewQueue.filter((item) => item.word !== word);
  saveState();
  renderStats();
}

function renderDictionary() {
  const query = normalize($("#dictionary-input").value);
  const results = lexicon
    .filter((entry) => {
      const haystack = normalize(
        [entry.word, entry.meaning, entry.type, entry.level, entry.tags.join(" "), (entry.forms || []).join(" "), entry.example, entry.collocations].join(" "),
      );
      const filterOk =
        selectedDictionaryFilter === "all" ||
        entry.tags.includes(selectedDictionaryFilter) ||
        entry.type.includes(selectedDictionaryFilter);
      return filterOk && (!query || haystack.includes(query));
    })
    .slice(0, query ? 90 : 36);

  $("#dictionary-stats").innerHTML = `
    <span>${lexicon.length} entradas-base</span>
    <span>${lexicon.reduce((total, entry) => total + (entry.forms?.length || 0), 0)} formas derivadas</span>
    <span>${results.length} resultados agora</span>
  `;

  if (!results.length) {
    $("#dictionary-results").innerHTML = renderWordAnalyzer(query);
    return;
  }

  $("#dictionary-results").innerHTML = results.map(renderWordCard).join("");
}

function renderWordCard(entry) {
  const mastered = state.masteredWords.includes(entry.word);
  return `
    <article class="word-card">
      <div>
        <h3>${entry.word}</h3>
        <span>${entry.level} • ${entry.type}</span>
      </div>
      <p class="meaning">${entry.meaning}</p>
      <p class="word-example"><strong>${entry.example}</strong><br>${entry.ptExample}</p>
      <div class="word-meta">
        ${entry.tags.map((tag) => `<span class="word-tag">${tag}</span>`).join("")}
      </div>
      ${
        entry.forms?.length
          ? `<p class="word-example">Formas: ${entry.forms.slice(0, 8).join(", ")}</p>`
          : ""
      }
      <p class="word-example">Collocation: ${entry.collocations}</p>
      <div class="word-actions">
        <button class="secondary-button" data-speak="${escapeHtml(entry.word)}" type="button">Ouvir</button>
        <button class="ghost-button" data-review-word="${escapeHtml(entry.word)}" type="button">${mastered ? "Dominada" : "Revisar"}</button>
      </div>
    </article>
  `;
}

function renderWordAnalyzer(query) {
  const word = escapeHtml(query || "sua palavra");
  const hints = [];
  if (query.endsWith("ly")) hints.push("Termina em -ly: muitas vezes e adverbio, como quickly ou clearly.");
  if (query.endsWith("tion") || query.endsWith("sion")) hints.push("Termina em -tion/-sion: geralmente substantivo abstrato, como decision.");
  if (query.endsWith("able") || query.endsWith("ible")) hints.push("Termina em -able/-ible: costuma indicar capacidade, como reliable.");
  if (query.startsWith("un")) hints.push("Comeca com un-: muitas vezes nega a ideia, como unlikely.");
  if (query.includes(" ")) hints.push("Tem espaco: pode ser phrase, idiom ou phrasal verb. Pesquise tambem o verbo principal.");
  if (!hints.length) hints.push("Nao encontrei na base local. Tente a forma base do verbo, singular do substantivo ou uma parte da expressao.");

  return `
    <article class="word-card">
      <h3>${word}</h3>
      <p class="meaning">Nao encontrei uma entrada exata na base deste app.</p>
      <p class="word-example">${hints.join(" ")}</p>
      <p class="word-example">Dica de estudo: anote a palavra, procure uma frase real com ela e salve uma collocation.</p>
    </article>
  `;
}

function renderReview() {
  const area = $("#review-area");
  if (!state.reviewQueue.length) {
    area.innerHTML = `
      <article class="flashcard">
        <p class="eyebrow">Fila vazia</p>
        <h3>Sem flashcards</h3>
        <p>Marque palavras no dicionario ou erre atividades para criar uma fila de revisao.</p>
        <button class="primary-button" id="seed-review-inline" type="button">Adicionar palavras essenciais</button>
      </article>
    `;
    return;
  }
  reviewIndex = Math.min(reviewIndex, state.reviewQueue.length - 1);
  const card = state.reviewQueue[reviewIndex];
  area.innerHTML = `
    <article class="flashcard">
      <p class="eyebrow">${card.level || "Review"} • ${reviewIndex + 1} de ${state.reviewQueue.length}</p>
      <h3>${card.word}</h3>
      <p id="flashcard-meaning">Clique em revelar para ver significado e exemplo.</p>
      <div class="inline-controls">
        <button class="secondary-button" id="reveal-card" type="button">Revelar</button>
        <button class="ghost-button" data-speak="${escapeHtml(card.word)}" type="button">Ouvir</button>
        <button class="primary-button" id="card-mastered" type="button">Dominei</button>
        <button class="ghost-button" id="card-hard" type="button">Dificil</button>
      </div>
    </article>
  `;
}

function seedReview() {
  const essential = ["although", "however", "figure out", "available", "deadline", "compelling", "subtle", "break the ice"];
  essential.forEach(addToReview);
  renderReview();
}

function chooseWritingPrompt() {
  currentWritingPrompt = writingPrompts[Math.floor(Math.random() * writingPrompts.length)];
  $("#writing-prompt").innerHTML = `
    <p class="eyebrow">${currentWritingPrompt.level}</p>
    <h3>${currentWritingPrompt.title}</h3>
    <p>${currentWritingPrompt.prompt}</p>
    <p><strong>Metas:</strong> ${currentWritingPrompt.goals.join(" • ")}</p>
  `;
  $("#writing-feedback").textContent = "Escreva em ingles e clique em analisar.";
}

function analyzeWriting() {
  const text = $("#writing-answer").value.trim();
  if (!text) {
    $("#writing-feedback").textContent = "Escreva algumas frases antes de analisar.";
    return;
  }
  const words = normalize(text).split(" ").filter(Boolean);
  const sentences = text.split(/[.!?]+/).filter((part) => part.trim().length > 0);
  const connectors = [
    "because",
    "although",
    "however",
    "therefore",
    "moreover",
    "whereas",
    "nevertheless",
    "unless",
    "despite",
  ].filter((word) => normalize(text).includes(word));
  const advancedWords = lexicon.filter((entry) => ["B2", "C1", "C2", "C2+"].includes(entry.level) && normalize(text).includes(normalize(entry.word)));
  const uniqueRatio = new Set(words).size / Math.max(1, words.length);
  const longSentences = sentences.filter((sentence) => sentence.trim().split(/\s+/).length > 28).length;

  let level = "A1";
  if (words.length > 90 && connectors.length >= 2) level = "B1";
  if (words.length > 130 && connectors.length >= 3 && advancedWords.length >= 2) level = "B2";
  if (words.length > 170 && connectors.length >= 4 && advancedWords.length >= 4) level = "C1";
  if (words.length > 220 && advancedWords.length >= 7 && uniqueRatio > 0.62) level = "C2";

  const suggestions = [];
  if (connectors.length < 2) suggestions.push("Adicione conectores como although, however, therefore ou moreover.");
  if (words.length < 80) suggestions.push("Desenvolva mais exemplos concretos para aumentar profundidade.");
  if (uniqueRatio < 0.48) suggestions.push("Ha muita repeticao. Troque algumas palavras por sinonimos mais especificos.");
  if (longSentences > 1) suggestions.push("Divida frases muito longas para ganhar clareza.");
  if (!/[.!?]$/.test(text)) suggestions.push("Finalize o texto com pontuacao clara.");
  if (!suggestions.length) suggestions.push("Boa estrutura. Agora tente reescrever com vocabulario mais preciso e menos traducao literal.");

  $("#writing-feedback").innerHTML = `
    <div class="quality-grid">
      <span class="quality-item"><strong>${words.length}</strong> palavras</span>
      <span class="quality-item"><strong>${sentences.length}</strong> frases</span>
      <span class="quality-item"><strong>${connectors.length}</strong> conectores</span>
      <span class="quality-item"><strong>${level}</strong> estimativa</span>
    </div>
    <p><strong>Conectores encontrados:</strong> ${connectors.length ? connectors.join(", ") : "nenhum ainda"}</p>
    <p><strong>Vocabulario avancado:</strong> ${advancedWords.slice(0, 8).map((entry) => entry.word).join(", ") || "adicione palavras B2+"}</p>
    <p><strong>Proximos ajustes:</strong> ${suggestions.join(" ")}</p>
  `;
  addXp(Math.min(20, Math.max(5, Math.round(words.length / 15))));
}

function chooseSpeechPhrase() {
  currentSpeechPhrase = speechPhrases[Math.floor(Math.random() * speechPhrases.length)];
  $("#speech-card").innerHTML = `
    <p class="eyebrow">Shadowing</p>
    <h3>${currentSpeechPhrase}</h3>
    <p>Primeiro ouca. Depois repita tentando copiar ritmo, pausas e palavras fortes.</p>
  `;
  $("#speech-feedback").textContent = "Pronto para ouvir.";
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function recordSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    $("#speech-feedback").innerHTML =
      "Seu navegador nao liberou reconhecimento de voz aqui. Ainda da para treinar: ouca, repita em voz alta e grave pelo celular para comparar.";
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  $("#speech-feedback").textContent = "Ouvindo... fale a frase em ingles.";
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const result = evaluateAnswer(transcript, currentSpeechPhrase);
    $("#speech-feedback").innerHTML = `
      <p><strong>Voce disse:</strong> ${escapeHtml(transcript)}</p>
      <p><strong>Frase alvo:</strong> ${currentSpeechPhrase}</p>
      <p>${result.ok ? "Muito bom. Ritmo e palavras principais batem." : "Tente de novo mais devagar, copiando as palavras fortes."}</p>
    `;
    if (result.ok) addXp(12);
  };
  recognition.onerror = () => {
    $("#speech-feedback").textContent = "Nao consegui capturar a voz. Confira permissao do microfone e tente novamente.";
  };
  recognition.start();
}

function renderAI() {
  if (!aiMessages.length) {
    aiMessages = [
      {
        role: "bot",
        meta: "Tutor local • offline",
        text:
          "Sou uma IA tutora local feita para este curso. Agora eu analiso intencao, procuro palavras por aproximacao, corrijo erros comuns, crio quizzes, simulo conversa e monto planos adaptados ao seu progresso. Nao uso API paga.",
      },
    ];
  }
  $("#ai-chat").innerHTML = aiMessages.map(renderAIMessage).join("");
  $("#ai-chat").scrollTop = $("#ai-chat").scrollHeight;
  renderAIMemory();
  renderAIInsight();
}

function renderAIMessage(message) {
  const meta = message.meta ? `<div class="ai-message-meta"><span>${escapeHtml(message.meta)}</span></div>` : "";
  return `<article class="ai-message ${message.role}">${meta}${formatAIText(message.text)}</article>`;
}

function formatAIText(text) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n- /g, "<br>- ")
    .replace(/\n/g, "<br>");
}

function sendAIMessage(text = $("#ai-input").value.trim()) {
  if (!text) return;
  aiMessages.push({ role: "user", meta: aiMode === "auto" ? "Auto" : aiMode, text });
  $("#ai-input").value = "";
  const result = generateLocalTutorAnswer(text);
  aiMessages.push({ role: "bot", meta: result.meta, text: result.text });
  renderAI();
  addXp(4);
}

function generateLocalTutorAnswer(input) {
  const analysis = analyzeTutorInput(input);
  aiLastAnalysis = analysis;
  const forced = aiMode !== "auto" ? aiMode : "";
  const intent = forced || analysis.intent;
  const mentionedWord = analysis.wordMatches[0];
  const currentLesson = getLesson();

  if (intent === "correct") {
    return { meta: `Corretor • ${analysis.estimatedLevel}`, text: correctWithLocalRules(input, mentionedWord, analysis) };
  }

  if (intent === "quiz") {
    return { meta: `Quiz • ${analysis.targetLevel}`, text: buildLocalQuiz(input, mentionedWord, analysis) };
  }

  if (intent === "plan") {
    return { meta: `Plano • ${analysis.studyMinutes} min/dia`, text: buildStudyPlan(currentLesson, analysis) };
  }

  if (intent === "chat") {
    return { meta: `Conversa • ${analysis.targetLevel}`, text: buildConversationPractice(input, analysis) };
  }

  if (intent === "translate") {
    return { meta: "Traducao local", text: buildLocalTranslation(input, analysis) };
  }

  if (intent === "next") {
    return { meta: "Proxima unidade", text: buildNextLessonAdvice(analysis) };
  }

  if (intent === "explain" && mentionedWord) {
    return { meta: `Lexico • ${mentionedWord.level}`, text: explainWordForAI(mentionedWord, analysis) };
  }

  if (analysis.topicMatches.length) {
    return { meta: `Teoria • ${analysis.topicMatches[0].level}`, text: explainTopicForAI(analysis.topicMatches[0], analysis) };
  }

  if (mentionedWord) {
    return { meta: `Lexico • ${mentionedWord.level}`, text: explainWordForAI(mentionedWord, analysis) };
  }

  return { meta: "Tutor adaptativo", text: buildFallbackTutorAnswer(currentLesson, analysis) };
}

function analyzeTutorInput(input) {
  const query = normalize(input);
  const tokens = query.split(" ").filter((token) => token.length > 1);
  const scores = {
    correct: scoreIntent(tokens, query, ["corrija", "corrigir", "correct", "erro", "wrong", "grammar", "frase", "sentence", "revise"]),
    quiz: scoreIntent(tokens, query, ["quiz", "teste", "desafio", "pergunta", "atividade", "exercise", "treino", "pratica"]),
    plan: scoreIntent(tokens, query, ["plano", "rota", "cronograma", "fluente", "fluencia", "estudar", "study", "rotina", "dias"]),
    chat: scoreIntent(tokens, query, ["conversa", "converse", "dialogo", "roleplay", "simule", "entrevista", "interview", "speaking"]),
    translate: scoreIntent(tokens, query, ["traduza", "traduzir", "translate", "significa", "meaning"]),
    next: scoreIntent(tokens, query, ["proxima", "proximo", "next", "lesson", "licao", "unidade", "recomende"]),
    explain: scoreIntent(tokens, query, ["explique", "explica", "explain", "como usar", "use", "diferença", "diferenca"]),
  };
  let intent = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  if (scores[intent] === 0 && looksLikeEnglishSentence(input)) intent = "correct";
  if (scores[intent] === 0) intent = "explain";

  const targetLevel = detectRequestedLevel(input) || getRank();
  const wordMatches = findLexiconMatches(query, 6);
  const topicMatches = theoryTopics
    .map((topic) => ({
      topic,
      score: textScore(query, [topic.title, topic.level, topic.summary, topic.tags.join(" "), topic.points.join(" ")].join(" ")),
    }))
    .filter((item) => item.score > 0.12)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((item) => item.topic);
  const estimatedLevel = estimateTextLevel(input);
  const studyMinutes = detectStudyMinutes(input) || 60;
  const mood = detectMood(query);

  return {
    input,
    query,
    tokens,
    scores,
    intent,
    targetLevel,
    wordMatches,
    topicMatches,
    estimatedLevel,
    studyMinutes,
    mood,
  };
}

function scoreIntent(tokens, query, keywords) {
  return keywords.reduce((score, keyword) => {
    const normalized = normalize(keyword);
    if (query.includes(normalized)) return score + (normalized.includes(" ") ? 3 : 2);
    if (tokens.some((token) => levenshtein(token, normalized) <= 1 && normalized.length > 4)) return score + 1;
    return score;
  }, 0);
}

function detectRequestedLevel(input) {
  const match = input.match(/\b(A0|A1|A2|B1|B2|C1|C2\+?|c2\+?)\b/i);
  if (!match) return "";
  const level = match[0].toUpperCase();
  return level === "C2+" ? "C2+" : level;
}

function detectStudyMinutes(input) {
  const minutes = input.match(/(\d+)\s*(min|minutos|minutes)/i);
  if (minutes) return Number(minutes[1]);
  const hours = input.match(/(\d+)\s*(h|hora|horas|hour|hours)/i);
  if (hours) return Number(hours[1]) * 60;
  return 0;
}

function detectMood(query) {
  if (/perdido|confuso|dificil|travado|ansioso|cansado/.test(query)) return "precisa de clareza e passos pequenos";
  if (/rapido|urgente|hoje|agora/.test(query)) return "quer eficiencia";
  if (/avancado|fluente|nativo|c2/.test(query)) return "quer profundidade";
  return "estudo normal";
}

function looksLikeEnglishSentence(text) {
  return /\b(I|you|he|she|we|they|am|is|are|have|has|do|does|did|the|a|an|to|for|with|because)\b/i.test(text);
}

function estimateTextLevel(text) {
  const words = normalize(text).split(" ").filter(Boolean);
  const advanced = lexicon.filter((entry) => ["B2", "C1", "C2", "C2+"].includes(entry.level) && words.includes(normalize(entry.word))).length;
  const connectors = ["although", "however", "therefore", "whereas", "nevertheless", "despite", "unless"].filter((word) =>
    words.includes(word),
  ).length;
  if (words.length > 80 && advanced >= 5 && connectors >= 3) return "C1";
  if (words.length > 45 && advanced >= 3) return "B2";
  if (words.length > 20 || connectors >= 1) return "B1";
  if (words.length > 8) return "A2";
  return "A1";
}

function findBestLexiconMatch(query) {
  return findLexiconMatches(query, 1)[0];
}

function findLexiconMatches(query, limit = 5) {
  const tokens = query.split(" ").filter((token) => token.length > 2);
  return lexicon
    .map((entry) => ({ entry, score: lexiconScore(entry, query, tokens) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.word.length - b.entry.word.length)
    .slice(0, limit)
    .map((item) => item.entry);
}

function lexiconScore(entry, query, tokens) {
  const word = normalize(entry.word);
  const forms = (entry.forms || []).map(normalize);
  let score = 0;
  if (query === word) score += 12;
  if (query.includes(word) && word.length > 2) score += Math.min(8, word.length / 2);
  if (forms.some((form) => query.includes(form))) score += 7;
  tokens.forEach((token) => {
    if (token === word) score += 8;
    if (forms.includes(token)) score += 7;
    if (word.includes(token) && token.length > 4) score += 3;
    if (levenshtein(token, word) <= 1 && word.length > 4) score += 4;
    if (normalize(entry.meaning).includes(token)) score += 2;
    if (normalize(entry.collocations).includes(token)) score += 2;
  });
  return score;
}

function textScore(query, text) {
  const tokens = query.split(" ").filter((token) => token.length > 2);
  const haystack = normalize(text);
  if (!tokens.length) return 0;
  const hits = tokens.filter((token) => haystack.includes(token)).length;
  return hits / tokens.length;
}

function levenshtein(a, b) {
  if (Math.abs(a.length - b.length) > 3) return 99;
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
  }
  return dp[a.length][b.length];
}

function explainWordForAI(entry, analysis = aiLastAnalysis || {}) {
  const related = lexicon
    .filter((item) => item.word !== entry.word && item.tags.some((tag) => entry.tags.includes(tag)))
    .slice(0, 5)
    .map((item) => item.word);
  const register = ["C1", "C2", "C2+"].includes(entry.level) ? "mais formal/avancado" : "comum e util";
  const contrast = related[0] ? `Compare com "${related[0]}": veja a diferenca pelo contexto, nao so pela traducao.` : "Compare com palavras da mesma familia quando aparecerem.";
  return `**${entry.word}** (${entry.level}, ${entry.type})\nSignificado: ${entry.meaning}\nRegistro: ${register}\nComo usar: ${entry.example}\nTraducao do exemplo: ${entry.ptExample}\nCollocation forte: ${entry.collocations}\n${entry.forms?.length ? `Formas: ${entry.forms.slice(0, 10).join(", ")}\n` : ""}Palavras relacionadas: ${related.join(", ") || "nenhuma proxima na base"}\nDica inteligente: ${contrast}\nTreino ${analysis.targetLevel || getRank()}: escreva 1 frase pessoal com "${entry.word}", depois reescreva usando um conector como although/however/because.`;
}

function correctWithLocalRules(input, mentionedWord, analysis = aiLastAnalysis || {}) {
  const original = extractTextToCorrect(input);
  const suggestions = [];
  let corrected = original;
  const replacements = [
    [/I have (\d+) years old/gi, "I am $1 years old", "Idade em ingles usa be: I am 25 years old."],
    [/I have (\d+) years\b/gi, "I am $1", "Para idade curta, diga I am 25."],
    [/\b(she|he|it) don't\b/gi, "$1 doesn't", "Terceira pessoa usa doesn't."],
    [/does (she|he|it) (\w+)s\b/gi, "does $1 $2", "Depois de does, o verbo principal volta para a forma base."],
    [/did you went/gi, "did you go", "Depois de did, use verbo base: go."],
    [/I am agree/gi, "I agree", "Agree e verbo, entao nao precisa de am."],
    [/I am with doubt/gi, "I have a question", "Em ingles natural, use I have a question."],
    [/\bactually\b(?=.*\b(now|today|currently|working)\b)/gi, "currently", "Actually = na verdade. Atualmente = currently."],
    [/depend of/gi, "depend on", "A collocation correta e depend on."],
    [/listen music/gi, "listen to music", "Listen pede to antes do objeto."],
    [/married with/gi, "married to", "A collocation correta e married to."],
    [/discuss about/gi, "discuss", "Discuss ja significa discutir sobre; nao use about depois."],
    [/explain me/gi, "explain to me", "Explain pede to antes da pessoa."],
    [/make a question/gi, "ask a question", "Perguntas sao ask a question, nao make a question."],
    [/say me/gi, "tell me", "Para 'me diga', use tell me."],
    [/I need learn/gi, "I need to learn", "Need + to + verbo."],
    [/I want learn/gi, "I want to learn", "Want + to + verbo."],
  ];
  replacements.forEach(([pattern, replacement, reason]) => {
    if (pattern.test(corrected)) {
      corrected = corrected.replace(pattern, replacement);
      suggestions.push(reason);
    }
  });
  const quality = inspectWritingQuality(corrected);
  suggestions.push(...quality.suggestions);
  if (mentionedWord) suggestions.push(`Boa oportunidade de usar "${mentionedWord.word}" em contexto: ${mentionedWord.example}`);
  if (!suggestions.length) {
    suggestions.push("Nao encontrei um erro classico na minha base local. Verifique ordem: sujeito + verbo + complemento, tempo verbal e preposicoes.");
  }
  return `**Correcao inteligente local**\nOriginal: ${original || input}\nSugestao: ${corrected || original || input}\nNivel estimado do texto: ${analysis.estimatedLevel || estimateTextLevel(original)}\nPontuacao local: ${quality.score}/100\n- ${suggestions.slice(0, 8).join("\n- ")}\nReescrita mais natural: ${polishSentence(corrected || original || input)}`;
}

function extractTextToCorrect(input) {
  return input
    .replace(/^(corrija|corrigir|correct|revise|arrume|melhore)\s*:?\s*/i, "")
    .replace(/^minha frase\s*:?\s*/i, "")
    .trim();
}

function inspectWritingQuality(text) {
  const words = normalize(text).split(" ").filter(Boolean);
  const suggestions = [];
  let score = 72;
  const connectors = ["because", "although", "however", "therefore", "whereas", "unless", "despite"].filter((word) => words.includes(word));
  const repeated = findRepeatedWords(words);
  if (words.length < 6) {
    score -= 12;
    suggestions.push("A frase esta curta. Para praticar fluencia, acrescente motivo, tempo ou exemplo.");
  }
  if (!connectors.length && words.length > 12) {
    score -= 8;
    suggestions.push("Adicione um conector para deixar a ideia mais adulta: because, although, however ou therefore.");
  }
  if (repeated.length) {
    score -= 6;
    suggestions.push(`Evite repeticao se possivel: ${repeated.slice(0, 4).join(", ")}.`);
  }
  if (!/[.!?]$/.test(text.trim())) {
    score -= 4;
    suggestions.push("Finalize com pontuacao.");
  }
  if (/[A-Z]{3,}/.test(text)) {
    score -= 3;
    suggestions.push("Evite muitas letras maiusculas em escrita normal.");
  }
  return { score: Math.max(35, Math.min(98, score)), suggestions };
}

function findRepeatedWords(words) {
  const counts = {};
  words.forEach((word) => {
    if (word.length > 4) counts[word] = (counts[word] || 0) + 1;
  });
  return Object.entries(counts)
    .filter(([, count]) => count > 1)
    .map(([word]) => word);
}

function polishSentence(text) {
  const trimmed = text.trim();
  if (!trimmed) return text;
  const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  return /[.!?]$/.test(capitalized) ? capitalized : `${capitalized}.`;
}

function buildLocalQuiz(input, mentionedWord, analysis = aiLastAnalysis || {}) {
  const level = analysis.targetLevel || getRank();
  const topicWord = mentionedWord?.word || analysis.wordMatches?.[0]?.word || "";
  const targetLesson =
    course.find((item) => item.level.toUpperCase() === level.toUpperCase() && topicWord && normalize(item.words.join(" ")).includes(normalize(topicWord))) ||
    course.find((item) => item.level.toUpperCase() === level.toUpperCase() && item.exercises.length) ||
    getLesson();
  const lesson = targetLesson;
  const words = mentionedWord ? [mentionedWord.word, ...lesson.words] : lesson.words;
  const picked = shuffle(lesson.exercises).slice(0, 5);
  const answerKey = picked.map((exercise, index) => `${index + 1}. ${exercise.answer}`).join("\n");
  return `**Quiz inteligente ${lesson.level}: ${lesson.title}**\n1. Traduza: "${lesson.examples[0][1]}"\n2. Complete: ${lesson.examples[0][0].replace(words[0] || "English", "___")}\n3. Escolha a palavra mais natural: ${words.slice(0, 4).join(" / ")}\n4. Reescreva usando although ou however: ${lesson.examples[0][0]}\n5. Fale em voz alta: ${lesson.examples[1]?.[0] || lesson.examples[0][0]}\n6. Explique em portugues a diferenca entre: ${words.slice(0, 2).join(" x ")}\n7. Crie uma frase pessoal com: ${words[2] || "practice"}\n8. Mini deck da unidade:\n- ${picked.map((exercise) => exercise.prompt).join("\n- ")}\n\n**Gabarito base**\n${answerKey}\nMe mande suas respostas que eu corrijo pelo modo Corretor.`;
}

function buildStudyPlan(lesson, analysis = aiLastAnalysis || {}) {
  const minutes = analysis.studyMinutes || 60;
  const blocks = [
    ["Teoria", Math.max(8, Math.round(minutes * 0.22)), lesson.title],
    ["Treino ativo", Math.max(12, Math.round(minutes * 0.34)), `faca ${Math.min(12, lesson.exercises.length)} atividades`],
    ["Dicionario", Math.max(6, Math.round(minutes * 0.16)), `pesquise ${lesson.words.slice(0, 5).join(", ")}`],
    ["Fala", Math.max(6, Math.round(minutes * 0.14)), "shadowing com 3 frases"],
    ["Escrita", Math.max(6, Math.round(minutes * 0.14)), "escreva e mande para a IA corrigir"],
  ];
  const completed = state.completedLessons.length;
  const pace = completed < 5 ? "base solida e repeticao" : completed < 35 ? "volume e consistencia" : "precisao e naturalidade";
  return `**Plano local adaptativo (${minutes} min/dia)**\nSeu foco agora: ${pace}.\n- ${blocks.map(([name, time, task]) => `${time} min ${name}: ${task}`).join("\n- ")}\n\n**Ciclo semanal**\n- Segunda/quarta/sexta: trilha + atividades.\n- Terca/quinta: dicionario + escrita corrigida.\n- Sabado: conversa simulada na IA + pronuncia.\n- Domingo: revisao espacada e mini quiz.\n\n**Meta de hoje**\nUnidade: ${lesson.level} - ${lesson.title}\nPalavras: ${lesson.words.slice(0, 8).join(", ")}\nEntrega: 1 paragrafo de 80-120 palavras usando pelo menos 2 palavras novas.`;
}

function buildConversationPractice(input, analysis = aiLastAnalysis || {}) {
  const level = analysis.targetLevel || getRank();
  const situations = [
    ["entrevista", "job interview", "Tell me about a challenge you solved."],
    ["viagem", "airport conversation", "Could you help me find my gate?"],
    ["reuniao", "business meeting", "I think we should consider another approach."],
    ["casual", "small talk", "What do you usually do after work?"],
  ];
  const selected = situations.find(([key]) => analysis.query.includes(key)) || situations[0];
  return `**Simulacao de conversa (${level})**\nCenario: ${selected[1]}\nEu começo:\n"${selected[2]}"\n\nResponda em ingles com 2-4 frases. Depois eu vou:\n- corrigir gramatica,\n- sugerir uma versao mais natural,\n- aumentar o nivel da sua resposta,\n- dar uma pergunta de follow-up.`;
}

function buildLocalTranslation(input, analysis = aiLastAnalysis || {}) {
  const word = analysis.wordMatches[0];
  if (word) return explainWordForAI(word, analysis);
  const cleaned = input.replace(/^(traduza|traduzir|translate|o que significa|what means)\s*:?\s*/i, "").trim();
  if (!cleaned) return "Digite a palavra ou frase que voce quer traduzir. Ex.: traduza 'however'.";
  const partial = findLexiconMatches(cleaned, 5);
  if (partial.length) return partial.map((entry) => `**${entry.word}**: ${entry.meaning}\nEx.: ${entry.example}`).join("\n\n");
  return `Nao achei traducao exata na base local para "${cleaned}". Tente a palavra base, sem plural/conjugacao, ou mande a frase inteira para eu analisar por partes.`;
}

function buildNextLessonAdvice(analysis = aiLastAnalysis || {}) {
  const next = getDailyLesson();
  const related = analysis.wordMatches.slice(0, 3).map((entry) => entry.word);
  return `**Proxima unidade recomendada:** ${next.level} - ${next.title}\n- Foco: ${next.focus.join(", ")}\n- Teoria: ${next.pattern}\n- Treino: ${next.exercises.length} atividades\n- Palavras-chave: ${next.words.slice(0, 8).join(", ")}\n${related.length ? `- Conexao com sua pergunta: ${related.join(", ")}` : ""}\nComece com 5 atividades e depois peça: "corrija minhas respostas".`;
}

function explainTopicForAI(topic, analysis = aiLastAnalysis || {}) {
  const relatedWords = lexicon
    .filter((entry) => topic.tags.some((tag) => entry.tags.includes(tag) || normalize(entry.word).includes(normalize(tag))))
    .slice(0, 8)
    .map((entry) => entry.word);
  return `**${topic.title}** (${topic.level})\n${topic.summary}\n- ${topic.points.slice(0, 5).join("\n- ")}\nExemplo: ${topic.example}\nPalavras uteis: ${relatedWords.join(", ") || "revise os exemplos da unidade"}\nTreino: escreva 3 frases nesse tema no nivel ${analysis.targetLevel || topic.level}.`;
}

function buildFallbackTutorAnswer(lesson, analysis = aiLastAnalysis || {}) {
  const bestWords = analysis.wordMatches.slice(0, 3).map((entry) => entry.word);
  return `Eu entendi sua intencao como **${analysis.intent}**, nivel alvo **${analysis.targetLevel}**.\nPosso responder melhor se voce pedir assim:\n- "corrija: [sua frase em ingles]"\n- "explique [palavra] com exemplos C1"\n- "crie quiz B2 sobre phrasal verbs"\n- "simule uma conversa de entrevista"\n\nAgora, pelo seu contexto, eu recomendo estudar **${lesson.title}**.\nPalavras uteis: ${(bestWords.length ? bestWords : lesson.words.slice(0, 5)).join(", ")}.`;
}

function renderAIMemory() {
  const lesson = getLesson();
  $("#ai-memory").innerHTML = `
    <h3>Contexto atual</h3>
    <p><strong>Nivel estimado:</strong> ${getRank()}</p>
    <p><strong>Unidade:</strong> ${lesson.level} - ${lesson.title}</p>
    <p><strong>Modo:</strong> ${aiMode}</p>
    <p><strong>Base:</strong> ${lexicon.length} entradas + formas pesquisaveis</p>
  `;
}

function renderAIInsight() {
  const insight = aiLastAnalysis;
  if (!insight) {
    $("#ai-insight").innerHTML = `
      <h3>Leitura da IA</h3>
      <p>Eu detecto intencao, nivel alvo, palavra principal, topicos proximos e tipo de treino.</p>
    `;
    $("#ai-brain-score").textContent = "Intent + Lexicon";
    return;
  }
  $("#ai-brain-score").textContent = `${insight.intent} / ${insight.targetLevel}`;
  $("#ai-insight").innerHTML = `
    <h3>Leitura da IA</h3>
    <p><strong>Intencao:</strong> ${insight.intent}</p>
    <p><strong>Nivel alvo:</strong> ${insight.targetLevel}</p>
    <p><strong>Texto:</strong> ${insight.estimatedLevel}</p>
    <p><strong>Palavras:</strong> ${insight.wordMatches.slice(0, 4).map((entry) => entry.word).join(", ") || "nenhuma"}</p>
  `;
}

function renderAll() {
  renderStats();
  renderDashboard();
  renderCourse();
  renderTheory();
  renderPracticeOptions();
  renderDictionary();
  renderReview();
  renderAI();
}

document.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-view]");
  if (navButton) {
    setView(navButton.dataset.view);
    return;
  }

  const jump = event.target.closest("[data-jump]");
  if (jump) {
    setView(jump.dataset.jump);
    return;
  }

  const lessonButton = event.target.closest("[data-lesson]");
  if (lessonButton) {
    currentLessonId = lessonButton.dataset.lesson;
    state.currentLessonId = currentLessonId;
    saveState();
    renderCourse();
    return;
  }

  const startLesson = event.target.closest("[data-start-lesson]");
  if (startLesson) {
    currentLessonId = startLesson.dataset.startLesson;
    $("#practice-lesson").value = currentLessonId;
    setView("practice");
    return;
  }

  const completeLessonButton = event.target.closest("[data-complete-lesson]");
  if (completeLessonButton) {
    completeLesson(completeLessonButton.dataset.completeLesson);
    return;
  }

  const wordJump = event.target.closest("[data-word-jump]");
  if (wordJump) {
    $("#dictionary-input").value = wordJump.dataset.wordJump;
    setView("dictionary");
    renderDictionary();
    return;
  }

  const choice = event.target.closest("[data-choice]");
  if (choice && currentExercise) {
    const ok = choice.dataset.choice === currentExercise.answer;
    $$(".option-button").forEach((button) => {
      button.disabled = true;
      if (button.dataset.choice === currentExercise.answer) button.classList.add("is-correct");
      if (button === choice && !ok) button.classList.add("is-wrong");
    });
    completeExercise(ok);
    return;
  }

  const token = event.target.closest("[data-token]");
  if (token) {
    const answerRow = $("#answer-row");
    const chip = document.createElement("button");
    chip.className = "answer-chip";
    chip.type = "button";
    chip.textContent = token.dataset.token;
    chip.dataset.answerToken = token.dataset.token;
    chip.addEventListener("click", () => {
      token.hidden = false;
      chip.remove();
    });
    answerRow.append(chip);
    token.hidden = true;
    return;
  }

  if (event.target.id === "check-order") {
    const answer = $$(".answer-chip").map((chip) => chip.dataset.answerToken).join(" ");
    completeExercise(evaluateAnswer(answer, currentExercise.answer).ok);
    return;
  }

  if (event.target.id === "reset-order") {
    renderExercise();
    return;
  }

  if (event.target.id === "check-typed") {
    completeExercise(evaluateAnswer($("#typed-answer").value, currentExercise.answer).ok);
    return;
  }

  if (event.target.id === "show-answer") {
    $("#exercise-feedback").className = "feedback";
    $("#exercise-feedback").textContent = `Resposta: ${currentExercise.answer}`;
    addToReview(currentExercise.answer);
    return;
  }

  if (event.target.id === "play-listening") {
    speak(currentExercise.answer);
    return;
  }

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    speak(speakButton.dataset.speak);
    return;
  }

  const reviewButton = event.target.closest("[data-review-word]");
  if (reviewButton) {
    addToReview(reviewButton.dataset.reviewWord);
    renderDictionary();
    return;
  }

  if (event.target.id === "seed-review" || event.target.id === "seed-review-inline") {
    seedReview();
    return;
  }

  if (event.target.id === "reveal-card") {
    const card = state.reviewQueue[reviewIndex];
    $("#flashcard-meaning").innerHTML = `<strong>${card.meaning}</strong><br>${card.example}<br>${card.ptExample}`;
    return;
  }

  if (event.target.id === "card-mastered") {
    const card = state.reviewQueue[reviewIndex];
    markMastered(card.word);
    renderReview();
    addXp(8);
    return;
  }

  if (event.target.id === "card-hard") {
    const card = state.reviewQueue.splice(reviewIndex, 1)[0];
    card.difficulty = (card.difficulty || 1) + 1;
    state.reviewQueue.push(card);
    saveState();
    renderReview();
    return;
  }
});

$("#level-filter").addEventListener("change", renderCourse);
$("#course-search").addEventListener("input", renderCourse);
$("#theory-search").addEventListener("input", renderTheory);
$("#practice-lesson").addEventListener("change", (event) => {
  currentLessonId = event.target.value;
  renderExercise();
});
$("#new-exercise").addEventListener("click", renderExercise);
$("#dictionary-search").addEventListener("click", renderDictionary);
$("#dictionary-input").addEventListener("input", renderDictionary);
$("#dictionary-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") renderDictionary();
});
$$("[data-dict-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedDictionaryFilter = button.dataset.dictFilter;
    $$("[data-dict-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    renderDictionary();
  });
});

$("#start-daily").addEventListener("click", () => {
  const lesson = getDailyLesson();
  currentLessonId = lesson.id;
  $("#practice-lesson").value = currentLessonId;
  setView("practice");
});

$("#reset-progress").addEventListener("click", () => {
  const ok = confirm("Reiniciar todo o progresso salvo neste navegador?");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  currentLessonId = course[0].id;
  renderAll();
  setView("dashboard");
});

$("#new-writing-prompt").addEventListener("click", chooseWritingPrompt);
$("#analyze-writing").addEventListener("click", analyzeWriting);
$("#clear-writing").addEventListener("click", () => {
  $("#writing-answer").value = "";
  $("#writing-feedback").textContent = "Texto limpo. Escreva uma nova resposta.";
});
$("#new-speech-phrase").addEventListener("click", chooseSpeechPhrase);
$("#play-phrase").addEventListener("click", () => speak(currentSpeechPhrase));
$("#record-phrase").addEventListener("click", recordSpeech);
$("#ai-send").addEventListener("click", () => sendAIMessage());
$("#ai-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    sendAIMessage();
  }
});
$("#ai-suggest").addEventListener("click", () => sendAIMessage("Crie um quiz curto para minha unidade atual"));
$("#ai-clear").addEventListener("click", () => {
  aiMessages = [];
  aiLastAnalysis = null;
  renderAI();
});
$$("[data-ai-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    aiMode = button.dataset.aiMode;
    $$("[data-ai-mode]").forEach((item) => item.classList.toggle("is-active", item === button));
    renderAIMemory();
  });
});
$$(".ai-prompt").forEach((button) => {
  button.addEventListener("click", () => sendAIMessage(button.textContent.trim()));
});

function startLanguageMap() {
  const canvas = $("#language-map");
  const context = canvas.getContext("2d");
  const words = ["learn", "speak", "think", "listen", "write", "fluency", "nuance", "focus", "review"];
  let width = 0;
  let height = 0;
  let nodes = [];

  function resize() {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    nodes = Array.from({ length: Math.min(64, Math.floor(window.innerWidth / 18)) }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.26 * window.devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.26 * window.devicePixelRatio,
      word: words[index % words.length],
    }));
  }

  function frame() {
    context.clearRect(0, 0, width, height);
    context.lineWidth = 1 * window.devicePixelRatio;
    context.font = `${11 * window.devicePixelRatio}px Inter, sans-serif`;
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 150 * window.devicePixelRatio) {
          const alpha = 1 - distance / (150 * window.devicePixelRatio);
          context.strokeStyle = `rgba(56, 216, 255, ${alpha * 0.16})`;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }

    for (const node of nodes) {
      context.fillStyle = "rgba(124, 255, 180, 0.48)";
      context.fillText(node.word, node.x, node.y);
      context.fillStyle = "rgba(56, 216, 255, 0.45)";
      context.fillRect(node.x - 2, node.y - 2, 3 * window.devicePixelRatio, 3 * window.devicePixelRatio);
    }
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  frame();
}

renderAll();
chooseWritingPrompt();
chooseSpeechPhrase();
startLanguageMap();
