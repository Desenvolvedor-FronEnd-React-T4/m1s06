const vagas = [];

function checkStock(quantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantity > 0) resolve(`Em estoque: ${quantity}`);
      else reject("Produto esgotado");
    }, 1000);
  });
}

async function showStock(num) {
  console.log("Buscando estoque...");
  try {
    const message = await checkStock(num);
    console.log("Chegou:", message);
  } catch (error) {
    console.log(error);
  }
}

console.log("inciou o script");
showStock(0);
console.log("já invoquei o showStock");
