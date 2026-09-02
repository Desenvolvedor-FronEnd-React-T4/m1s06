function checkStock(quantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantity > 0) resolve(`Em estoque: ${quantity}`);
      else reject("Produto esgotado");
    }, 1000);
  });
}

console.log(checkStock(3));

checkStock(0)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.log(error));
