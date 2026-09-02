function solicitarEmprestimo(renda) {
  return new Promise((resolve, reject) => {
    if (renda >= 3000) {
      resolve("Empréstimo aprovado!");
    } else {
      reject("Empréstimo negado: renda insuficiente.");
    }
  });
}

solicitarEmprestimo(2000)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });
