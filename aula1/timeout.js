/* console.log("executando o script.");

setTimeout(() => {
  console.log("rodou depois de 1 segundo");
}, 1000); */

/* console.log("1. Pedindo os dados ao servidor...");
setTimeout(() => console.log("3. Dados chegaram!"), 0);
console.log("2. Enquanto isso, o programa continua..."); */

function loadOrders(callback) {
  setTimeout(() => {
    console.log("pedidos carregados");
    callback();
  }, 500);
}

loadOrders(() => {
  console.log("5 pedidos carregados");
});
