/*
PROBLEMA
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

ENTRADA
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

SAÍDA
Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.
*/
var fun = parseInt(lines.shift());
var horas = parseInt(lines.shift());
var dinheiro = parseFloat(lines.shift());
var sal = horas*dinheiro;
console.log("NUMBER = "+ fun + "\nSALARY = U$ " + sal.toFixed(2));
/*
OBS: talvez seja uma boa ideia fazer umas aulas de inglês ksksksks...
Porque eu acho que "número" em inglês não se escreve com 'n' #fikadica
*/
