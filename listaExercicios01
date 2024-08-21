// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()

let numInt = parseFloat(prompt("Digite um número: "))

if(numInt % 2 === 0) {
    console.log("Este número é par!")
} else if(numInt % 2 != 0){
    console.log("Este número é ímpar!")
} else {
    console.log("Este valor é inválido!")
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
let idade = parseInt(prompt("Insira a sua idade: "))
if(idade >= 0 && idade <= 12) {
    console.log("A sua categoria é criança!")
} else if(idade >= 13 && idade <= 17) {
    console.log("A sua categoria é adolescente!")
} else if(idade >= 18 && idade <= 64) {
    console.log("A sua categoria é adulto!")
} else if(idade >= 65) {
    console.log("A sua categoria é idoso!")
} else {
    console.log("Idade inválida!")
}

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let nota = parseFloat(prompt("Insira a sua nota: "))
if(nota >= 7 && nota <= 10){
    console.log("Você foi aprovado!")
} else if(nota >= 5 && nota < 7){
    console.log("Você está em recuperação!")
} else if(nota >= 0 && nota < 5){
    console.log("Você foi reprovado!")
} else {
    console.log("Nota inserida inválida!")
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
console.log("Boas vindas ao menu principal!")
console.log("1. Primeira opção")
console.log("2. Segunda opção")
console.log("3. Terceira opção")
let opcaoSelecionada = prompt("Digite o número referente ao que deseja acessar: ")

switch(opcaoSelecionada){
    case '1':
        console.log("Você escolheu a opção 1!")
        break;
    case '2':
        console.log("Você escolheu a opção 2!")
        break;
    case '3':
        console.log("Você escolheu a opção 3!")
        break;
    default:
        console.log("Opção inválida, tente novamente!")
        break;
}

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
let peso = Number(prompt("Insira o seu peso (kg): "))
let altura = Number(prompt("Insira sua altura (m): "))
let imc = peso / (altura ^ 2)

if (imc <= 18.5){
    console.log("Você está com baixo peso!")
} else if (imc >= 18.5 && imc <= 24.9){
    console.log("Você está com o peso normal!")
}  else if (imc >= 25 && imc <= 29.9){
    console.log("Você está com sobrepeso!")
} else if (imc > 30){
    console.log("Você está com obesidade!")
} else {
    console.log("Valor fornecido inválido!")
}

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou equilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

let valorA = Number(prompt("Insira o primeiro valor para um lado de um triângulo: "))
let valorB = Number(prompt("Agora insira o segundo valor: "))
let valorC = Number(prompt("Por fim, insira o terceiro valor: "))

if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB){
    console.log("Os valores inseridos formam um triângulo!")
    if (valorA === valorB && valorB === valorC){
        console.log("Este triângulo possui todos os lados iguais, você formou um triângulo equilátero!")
    } else if (valorA === valorB || valorA === valorC || valorB === valorC){
        console.log("Este triângulo possui dois lados iguais, você formou um triângulo isósceles!")
    } else if (valorA !== valorB && valorB !== valorC){
        console.log("Este triângulo possui todos os lados com valores diferentes, você formou um triângulo escaleno!")
    }
} else {
    console.log("Valores inseridos inválidos! Não foi possível formar um triângulo")
}

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.
Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. */

let quantidadeMaca = Number(prompt("Digite a quantidade de maçãs que você deseja comprar: "))
let valorMaca = 0.30
let valorPorDuzia = 0.25

if(quantidadeMaca < 12){
    valorTotal = quantidadeMaca * valorMaca
} else if (quantidadeMaca >= 12){
    valorTotal = quantidadeMaca * valorPorDuzia
}

console.log("Você deverá pagar um total de R$" + valorTotal + "!")

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
let valor1 = Number(prompt("Digite um valor aleatório: "))
let valor2 = Number(prompt("Digite outro valor aleatório, ambos serão colocados em ordem crescente: "))

if (valor1 > valor2){
    console.log("A ordem crescente dos valores escolhidos é " + valor2 + "," + valor1)
} else if (valor1 < valor2){
    console.log("A ordem crescente dos valores escolhidos é " + valor1 + "," + valor2)
} else if (valor1 === valor2){
    console.log("Valores inseridos inválidos.")
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

for(i = 10; i >= 1; i--){
    console.log(i)
}

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let numEscolhido = Number(prompt("Insira um número: "))
for(i = 0; i < 10; i++){
    console.log(numEscolhido)
}

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
let somaTotal = 0;
for(i = 1; i <= 5; i++){
    let numbers = parseFloat(prompt("Digite cinco números em sequência, um por vez: "))
    somaTotal += numbers
}
console.log(`A soma dos números inseridos é: ${somaTotal}`)

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
let numParaTabuada = Number(prompt("Forneça um número de 1 a 10, será apresentada a tabuada do número: "))

for(i = 1; i <= 10; i++){
    console.log(`A tabuada do número escolhido para cada operação é: ${numParaTabuada} x ${i} = ${numParaTabuada * i}`)
}

//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
let sum = 0
let counter = 0
let num

do {
    num = parseFloat(prompt("Digite um número decimal, ou 0 para encerrar a operação: "))
    if (num !== 0) {
        sum += num
        counter++
    }
} while (num !== 0)

if (counter > 0) {
    let mediaAritmetica = sum / counter
    console.log("A média aritmética dos valores fornecidos é: " + mediaAritmetica)
} else {
    console.log("Nenhum valor válido foi fornecido.")
}

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
let numParaFatorial = Number(prompt("Digite um número aleatório, será calculado o fatorial do número fornecido: "))
let fatorial = 1;

for(i = 1; i <= numParaFatorial; i++){
    fatorial *= i
}

console.log("O fatorial do número " + numParaFatorial + " é: " + fatorial)

//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let x = 0
let y = 1
for(let i = 0; i < 10; i++){
    console.log(x)
    proxNum = x + y
    x = y
    y = proxNum
}
