function criaCalculadoraImposto(taxa) {
  return function (valor) {
    return valor + (valor * taxa) / 100;
  };
}

const calculaTaxaImportacao = criaCalculadoraImposto(10);
const calculaTaxaLuxo = criaCalculadoraImposto(25);

console.log(calculaTaxaImportacao(200));
console.log(calculaTaxaLuxo(200));

/* const calculadoraImposto = function (valor, taxa) {
  return valor + (valor * taxa) / 100;
}; 

console.log(calculadoraImposto(200, 25)); */

function criaContador(incremento) {
  let cont = 0;
  return function () {
    cont += incremento;
    return cont;
  };
}

const click = criaContador(1);
console.log("clicks:");
console.log(click(), click(), click());

try {
  const pontoBasquete = criaContador(2);
  console.log("cesta de basquete:");
  console.log(pontoBasquete(), pontoBasquete(), pontoBasquete());
} catch(excecao) {
  console.log("Ocorreu um erro:" + excecao);
}
let cont = 0;

function contador() {
  cont += 1;
  return cont;
}

function contadorDuplo() {
  cont += 2;
  return cont;
}

console.log("função simples de contador:");
console.log(contador(), contador(), contador());
console.log(contadorDuplo(), contadorDuplo(), contadorDuplo());

console.log("clicks:");
console.log(click(), click(), click());
console.log(click(), click(), click());

console.log("cesta de basquete:");
console.log(pontoBasquete(), pontoBasquete(), pontoBasquete());
