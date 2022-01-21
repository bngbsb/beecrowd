/*
PROBLEMA

Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

ENTRADA
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

SAÍDA
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade.

EXEMPLOS DE ENTRADA
5.0
6.0
7.0

EXEMPLO DE SAÍDA
6.3
*/
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
const soma1 = A*2/10;
const soma2 = B*3/10;
const soma3 = C*5/10;
const somaMedia = soma1+soma2+soma3;
console.log("MEDIA = "+somaMedia.toFixed(1));
