/*
PROBLEMA
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

ENTRADA
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

SAÍDA
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

console.log("TRIANGULO: "+ (A*C/2).toFixed(3));
console.log("CIRCULO: "+ (3.14159*C*C).toFixed(3));
console.log("TRAPEZIO: "+ ((A+B)/2*C).toFixed(3));
console.log("QUADRADO: "+ (B*B).toFixed(3));
console.log("RETANGULO: "+ (A*B).toFixed(3));
