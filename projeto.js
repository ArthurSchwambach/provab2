alert("Calcule seu IMC. Para terminar o programa, aperte em 'Cancelar'");

var soma = 0;
var maiorIMC = { nome: "", valor: -1 }; // Inicializa com um valor inválido
var pessoas = 0;
var resultado = "";

function imc(peso, altura) {
  return peso / (altura * altura);
}

function tiposimc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso normal";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Excesso de peso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade classe 1";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade classe 2";
  } else {
    return "Obesidade classe 3";
  }
}

while (true) {
  var nome = prompt("Digite o seu nome:");
  if (nome === null) {
    alert("Terminando o programa...");
    break;
  } else if (nome.trim() === "") {
    alert("Por favor, insira um nome válido.");
    continue;
  }

  pessoas++;
  var peso = parseFloat(prompt("Digite o seu peso (Inteiros ou Decimais): "));
  if (peso === null || isNaN(peso)) {
    alert("Terminando o programa...");
    break;
  }

  var altura = parseFloat(prompt("Digite sua altura (Em decimal): "));
  if (altura === null || isNaN(altura)) {
    alert("Terminando o programa...");
    break;
  }

  var calculoIMC = imc(peso, altura);
  var tipos = tiposimc(calculoIMC);

  if (calculoIMC > maiorIMC.valor) {
    maiorIMC.nome = nome;
    maiorIMC.valor = calculoIMC;
  }

  soma += calculoIMC;
  var mediaIMC = (soma / pessoas).toFixed(2);

  resultado +=
    `${nome}: IMC = ${calculoIMC.toFixed(2)}, Classificação = ${tipos}
    Media do IMC: ${mediaIMC}
    Quantidade de Pessoas: ${pessoas}\n`;
}

if (pessoas > 0) {
  resultado += `Pessoa com o maior IMC: ${maiorIMC.nome} com IMC = ${maiorIMC.valor.toFixed(2)}`;
  alert(resultado);
}
