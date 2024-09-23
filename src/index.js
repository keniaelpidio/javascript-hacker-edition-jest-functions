// Função que soma dois números
function somar(a, b) {
  return a + b; // Retorna a soma de a e b
}

// Testando a função somar
console.log(somar(5, 3)); // Deve retornar 8

// Função que subtrai dois números
function subtrair(a, b) {
  return a - b; // Retorna a subtração de b de a
}

// Testando a função subtrair
console.log(subtrair(10, 4)); // Deve retornar 6

// Função que multiplica dois números
function multiplicar(a, b) {
  return a * b; // Retorna o produto de a e b
}

// Testando a função multiplicar
console.log(multiplicar(3, 7)); // Deve retornar 21

// Função que divide dois números, com verificação de divisão por zero
function dividir(a, b) {
  if (b === 0) {
      return 'Erro: Divisão por zero'; // Retorna mensagem de erro se b for zero
  }
  return a / b; // Retorna a divisão de a por b
}

// Testando a função dividir
console.log(dividir(10, 2)); // Deve retornar 5
console.log(dividir(10, 0)); // Deve retornar 'Erro: Divisão por zero'

// Função que verifica se um número é par
function ehPar(num) {
  return num % 2 === 0; // Retorna true se num é par, false caso contrário
}

// Testando a função ehPar
console.log(ehPar(4)); // Deve retornar true
console.log(ehPar(5)); // Deve retornar false

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
