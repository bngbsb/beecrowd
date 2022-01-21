/*
PROBLEMA
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”.

ENTRADA
O arquivo de entrada contém três valores inteiros.

SAÍDA
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

var primeiro = parseInt(lines.shift());
var segundo = parseInt(lines.shift());
var terceiro = parseInt(lines.shift());
var maior = primeiro;
if(segundo>maior){
    maior = segundo;
}
if(terceiro>maior){
    maior = terceiro;
}
console.log(maior+" eh o maior");
