const prompt = require("prompt-sync")();

const rendaCliente = prompt("Digite sua renda para soliciar empréstimo: ");

function solicitarEmprestimo(renda) {
  return new Promise((resolve, reject) => {
    if (renda >= 1700) {
      resolve("Empréstimo aprovado!");
    } else {
      reject("Empréstimo recusado. Renda insuficiente.");
    }
  });
}

solicitarEmprestimo(rendaCliente)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });
