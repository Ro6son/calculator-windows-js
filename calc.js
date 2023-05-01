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

// Declaração de variáveis / Estado
let primeiro = true;
let operador;
let numeroAnterior = "0";
let numeroAtual = "0";

// Funções auxiliares
const ajustaPontoVirgula = () => {
  display.textContent = display.textContent.replace(".", ",");
};

const atualizaDisplay = (valor) => {
  display.textContent = valor;
  numeroAtual = display.textContent;
};

const limpaDisplay = () => {
  atualizaDisplay("0");
  primeiro = true;
};

const calcular = () => {
  if (numeroAnterior && operador) {
    let result = `${numeroAnterior}${operador}${numeroAtual || numeroAnterior}`;
    let resultadoFinal = eval(result.replace(",", ".")).toString();
    if (resultadoFinal === "NaN") {
      resultadoFinal = "0";
    }
    atualizaDisplay(resultadoFinal);
    numeroAnterior = resultadoFinal;
    primeiro = true;
  }
};

const apagarUltimo = () => {
  if (display.textContent.length > 1) {
    atualizaDisplay(display.textContent.slice(0, -1));
  } else {
    limpaDisplay();
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
nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (primeiro) {
      atualizaDisplay(num.textContent);
      primeiro = false;
    } else {
      atualizaDisplay(`${display.textContent}${num.textContent}`);
    }
    display.textContent = display.textContent.substring(0, 17);
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
// Adição de listeners aos botões de ação do calculadora
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

// # Project: Calculator Windows - https://github.com/WilliamDosSantos/Calculadora

// const display = document.getElementById('display')
// const displayText = document.getElementById('display').textContent
// const igual = document.getElementById('igual')
// const apagar = document.getElementById('apagar')
// const maismenos = document.getElementById('maismenos')
// const limparCalculo = document.getElementById('limparCalculo')
// const limparTudo = document.getElementById('limparTudo')
// const porc = document.getElementById('porc')
// const virg = document.getElementById('virg')
// const divisaoUm = document.getElementById('divisaoUm')
// const potencia = document.getElementById('potencia')
// const raiz = document.getElementById('raiz')

// const nums = document.querySelectorAll("[id*=num]")
// const operadores = document.querySelectorAll("[id*=sinal]")

// let primeiro = true
// let operador
// let numeroAnterior
// let numeroAtual
// let apagarIgual

// const ajustaPontoVirgula = () => display.textContent = display.textContent.replace('.', ',')

// const inserirDisplay = text => {

//   if (primeiro) {
//     display.textContent = text
//     primeiro = false
//   } else {
//     display.textContent += text
//   }

//   display.textContent = display.textContent.substring(0, 17)
//   numeroAtual = display.textContent
//   apagarIgual = true
// }

// const inserir = e => inserirDisplay(e.target.textContent)

// nums.forEach(e => e.addEventListener('click', inserir))


// const inserirOperador = e => {
//   primeiro = true
//   operador = e.target.textContent
//   if (operador == 'x') {
//     operador = '*'
//   } else if (operador == '÷') {
//     operador = '/'
//   }
//   numeroAnterior = display.textContent
// }

// operadores.forEach(e => e.addEventListener('click', inserirOperador))

// const calcular = () => {

//   if (numeroAnterior && operador) {
//     let result = numeroAnterior + operador

//     if(numeroAtual) {
//       result += numeroAtual
//     } else {
//       result += numeroAnterior
//     }

//     display.textContent = eval(result.replace(',', '.'))
//     ajustaPontoVirgula()

//     if (display.textContent == 'NaN') {
//       display.textContent = '0'
//     }

//     numeroAnterior = display.textContent
//     primeiro = true
//     apagarIgual = false
//   }
// }

// igual.addEventListener('click', calcular)

// const apagarUltimo = () => {
//   if (apagarIgual) {
//     if (display.textContent.length > 1) {
//       display.textContent = display.textContent.slice(0, -1)
//     } else {
//       display.textContent = 0
//     }
    
//     primeiro = true
//   }
// }

// apagar.addEventListener('click', apagarUltimo)

// const inverteSinal = () => {
//   display.textContent = parseFloat(display.textContent.replace(',', '.')) * -1
//   ajustaPontoVirgula()
// }

// maismenos.addEventListener('click', inverteSinal)

// const limpaCalculo = () => {
//   display.textContent = '0'
//   primeiro = true
// }

// limparCalculo.addEventListener('click', limpaCalculo)

// const limpaTudo = () => {
//   display.textContent = '0'
//   numeroAnterior = '0'
//   numeroAtual = '0'
//   primeiro = true
// }

// limparTudo.addEventListener('click', limpaTudo)

// const calcPorc = () => {
//   display.textContent = parseFloat(display.textContent.replace(',', '.')) / 100
//   ajustaPontoVirgula()
//   numeroAtual = display.textContent
//   primeiro = true
// }

// porc.addEventListener('click', calcPorc)

// const calcDivisaoUm = () => {
//   display.textContent = 1 / parseFloat(display.textContent.replace(',', '.')) 
//   ajustaPontoVirgula()
//   numeroAtual = display.textContent
//   numeroAnterior = '0'
//   primeiro = true
// }

// divisaoUm.addEventListener('click', calcDivisaoUm)

// const calcPotencia = () => {
//   display.textContent = Math.pow(parseFloat(display.textContent.replace(',', '.')), 2)
//   ajustaPontoVirgula()
//   numeroAtual = display.textContent
//   numeroAnterior = '0'
//   primeiro = true
// }

// potencia.addEventListener('click', calcPotencia)

// const calcRaiz = () => {
//   display.textContent = Math.sqrt(parseFloat(display.textContent.replace(',', '.')))
//   ajustaPontoVirgula()
//   numeroAtual = display.textContent
//   numeroAnterior = '0'
//   primeiro = true
// }

// raiz.addEventListener('click', calcRaiz)
