const alunos = [
  { nome: "Paulo" },
  { nome: "Cleverson" },
  { nome: "Vanessa" },
  { nome: "Carolina" },
];

/* function mapAlunoParaNome(aluno) {
    return aluno.nome;
} */

const nomesAlunos = alunos.map((aluno) => aluno.nome);

console.log(nomesAlunos);


function finalizaAnalise(nome, onDone) {
  console.log("Análise concluída.");
  onDone(nome);
}
finalizaAnalise("Ana", (nome) => {
  console.log(`${nome}, revise suas pendências.`);
});

