//o projeto: calculadora de IMC

/*classificação 
abaixo de 18,5 - abaixo do peso
18,5 a 24,9 - peso normal
30 a 34,9 - obesidade grau 1
35 a 39,9 - obesidade grau 2
40 ou mais - obesidade grau 3 */

let nome  = prompt ('qual é o seu nome');
let pesoStr = prompt ('olá, ${nome}! qual é o seu peso em Kg?\n(use virgula ou ponto - ex: 75,5  ou  75.5)')´;
let alStr = prompt('qual é a sua altura em metros?\n??(ex: 1,75  ou 1.75');


let peso = number(pesostr.replace(',', '.')):
let Alt  = Number(altstr.replace ',' ,  '.')

console.log('nome:', nome)
console .log ('peso:' Peso , typeof peso);
console.log('Altura:', alt, typeof alt);

let imc  = peso / (alt * alt);
let imcFormato = imc . toFixed(1);

if (imc < 18.5)  {
    console.log('Abaixo do peso')
} else if ( imc < 25) {
    console.log('peso normal')
}else if (imc < 30) {
    console.log('sobrepeso')
}else if (imc < 35) {
   console.log('obesidade grau I')
}else if (imc < 40) {
    console.log('obesidade grau II')
}else {
    console.log ('obesidade grau III')
}-