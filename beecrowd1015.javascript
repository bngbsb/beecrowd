/*
PROBLEMA:
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, 
mostrando 4 casas decimais após a vírgula, segundo a fórmula:
Distancia = [(x2 - x1)² + (y2 - y1)²]^1/2

ENTRADA:
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois
valores de ponto flutuante x2 y2.

SAÍDA:
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

EXEMPLO DE ENTRADA:   EXEMPLO DE SAÍDA:
1.0 7.0               4.4721
5.0 9.0
*/

var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');

var x1 = parseFloat(p1[0]);
var y1 = parseFloat(p1[1]);

var x2 = parseFloat(p2[0]);
var y2 = parseFloat(p2[1]);

var distancia = Math.sqrt((x2-x1) * (x2-x1) + (y2-y1) * (y2-y1));

console.log (distancia.toFixed(4));
