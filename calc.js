// Seleção dos elementos do DOM
const display = document.getElementById("display");
const igual = document.getElementById("igual");
const apagar = document.getElementById("apagar");
const maismenos = document.getElementById("maismenos");
const limparCalculo = document.getElementById("limparCalculo");
const limparTudo = document.getElementById("limparTudo");
const porc = document.getElementById("porc");
const virg = document.getElementById("virg");
const divisaoUm = document.getElementById("divisaoUm");
const potencia = document.getElementById("potencia");
const raiz = document.getElementById("raiz");

const nums = document.querySelectorAll("[id*=num]");
const operadores = document.querySelectorAll("[id*=sinal]");

// Variaveis de Estado
let primeiro = true;
let operador;
let numeroAnterior = "0";
let numeroAtual = "0";

// Funções auxiliares
const ajustaPontoVirgula = () => {
  display.textContent = display.textContent.replace(".", ",");
};

const atualizaDisplay = (valor) => {
  display.textContent = valor.substring(0, 17);
  numeroAtual = display.textContent;
};

const limpaDisplay = () => {
  atualizaDisplay("0");
  primeiro = true;
};

const calcular = () => {
  if (!numeroAnterior || !operador) {
    return;
  }

  const numeroAnteriorFloat = parseFloat(numeroAnterior.replace(",", "."));
  const numeroAtualFloat = numeroAtual
    ? parseFloat(numeroAtual.replace(",", "."))
    : numeroAnteriorFloat;

  let resultado = 0;
  switch (operador) {
    case "+":
      resultado = numeroAnteriorFloat + numeroAtualFloat;
      break;
    case "-":
      resultado = numeroAnteriorFloat - numeroAtualFloat;
      break;
    case "*":
      resultado = numeroAnteriorFloat * numeroAtualFloat;
      break;
    case "/":
      if (numeroAtualFloat === 0) {
        atualizaDisplay("Erro");
        return;
      }
      resultado = numeroAnteriorFloat / numeroAtualFloat;
      break;
    default:
      return;
  }

  const resultadoFinal = resultado.toString().replace(".", ",");
  atualizaDisplay(resultadoFinal);
  numeroAnterior = resultadoFinal;
  primeiro = true;
};

const apagarUltimo = () => {
  const conteudoDisplay = display.textContent;

  if (typeof conteudoDisplay !== "string") {
    return;
  }

  const novoValor =
    conteudoDisplay.length > 1
      ? conteudoDisplay.substring(0, conteudoDisplay.length - 1)
      : "0";

  if (/^[0-9]+(,[0-9]+)?$/.test(novoValor)) {
    atualizaDisplay(novoValor);
  } else {
    atualizaDisplay("0");
  }
};

const inverteSinal = () => {
  atualizaDisplay(parseFloat(display.textContent.replace(",", ".")) * -1);
};

const calcPorc = () => {
  atualizaDisplay(parseFloat(display.textContent.replace(",", ".")) / 100);
  primeiro = true;
};

const calcDivisaoUm = () => {
  atualizaDisplay(1 / parseFloat(display.textContent.replace(",", ".")));
  numeroAnterior = "0";
  primeiro = true;
};

const calcPotencia = () => {
  atualizaDisplay(
    Math.pow(parseFloat(display.textContent.replace(",", ".")), 2).toString()
  );
  numeroAnterior = "0";
  primeiro = true;
};

const calcRaiz = () => {
  atualizaDisplay(
    Math.sqrt(parseFloat(display.textContent.replace(",", "."))).toString()
  );
  numeroAnterior = "0";
  primeiro = true;
};

// Adição de listeners aos elementos do DOM
// nums.forEach((num) => {
//   num.addEventListener("click", () => {
//     if (primeiro) {
//       atualizaDisplay(num.textContent);
//       primeiro = false;
//     } else {
//       atualizaDisplay(`${display.textContent}${num.textContent}`);
//     }
//     display.textContent = display.textContent.substring(0, 17);
//   });
// });

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (primeiro) {
      atualizaDisplay(num.textContent);
      primeiro = false;
    } else {
      atualizaDisplay(`${display.textContent}${num.textContent}`);
    }
  });
});

operadores.forEach((operadorBtn) => {
  operadorBtn.addEventListener("click", () => {
    operador = operadorBtn.textContent;
    if (operador === "x") {
      operador = "*";
    } else if (operador === "÷") {
      operador = "/";
    }
    numeroAnterior = display.textContent;
    primeiro = true;
  });
});

igual.addEventListener("click", () => {
  calcular();
  ajustaPontoVirgula();
});

apagar.addEventListener("click", () => {
  apagarUltimo();
});

maismenos.addEventListener("click", () => {
  inverteSinal();
});

limparCalculo.addEventListener("click", () => {
  atualizaDisplay("0");
  primeiro = true;
});

limparTudo.addEventListener("click", () => {
  atualizaDisplay("0");
  operador = undefined;
  numeroAnterior = "0";
  primeiro = true;
});

porc.addEventListener("click", () => {
  calcPorc();
});

virg.addEventListener("click", () => {
  if (display.textContent.indexOf(".") === -1) {
    atualizaDisplay(`${display.textContent}.`);
  }
});

divisaoUm.addEventListener("click", () => {
  calcDivisaoUm();
});

potencia.addEventListener("click", () => {
  calcPotencia();
});

raiz.addEventListener("click", () => {
  calcRaiz();
});


// -----End ----> //

// # Inspirado pelo Project: Calculator Windows - https://github.com/WilliamDosSantos/Calculadora