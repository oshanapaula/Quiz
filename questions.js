export default [
  {
    question: "O que é um evento adverso?",
    answers: [
      { option: "Incidente que atingiu o paciente e causou danos.", correct: true },
      { option: "Incidente que atingiu o paciente e não causou danos.", correct: false },
      { option: "Incidente que não atingiu o paciente", correct: false },
    ],
  },
  {
    question: "São manifestações de disfunção respiratória com hipoxemia:",
    answers: [
      { option: "Taquipneia e assimetria torácicas.", correct: false },
      { option: "Uso de musculatura acessória e confusão mental.", correct: true },
      { option: "Sibilos e estridor inspiratório.", correct: false },
    ],
  },
  {
    question: "Qual é a frequência e a profundidade das compressões torácicas em adultos?",
    answers: [
      { option: "Uma frequência de 80 a 100 compressões por minuto e uma profundidade de 4 cm.", correct: false },
      { option: "Uma frequência de 120 a 140 compressões por minuto e uma profundidade de 6,4 cm", correct: false },
      { option: "Uma frequência de 100 a 120 compressões por minuto e uma profundidadede pelo menosde 5 cm", correct: true },
    ],
  },
  {
    question: "Em relação aos cuidados relativos à lavagem das mãos, assinale a opção correta:",
    answers: [
      { option: "Ao utilizar antisséptico, não é necessário friccionar as mãos até que o álcool esteja seco", correct: false },
      { option: "As unhas devem ser curtas, embora não haja um tamanho recomendado", correct: false },
      { option: " Se as mãos tocarem a pia, durante a lavagem, deve-se repetir a lavagem, pois a pia é uma área contaminada.", correct: true },
    ],
  },
];
window.prompt('Qual seu nome?')
