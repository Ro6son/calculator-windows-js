const display = document.getElementById("display");
const displayText = document.getElementById("display").textContent;
const equal = document.getElementById("equal");
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
const operatores = document.querySelectorAll("[id*=sinal]");

let first = true;
let operator;
let lastNum;
let currentNum;
let cleanEqual;

const commaTopoint = () =>
  (display.textContent = display.textContent.replace(".", ","));

const insertDisplay = (text) => {
  if (first) {
    display.textContent = text;
    first = false;
  } else {
    display.textContent += text;
  }

  display.textContent = display.textContent.substring(0, 17);
  currentNum = display.textContent;
  cleanEqual = true;
};

const insert = (e) => insertDisplay(e.target.textContent);

nums.forEach((e) => e.addEventListener("click", insert));

const insertoperator = (e) => {
  first = true;
  operator = e.target.textContent;
  if (operator == "x") {
    operator = "*";
  } else if (operator == "÷") {
    operator = "/";
  }
  lastNum = display.textContent;
};

operatores.forEach((e) => e.addEventListener("click", insertoperator));

const calcular = () => {
  if (lastNum && operator) {
    let result = lastNum + operator;

    if (currentNum) {
      result += currentNum;
    } else {
      result += lastNum;
    }

    display.textContent = eval(result.replace(",", "."));
    commaTopoint();

    if (display.textContent == "NaN") {
      display.textContent = "0";
    }

    lastNum = display.textContent;
    first = true;
    cleanEqual = false;
  }
};

equal.addEventListener("click", calcular);

const apagarUltimo = () => {
  if (cleanEqual) {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1);
    } else {
      display.textContent = 0;
    }

    first = true;
  }
};

apagar.addEventListener("click", apagarUltimo);

const inverteSinal = () => {
  display.textContent = parseFloat(display.textContent.replace(",", ".")) * -1;
  commaTopoint();
};

maismenos.addEventListener("click", inverteSinal);

const cleanCalc = () => {
  display.textContent = "0";
  first = true;
};

limparCalculo.addEventListener("click", cleanCalc);

const limpaTudo = () => {
  display.textContent = "0";
  lastNum = "0";
  currentNum = "0";
  first = true;
};

limparTudo.addEventListener("click", limpaTudo);

const calcPorc = () => {
  display.textContent = parseFloat(display.textContent.replace(",", ".")) / 100;
  commaTopoint();
  currentNum = display.textContent;
  first = true;
};

porc.addEventListener("click", calcPorc);

const calcDivisaoUm = () => {
  display.textContent = 1 / parseFloat(display.textContent.replace(",", "."));
  commaTopoint();
  currentNum = display.textContent;
  lastNum = "0";
  first = true;
};

divisaoUm.addEventListener("click", calcDivisaoUm);

const calcPotencia = () => {
  display.textContent = Math.pow(
    parseFloat(display.textContent.replace(",", ".")),
    2
  );
  commaTopoint();
  currentNum = display.textContent;
  lastNum = "0";
  first = true;
};

potencia.addEventListener("click", calcPotencia);

const calcRaiz = () => {
  display.textContent = Math.sqrt(
    parseFloat(display.textContent.replace(",", "."))
  );
  commaTopoint();
  currentNum = display.textContent;
  lastNum = "0";
  first = false;
};

raiz.addEventListener("click", calcRaiz);
