const data = [
  { nome: "tarefa 1", endDate: "30/08/2026" },
  { nome: "tarefa 2", endDate: null },
  { nome: "tarefa 3", endDate: null },
];

class Task {
  constructor(rawTask) {
    this.nome = rawTask.nome;
    this.done = rawTask.endDate ? true : false;
  }
}

function loadFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

async function buscaTarefasPendentes() {
  const raw = await loadFromServer(); // Promise + async/await
  //console.log(raw);
  const tasks = raw.map((item) => new Task(item)); // map -> instâncias (POO)
  //console.log(tasks);
  const pending = tasks.filter((task) => !task.done); // filter -> regra
  console.log(pending);
}

console.log("buscando tarefas...");
try {
  buscaTarefasPendentes();
} catch (erro) {
  console.log(erro);
}
