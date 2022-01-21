/*
PROBLEMA
Deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

ENTRADA
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

SAÍDA
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

EXEMPLO DE ENTRADA
12 1 5.30
16 2 5.10

EXEMPLO DE SAÍDA
VALOR A PAGAR: R$ 15.50
*/

var arrayLinha1 = lines.shift().split(' ');
var arrayLinha2 = lines.shift().split(' ');

var codPeca1 = parseInt(arrayLinha1[0]);
var quantPeca1 = parseInt(arrayLinha1[1]);
var valorPeca1 = parseFloat(arrayLinha1[2]);
var codPeca2 = parseInt(arrayLinha2[0]);
var quantPeca2 = parseInt(arrayLinha2[1]);
var valorPeca2 = parseFloat(arrayLinha2[2]);

var resultado = valorPeca1*quantPeca1 + valorPeca2*quantPeca2;

console.log("VALOR A PAGAR: R$ "+ resultado.toFixed(2));

/*
Coisa nova: aqui tem array.
*/
