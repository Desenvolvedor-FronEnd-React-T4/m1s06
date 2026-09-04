const receitas = [
  {
    nome: "Panqueca de Banana",
    ingredientes: ["Aveia", "banana", "ovo", "azeite"],
    minutos: 10,
  },
  {
    nome: "Bolo simples",
    ingredientes: [
      "farinha",
      "ovo",
      "leite",
      "sal",
      "açúcar",
      "fermento",
      "manteiga",
    ],
    minutos: 45,
  },
  {
    nome: "Panqueca",
    ingredientes: ["farinha", "ovo", "leite", "sal", "azeite"],
    minutos: 10,
  },
  {
    nome: "Omelete",
    ingredientes: ["ovo", "sal", "queijo", "presunto", "manteiga"],
    minutos: 8,
  },
  {
    nome: "Salada",
    ingredientes: ["alface", "tomate", "cenoura", "cogumelo", "azeite"],
    minutos: 15,
  },
  {
    nome: "Suco",
    ingredientes: ["laranja", "uva", "maçã", "limão", "açúcar"],
    minutos: 5,
  },
];

const receitasSobremesa = [
  {
    name: "Pudim",
    ingredients: ["leite", "açúcar", "ovo", "baunilha"],
    minutes: 60,
    chillTime: 120,
  },
  {
    name: "Sorvete de Morango",
    ingredients: ["leite", "açúcar", "ovo", "morango"],
    minutes: 30,
    chillTime: 60,
  },
  {
    name: "Bolo de chocolate",
    ingredients: ["farinha", "açúcar", "ovo", "chocolate", "manteiga"],
    minutes: 45,
    chillTime: 30,
  },
  {
    name: "Sorvete de Manga",
    ingredients: ["leite", "açúcar", "ovo", "manga"],
    minutes: "30;",
    chillTime: 60,
  },
];

const despensa = ["FARINHA", "aVeIa", "Ovo", "Banana", "Sal", "Azeite"];

class Receita {
  constructor(nome, ingredientes, tempoPreparoMin) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.tempoPreparoMin = tempoPreparoMin;
  }

  descrever() {
    console.log(
      `Receita de ${this.nome} que ` +
        `utiliza ${this.ingredientes.length} ingredientes ` +
        `e leva ${this.tempoPreparoMin}min.`,
    );
  }

  compararIngredientes(produtosDisponiveis) {
    const possui = [];
    const falta = [];

    this.ingredientes.forEach((ingrediente) => {
      // const encontrado = produtosDisponiveis.includes(ingrediente.toLowerCase());
      const encontrado = produtosDisponiveis.filter(
        (produto) => produto.toLowerCase() === ingrediente.toLowerCase(),
      );

      if (encontrado.length > 0) {
        possui.push(ingrediente);
      } else {
        falta.push(ingrediente);
      }
    });

    if (possui.length < 1) {
      console.log("Nenhum ingrediente disponível.");
    } else {
      console.log(`Ingredientes disponíveis: ${possui.join(", ")}`);
    }

    if (falta.length < 1) {
      console.log("Não falta nenhum ingrediente!");
    } else {
      console.log(`Ingredientes faltando: ${falta.join(", ")}`);
    }
  }
}

class ReceitaSobremesa extends Receita {
  constructor(nome, ingredientes, tempoPreparoMin, tempoDescansoMin) {
    super(nome, ingredientes, tempoPreparoMin);
    this.tempoDescansoMin = tempoDescansoMin;
  }

  descrever() {
    console.log(
      `Receita de ${this.nome} que ` +
        `utiliza ${this.ingredientes.length} ingredientes ` +
        `e leva ${this.tempoPreparoMin}min de preparo, ` +
        `com ${this.tempoDescansoMin}min de descanso.`,
    );
  }

  tempoTotal() {
    if (
      Number.isNaN(this.tempoPreparoMin) ||
      Number.isNaN(this.tempoDescansoMin)
    ) {
      console.log(
        `Ocorreu um problema ao carregar o tempo total da receita de ${this.nome}.`,
      );
    } else {
      console.log(
        `Tempo total da receita: ${this.tempoPreparoMin + this.tempoDescansoMin}min.`,
      );
    }
  }
}

function buscaDespensa() {
  return new Promise((resolve) => {
    console.log("Buscando itens disponíveis na despensa...");
    setTimeout(() => {
      resolve(despensa);
    }, 2000);
  });
}

function buscaReceitas() {
  return new Promise((resolve) => {
    console.log("Buscando receitas...");
    setTimeout(() => {
      resolve(receitas);
    }, 3000);
  });
}

function buscaReceitasSobremesa() {
  return new Promise((resolve) => {
    console.log("Buscando receitas de sobremesa...");
    setTimeout(() => {
      resolve(receitasSobremesa);
    }, 3000);
  });
}

async function main() {
  try {
    const receitasResponse = await buscaReceitas();

    const listaReceitas = receitasResponse.map((objResponse) => {
      return new Receita(
        objResponse.nome,
        objResponse.ingredientes,
        Number(objResponse.minutos),
      );
    });

    const receitasSobremesaResponse = await buscaReceitasSobremesa();

    const listaReceitasSobremesa = receitasSobremesaResponse.map(
      (objResponse) => {
        return new ReceitaSobremesa(
          objResponse.name,
          objResponse.ingredients,
          Number(objResponse.minutes),
          Number(objResponse.chillTime),
        );
      },
    );

    console.log("Receitas carregadas com sucesso!");

    const itensDisponiveisDespensa = await buscaDespensa();

    listaReceitas.forEach((receita) => {
      receita.descrever();
      receita.compararIngredientes(itensDisponiveisDespensa);
    });

    listaReceitasSobremesa.forEach((receita) => {
      receita.descrever();
      receita.compararIngredientes(itensDisponiveisDespensa);
      receita.tempoTotal();
    });
  } catch (e) {
    console.log("Não foi possível carregar as receitas. Erro: " + e);
  }
}

main();
