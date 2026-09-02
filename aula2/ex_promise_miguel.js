// Função responsável por analisar se a pessoa merece o empréstimo 

function solicitaEmprestimo(renda) {
    return new Promise((resolve, reject) => {

        // Bora ver se a renda dá conta do recado 
        if (renda >= 2000) {

            // Aí sim, patrão!
            resolve("Empréstimo aprovado!");

        } else {

            // Ih rapaz... faltou uns dinheiros aí 😭 KKKKK
            reject("Empréstimo negado. A renda não foi suficiente. KKKK POBRE");
        }
    });
}


// Testando a função na prática 👇
solicitaEmprestimo(1000)
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.log(erro);
    });


// Ass: MX 🙂‍↕️