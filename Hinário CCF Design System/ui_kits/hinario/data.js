// Sample hymn content for the Hinário CCF UI kit (from the Figma sample: "Esta Paz").
window.HINARIO_DATA = {
  hymns: {
    "001": {
      number: "001", ref: "L1", title: "Esta Paz",
      verses: [
        { text: "Esta paz que sinto em minh'alma,\nNão é porque tudo me vai bem;\nEsta paz que sinto em minh'alma\nÉ porque eu amo ao meu senhor" },
        { text: "Não olho as circunstâncias (não, não, não)\nSó olho o seu amor (seu grande amor)\nNão me guio por vista\nAlegre estou", emphasis: true },
        { text: "Este gozo que sinto em minh'alma\nNão é porque olho ao meu redor\nEste gozo que sinto em minh'alma\nÉ porque eu amo ao meu senhor" },
        { text: "Não olho as circunstâncias (não, não, não)\nSó olho o seu amor (seu grande amor)\nNão me guio por vista\nAlegre estou", emphasis: true },
      ],
    },
  },
  results: [
    { number: "L1", tone: "solid", title: "Esta Paz", id: "001", snippet: "Esta paz que sinto em minh'alma,\nNão é porque tudo me vai bem;" },
    { number: "H6", tone: "soft", title: "Sua Fidelidade", id: "001", snippet: "Esta paz que sinto em minh'alma,\nNão é porque tudo me vai bem;" },
    { number: "H18", tone: "soft", title: "Sua Justiça", id: "001", snippet: "Esta paz que sinto em minh'alma,\nNão é porque tudo me vai bem;" },
    { number: "S10", tone: "soft", title: "Do Teu Falar, Ó Salvador", id: "001", snippet: "Do Teu Falar, ó Salvador\nJamais vou duvidar," },
  ],
  selections: [
    { title: "Reunião da Mesa do Senhor | 31/05", hymns: [
      { number: "001", tone: "solid", title: "Esta Paz", id: "001", snippet: "Esta paz que sinto em minh'alma," },
      { number: "H6", tone: "soft", title: "Sua Fidelidade", id: "001", snippet: "Grandes são as tuas misericórdias," } ] },
    { title: "Reunião de Oração | 25/05", hymns: [
      { number: "S10", tone: "soft", title: "Do Teu Falar, Ó Salvador", id: "001", snippet: "Do Teu Falar, ó Salvador," } ] },
    { title: "Reunião de Jovens | 25/05", hymns: [
      { number: "H18", tone: "soft", title: "Sua Justiça", id: "001", snippet: "Só olho o seu amor," } ] },
    { title: "Reunião da Mesa do Senhor | 31/05", hymns: [] },
    { title: "Reunião de Oração | 25/05", hymns: [] },
  ],
};
